import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import styles from '../stuck.module.css';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-stuck-display' });
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-stuck-body' });
const FACEBOOK_GROUP = 'https://www.facebook.com/groups/1058122747180077/';
const TELEGRAM_GROUP = 'https://t.me/+8reyBj4nnVNkNDI0';

export const metadata: Metadata = { title: 'You’re in · Stuck in the Middle', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main className={`${styles.page} ${styles.thankYouPage} ${display.variable} ${body.variable}`}>
    <header className={styles.nav}><Link href="/stuck-in-the-middle" className={styles.wordmark}>STUCK <span>IN THE</span> MIDDLE</Link></header>
    <section className={styles.tyEditorialHero}>
      <div className={styles.tyPortrait}>
        <Image
          src="/stuck-in-the-middle/stanislava-mentor.png"
          alt="Stanislava Milorcheva, course guide for Stuck in the Middle"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 46vw"
        />
        <div className={styles.tyPortraitLabel}><span>YOUR GUIDE</span><strong>Stanislava</strong></div>
      </div>
      <div className={styles.tyCoursePanel}>
        <p className={styles.eyebrow}>REGISTRATION CONFIRMED</p>
        <div className={styles.tyCourseTitle} aria-label="Stuck in the Middle">
          <strong>STUCK</strong>
          <span><i /> IN THE <i /></span>
          <em>Middle</em>
        </div>
        <p className={styles.tyCourseLabel}>A 4-WEEK COURSE FOR EXPERIENCED MIDDLE MANAGERS</p>
        <h1>Your place is <em>saved.</em></h1>
        <p className={styles.tyIntro}>One last step before the course starts: join both private communities. Facebook is where the group discussions and weekly prompts happen; Telegram is for quick updates and reminders.</p>
        <div className={styles.groupActions}>
          <a className={styles.primaryButton} href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Join the Facebook Group <span aria-hidden="true">→</span></a>
          <a className={styles.tySecondaryButton} href={TELEGRAM_GROUP} target="_blank" rel="noreferrer">Join the Telegram Group <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
    <section className={styles.tyNextBand}>
      <div className={styles.tyNextIntro}><p className={styles.eyebrow}>WHAT HAPPENS NEXT</p><h2>Three small steps.<br /><em>Real connection.</em></h2></div>
      <div className={styles.tyNextItems}>
        <article><span>01</span><div><h3>Join both groups</h3><p>Answer the two Facebook membership questions, then open Telegram for reminders.</p></div></article>
        <article><span>02</span><div><h3>Check your inbox</h3><p>Your confirmation email includes the course details and start information.</p></div></article>
        <article><span>03</span><div><h3>Save the date</h3><p>26 August · 19:00 CET. Give these four weeks a clear place in your calendar.</p></div></article>
      </div>
    </section>
    <section className={styles.thankFooter}><span>Stuck in the Middle</span><p>4-week course · Starts 26 August · 19:00 CET</p><div className={styles.thankFooterLinks}><a href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Facebook →</a><a href={TELEGRAM_GROUP} target="_blank" rel="noreferrer">Telegram →</a></div></section>
  </main>;
}
