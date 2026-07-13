import Image from "next/image";
import { SiteFooter, SiteNav, T } from "@/app/_shared";

export type OfferFact = {
  label: string;
  value: string;
};

export type OfferSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items?: string[];
};

export type OfferStep = {
  number: string;
  title: string;
  body: string;
};

export type LegacyOfferConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  status?: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  accent?: string;
  facts?: OfferFact[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: OfferSection[];
  steps?: OfferStep[];
  note?: { title: string; body: string };
  finalTitle: string;
  finalBody: string;
};

const DEFAULT_ACCENT = "#70150e";

export function LegacyOfferPage({ config }: { config: LegacyOfferConfig }) {
  const accent = config.accent ?? DEFAULT_ACCENT;

  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", background: "#fff" }}>
      <SiteNav />

      <main>
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32 md:px-16 md:pb-24 md:pt-40 lg:px-24"
          style={{ background: "linear-gradient(145deg, #fff 0%, #faf5f0 58%, #f1e5dc 100%)" }}
        >
          <div
            aria-hidden
            className="absolute -right-24 top-12 h-80 w-80 rounded-full blur-3xl"
            style={{ background: `${accent}18` }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p
                className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em]"
                style={{ color: accent }}
              >
                {config.eyebrow}
              </p>
              <h1
                style={{
                  color: T.textPrimary,
                  fontSize: "clamp(2.35rem, 5.5vw, 4.9rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.98,
                }}
              >
                {config.title}
              </h1>
              <p
                className="mt-7 max-w-2xl"
                style={{ color: T.textSecondary, fontSize: "clamp(1rem, 2vw, 1.22rem)", lineHeight: 1.75 }}
              >
                {config.lead}
              </p>

              {config.status ? (
                <div
                  className="mt-7 inline-flex rounded-full border px-4 py-2 text-sm font-bold"
                  style={{ borderColor: `${accent}35`, color: accent, background: "rgba(255,255,255,.74)" }}
                >
                  {config.status}
                </div>
              ) : null}

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  className="mv-btn mv-btn-primary inline-flex"
                  href={config.primaryCta.href}
                  style={{ background: accent, borderColor: accent }}
                >
                  {config.primaryCta.label} →
                </a>
                {config.secondaryCta ? (
                  <a className="mv-btn inline-flex" href={config.secondaryCta.href} style={{ border: `1px solid ${accent}35`, color: accent }}>
                    {config.secondaryCta.label}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[28px]" style={{ background: `${accent}12` }} />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-2xl shadow-black/10">
                <Image
                  src={config.image}
                  alt={config.imageAlt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  style={{ objectFit: config.imageFit ?? "cover", objectPosition: "center top", padding: config.imageFit === "contain" ? "30px" : undefined }}
                />
              </div>
            </div>
          </div>
        </section>

        {config.facts?.length ? (
          <section className="border-y border-black/5 bg-white px-6 py-7 md:px-16 lg:px-24">
            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {config.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl bg-[#faf8f5] px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: `${accent}b8` }}>
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-extrabold" style={{ color: T.textPrimary }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24">
          <div className="mx-auto max-w-6xl space-y-7">
            {config.sections.map((section, index) => (
              <article
                key={section.title}
                className="grid gap-7 rounded-2xl border border-black/[0.07] p-7 md:p-10 lg:grid-cols-[0.72fr_1.28fr]"
                style={{ background: index % 2 ? "#faf8f5" : "#fff" }}
              >
                <div>
                  {section.eyebrow ? (
                    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em]" style={{ color: accent }}>
                      {section.eyebrow}
                    </p>
                  ) : null}
                  <h2
                    style={{ color: T.textPrimary, fontSize: "clamp(1.55rem, 3vw, 2.35rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div>
                  {section.intro ? (
                    <p className="mb-5" style={{ color: T.textSecondary, fontSize: "16px", lineHeight: 1.8 }}>
                      {section.intro}
                    </p>
                  ) : null}
                  {section.items?.length ? (
                    <ul className="grid gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3" style={{ color: T.textSecondary, lineHeight: 1.65 }}>
                          <span
                            aria-hidden
                            className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
                            style={{ background: accent }}
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {config.steps?.length ? (
          <section className="px-6 pb-20 md:px-16 md:pb-28 lg:px-24">
            <div className="mx-auto max-w-6xl">
              <div className="mb-9 max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: accent }}>Процесът</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl" style={{ color: T.textPrimary }}>
                  Ясни стъпки. Видим резултат.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {config.steps.map((step) => (
                  <article key={step.number} className="rounded-2xl p-6 text-white" style={{ background: accent }}>
                    <p className="text-xs font-extrabold tracking-[0.18em] opacity-65">{step.number}</p>
                    <h3 className="mt-8 text-xl font-black leading-tight">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 opacity-80">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {config.note ? (
          <section className="px-6 pb-20 md:px-16 md:pb-28 lg:px-24">
            <div className="mx-auto max-w-4xl rounded-2xl border p-7 text-center md:p-10" style={{ borderColor: `${accent}30`, background: `${accent}08` }}>
              <h2 className="text-2xl font-black" style={{ color: T.textPrimary }}>{config.note.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8" style={{ color: T.textSecondary }}>{config.note.body}</p>
            </div>
          </section>
        ) : null}

        <section className="px-6 py-20 text-white md:px-16 md:py-28 lg:px-24" style={{ background: accent }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">{config.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 opacity-80">{config.finalBody}</p>
            <a className="mv-btn mt-9 inline-flex bg-white" href={config.primaryCta.href} style={{ color: accent }}>
              {config.primaryCta.label} →
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
