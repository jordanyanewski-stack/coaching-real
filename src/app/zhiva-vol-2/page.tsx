import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { LOGO_URL, SiteFooter } from "@/app/_shared";
import {
  ZhivaVol2EnrollForm,
  ZhivaVol2PriceNote,
  ZhivaVol2PriceText,
} from "./price-offer";
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
  title: "ЖИВА 2: Съживи се! · 21–23 август | Таня Касабова",
  description:
    "Три вечери на живо за жени, които разбират собствените си модели, но продължават да ги повтарят. 21–23 август 2026 от 19:00 часа. Участие: 37 €.",
  alternates: {
    canonical: "/zhiva-vol-2",
  },
  openGraph: {
    title: "ЖИВА 2: Съживи се!",
    description:
      "Виж повтарящия се модел, разбери какво го поддържа и направи първия различен избор. 21–23 август · онлайн на живо · 37 €.",
    images: ["/zhiva/hero.jpg"],
  },
};

const recognitionLines = [
  "Пак казвам „да“, когато вътре в мен всичко крещи „не“.",
  "Пак се оказвам до човек, който не може да ми даде това, от което имам нужда.",
  "Пак поемам повече, отколкото мога да нося.",
  "Анализирам всичко, но когато дойде моментът за избор — отново правя познатото.",
  "Обещавам си, че този път ще бъде различно — и пак се оказвам в същата история.",
];

const knowledgeSignals = [
  "Прочела си книгите",
  "Гледала си видеата",
  "Ходила си на обучения",
  "Работила си върху себе си",
  "Знаеш какво са личните граници",
  "Знаеш, че не можеш да промениш другия",
];

const days = [
  {
    number: "01",
    label: "Вечер 1",
    date: "21 август",
    time: "19:00 часа",
    title: "Виж модела",
    question: "Защо продължаваш да се връщаш към едни и същи ситуации?",
    points: [
      "Кой модел се повтаря и кога се активира",
      "Какво стои зад изборите, които правиш",
      "Къде предаваш нуждите си, за да запазиш връзка, сигурност или одобрение",
    ],
    result:
      "Ще можеш ясно да назовеш какво точно повтаряш, вместо само да усещаш, че нещо пак не е наред.",
  },
  {
    number: "02",
    label: "Вечер 2",
    date: "22 август",
    time: "19:00 часа",
    title: "Разбери какво го поддържа",
    question: "Защо старият модел е толкова труден за прекъсване?",
    points: [
      "Нуждата да бъдеш удобна и страхът да разочароваш",
      "Трудността да поставиш граница",
      "Чувството, че трябва да заслужиш любов, внимание или признание",
    ],
    result:
      "Ще разпознаеш какво поддържа модела жив и защо само повече воля досега не е била достатъчна.",
  },
  {
    number: "03",
    label: "Вечер 3",
    date: "23 август",
    time: "19:00 часа",
    title: "Избери различно",
    question: "Как започва истинската промяна?",
    points: [
      "Какво повече няма да приемаш",
      "Къде е време да поставиш граница",
      "Какъв конкретен нов избор ще направиш през следващите 72 часа",
    ],
    result:
      "Ще си тръгнеш не само с разбиране, а с ясно решение какво започваш да правиш различно.",
  },
];

const outcomes = [
  "Яснота какъв е повтарящият се модел",
  "Разбиране какво го задейства и поддържа",
  "Разпознаване на момента, в който старият избор започва отново",
  "Конкретна първа стъпка извън познатия сценарий",
];

const audienceSignals = [
  "Работила си върху себе си и не започваш от нулата",
  "Разбираш много от собствените си реакции, но продължаваш да ги повтаряш",
  "Писнало ти е да знаеш кое е правилно и в решаващия момент да правиш познатото",
  "Не търсиш поредната теория, а преход от осъзнаване към различен избор",
];

const futureChoices = [
  "Човекът отсреща отново не знае какво иска — но този път ти знаеш какво искаш.",
  "Някой очаква автоматично да кажеш „да“ — но този път спираш и питаш себе си какво искаш.",
  "Усещаш импулса да спасяваш, доказваш или чакаш — но го разпознаваш, преди да избере вместо теб.",
];

const offerItems = [
  "Три вечери на живо с Таня Касабова",
  "Работа върху твоя реален повтарящ се модел",
  "Конкретен нов избор за следващите 72 часа",
  "Онлайн достъп от удобно за теб място",
];

