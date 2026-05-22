import { NextResponse } from "next/server";
import { checkRateLimit, clientIp, rateLimitResponse } from "@/lib/rate-limit";
import { cleanEnv, emailLooksValid, normalizeEmail } from "@/lib/validators";

const ML_API = "https://connect.mailerlite.com/api/subscribers";

interface RegisterBody {
  email?: string;
  name?: string;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const rate = checkRateLimit({
    key: `career-register:${ip}`,
    limit: 5,             // 5 register attempts
    windowMs: 60 * 1000,  // per minute
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  let body: RegisterBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Невалидни данни." }, { status: 400 });
  }

  const email = normalizeEmail(body.email ?? "");
  const name = body.name?.trim() ?? "";

  if (!email || !emailLooksValid(email)) {
    return NextResponse.json(
      { error: "Моля въведи валиден имейл адрес." },
      { status: 400 }
    );
  }
  if (!name) {
    return NextResponse.json(
      { error: "Моля въведи името си." },
      { status: 400 }
    );
  }

  const apiKey = cleanEnv(process.env.MAILERLITE_API_KEY);
  if (!apiKey) {
    console.error("MAILERLITE_API_KEY is not set");
    return NextResponse.json(
      { error: "Записването временно не работи. Опитай по-късно." },
      { status: 500 }
    );
  }

  // Prefer a dedicated AI-course group; fall back to the existing pending group.
  const groupId =
    cleanEnv(process.env.MAILERLITE_AI_COURSE_GROUP_ID) ||
    cleanEnv(process.env.MAILERLITE_PENDING_GROUP_ID);

  const payload: {
    email: string;
    fields: { name: string };
    groups?: string[];
    status: "active";
  } = {
    email,
    fields: { name },
    status: "active",
  };
  if (groupId) payload.groups = [groupId];

  try {
    const res = await fetch(ML_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("MailerLite subscribe failed", res.status, data);
      // Treat 422 (already exists) as success so users don't see an error on re-submit
      if (res.status === 422) {
        return NextResponse.json({ ok: true, status: "already_subscribed" });
      }
      return NextResponse.json(
        { error: "Не успяхме да те запишем. Опитай отново след малко." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, status: "subscribed" });
  } catch (err) {
    console.error("MailerLite call threw", err);
    return NextResponse.json(
      { error: "Мрежова грешка. Опитай отново след малко." },
      { status: 502 }
    );
  }
}
