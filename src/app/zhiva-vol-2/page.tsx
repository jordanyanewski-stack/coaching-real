import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { LOGO_URL, SiteFooter } from "@/app/_shared";
import { EnrollForm } from "@/app/masterclass/enroll-form";
import { ZhivaVol2StickyCTA } from "./sticky-cta";
import styles from "./page.module.css";

const zhivaDisplay = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-zhiva-display",
});

const zhivaSans = Montserrat({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-zhiva-sans",
});

export const metadata: Metadata = {
  title: "ЖИВА vol. 2: Съживи се! · 21–23 август | Таня Касабова",
  description:
    "Три онлайн срещи на живо с Таня Касабова. Разпознай режима на оцеляване, подсъзнателната програма зад него и направи първия си жив избор. 21–23 август 2026 · 37.01 €.",
  alternates: {
    canonical: "/zhiva-vol-2",
  },
  openGraph: {
    title: "ЖИВА vol. 2: Съживи се!",
    description:
      "Три онлайн срещи на живо с Таня Касабова · 21–23 август 2026 · 37.01 €.",
    images: ["/zhiva/hero.jpg"],
  },
};

const recognitionLines = [
  "Все попадам на хора, които не знаят какво искат.",
  "Казвам „да“, а после се ядосвам на себе си.",
  "Не мога да се отпусна, дори когато всичко е наред.",
  "Знам откъде идва проблемът ми — и въпреки това пак го правя.",
  "Уморена съм да бъда силната за всички.",
];

const days = [
  {
    number: "01",
    label: "Ден 1 · Утро",
    date: "21 август",
    title: "Кога спрях да бъда жива?",
    body:
      "Разпознаваш разликата между това да функционираш и това да живееш. Изграждаш своята лична „карта на угасването“ — къде даваш всичко на другите и нищо не остава за теб.",
  },
  {
    number: "02",
    label: "Ден 2 · Следобед",
    date: "22 август",
    title: "Защо винаги очаквам болката да се повтори?",
    body:
      "Виждаш как едно старо болезнено преживяване се е превърнало в подсъзнателна програма, защитна роля и повтарящ се сценарий — в любовта, границите, парите и работата.",
  },
  {
    number: "03",
    label: "Ден 3 · Вечер",
    date: "23 август",
    title: "Връщам се в живота си",
    body:
      "От автоматична защита към осъзнат избор. Правиш своя първи „жив избор“ — конкретна стъпка за следващите 72 часа, различна от старата реакция.",
  },
];

const outcomes = [
  "Ясна картина къде живееш в режим на оцеляване",
  "Разпозната основна подсъзнателна програма",
  "Яснота за своята защитна роля",
  "Конкретен първи избор към повече живот",
  "Личен план за следващите 72 часа",
  "Разбиране къде е нужна по-дълбока работа",
];

const offerItems = [
  "Три срещи на живо с Таня Касабова, онлайн",
  "Работни листове и практики за всеки от трите дни",
  "Малка, безопасна група",
  "Запис от срещите, достъпен за ограничен период",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className={styles.sectionIntro}>{intro}</p>}
    </div>
  );
}

