import { SignUp } from "@clerk/nextjs";
import { SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Регистрация | Coaching Real",
  description: "Създай профил в Coaching Real, за да достъпиш своите покупки и курсове.",
};

export default function SignUpPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <main
        className="flex flex-col items-center justify-center px-6 py-32 min-h-screen"
        style={{ backgroundColor: "#faf8f5" }}
      >
        <div className="w-full max-w-md flex flex-col items-center gap-8">
          <div className="text-center">
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                fontWeight: 800,
                color: "#0f131a",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Създай профил
            </h1>
            <p
              className="mt-3"
              style={{ fontSize: "14px", color: "rgba(15,19,26,0.6)" }}
            >
              Регистрирай се с имейла, който си използвал при покупка — твоите минали поръчки ще се покажат автоматично.
            </p>
          </div>
          <SignUp
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/dashboard"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
