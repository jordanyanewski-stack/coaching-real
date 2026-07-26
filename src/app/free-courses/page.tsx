import Image from "next/image";
import { T, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Безплатни онлайн курсове – Coaching Real",
  description:
    "Безплатни 4-седмични онлайн курсове, създадени от реални специалисти в KickSTART. Реална стойност. Безплатно участие.",
  openGraph: {
    images: ["/free-courses-hero-2026.jpg"],
  },
};

type Course = {
  id: string;
  title: string;
  description: string;
  mentor: string;
  photo: string;
  categories: string[];
  overview?: string;
  keyPoints?: string[];
  forWhom?: string[];
  forWhomIntro?: string;
  closing?: string;
  href?: string;
  ctaLabel?: string;
};

const COURSES: Course[] = [
  {
    id: "pozvolenie",
    title: "Позволение",
    description:
      "Позволение да бъдеш носена с любов, докато животът в теб отново започне да се движи.",
    mentor: "Янина Христова",
    photo: "/free-courses/yanina-hristova.jpg",
    categories: ["Друго"],
    overview:
      "Всичко започва със свързване с тялото, с успокояване на дишането и поглед навътре, там, където живеят нашите чувства. Водя ви в това свързване с тялото. Не е нужно да мислите или да взимате решения. Нужно е да осигурите пространство, в което няма да сте обезпокоявани за 90 минути, както и място за лягане — на пода, на легло или на кушетка. Отпускате се, аз пускам специално подбрана музика и ви повеждам в усещанията на тялото ви. Понякога говоря по време на сесия, понякога — не. Аз следвам движението на тялото и го подкрепям там, където е готово да се отпусне още малко.",
    forWhomIntro: "Курсът е за хората, които:",
    forWhom: [
      "преминават през интензивни периоди и започват нова глава в живота си — на чисто и в повече съответствие с техните вътрешни нужди.",
    ],
    href: "https://yaninahristova.com/",
    ctaLabel: "Запиши се",
  },
  {
    id: "razvidelyavane",
    title: "Развиделяване",
    description: "От вътрешна мъгла към яснота и спокойствие.",
    mentor: "Деница Донева",
    photo: "/free-courses/denitsa-doneva.jpg",
    categories: ["Мислене/личностно развитие", "Връзки/любов"],
    overview:
      "„Развиделяване“ е четириседмично преживяване за жени, които са изгубили връзката със себе си в отношения, силно привличане или житейска несигурност. Чрез практики, осъзнавания и нежно пространство за подкрепа участничките постепенно се освобождават от вътрешната мъгла, успокояват нервната си система и изграждат по-дълбока връзка със себе си. Целта не е да променят другия, а да си върнат вътрешната яснота, спокойствието и способността да избират живота си от любов към себе си.",
    forWhomIntro: "Курсът е за:",
    forWhom: [
      "Жени, които усещат, че са изгубили себе си в любовта.",
      "Жени, които постоянно мислят за един човек и живеят в очакване и несигурност.",
      "Жени, които искат да се върнат към вътрешната си опора, спокойствие и яснота.",
    ],
    href: "https://www.beataspace.com/",
    ctaLabel: "Запиши се",
  },
  {
    id: "az-buki-vedi",
    title: "Аз Буки Веди – разбери езика, на който говори родът",
    description:
      "Ако в този момент от живота си мислиш „Защо така?“ или „Защо на мен?“, в края на това въведение ще си кажеш: „Сега вече разбирам защо се случва това.“",
    mentor: "Лилия Бонева",
    photo: "/free-courses/lilia-boneva.jpg",
    categories: ["Родова терапия"],
    overview:
      "„Аз Буки Веди на рода“ не е курс по родова терапия. Това е ново възприятие и умение: как да мислиш и живееш родосъобразно.",
    keyPoints: [
      "Да започнеш да гледаш на живота си и на всяка ситуация в него през нова перспектива – тази на родовата ти система.",
      "Да намираш смисъл във всичко, което се е случвало преди и се случва сега – в твоя живот и в живота на хората преди теб.",
      "Да се чувстваш свързан/а с една невидима, но осезаема енергия – родовата.",
      "Да осмислиш по нов начин своята родова принадлежност.",
    ],
    forWhom: [
      "„Защо на мен?“",
      "„Защо все така ми се случва?“",
      "„Не е честно да плащам за греховете на тези преди мен!“",
      "„Не искам децата ми да плащат чужди грехове!“",
      "„Аз нищо не знам за моя род.“",
      "„Какво ми има?“",
      "„Кога най-после ще започне моят живот?“",
    ],
    closing:
      "Това ниво е и за всеки, който е готов да премине от „Кой род? Не ми говори за тези хора!“ до „Искам да знам. Искам да опозная колкото се може повече хора от моя род.“",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd7QTqtRkkhAD2FvLP72nVtQJka6kwNhr4Qw2WFEHSXIhq1bA/viewform",
    ctaLabel: "Запиши се безплатно",
  },
  {
    id: "nevidima-vina",
    title: "В капана на невидимата вина",
    description:
      "Разпознай и разбери своята невидима вътрешна вина, как тя влияе на решенията, границите и вътрешния ти свят.",
    mentor: "Ваня Топалова",
    photo: "/free-courses/vanya-topalova.jpg",
    categories: ["Мислене/личностно развитие"],
  },
  {
    id: "kogato-ne-ti-e-milo",
    title: "Когато вече не ти е мило в живота",
    description: "Спри, погледни и виж живота.",
    mentor: "Снежана Леоампа",
    photo: "/free-courses/snezhana-leoampa.jpg",
    categories: ["Мислене/личностно развитие"],
    href: "https://docs.google.com/forms/d/e/1FAIpQLScFi2zJKv8lPctzXnB4tqPvKoy090Tkpq4ewevRX1e8KAongQ/viewform?usp=dialog",
  },
  {
    id: "rod-i-partner",
    title: "Родът и влиянието му зад избора ни на партньор",
    description: "Кои са Родовите сценарии зад нашите избори.",
    mentor: "Галя Тодорова",
    photo: "/free-courses/galya-todorova.jpg",
    categories: ["Връзки/любов"],
  },
  {
    id: "umorata-koqto-ne-minava",
    title: "Умората, която не минава с почивка",
    description: "Намали изтощението с ясни, приложими стъпки.",
    mentor: "Мима Иванова",
    photo: "/free-courses/mima-ivanova.jpg",
    categories: ["Мислене/личностно развитие"],
    href: "https://forms.gle/qyNbetKk6d86WJnz5",
  },
  {
    id: "osaznatoto-dvizhenie",
    title:
      "Осъзнатото движение – преход от забързано ежедневие към ритъма на природата",
    description:
      "Онлайн 4-седмичен подготвителен път за баланс и изграждане на полезни навици в ежедневието.",
    mentor: "Веселин Дурков",
    photo: "/free-courses/veselin-durkov.jpg",
    categories: [
      "Здраве/спорт/хранене",
      "Мислене/личностно развитие",
      "Създаване на продукти",
      "Пътувания",
    ],
    href: "https://docs.google.com/forms/d/1K1aOZGLncO1rZiGatet_QZwhz6XdpJVnCdJ6kuUGhiQ/edit",
  },
  {
    id: "influenser-na-realnostta",
    title: "Инфлуенсър на Реалността си!?",
    description:
      "Разбери силата на влиянието и я превърни в лично предимство.",
    mentor: "Радостина Натцова",
    photo: "/free-courses/radostina-natcova.jpg",
    categories: ["Мислене/личностно развитие"],
  },
  {
    id: "zavrashthane-kam-spokojstvieto",
    title:
      "Завръщане към спокойствието. Как да спреш вътрешното напрежение и да си върнеш баланса.",
    description:
      "Ще се научиш как да успокояваш тялото си, да намаляваш тревожността и да се връщаш към вътрешна стабилност – без борба със себе си.",
    mentor: "Радка Павлова",
    photo: "/free-courses/radka-pavlova.jpg",
    categories: [
      "Танци/движение/женственост",
      "Здраве/спорт/хранене",
      "Мислене/личностно развитие",
      "Родителство/раждане/грижа за деца",
      "Връзки/любов",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf-XLDfVqpdruX70N0-pGS2AlGGW7uaV0DYHNa0IzwCTBKuCg/viewform",
  },
];

export default function FreeCoursesPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-mv, sans-serif)",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <SiteNav />
      <HeroSection />
      <ForWhoSection />
      <CoursesSection courses={COURSES} />
      <KickstartCTA />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-hidden"
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

      <div className="relative max-w-5xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">KickSTART</span>
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
          Безплатни{" "}
          <span style={{ ...GRADIENT_TEXT }}>онлайн курсове</span>
        </h1>
        <p
          className="mt-4"
          style={{
            fontSize: "17px",
            color: T.textSecondary,
            lineHeight: 1.7,
          }}
        >
          Създадени от реални специалисти в KickSTART
        </p>
        <p
          className="mt-2"
          style={{
            fontSize: "15px",
            color: T.textSecondary,
            lineHeight: 1.7,
          }}
        >
          4 седмици. Реална стойност. Безплатно участие.
        </p>

        <a
          href="#courses"
          className="mv-btn mv-btn-primary mt-8 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Разгледай безплатните курсове
        </a>
      </div>

      {/* Hero banner image */}
      <div
        className="relative max-w-4xl mx-auto mt-12 overflow-hidden aspect-[4/3] sm:aspect-[1366/600]"
        style={{ borderRadius: "14px" }}
      >
        <Image
          src="/free-courses-hero-2026.jpg"
          alt="Избери курс от участниците в KickSTART — 2026 г."
          fill
          priority
          sizes="(max-width: 639px) calc(100vw - 32px), 896px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