export default function ZhivaVol2Page() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ЖИВА vol. 2: Съживи се!",
    description:
      "Три онлайн срещи на живо с Таня Касабова за излизане от режима на оцеляване и първи осъзнат избор към повече живот.",
    startDate: "2026-08-21",
    endDate: "2026-08-23",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://coachingreallive.com/zhiva-vol-2",
    },
    organizer: {
      "@type": "Organization",
      name: "Coaching Real",
      url: "https://coachingreallive.com",
    },
    performer: {
      "@type": "Person",
      name: "Таня Касабова",
    },
    offers: {
      "@type": "Offer",
      price: "37.01",
      priceCurrency: "EUR",
      url: "https://coachingreallive.com/zhiva-vol-2#enroll",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return (
    <div
      className={`${styles.page} ${zhivaDisplay.variable} ${zhivaSans.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <header className={styles.topBar}>
        <div className={styles.topBarInner}>
          <a href="/" className={styles.logoLink} aria-label="Coaching Real — начало">
            <Image
              src={LOGO_URL}
              alt="Coaching Real"
              width={74}
              height={61}
              className={styles.logo}
            />
          </a>
          <div className={styles.topMeta}>
            <strong>37.01 €</strong>
            <span>21–23 август · онлайн на живо</span>
          </div>
          <a className={styles.topCta} href="#enroll">
            Резервирай място
          </a>
        </div>
      </header>

      <main>
        <section className={styles.hero} data-zhiva-vol2-hero>
          <div className={styles.heroPulse} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>ЖИВА vol. 2 · Три онлайн срещи</p>
              <h1>
                Кога спря да бъдеш <em>жива?</em>
              </h1>
              <p className={styles.heroLead}>
                Не си изгубила силата си. Научила си се да я използваш, за да
                оцеляваш — вместо да живееш.
              </p>
              <p className={styles.heroBody}>
                За три дни ще разпознаеш защо и ще направиш първата стъпка
                обратно към себе си.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryCta} href="#enroll">
                  Запази мястото си за 37.01 €
                  <ArrowIcon />
                </a>
                <p>21–23 август 2026 · онлайн на живо</p>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/zhiva/hero.jpg"
                alt="Жена в движение към светлината — символ на връщането към живота"
                fill
                preload
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroVisualCaption}>
                <span>3 дни</span>
                <span>3 срещи</span>
                <span>1 жив избор</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.recognition}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="За коя жена е това"
              title="Разпознаваш ли се в някое от тези изречения?"
              intro="Това са думите, с които жените, с които работя, описват сами себе си — преди да разберат откъде идват."
            />
            <div className={styles.quoteGrid}>
              {recognitionLines.map((line, index) => (
                <blockquote key={line} className={styles.quoteCard}>
                  <span aria-hidden="true">“</span>
                  <p>{line}</p>
                  <small>0{index + 1}</small>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.promise}>
          <div className={styles.promiseInner}>
            <p className={styles.eyebrow}>Голямото обещание</p>
            <h2>
              Три дни, за да разбереш защо се пазиш —{" "}
              <em>и как да спреш</em>
            </h2>
            <div className={styles.pulseRule} aria-hidden="true">
              <span />
            </div>
            <p>
              Ще видиш как болезнените преживявания са се превърнали в
              несъзнателни правила, по които живееш. Ще разпознаеш каква цена
              плащаш за защитите, които някога са ти помогнали да оцелееш. И ще
              си тръгнеш с ясен, личен първи избор към повече живот.
            </p>
          </div>
        </section>

        <section className={styles.program}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Програмата на трите дни"
              title="От разпознаване към действие"
            />
            <div className={styles.dayGrid}>
              {days.map((day) => (
                <article key={day.number} className={styles.dayCard}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>{day.number}</span>
                    <div>
                      <p>{day.label}</p>
                      <time>{day.date}</time>
                    </div>
                  </div>
                  <h3>{day.title}</h3>
                  <p>{day.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.outcomes}>
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeIntro}>
              <p className={styles.eyebrow}>Резултат след трите дни</p>
              <h2>Ще си тръгнеш с</h2>
              <p>
                Не с още информация, а с яснота какво се случва в теб и
                конкретна посока за следващите 72 часа.
              </p>
            </div>
            <ul className={styles.outcomeList}>
              {outcomes.map((outcome) => (
                <li key={outcome}>
                  <span>
                    <CheckIcon />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.mentor}>
          <div className={styles.mentorGrid}>
            <div className={styles.mentorImageWrap}>
              <Image
                src="/zhiva/tanya-bio.jpg"
                alt="Таня Касабова"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.mentorImage}
              />
              <div className={styles.mentorBadge}>
                <span>Водеща</span>
                <strong>Таня Касабова</strong>
              </div>
            </div>
            <div className={styles.mentorCopy}>
              <p className={styles.eyebrow}>Водеща</p>
              <h2>Таня Касабова</h2>
              <p className={styles.mentorLead}>
                Автор на 4 книги, ментор и създател на трансформационни
                програми за жени, които искат да прекъснат повтарящите се
                житейски модели и да изградят по-зряла и свободна връзка със
                себе си.
              </p>
              <p>
                В работата си тя помага на жените да разберат защо продължават
                да се доказват, да поставят нуждите на другите пред своите, да
                избират неподходящи партньори, да изпитват вина, когато поставят
                граници, или да живеят така, сякаш постоянно трябва да
                заслужават любовта и мястото си.
              </p>
              <p>
                Мисията на Таня е всяка жена да спре да живее в режим на
                оцеляване, да освободи живота си от старите сценарии и да
                започне да избира себе си без страх, вина и нужда постоянно да
                се доказва.
              </p>
            </div>
          </div>

          <div className={styles.whyBlock}>
            <div>
              <p className={styles.eyebrow}>Защо точно Таня може да помогне</p>
              <h2>Защото не работи само с поведението, а с причините зад него</h2>
            </div>
            <div className={styles.whyCopy}>
              <p>
                Докато много подходи се фокусират върху това какво трябва да
                направи една жена, Таня помага тя да разбере защо не успява да
                го направи, въпреки че знае какво е правилно.
              </p>
              <p>
                В нейните програми жените откриват връзката между болезнените
                преживявания, подсъзнателните решения, защитните роли и
                повтарящите се ситуации в любовта, отношенията, работата и
                живота.
              </p>
              <p>
                Тя не предлага готови формули или временна мотивация. Създава
                пространство, в което всяка участничка може да разпознае
                собствената си история и да започне да изгражда нов начин на
                живот, основан на осъзнат избор, а не на стар страх.
              </p>
            </div>
          </div>
        </section>

        <section
          id="enroll"
          className={styles.enroll}
          data-zhiva-vol2-enroll
        >
          <div className={styles.enrollPulse} aria-hidden="true" />
          <div className={styles.enrollGrid}>
            <div className={styles.offerCopy}>
              <p className={styles.eyebrow}>Твоето място</p>
              <h2>ЖИВА vol. 2: Съживи се!</h2>
              <div className={styles.price}>37.01 €</div>
              <p className={styles.offerDate}>
                21–23 август · три онлайн срещи на живо
              </p>
              <ul>
                {offerItems.map((item) => (
                  <li key={item}>
                    <span>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.limited}>Местата са ограничени</p>
            </div>

            <div className={styles.formCard}>
              <p className={styles.formEyebrow}>Резервирай своето място</p>
              <h3>Запази мястото си сега</h3>
              <p>
                Въведи името и имейла си. След плащането ще видиш точните
                следващи стъпки и линка към затворената Facebook група.
              </p>
              <EnrollForm
                product="zhiva-vol-2"
                cardOnly
                variant="light-gold"
                submitLabel="Запази мястото си за 37.01 €"
              />
            </div>
          </div>
        </section>
      </main>

      <ZhivaVol2StickyCTA />
      <SiteFooter />
    </div>
  );
}
