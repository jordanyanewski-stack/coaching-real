import type { Metadata } from 'next';
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
    <section className={styles.thankHero}>
      <div><p className={styles.eyebrow}>YOU’RE IN</p><h1>Thank you for<br /><em>signing up.</em></h1><p>One last step before the course starts—join the private Facebook and Telegram groups where the discussions, weekly prompts, reminders, and updates will happen.</p></div>
      <div className={styles.groupCard}><p className={styles.eyebrow}>PRIVATE COURSE COMMUNITIES</p><h2>Join the “Stuck in the Middle” groups.</h2><p>Use Facebook for weekly prompts, discussion, and connection with the other managers. Join Telegram for quick updates and course reminders along the way.</p><div className={styles.groupActions}><a className={styles.primaryButton} href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Join the Facebook Group <span aria-hidden="true">→</span></a><a className={styles.secondaryButton} href={TELEGRAM_GROUP} target="_blank" rel="noreferrer">Join the Telegram Group <span aria-hidden="true">→</span></a></div></div>
    </section>
    <section className={styles.nextSteps}><div className={styles.sectionHeading}><p className={styles.eyebrow}>WHAT HAPPENS NEXT</p><h2>Three quick things before <em>we begin.</em></h2></div><div className={styles.nextGrid}>
      <article><span>01</span><h3>Join both groups</h3><p>Join Facebook and answer the two quick membership questions so we can approve you fast, then open the Telegram link for updates and reminders.</p></article>
      <article><span>02</span><h3>Check your inbox</h3><p>A confirmation email is on its way with your course access details and start date: 26 August at 19:00 CET.</p></article>
      <article><span>03</span><h3>Introduce yourself</h3><p>Say hi in the group and tell us what “stuck in the middle” looks like for you right now.</p></article>
    </div></section>
    <section className={styles.thankFooter}><span>Stuck in the Middle</span><p>4-week course · Starts 26 August · 19:00 CET</p><div className={styles.thankFooterLinks}><a href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Facebook →</a><a href={TELEGRAM_GROUP} target="_blank" rel="noreferrer">Telegram →</a></div></section>
  </main>;
}
