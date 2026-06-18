import Image from "next/image";
import { T, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Програми – Станислава Павлова | Coaching Real",
  description:
    "Разгледай всички програми на Станислава Павлова - флагманска менторска програма, AI инструменти, видео курсове и уъркшопи за холистични предприемачи.",
};

type Program = {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  desc: string;
  image: string;
  badge?: string;
  featured?: boolean;
  href?: string;
};

const PROGRAMS: Program[] = [
  {
    id: "kickstart",
    type: "Интензивен курс",
    title: "KickSTART",
    subtitle: "Онлайн бизнес с душа",
    desc: 'Ако знаеш, че си родена, за да помагаш на хората, но се чувстваш блокирана от страха да продаваш, липсата на яснота или хаоса в социалните мрежи - KickSTART е твоят нов старт. Тази програма съчетава Ikigai философията, холистичен бизнес модел и стратегия за видимост, за да изградиш реален поток от клиенти и увереност в онлайн присъствието си.',
    image: "/kickstart.jpg",
    badge: "CPD UK Сертифицирана",
    featured: true,
  },
  {
    id: "audio-book",
    type: "Аудио книга",
    title: "Дигитален Успех за Холистични Лидери",
    subtitle: "KickSTART системата",
    desc: 'Секретната формула на успешния онлайн бизнес не е толкова важна. Важно е да имаш яснота и система, която работи за теб, а не против теб. С KickSTART системата ти ще научиш как да избегнеш разпръскването на ресурси и да се фокусираш върху това, което наистина ще ти донесе резултати.',
    image: "/audiobook.jpg",
    href: "/audiobook",
  },
  {
    id: "video-course",
    type: "Видео курс · 12 урока",
    title: "12 мощни урока",
    subtitle: "За жени в помощни и трансформиращи професии",
    desc: "Създаден специално за терапевти, коучове, констелатори, нутриционисти, психолози, НЛП практици, астролози, родолози, консултанти и жени предприемачи, които искат да изградят или развият своя онлайн бизнес.",
    image: "/12lessons.jpg",
    href: "/masterclass",
  },
  {
    id: "ai-assistant",
    type: "AI инструмент",
    title: "AI Кампания асистент",
    subtitle: "Планирай и пиши кампании с AI",
    desc: "Всичко, от което се нуждаеш, за да планираш, структурираш и напишеш следващата си кампания - базирано на доказани 7-цифрени шаблони и персонализирано според твоята оферта. Не е нужно да гадаеш или да измисляш системата си наново всеки път.",
    image: "/aiassistant.jpg",
    href: "/ai-assistant",
  },
  {
    id: "kickday",
    type: "Уъркшоп · 1 ден",
    title: "KICKDAY",
    subtitle: "Денят, в който рестартираш своя бизнес",
    desc: "Един цял ден, посветен на теб и твоя бизнес - с вдъхновение, стратегия и реални резултати. Ще излезеш не просто с идеи, а с ясен план за действие и нова вяра в посоката си. Създаден за жената предприемач, която е готова за следващото си ниво.",
    image: "/kickday.jpg",
    href: "/kickday",
  },
  {
    id: "bootcamp",
    type: "Уъркшоп · 10 дни",
    title: "Business Bootcamp",
    subtitle: "Ikigai маркетинг за реален доход",
    desc: 'Спри спагети маркетинг тактиките и подреди проста система, която работи всеки ден. Ще създадеш оферта, която резонира, и естествен процес за покана към покупка - мисия и печалба в едно.',
    image: "/bootcamp.jpg",
    href: "/bootcamp",
  },
  {
    id: "engagement",
    type: "Програма",
    title: "Ангажираност и развитие",
    subtitle: "За завършили KickSTART",
    desc: "Практическа програма, която ти помага да създадеш силен freebie, да изградиш висококонвертираща фуния и да увеличаваш имейл списъка си ежедневно - за да продаваш уверено без сложни автоматизации.",
    image: "/ангажираност и развитие.jpg",
    href: "/engagement",
  },
];

