import Image from "next/image";
import { T, GRADIENT_TEXT, LOGO_URL, SiteFooter } from "@/app/_shared";
import { FAQAccordion } from "../masterclass/faq-accordion";
import { ScrollReveal } from "../masterclass/scroll-reveal";
import { EnrollForm } from "../masterclass/enroll-form";
import { EarlyBirdPrice } from "./early-bird-price";
import { StickyCTABar } from "./sticky-cta";
import { HeroVideo } from "./hero-video";

export const metadata = {
  title: "Бизнес с душа, без хаос · 12 Мастъркласове · Юни 2026 | Coaching Real",
  description:
    "За терапевти, бизнес коучове, коучинг специалисти и холистични специалисти, готови да превърнат практиката си в устойчив бизнес. 12 мастъркласове · 17–28 юни 2026 · от €37.",
};

/* ─── DATA ──────────────────────────────────────────────────────────── */
const heroQuestions = [
  { text: "Имаш клиенти, но растежът ти зависи само от препоръки?", strong: false },
  { text: "Публикуваш съдържание, но то не води до реални запитвания?", strong: false },
  { text: "Уморена си да работиш само индивидуално и искаш по-устойчив модел?", strong: false },
  {
    text: "Време е да превърнеш практиката си в бизнес, който работи и без постоянното ти присъствие.",
    strong: true,
  },
];

// 6 pain points — each has a bold lead clause + an explanation.
const painPoints = [
  {
    lead: "„Искам да помагам на всички“",
    body: "— и затова не стигаш до никого. Идеалният клиент не е маркетинг трик. Той е основата на всичко.",
  },
  {
    lead: "Имаш гледания, но нямаш продажби.",
    body: "TikTok може да ти даде внимание, но не и бизнес. Разликата между аудитория и купувачи е огромна.",
  },
  {
    lead: "„Не искам да се наглася“",
    body: "— най-големият страх в онлайн бизнеса. Хора без граници = липса на позициониране.",
  },
  {
    lead: "Може ли маркетингът да бъде автентичен?",
    body: "Да. Но само когато структурата не убива автентичността — а я подкрепя.",
  },
  {
    lead: "Привличаш хора, които искат „само да питат нещо“.",
    body: "Защото „приятелският разговор“ и професионализмът нямат ясна граница в профила ти.",
  },
  {
    lead: "Страхуваш се от структура",
    body: "— защото мислиш, че тя убива мисията. Но без рамка дарбата се разпилява в хаос.",
  },
];

const curriculum = [
  { day: "Ден 1",  date: "17 юни", title: "Защо хората с мисия се страхуват от структура",            outcome: "Ще разбереш откъде идва съпротивата — и защо е лъжа." },
  { day: "Ден 2",  date: "18 юни", title: "Защо терапевтите се съпротивляват на идеалния клиент",      outcome: "Идеалният клиент не е маркетинг трик. Той е основата." },
  { day: "Ден 3",  date: "19 юни", title: "„Не искам да се наглася“ — най-големият страх онлайн",       outcome: "Откъде идва и как да спреш да позволяваш страха да взима решения вместо теб." },
  { day: "Ден 4",  date: "20 юни", title: "Може ли маркетингът да бъде автентичен?",                   outcome: "Да — но само ако знаеш как. Ще разгледаме конкретни примери." },
  { day: "Ден 5",  date: "21 юни", title: "Защо имаш гледания, но нямаш продажби",                     outcome: "Разликата между аудитория и купувачи — с коя работиш ти." },
  { day: "Ден 6",  date: "22 юни", title: "Хора без граници = липса на позициониране",                  outcome: "Защо клиентите не те уважават — и как да промениш това веднага." },
  { day: "Ден 7",  date: "23 юни", title: "Защо терапевтите привличат хора, „само да питат нещо“",     outcome: "Границата между приятелски разговор и професионализъм в онлайн пространството." },
  { day: "Ден 8",  date: "24 юни", title: "Когато дарбата няма рамка, идва хаос",                       outcome: "Структурата не убива автентичността. Тя я освобождава." },
  { day: "Ден 9",  date: "25 юни", title: "Защо много добри специалисти се изтощават онлайн",           outcome: "Не е в работата. Не е в таланта. Ето откъде идва умората." },
  { day: "Ден 10", date: "26 юни", title: "Проблемът не е в съдържанието, а в посланието",              outcome: "Как да говориш за работата си така, че правилните хора да те намерят." },
  { day: "Ден 11", date: "27 юни", title: "Какво всъщност означава „бизнес с душа“",                    outcome: "И как да изградиш такъв — без да се предаваш на себе си." },
  { day: "Ден 12", date: "28 юни", title: "Твоят план за следващите 90 дни",                            outcome: "Не вдъхновение. Конкретен документ, готов за изпълнение утре." },
];

