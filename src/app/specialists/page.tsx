import Image from "next/image";
import { T, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Специалисти – Coaching Real",
  description:
    "Запознай се с екипа от специалисти зад Coaching Real - бизнес коучове, терапевти и фасилитатори, посветени на твоята трансформация.",
};

type Specialist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const SPECIALISTS: Specialist[] = [
  {
    id: "stanislava",
    name: "Станислава Павлова",
    role: "Сърцето на Coaching Real",
    bio: "Обичам да превръщам хаоса в стратегия и мечтите – в работещи бизнеси. Аз съм бизнес коуч, първият български Ikigai коуч и CPD Provider. Подкрепям терапевти, коучове и специалисти, които искат да излязат онлайн и да живеят мисията си. С мен не само учиш – трансформираш.",
    photo: "https://coachingreallive.com/wp-content/uploads/2025/11/copy-of-predstavyane-lektori.png.png",
  },
  {
    id: "krasimira",
    name: "Красимира Кондова",
    role: "Хипнотерапевт",
    bio: "Хипнотерапевт с над 10 години опит. Помагам на хора, които се чувстват блокирани или несигурни, да открият вътрешната си сила и да изградят увереност в себе си и своя бизнес.",
    photo: "https://coachingreallive.com/wp-content/uploads/2025/11/copy-of-coaches.zip-1.png",
  },
  {
    id: "natalia",
    name: "Наталия Накова",
    role: "Трансперсонален терапевт",
    bio: "Трансперсонален терапевт и експерт по взаимоотношения. Помагам на жените, които са уморени да се доказват и да спасяват всички, да се върнат към себе си.",
    photo: "https://coachingreallive.com/wp-content/uploads/2025/11/copy-of-coaches.zip-2.png",
  },
  {
    id: "nadezhda",
    name: "Надежда Клисарска",
    role: "Фасилитатор · 9D Breathwork България",
    bio: "Първият български фасилитатор по 9D Breathwork – иновативен метод за дълбока вътрешна трансформация чрез дишане, звук и водена подсъзнателна работа. Освобождава емоционални блокажи, стрес и натрупани травми.",
    photo: "https://coachingreallive.com/wp-content/uploads/2026/03/coaches-4.png",
  },
  {
    id: "stefani",
    name: "Стефани Булмез",
    role: "Фасилитатор · Спинална Енергетика",
    bio: "Фасилитатор по Spinal Energetics – иновативен метод за работа с тялото и нервната система, подпомагащ освобождаването на напрежение, емоции и блокажи чрез финна енергийна активация по гръбначния стълб.",
    photo: "https://coachingreallive.com/wp-content/uploads/2026/03/coaches-2.png",
  },
  {
    id: "galya",
    name: "Галя Тодорова",
    role: "Родов консултант и практик",
    bio: "Помагам на жени, които преживяват повтарящи се сценарии в любовта, да освободят наследени емоции и модели. Работя през родовата терапия на три нива - личностно, енергийно и духовно.",
    photo: "https://coachingreallive.com/wp-content/uploads/2026/03/coaches.png",
  },
  {
    id: "tanya",
    name: "Таня Касабова",
    role: "Експерт по подсъзнание и Род",
    bio: "Работя с жени, които са силни за всички, но вътрешно са изтощени. Помагам им да излязат от невидимите родови роли и да заемат своята зряла позиция в живота.",
    photo: "https://coachingreallive.com/wp-content/uploads/2026/03/coaches-1.png",
  },
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function SpecialistsPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-mv, sans-serif)",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <SiteNav />
      <PageHero />
      <TeamSection specialists={SPECIALISTS} />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

/* ─── PAGE HERO ─────────────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 pt-36 pb-16 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(107,21,14,0.07) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Нашият екип</span>
        <h1
          className="mt-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Специалисти с{" "}
          <span style={{ ...GRADIENT_TEXT }}>мисия и сърце</span>
        </h1>
        <p
          className="mt-5 mx-auto"
          style={{
            fontSize: "17px",
            color: T.textSecondary,
            lineHeight: 1.8,
            maxWidth: "540px",
          }}
        >
          Зад Coaching Real стои екип от опитни терапевти, коучове и
          фасилитатори - всеки с уникален метод, обединени от едно: да те
          подкрепят да живееш мисията си.
        </p>
      </div>
    </section>
  );
}

/* ─── TEAM GRID ──────────────────────────────────────────────────────── */
function TeamSection({ specialists }: { specialists: Specialist[] }) {
  return (
    <section className="px-6 md:px-16 lg:px-24 pt-4 pb-24" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          {specialists.map((s, i) => (
            <SpecialistCard key={s.id} specialist={s} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SPECIALIST CARD ────────────────────────────────────────────────── */
function SpecialistCard({ specialist, priority = false }: { specialist: Specialist; priority?: boolean }) {
  return (
    <article
      className="mv-program-card flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <Image
          src={specialist.photo}
          alt={specialist.name}
          fill
          priority={priority}
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(107,21,14,0.7)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {specialist.role}
        </p>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "12px",
          }}
        >
          {specialist.name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: T.textSecondary,
            lineHeight: 1.75,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {specialist.bio}
        </p>
      </div>
    </article>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24"
      style={{
        background:
          "#faf8f5",
        borderTop: "1px solid rgba(107,21,14,0.15)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Готова ли си?</span>
        <h2
          className="mt-6"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Работи с правилния специалист -{" "}
          <span style={{ ...GRADIENT_TEXT }}>
            заедно ще намерим твоята следваща стъпка.
          </span>
        </h2>
        <p
          className="mt-5"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.8,
          }}
        >
          Запази безплатна стратегическа сесия и нека заедно преценим коя
          програма или специалист отговаря най-добре на твоите нужди.
        </p>
        <a
          href="/kickstart#waitlist"
          className="mv-btn mv-btn-primary mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Запази своята безплатна сесия →
        </a>
      </div>
    </section>
  );
}