const featured = PROGRAMS.find((p) => p.featured)!;
const catalogue = PROGRAMS.filter((p) => !p.featured);

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function WorkWithMePage() {
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
      <FeaturedSection program={featured} />
      <CatalogueSection programs={catalogue} />
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
        <span className="mv-tag mv-tag-light">Всички програми</span>
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
          Избери своята{" "}
          <span style={{ ...GRADIENT_TEXT }}>следваща стъпка</span>
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
          Програми, курсове и инструменти, създадени специално за холистични
          предприемачи, коучове и терапевти, готови да изградят устойчив
          онлайн бизнес.
        </p>
      </div>
    </section>
  );
}

/* ─── FEATURED ──────────────────────────────────────────────────────── */
function FeaturedSection({ program }: { program: Program }) {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(0,0,0,0.32)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Интензивен курс
        </p>

        <div
          className="overflow-hidden"
          style={{
            borderRadius: "14px",
            border: "1px solid rgba(107,21,14,0.15)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div className="grid lg:grid-cols-[1fr_1.15fr]" style={{ minHeight: "420px" }}>

            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "280px" }}
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  ...GRADIENT_TEXT,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  marginBottom: "6px",
                }}
              >
                {program.title}
              </h2>
              {program.subtitle && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(0,0,0,0.42)",
                    marginBottom: "20px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {program.subtitle}
                </p>
              )}
              <p
                style={{
                  fontSize: "15px",
                  color: T.textSecondary,
                  lineHeight: 1.85,
                  marginBottom: "32px",
                  maxWidth: "490px",
                }}
              >
                {program.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/kickstart" className="mv-btn mv-btn-primary">
                  Научи повече →
                </a>
                <a href="/kickstart#waitlist" className="mv-btn mv-btn-outline-light">
                  Запиши се
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CATALOGUE GRID ─────────────────────────────────────────────────── */
function CatalogueSection({ programs }: { programs: Program[] }) {
  return (
    <section className="px-6 md:px-16 lg:px-24 pt-12 pb-24" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="max-w-6xl mx-auto">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(0,0,0,0.32)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
            paddingTop: "0",
          }}
        >
          Всички програми
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAM CARD ──────────────────────────────────────────────────── */
function ProgramCard({ program }: { program: Program }) {
  return (
    <a
      href={program.href ?? "#"}
      className="mv-program-card group flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,0.08)",
        textDecoration: "none",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <Image
          src={program.image}
          alt={program.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(0,0,0,0.35)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {program.type}
        </p>
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginBottom: "4px",
          }}
        >
          {program.title}
        </h3>
        {program.subtitle && (
          <p
            style={{
              fontSize: "12px",
              color: "rgba(0,0,0,0.38)",
              marginBottom: "12px",
              fontWeight: 500,
            }}
          >
            {program.subtitle}
          </p>
        )}
        <p
          style={{
            fontSize: "13px",
            color: T.textSecondary,
            lineHeight: 1.75,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          {program.desc}
        </p>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "13px",
            fontWeight: 700,
            color: "#70150E",
            letterSpacing: "0.01em",
          }}
        >
          Научи повече →
        </span>
      </div>
    </a>
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
        <span className="mv-tag mv-tag-light">Не знаеш откъде да започнеш?</span>
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
          Запази безплатна стратегическа сесия -{" "}
          <span style={{ ...GRADIENT_TEXT }}>заедно ще намерим правилния път за теб.</span>
        </h2>
        <p
          className="mt-5"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.8,
          }}
        >
          30 минути. Без продажбен натиск. Излизаш с яснота и конкретен
          следващ план.
        </p>
        <a
          href="https://calendly.com/stanislavapavlova8/meet-with-me-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mv-btn mv-btn-primary mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Запази своята безплатна сесия →
        </a>
      </div>
    </section>
  );
}