const offerIncludes = [
  "12 живи мастъркласа с мен — всяка вечер от 17:00 до 18:30 ч.",
  "Записи на всичките 12 сесии — гледай кога и колкото пъти искаш",
  "Задачи и обратна връзка след всяка среща",
  "AI инструменти за генериране на маркетинговата ти работа",
  "Затворена група за участниците след събитието",
  "Конкретен 90-дневен план — документ, не вдъхновение",
];

const textTestimonials = [
  {
    quote: "Преди не знаех как да говоря за работата си онлайн. След Ден 4 написах пост и ми се обадиха 3 жени за сесия същата седмица.",
    name: "Стефани Булмез",
    role: "Холистичен специалист",
  },
  {
    quote: "Имах идея за курс от 18 месеца. След Ден 5 беше на хартия, оценена и готова. Не мога да повярвам, че чаках толкова дълго.",
    name: "Надежда Клисарска",
    role: "Коуч",
  },
  {
    quote: "Разбрах защо клиентите не идват въпреки че работя от 5 години. Никой не ми беше казал тези неща досега.",
    name: "Гергана Гаджева",
    role: "Терапевт",
  },
];

const videoTestimonials = [
  { id: "P7uagO2iKQU" },
  { id: "YaXXwMVzYCE" },
  { id: "KCKlgVLQfnI" },
  { id: "qxwjEwrPclE" },
  { id: "XCbVcEi6p84" },
];

const screenshotTestimonials = [
  { src: "/testimonials/testimonial-04-elitsa-diamandieva.jpg", alt: "Елица Диамандиева — отзив от Facebook", width: 1169, height: 697 },
  { src: "/testimonials/testimonial-02-gergana-gadjeva.jpg",    alt: "Гергана Гаджева — коментар от Facebook", width: 939, height: 882 },
  { src: "/testimonials/testimonial-01-stefani-bulmez.jpg",     alt: "Стефани Булмез — препоръка във Facebook", width: 1170, height: 638 },
  { src: "/testimonials/testimonial-05-mia-petrova.jpg",        alt: "Миа Петрова — съобщение в Messenger", width: 1169, height: 660 },
  { src: "/testimonials/testimonial-03-tanita.jpg",             alt: "Танита — съобщение във Viber", width: 861, height: 513 },
];

const aboutStats = [
  { num: "11", label: "години опит" },
  { num: "200+", label: "клиентки" },
  { num: "3", label: "висши образования" },
  { num: "CPD", label: "UK акредитация" },
];

const aboutCredentials = [
  "Noble Manhattan UK",
  "CPD UK акредитация",
  "Coaching Real платформа",
  "Създател на KickSTART",
];

const faqs = [
  {
    q: "Трябва ли вече да имам онлайн присъствие?",
    a: "Не. Програмата работи и ако тепърва започваш онлайн, и ако вече имаш присъствие, но то не ти носи клиенти.",
  },
  {
    q: "Колко ще ми отнема всяка вечер?",
    a: "90 минути — от 17:00 до 18:30 ч. Плюс кратка задача след всяка сесия. Всичко е записано, ако пропуснеш ден.",
  },
  {
    q: "За кого е тази програма?",
    a: "Специално за жени предприемачи в трансформиращите професии — терапевти, бизнес коучове, коучинг специалисти, констелатори, нутриционисти, психолози, НЛП практици, астролози, консултанти. Ако помагаш на хора да се трансформират — тази програма е за теб.",
  },
  {
    q: "Ще има ли запис?",
    a: "Да, записите са включени в цената. Присъствието на живо е много по-ценно — там се случват истинските промени. Но можеш да гледаш кога и колкото пъти искаш.",
  },
  {
    q: "Какво е ранното записване и до кога важи?",
    a: "До 15 юни 2026 цената е €37. След това тя се вдига на редовната цена от €97. Съдържанието е абсолютно същото — разликата е само в датата на записване.",
  },
  {
    q: "Как работи гаранцията?",
    a: "30-дневна пълна гаранция. Ако след първите 3 дни усетиш, че програмата не е за теб — връщам парите изцяло. Без въпроси. Рискът е мой.",
  },
];

