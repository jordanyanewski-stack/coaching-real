import { SignIn } from "@clerk/nextjs";
import { SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Вход | Coaching Real",
  description: "Влез в профила си в Coaching Real, за да достъпиш своите аудиокниги и курсове.",
};

export default function SignInPage() {
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
              Влез в профила си
            </h1>
            <p
              className="mt-3"
              style={{ fontSize: "14px", color: "rgba(15,19,26,0.6)" }}
            >
              Достъп до твоите аудиокниги и курсове.
            </p>
          </div>
          <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/dashboard"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