const testimonials = [
  {
    src: "/zhiva/testimonials/testimonial-01.jpg",
    width: 1200,
    height: 382,
    alt: "Анонимен отзив за осъзнаването, че заслужава пълноценен живот",
  },
  {
    src: "/zhiva/testimonials/testimonial-02.jpg",
    width: 1190,
    height: 365,
    alt: "Анонимен отзив за ценни и понякога болезнени осъзнавания",
  },
  {
    src: "/zhiva/testimonials/testimonial-03.jpg",
    width: 1200,
    height: 1320,
    alt: "Анонимен отзив за вътрешна стойност, кураж и важни житейски решения",
  },
  {
    src: "/zhiva/testimonials/testimonial-04.jpg",
    width: 815,
    height: 340,
    alt: "Анонимен отзив за усещане за живот и свобода след първия урок",
  },
  {
    src: "/zhiva/testimonials/testimonial-05.jpg",
    width: 1190,
    height: 360,
    alt: "Анонимен отзив за вдъхновение, самонаблюдение и търсене на отговори",
  },
  {
    src: "/zhiva/testimonials/testimonial-06.jpg",
    width: 1200,
    height: 240,
    alt: "Анонимен отзив за личните ограничения и отношението на другите",
  },
  {
    src: "/zhiva/testimonials/testimonial-07.jpg",
    width: 1200,
    height: 430,
    alt: "Анонимен отзив за собствената стойност и ролята на грижата за всички",
  },
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
    name: "ЖИВА 2: Съживи се!",
    description:
      "Три вечери на живо с Таня Касабова, в които ще разпознаеш повтарящия се модел, ще видиш какво го поддържа и ще направиш първия конкретен избор извън него.",
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
    offers: [
      {
        "@type": "Offer",
        price: "37",
        priceCurrency: "EUR",
        priceValidUntil: "2026-08-21T23:59:59+03:00",
        url: "https://coachingreallive.com/zhiva-vol-2#enroll",
        availability: "https://schema.org/LimitedAvailability",
      },
      {
        "@type": "Offer",
        price: "97",
        priceCurrency: "EUR",
        validFrom: "2026-08-22T00:00:00+03:00",
        url: "https://coachingreallive.com/zhiva-vol-2#enroll",
        availability: "https://schema.org/LimitedAvailability",
      },
    ],
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
            <strong>
              <ZhivaVol2PriceText />
            </strong>
            <span className={styles.topSchedule}>
              <span>21–23 август · онлайн на живо</span>
              <small>19:00 часа</small>
            </span>
          </div>
          <a className={styles.topCta} href="#enroll">
            Искам да участвам
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
              <p className={styles.eyebrow}>ЖИВА 2: Съживи се! · 3 вечери на живо</p>
              <h1>
                Знаеш защо го правиш. <em>Но защо го повтаряш?</em>
              </h1>
              <p className={styles.heroLead}>
                Ако знаеш, че трябва да поставяш граници, да избираш себе си и
                да спреш да се раздаваш за всички, но в реалния живот отново
                попадаш в същите ситуации — проблемът не е, че не си достатъчно
                осъзната.
              </p>
              <p className={styles.heroBody}>
                Има модел, който продължава да избира вместо теб. За тези три
                вечери ще видиш кой е той, какво го задейства и как да започнеш
                да го прекъсваш.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryCta} href="#enroll">
                  Искам да участвам · <ZhivaVol2PriceText />
                  <ArrowIcon />
                </a>
                <p>
                  21–23 август 2026 · онлайн на живо
                  <span className={styles.heroTime}>19:00 часа</span>
                </p>
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
                <span>3 вечери</span>
                <span>1 модел</span>
                <span>1 нов избор</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.recognition}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Може би вече знаеш достатъчно"
              title="Осъзната си. И въпреки това пак правиш познатото."
              intro="Може би вече си прочела книгите, гледала си видеата, ходила си на обучения или дори си работила години върху себе си. Знаеш какво трябва да направиш. Трудното идва в момента на избора."
            />
            <ul className={styles.knowledgeGrid} aria-label="Какво вече знаеш">
              {knowledgeSignals.map((signal) => (
                <li key={signal}>
                  <CheckIcon />
                  {signal}
                </li>
              ))}
            </ul>
            <div className={styles.recognitionBridge}>
              <p className={styles.eyebrow}>И въпреки това</p>
              <h3>Разпознаваш ли себе си?</h3>
            </div>
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
            <p className={styles.eyebrow}>Защо знанието не е достатъчно</p>
            <h2>
              Осъзнаването на модела и <em>промяната на модела</em> не са едно
              и също.
            </h2>
            <div className={styles.pulseRule} aria-hidden="true">
              <span />
            </div>
            <p>
              Не ти липсва сила. Вероятно си станала много добра в това да се
              справяш, да носиш, да контролираш и да оцеляваш. Но има огромна
              разлика между това да можеш да понесеш живота си и това да живееш
              живота, който действително искаш.
            </p>
          </div>
        </section>

        <section className={styles.program}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Какво ще направим заедно"
              title="Виж модела. Разбери го. Избери различно."
              intro="Това няма да бъдат три вечери с още теория. Ще работим върху твоите реални повтарящи се модели."
            />
            <div className={styles.dayGrid}>
              {days.map((day) => (
                <article key={day.number} className={styles.dayCard}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>{day.number}</span>
                    <div>
                      <p>{day.label}</p>
                      <time>{day.date}</time>
                      <span className={styles.dayTime}>{day.time}</span>
                    </div>
                  </div>
                  <h3>{day.title}</h3>
                  <p className={styles.dayQuestion}>{day.question}</p>
                  <ul className={styles.dayPoints}>
                    {day.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className={styles.dayResult}>
                    <strong>Резултатът:</strong> {day.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.outcomes}>
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeIntro}>
              <p className={styles.eyebrow}>Резултат след трите вечери</p>
              <h2>Ще си тръгнеш с</h2>
              <p>
                Не с обещание за магическа промяна, а с ясна точка, в която
                можеш да спреш стария сценарий и да направиш нов избор.
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

        <section className={styles.audience}>
          <div className={styles.container}>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceCopy}>
                <SectionHeading
                  eyebrow="ЖИВА 2 е за теб, ако"
                  title="Не започваш от нулата. Но вече не искаш да се връщаш в началото."
                  intro="Ти мислиш, анализираш, четеш и се развиваш. И точно затова вече ти е писнало да си казваш: „Знам го. Разбирам го. Тогава защо пак го правя?“"
                />
                <ul className={styles.audienceList}>
                  {audienceSignals.map((signal) => (
                    <li key={signal}>
                      <CheckIcon />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.choicePanel}>
                <p className={styles.eyebrow}>Представи си следващия път</p>
                <h3>Старият модел се появява. Но този път го виждаш.</h3>
                <ul>
                  {futureChoices.map((choice) => (
                    <li key={choice}>{choice}</li>
                  ))}
                </ul>
                <p>
                  Не защото вече никога няма да се страхуваш, а защото този път
                  не оставяш страха да избира вместо теб.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mentor}>
          <div className={styles.mentorGrid}>
            <div className={styles.mentorImageWrap}>
              <Image
                src="/zhiva/tanya-zhiva-vol2-white-framed.jpg"
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
          className={styles.testimonials}
          aria-labelledby="zhiva-testimonials-title"
        >
          <div className={styles.testimonialsInner}>
            <div className={styles.testimonialsHeader}>
              <p className={styles.eyebrow}>Истински думи</p>
              <h2 id="zhiva-testimonials-title">
                Какво се променя, когато се обърнеш към себе си
              </h2>
              <p>
                Споделяния от жени след срещи и практики с Таня. Личните данни
                са скрити, а думите са запазени без редакция.
              </p>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map(({ src, width, height, alt }, index) => (
                <figure className={styles.testimonialCard} key={src}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Отвори отзив ${index + 1} в пълен размер`}
                  >
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt={alt}
                      loading="lazy"
                      sizes="(max-width: 720px) calc(100vw - 32px), 550px"
                      className={styles.testimonialImage}
                    />
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.decision}>
          <div className={styles.decisionInner}>
            <p className={styles.eyebrow}>Въпросът вече не е колко можеш да издържиш</p>
            <h2>Колко още пъти искаш да преживееш същата история?</h2>
            <div className={styles.decisionQuestions}>
              <p>Още една връзка, в която чакаш другият да реши?</p>
              <p>Още едно „да“, за което после се ядосваш на себе си?</p>
              <p>Още една ситуация, в която даваш повече, отколкото получаваш?</p>
              <p>Още една година, в която всички разчитат на теб, а ти оставаш последна?</p>
            </div>
            <p className={styles.decisionLead}>
              Можеш да продължиш да анализираш защо се случва. Или да започнеш
              да разпознаваш момента, в който имаш избор.
            </p>
            <a className={styles.primaryCta} href="#enroll">
              Да, искам да спра да повтарям старото
              <ArrowIcon />
            </a>
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
              <h2>ЖИВА 2: Съживи се!</h2>
              <div className={styles.price}>
                <ZhivaVol2PriceText />
              </div>
              <p className={styles.offerDate}>
                21–23 август · три онлайн срещи на живо
                <br />
                19:00 часа
                <br />
                <ZhivaVol2PriceNote />
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
              <p className={styles.offerClosing}>
                3 вечери. Един повтарящ се модел. Един нов избор, който може да
                постави началото на нещо различно.
              </p>
            </div>

            <div className={styles.formCard}>
              <p className={styles.formEyebrow}>ЖИВА 2: Съживи се!</p>
              <h3>Искам да се включа</h3>
              <p>
                Въведи името и имейла си. След плащането ще видиш точните
                следващи стъпки и линка към затворената Facebook група.
              </p>
              <ZhivaVol2EnrollForm />
            </div>
          </div>
        </section>
      </main>

      <ZhivaVol2StickyCTA />
      <SiteFooter />
    </div>
  );
}