/* ─── UTILITY ICONS ─────────────────────────────────────────────────── */
function IconCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke={dark ? "#ffffff" : "#70150E"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── CAMPAIGN HEADER ───────────────────────────────────────────────── */
function CampaignHeader() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{ backgroundColor: "transparent" }}
    >
      <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <Image
          src={LOGO_URL}
          alt="Coaching Real"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: "40px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
        />
      </a>
      <a
        href="#enroll"
        className="mv-btn mv-btn-primary"
        style={{ padding: "10px 22px", fontSize: "14px", flexShrink: 0 }}
      >
        Запиши се →
      </a>
    </header>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */
export default function BiznesSDushaPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <ScrollReveal />
      <CampaignHeader />
      <HeroSection />
      <VSLSection />
      <TruthSection />
      <PainPointsSection />
      <CurriculumSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <SiteFooter />
      <StickyCTABar />
    </div>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="mc-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-20 pb-12"
      style={{ backgroundColor: "#241008" }}
    >
      {/* Full-bleed backdrop photo + warm-dark overlay for legibility */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <Image
          src="/biznes-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(22,6,3,0.66) 0%, rgba(28,8,4,0.78) 50%, rgba(14,4,2,0.88) 100%)",
          }}
        />
      </div>

      {/* Centered content */}
      <div className="mc-hero-text relative" style={{ zIndex: 1, maxWidth: "760px", width: "100%" }}>
        {/* Date + Zoom meta */}
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-3">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.12)",
              padding: "5px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.28)",
              backdropFilter: "blur(4px)",
            }}
          >
            17 – 28 юни 2026
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", fontWeight: 600 }}>
            Zoom · всяка вечер от 17:00 до 18:30 ч.
          </span>
        </div>

        {/* Social proof */}
        <div
          className="animate-fade-up delay-100 mt-4 flex items-center justify-center gap-3 flex-wrap"
          aria-label="Социално доказателство"
        >
          <div style={{ display: "flex", flexShrink: 0 }}>
            {[
              { src: "/Стефани Булмез.jpg", alt: "Стефани Булмез" },
              { src: "/Красимира Кондова.jpg", alt: "Красимира Кондова" },
              { src: "/Надежда Клисарска.jpg", alt: "Надежда Клисарска" },
            ].map(({ src, alt }, i) => (
              <span
                key={src}
                style={{
                  position: "relative",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.35)",
                  marginLeft: i === 0 ? 0 : "-8px",
                  backgroundColor: "#f0ebe4",
                }}
              >
                <Image src={src} alt={alt} fill sizes="32px" style={{ objectFit: "cover", objectPosition: "top center" }} />
              </span>
            ))}
          </div>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontWeight: 600, lineHeight: 1.4 }}>
            <strong style={{ color: "#ffffff", fontWeight: 800 }}>100+</strong> терапевти, коучове и специалисти
            вече минаха през KickSTART
          </span>
        </div>

        {/* Eyebrow */}
        <div className="animate-fade-up delay-75 mt-5">
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 800,
              color: "#f0a89f",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            12 мастъркласове · KickSTART
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-100 mt-2"
          style={{
            fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            margin: "12px auto 0",
            textShadow: "0 2px 30px rgba(0,0,0,0.35)",
          }}
        >
          Бизнес с душа,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffd9b0 0%, #f0a89f 55%, #e87070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            без хаос.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up delay-150 mt-4"
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.86)",
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "20px auto 0",
            fontWeight: 500,
            textShadow: "0 1px 16px rgba(0,0,0,0.3)",
          }}
        >
          От практика към устойчив бизнес: повече{" "}
          <strong style={{ color: "#ffffff", fontWeight: 700 }}>яснота</strong>, по-добро{" "}
          <strong style={{ color: "#ffffff", fontWeight: 700 }}>позициониране</strong> и система, която
          привлича правилните клиенти.
        </p>

        {/* Recognition checklist */}
        <div
          className="animate-fade-up delay-200 mt-6 flex flex-col gap-2.5"
          style={{ maxWidth: "520px", margin: "28px auto 0", textAlign: "left" }}
        >
          {heroQuestions.map((q, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span
                style={{
                  flexShrink: 0,
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #e87070 0%, #c94535 100%)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                }}
              >
                <IconCheck dark />
              </span>
              <p
                style={{
                  fontSize: "15px",
                  color: q.strong ? "#ffffff" : "rgba(255,255,255,0.85)",
                  fontWeight: q.strong ? 700 : 500,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {q.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing card (auto early-bird) */}
        <div className="animate-fade-up delay-250 mt-6 flex justify-center">
          <EarlyBirdPrice variant="hero" />
        </div>

        {/* CTA */}
        <div className="animate-fade-up delay-300 mt-5">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary mc-hero-cta"
            style={{
              fontSize: "17px",
              padding: "18px 36px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: 700,
              boxShadow: "0 12px 32px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Запиши се на ранна цена
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="animate-fade-up delay-300 mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}
        >
          {["Сигурна транзакция", "Потвърждение веднага", "30-дневна гаранция"].map((label) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f0a89f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── VSL VIDEO ─────────────────────────────────────────────────────── */
const VSL_VIDEO = {
  libraryId: "653527",
  videoId: "7ca34e85-dd7f-4509-8db5-7f39f4515674",
};

function VSLSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#1c0703" }}
    >
      <div className="reveal relative max-w-3xl mx-auto text-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            color: "#f0a89f",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          Гледай преди да се запишеш
        </span>
        <p
          className="mt-6"
          style={{
            fontSize: "clamp(19px, 2.6vw, 26px)",
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.5,
            fontWeight: 600,
            maxWidth: "640px",
            margin: "18px auto 0",
          }}
        >
          Пусни видеото и чуй директно от мен защо създадох тази програма — и за кого е.
        </p>

        {/* Player */}
        <div
          className="mt-10"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
            border: "1px solid rgba(240,168,159,0.18)",
          }}
        >
          <HeroVideo libraryId={VSL_VIDEO.libraryId} videoId={VSL_VIDEO.videoId} />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#enroll"
            className="mv-btn mv-btn-primary"
            style={{
              fontSize: "16px",
              padding: "16px 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Запиши се на ранна цена
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUTH (dark) ──────────────────────────────────────────────────── */
function TruthSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #5c110b 0%, #70150E 55%, #8a1c14 100%)" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <span
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: 800,
            color: "#f0a89f",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Честният разговор
        </span>
        <h2
          className="mt-5"
          style={{
            fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          100 000 гледания не значат бизнес.
        </h2>

        <blockquote
          style={{
            borderLeft: "3px solid #e87070",
            paddingLeft: "22px",
            margin: "32px 0",
            fontSize: "clamp(1.25rem, 2.6vw, 1.6rem)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#ffe7e1",
            lineHeight: 1.5,
          }}
        >
          „Не ти трябват повече гледания.
          <br />
          Трябват ти по-точните хора.“
        </blockquote>

        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontWeight: 400 }}>
          Работила си. Учила си. Инвестирала си в себе си. Имаш дарба — истинска. И въпреки това: клиентите не
          идват предвидимо. Социалните мрежи ти изглеждат като черна дупка. Продаваш сесии, не трансформация.
          Публикуваш понякога — без стратегия, без посока.
        </p>
        <p className="mt-5" style={{ fontSize: "17px", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontWeight: 400 }}>
          Проблемът не е в съдържанието. Проблемът е в{" "}
          <strong style={{ color: "#ffffff", fontWeight: 700 }}>посланието.</strong> Когато дарбата няма рамка —
          идва хаос. Тези 12 дни са рамката.
        </p>
      </div>
    </section>
  );
}

/* ─── PAIN POINTS ───────────────────────────────────────────────────── */
function PainPointsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Разпознаваш ли се?</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Защо много добри специалисти{" "}
            <span style={{ ...GRADIENT_TEXT }}>се изтощават онлайн</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-6"
              style={{
                backgroundColor: T.surfaceStrong,
                borderRadius: "14px",
                border: "1px solid rgba(107,21,14,0.08)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #70150E 0%, #e85050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  flexShrink: 0,
                  minWidth: "34px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontSize: "15px", color: T.textSecondary, lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                <strong style={{ color: T.textPrimary, fontWeight: 700 }}>{p.lead}</strong> {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", padding: "16px 28px" }}>
            Време е да дам рамка на дарбата си →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CURRICULUM ────────────────────────────────────────────────────── */
function CurriculumSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="mv-tag mv-tag-light">Програмата</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            12 дни. 12 отговора.{" "}
            <span style={{ ...GRADIENT_TEXT }}>12 измерения на твоята мисия.</span>
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.7, fontWeight: 500, maxWidth: "640px", margin: "20px auto 0" }}
          >
            Всяка вечер от 17:00 до 18:30 ч. в Zoom. 17–28 юни 2026. Записи включени. Задачи и обратна
            връзка след всяка среща.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((c) => (
            <article
              key={c.day}
              style={{
                padding: "22px 22px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid rgba(107,21,14,0.10)",
                boxShadow: "0 4px 14px rgba(107,21,14,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#70150E", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  {c.day}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: T.textSecondary,
                    backgroundColor: "rgba(107,21,14,0.06)",
                    padding: "2px 8px",
                    borderRadius: "999px",
                  }}
                >
                  {c.date}
                </span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: T.textPrimary, lineHeight: 1.3, letterSpacing: "-0.005em", margin: 0 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: 1.55, margin: 0 }}>
                <span style={{ color: "#70150E", fontWeight: 700 }}>→</span> {c.outcome}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", padding: "16px 28px" }}>
            Запиши се на ранна цена →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── VIDEO TESTIMONIALS (text quotes + Krasimira + slider) ─────────── */
function VideoTestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Реални истории</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Животът им се раздели{" "}
            <span style={{ ...GRADIENT_TEXT }}>на преди и след.</span>
          </h2>
        </div>

        {/* 3 text quotes */}
        <div className="grid gap-5 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {textTestimonials.map(({ quote, name, role }) => (
            <figure
              key={name}
              style={{
                margin: 0,
                padding: "26px 24px",
                backgroundColor: "#faf8f5",
                borderRadius: "16px",
                border: "1px solid rgba(107,21,14,0.10)",
                boxShadow: "0 4px 18px rgba(107,21,14,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <svg width="22" height="18" viewBox="0 0 32 26" fill="rgba(112,21,14,0.18)" aria-hidden>
                <path d="M0 26V14.4C0 10.4 1 7.07 3 4.4 5.13 1.6 8.4 0 12.8 0l1.6 3.2C10.27 4.27 8 6.13 6.8 8.8 5.73 11.2 5.33 13.6 5.6 16H13V26H0Zm19 0V14.4c0-4 1-7.33 3-10C24.13 1.6 27.4 0 31.8 0L33.4 3.2c-4.13 1.07-6.4 2.93-7.6 5.6C24.73 11.2 24.4 13.6 24.6 16H32V26H19Z" />
              </svg>
              <blockquote style={{ margin: 0, fontSize: "15px", lineHeight: 1.65, color: T.textPrimary, fontWeight: 500, flex: 1 }}>
                {quote}
              </blockquote>
              <figcaption style={{ fontSize: "13px", fontWeight: 700, color: "#70150E", letterSpacing: "0.01em" }}>
                {name}
                <span style={{ color: T.textSecondary, fontWeight: 500 }}> · {role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Krasimira pull-quote */}
        <figure
          className="mb-14"
          style={{
            margin: "0 0 56px",
            padding: "28px 30px",
            background: "linear-gradient(135deg, #70150E 0%, #8a1c14 100%)",
            borderRadius: "18px",
            color: "#ffffff",
            position: "relative",
            boxShadow: "0 18px 42px rgba(107,21,14,0.30)",
            maxWidth: "760px",
            marginInline: "auto",
          }}
        >
          <svg width="32" height="26" viewBox="0 0 32 26" fill="rgba(255,255,255,0.18)" aria-hidden style={{ marginBottom: "10px" }}>
            <path d="M0 26V14.4C0 10.4 1 7.07 3 4.4 5.13 1.6 8.4 0 12.8 0l1.6 3.2C10.27 4.27 8 6.13 6.8 8.8 5.73 11.2 5.33 13.6 5.6 16H13V26H0Zm19 0V14.4c0-4 1-7.33 3-10C24.13 1.6 27.4 0 31.8 0L33.4 3.2c-4.13 1.07-6.4 2.93-7.6 5.6C24.73 11.2 24.4 13.6 24.6 16H32V26H19Z" />
          </svg>
          <blockquote style={{ fontSize: "18px", lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
            С Красимира разбрахме кой е идеалният й клиент. До 2 месеца след програмата имаше пълен календар за
            първи път от 4 години.
          </blockquote>
          <figcaption style={{ marginTop: "14px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.02em", opacity: 0.92 }}>
            Красимира Такева · Терапевт
          </figcaption>
        </figure>

        {/* Video slider */}
        <div style={{ position: "relative" }}>
          <div
            className="mc-testimonials-scroll"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "12px",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {videoTestimonials.map(({ id }) => (
              <div
                key={id}
                style={{
                  flexShrink: 0,
                  width: "220px",
                  aspectRatio: "9/16",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(107,21,14,0.1)",
                  border: "1px solid rgba(107,21,14,0.1)",
                  scrollSnapAlign: "start",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`Видео отзив ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                />
              </div>
            ))}
          </div>
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 12,
              right: 0,
              width: "72px",
              pointerEvents: "none",
              background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 100%)",
            }}
          />
        </div>

        <div className="text-center mt-12">
          <a href="#enroll" className="mv-btn mv-btn-primary" style={{ fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Искам същите резултати →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS (screenshots) ────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Думите на жените</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Не на думи —{" "}
            <span style={{ ...GRADIENT_TEXT }}>на екрана.</span>
          </h2>
        </div>

        <div className="mc-testimonials-grid">
          {screenshotTestimonials.map(({ src, alt, width, height }) => (
            <figure
              key={src}
              style={{
                margin: "0 0 20px",
                breakInside: "avoid",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(107,21,14,0.1)",
                border: "1px solid rgba(107,21,14,0.1)",
                background: "#ffffff",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 540px"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── OFFER ─────────────────────────────────────────────────────────── */
function OfferSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Твоята инвестиция</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Всичко,{" "}
            <span style={{ ...GRADIENT_TEXT }}>което получаваш</span>
          </h2>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(107,21,14,0.10)",
            boxShadow: "0 12px 40px rgba(107,21,14,0.08)",
            overflow: "hidden",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {offerIncludes.map((row, i) => (
              <li
                key={row}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "18px 24px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(107,21,14,0.08)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  <IconCheck dark />
                </span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: T.textPrimary, lineHeight: 1.5 }}>{row}</span>
              </li>
            ))}
          </ul>

          {/* Early-bird bonus strip */}
          <div
            style={{
              padding: "18px 24px",
              borderTop: "1px dashed rgba(107,21,14,0.20)",
              backgroundColor: "rgba(107,21,14,0.04)",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "16px", lineHeight: 1.4 }} aria-hidden>⚡</span>
            <p style={{ fontSize: "13.5px", fontWeight: 600, color: "#70150E", lineHeight: 1.6, margin: 0 }}>
              Запиши се до 15 юни и плащаш само €37 вместо редовната цена от €97. Спестяваш €60 — без да губиш
              нищо от програмата.
            </p>
          </div>

          {/* Price + CTA (auto early-bird) */}
          <EarlyBirdPrice variant="value-stack" />
        </div>
      </div>
    </section>
  );
}

/* ─── GUARANTEE ─────────────────────────────────────────────────────── */
function GuaranteeSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto text-center">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #70150E 0%, #c94535 100%)",
            boxShadow: "0 14px 36px rgba(107,21,14,0.30)",
            margin: "0 auto 24px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 2l9 4v6c0 5-3.5 9.5-9 10-5.5-.5-9-5-9-10V6l9-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        <span style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "#70150E", letterSpacing: "0.14em", textTransform: "uppercase", lineHeight: 1.4 }}>
          30-дневна гаранция
        </span>

        <h2
          className="mt-4"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: "600px",
            margin: "12px auto 0",
          }}
        >
          Ако след първите 3 дни усетиш, че програмата не е за теб —{" "}
          <span style={{ ...GRADIENT_TEXT }}>връщам парите изцяло.</span>
        </h2>

        <p className="mt-5" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.65, fontWeight: 500, maxWidth: "520px", margin: "20px auto 0" }}>
          Без въпроси. Рискът е мой.
        </p>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">За мен</span>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div
              style={{
                position: "relative",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                padding: "4px",
                background: "linear-gradient(135deg, #70150E, #c94535, #e85050, #70150E)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                <Image
                  src="/stasi-5.jpg"
                  alt="Станислава Павлова"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="260px"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3" style={{ width: "260px" }}>
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: "#faf8f5",
                    border: "1px solid rgba(107,21,14,0.10)",
                    borderRadius: "12px",
                    padding: "14px 12px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ display: "block", fontSize: "26px", fontWeight: 900, color: "#70150E", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: "11.5px", color: T.textSecondary, fontWeight: 600, letterSpacing: "0.01em" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: T.textPrimary, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
              Станислава Павлова
            </h2>
            <p className="mt-2" style={{ fontSize: "14px", fontWeight: 700, color: "#70150E", letterSpacing: "0.02em" }}>
              Бизнес ментор · Стратег · Създател на KickSTART
            </p>

            <p className="mt-5" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.75, fontWeight: 500 }}>
              Работя с терапевти, бизнес коучове, коучинг специалисти, лечители и холистични специалисти от{" "}
              <strong style={{ color: T.textPrimary, fontWeight: 700 }}>11 години</strong>.
            </p>
            <p className="mt-4" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.75, fontWeight: 500 }}>
              Виждала съм стотици жени с огромна стойност и нулева представа как да намират клиенти онлайн.
              Моята работа е да запълня тази пропаст —{" "}
              <strong style={{ color: T.textPrimary, fontWeight: 700 }}>не с мотивация, а с конкретна система.</strong>
            </p>
            <p className="mt-4" style={{ fontSize: "16px", color: T.textSecondary, lineHeight: 1.75, fontWeight: 500 }}>
              Преди да стартирам онлайн бизнеса си на 1 януари 2018 г., се обучавах 2 години в коучинг умения в
              Noble Manhattan UK. Днес имам сертифициран и акредитиран бизнес от CPD UK.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {aboutCredentials.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#70150E",
                    backgroundColor: "rgba(107,21,14,0.06)",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "1px solid rgba(107,21,14,0.14)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="reveal relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="mv-tag mv-tag-light">Въпроси</span>
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Преди да се запишеш
          </h2>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

/* ─── FINAL CTA / ENROLL ────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      id="enroll"
      className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="reveal relative max-w-3xl mx-auto text-center">
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Имаш дарба.{" "}
          <span style={{ ...GRADIENT_TEXT }}>Дай й рамка.</span>
        </h2>

        <p className="mt-5" style={{ fontSize: "17px", color: T.textSecondary, lineHeight: 1.55, fontWeight: 600 }}>
          12 дни. 12 мастъркласове. Всяка вечер от 17:00 до 18:30 ч. в Zoom. Старт 17 юни 2026.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#70150E",
              backgroundColor: "rgba(107,21,14,0.06)",
              padding: "5px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(107,21,14,0.14)",
            }}
          >
            17 – 28 юни 2026
          </span>
          <span style={{ fontSize: "13px", color: T.textSecondary, fontWeight: 600 }}>
            Zoom · всяка вечер от 17:00 до 18:30 ч.
          </span>
        </div>

        {/* Price + EnrollForm (auto early-bird) */}
        <EarlyBirdPrice variant="final-cta" />

        {/* Trust strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2" style={{ fontSize: "12px", color: T.textSecondary, fontWeight: 600 }}>
          {["Сигурна транзакция", "30-дневна гаранция", "Потвърждение веднага"].map((label) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#70150E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
