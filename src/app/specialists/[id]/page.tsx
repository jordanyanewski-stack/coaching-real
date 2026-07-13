import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteNav, T } from "@/app/_shared";
import { getSpecialist, SPECIALISTS } from "@/lib/specialists";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return SPECIALISTS.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const specialist = getSpecialist(id);
  if (!specialist) return {};

  return {
    title: `${specialist.name} – Специалисти | Coaching Real`,
    description: `${specialist.role}. ${specialist.bio}`,
  };
}

export default async function SpecialistProfilePage({ params }: Props) {
  const { id } = await params;
  const specialist = getSpecialist(id);
  if (!specialist) notFound();

  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      <SiteNav />
      <main>
        <section className="px-6 pb-20 pt-36 md:px-16 md:pb-28 md:pt-44 lg:px-24" style={{ background: "linear-gradient(145deg, #fff 0%, #faf5f0 100%)" }}>
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10">
              <Image src={specialist.photo} alt={specialist.name} fill loading="eager" sizes="(max-width: 1024px) 85vw, 36vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <Link href="/specialists" className="text-xs font-extrabold uppercase tracking-[0.16em]" style={{ color: "#70150e" }}>← Всички специалисти</Link>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.15em]" style={{ color: "rgba(112,21,14,.72)" }}>{specialist.role}</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl" style={{ color: T.textPrimary }}>{specialist.name}</h1>
              <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: T.textSecondary }}>{specialist.bio}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {specialist.focus.map((item) => (
                  <span key={item} className="rounded-full border border-[#70150e]/15 bg-white px-4 py-2 text-xs font-bold" style={{ color: "#70150e" }}>{item}</span>
                ))}
              </div>
              {specialist.offerHref ? (
                <Link href={specialist.offerHref} className="mv-btn mv-btn-primary mt-9 inline-flex">{specialist.offerLabel} →</Link>
              ) : null}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-[#70150e]/15 bg-[#faf8f5] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em]" style={{ color: "#70150e" }}>Безплатен ресурс</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl" style={{ color: T.textPrimary }}>Подготвяме нещо полезно за теб</h2>
              <p className="mt-4 leading-8" style={{ color: T.textSecondary }}>Тук ще публикуваме кратък безплатен ресурс от {specialist.name}. Когато ресурсът е готов, формата на тази страница ще събира заявки за бъдещото членство на Coaching Real.</p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-dashed border-[#70150e]/25 bg-white p-8 text-center">
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#70150e] text-xl text-white">✦</span>
                <p className="mt-4 font-black" style={{ color: T.textPrimary }}>Очаквай скоро</p>
                <p className="mt-2 text-sm leading-6" style={{ color: T.textSecondary }}>Няма активна форма, докато конкретният ресурс и списъкът за записване не бъдат потвърдени.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