/* ─── FOR WHO ───────────────────────────────────────────────────────── */
function ForWhoSection() {
  const items = [
    "търсиш реална трансформация, а не бързи обещания",
    "искаш да учиш от практикуващи специалисти",
    "цениш дълбочина, структура и смисъл",
    "искаш да усетиш как работи един добре подреден онлайн курс",
  ];

  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-20"
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <div className="max-w-3xl mx-auto">
        <span className="mv-tag mv-tag-light">За теб</span>
        <h2
          className="mt-5"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          За кого са тези{" "}
          <span style={{ ...GRADIENT_TEXT }}>курсове?</span>
        </h2>
        <p
          className="mt-4"
          style={{
            fontSize: "16px",
            color: T.textSecondary,
            lineHeight: 1.8,
          }}
        >
          Тези безплатни курсове са за теб, ако:
        </p>
        <ul className="mt-6 flex flex-col gap-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
              style={{ fontSize: "16px", color: T.textPrimary, lineHeight: 1.6 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(107,21,14,0.08)",
                  color: "#70150E",
                  fontSize: "14px",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center md:text-left">
          <a
            href="#courses"
            className="mv-btn mv-btn-primary inline-flex"
            style={{ fontSize: "15px", padding: "14px 36px" }}
          >
            Разгледай курсовете
          </a>
        </div>

        <p
          className="mt-10"
          style={{
            fontSize: "15px",
            color: T.textSecondary,
            lineHeight: 1.8,
          }}
        >
          А сега ти имаш възможност да избереш подходящия курс за теб, като
          селектираш тема по-долу. След това просто натисни бутона под
          описанието на курса, за да се запишеш.
        </p>
      </div>
    </section>
  );
}

/* ─── COURSES SECTION ───────────────────────────────────────────────── */
function CoursesSection({ courses }: { courses: Course[] }) {
  return (
    <section
      id="courses"
      className="px-6 md:px-16 lg:px-24 py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="mv-tag mv-tag-light">Курсове</span>
        </div>
        <h2
          className="text-center"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Избери курс от участниците в{" "}
          <span style={{ ...GRADIENT_TEXT }}>KickSTART</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── COURSE CARD ───────────────────────────────────────────────────── */
function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className="mv-program-card flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Mentor photo */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          aspectRatio: "1/1",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Image
          src={course.photo}
          alt={course.mentor}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.categories.map((cat) => (
            <span
              key={cat}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#70150E",
                letterSpacing: "0.04em",
                padding: "4px 10px",
                borderRadius: "6px",
                backgroundColor: "rgba(107,21,14,0.06)",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            marginBottom: "10px",
          }}
        >
          {course.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: T.textSecondary,
            lineHeight: 1.75,
            flex: 1,
            marginBottom: "16px",
          }}
        >
          {course.description}
        </p>

        {/* Mentor name */}
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: T.textPrimary,
            marginBottom: "16px",
          }}
        >
          {course.mentor}
        </p>

        {course.overview && (
          <details
            style={{
              marginBottom: "16px",
              border: "1px solid rgba(107,21,14,0.12)",
              borderRadius: "10px",
              backgroundColor: "rgba(107,21,14,0.035)",
            }}
          >
            <summary
              style={{
                padding: "12px 14px",
                color: "#70150E",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Прочети повече за курса
            </summary>
            <div
              style={{
                padding: "2px 14px 16px",
                color: T.textSecondary,
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              <p>{course.overview}</p>

              {course.keyPoints && (
                <ul className="mt-4 flex flex-col gap-2 pl-5" style={{ listStyle: "disc" }}>
                  {course.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {course.forWhom && (
                <>
                  <h4
                    className="mt-5 mb-2"
                    style={{ color: T.textPrimary, fontSize: "14px", fontWeight: 800 }}
                  >
                    За кого е курсът?
                  </h4>
                  <p>{course.forWhomIntro ?? "Това ниво е за всеки, който поне веднъж си е казвал:"}</p>
                  <ul className="mt-3 flex flex-col gap-1.5 pl-5" style={{ listStyle: "disc" }}>
                    {course.forWhom.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {course.closing && <p className="mt-4">{course.closing}</p>}
            </div>
          </details>
        )}

        {/* CTA */}
        {course.href ? (
          <a
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-btn mv-btn-primary"
            style={{
              fontSize: "14px",
              padding: "12px 24px",
              textAlign: "center",
              width: "100%",
            }}
          >
            {course.ctaLabel ?? "Научи повече"}
          </a>
        ) : (
          <span
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 700,
              padding: "12px 24px",
              textAlign: "center",
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "rgba(107,21,14,0.08)",
              color: "#70150E",
            }}
          >
            Очаквай скоро
          </span>
        )}
      </div>
    </article>
  );
}

/* ─── KICKSTART CTA ─────────────────────────────────────────────────── */
function KickstartCTA() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24"
      style={{
        background: "linear-gradient(135deg, #70150E 0%, #c94535 55%, #e85050 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="mv-tag"
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          KickSTART
        </span>
        <h2
          className="mt-6"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Искаш да създадеш свой собствен онлайн курс?
        </h2>
        <p
          className="mt-5"
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.75,
          }}
        >
          Ако искаш да създадеш свой собствен онлайн курс и да стартираш или
          скалираш онлайн бизнеса си, се включи в KickSTART списъка за
          изчакващи. Така ще бъдеш сред първите, които научават кога отваряме
          вратите отново, и ще получиш специални бонуси.
        </p>
        <a
          href="/kickstart#waitlist"
          className="mv-btn mv-btn-white mt-10 inline-flex"
          style={{
            fontSize: "16px",
            padding: "16px 40px",
            maxWidth: "100%",
            whiteSpace: "normal",
            textAlign: "center",
          }}
        >
          Присъедини се към KickSTART списъка
        </a>
      </div>
    </section>
  );
}
