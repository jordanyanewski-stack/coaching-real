import { T, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";
import { PodcastPlayer } from "@/components/podcast-player";
import type { Episode } from "@/components/podcast-player";

export const metadata = {
  title: "Подкаст – Станислава Павлова | Coaching Real",
  description:
    "Гледай всички епизоди от подкаста на Станислава Павлова - Сезон 2 с теми за себепознание, изобилие, енергия и трансформация.",
};

const SEASON2_EPISODES: Episode[] = [
  { id: "s2e12", videoId: "iOF3bW3IweQ", season: 2, episode: 12, title: "Пътуване към себе си", featured: true },
  { id: "s2e11", videoId: "tb3LtL9lvMo", season: 2, episode: 11, title: "Тайната на изобилието" },
  { id: "s2e10", videoId: "jxH7AznilYw", season: 2, episode: 10, title: "Какво казва лицето ти?" },
  { id: "s2e9",  videoId: "OslQxmKc1YE", season: 2, episode: 9,  title: "Невидимите сценарии" },
  { id: "s2e8",  videoId: "3rqswzYxKuw", season: 2, episode: 8,  title: "Свободна да бъда", thumbnail: "/ep-8.jpg" },
  { id: "s2e7",  videoId: "RocJOD8wOAA", season: 2, episode: 7,  title: "Енергиен Лайф Коучинг" },
  { id: "s2e6",  videoId: "OGLnyAo_vuk", season: 2, episode: 6,  title: "Справяне с травмите чрез Спинална Енергетика" },
  { id: "s2e5",  videoId: "ot3rEHO36Rw", season: 2, episode: 5,  title: "Здраве и изцеление със системата на Норбеков" },
  { id: "s2e4",  videoId: "sMXxuDKArnU", season: 2, episode: 4,  title: "Есенцията на Астрологията" },
  { id: "s2e3",  videoId: "HsaWMfx1Kjs", season: 2, episode: 3,  title: "Най-силната практика 9D" },
  { id: "s2e2",  videoId: "wyeC62t8-2g", season: 2, episode: 2,  title: "Какво крие твоето подсъзнание" },
  { id: "s2e1",  videoId: "XP0371L-wwo", season: 2, episode: 1,  title: "БИОЕНЕРГИЯ - пулсът на живота" },
];

const SEASON1_EPISODES: Episode[] = [
  { id: "s1e7", videoId: "BQgjCq2ofIM", season: 1, episode: 7, title: "Невидимите уроци зад успеха – Какво никой не ти казва за мисията", featured: true },
  { id: "s1e6", videoId: "fZJcd48F3ms", season: 1, episode: 6, title: "От шега до мисия: Историята на Coaching Real" },
  { id: "s1e5", videoId: "6ps7zYrQrb0", season: 1, episode: 5, title: "Пренапиши любовната си история" },
  { id: "s1e4", videoId: "MNWb8WUOn6Q", season: 1, episode: 4, title: "Астрология - отвъд митове и хороскопи с Валентина Маренова" },
  { id: "s1e3", videoId: "MtpcLGD1mOs", season: 1, episode: 3, title: "Душата на бизнеса" },
  { id: "s1e2", videoId: "_qFVextuOFw", season: 1, episode: 2, title: "Излез от стереотипа на женска енергия" },
  { id: "s1e1", videoId: "xQQY6dyFlHk", season: 1, episode: 1, title: "ПланДемия на Самотата!" },
];

export default function PodcastPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <SiteNav />
      <PageHero />
      <PodcastPlayer season2Episodes={SEASON2_EPISODES} season1Episodes={SEASON1_EPISODES} />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

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
        <span className="mv-tag mv-tag-light">2 сезона · 19 епизода</span>
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
          Подкастът на{" "}
          <span style={{ ...GRADIENT_TEXT }}>Coaching Real</span>
        </h1>
        <p
          className="mt-5 mx-auto"
          style={{
            fontSize: "17px",
            color: T.textSecondary,
            lineHeight: 1.8,
            maxWidth: "520px",
          }}
        >
          Разговори за себепознание, изобилие, енергия и трансформация - с
          водещи практики от България и света.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-24"
      style={{
        background: "linear-gradient(160deg, #0f0606 0%, #1c0a09 50%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(107,21,14,0.15)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="mv-tag mv-tag-dark">Готова за следващата стъпка?</span>
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
          От вдъхновение към{" "}
          <span style={{ color: "#e85050" }}>реален бизнес с душа.</span>
        </h2>
        <p
          className="mt-5"
          style={{ fontSize: "16px", color: "rgba(255,255,255,0.52)", lineHeight: 1.8 }}
        >
          Запази 45-минутна безплатна стратегическа сесия - без продажбен
          натиск, с ясен следващ план.
        </p>
        <a
          href="/programs"
          className="mv-btn mv-btn-primary mt-10 inline-flex"
          style={{ fontSize: "16px", padding: "16px 40px" }}
        >
          Запази своята безплатна сесия →
        </a>
      </div>
    </section>
  );
}
