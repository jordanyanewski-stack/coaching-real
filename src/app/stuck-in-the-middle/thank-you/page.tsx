import type { Metadata } from 'next';
import Link from 'next/link';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import styles from '../stuck.module.css';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-stuck-display' });
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-stuck-body' });
const FACEBOOK_GROUP = 'https://www.facebook.com/groups/1058122747180077/';

export const metadata: Metadata = { title: 'You’re in · Stuck in the Middle', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main className={`${styles.page} ${styles.thankYouPage} ${display.variable} ${body.variable}`}>
    <header className={styles.nav}><Link href="/stuck-in-the-middle" className={styles.wordmark}>STUCK <span>IN THE</span> MIDDLE</Link></header>
    <section className={styles.thankHero}>
      <div><p className={styles.eyebrow}>YOU’RE IN</p><h1>Thank you for<br /><em>signing up.</em></h1><p>One last step before the course starts—join the private Facebook group where the discussions, weekly prompts, and updates will happen.</p></div>
      <div className={styles.groupCard}><p className={styles.eyebrow}>PRIVATE FACEBOOK GROUP</p><h2>Join the “Stuck in the Middle” group.</h2><p>This is where you’ll get weekly prompts, connect with the other managers going through the course, and ask questions along the way.</p><a className={styles.primaryButton} href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Join the Facebook Group <span aria-hidden="true">→</span></a></div>
    </section>
    <section className={styles.nextSteps}><div className={styles.sectionHeading}><p className={styles.eyebrow}>WHAT HAPPENS NEXT</p><h2>Three quick things before <em>we begin.</em></h2></div><div className={styles.nextGrid}>
      <article><span>01</span><h3>Join the group</h3><p>Click the button above and answer the two quick membership questions so we can approve you fast.</p></article>
      <article><span>02</span><h3>Check your inbox</h3><p>A confirmation email is on its way with your course access details and start date: 26 August at 19:00 CET.</p></article>
      <article><span>03</span><h3>Introduce yourself</h3><p>Say hi in the group and tell us what “stuck in the middle” looks like for you right now.</p></article>
    </div></section>
    <section className={styles.thankFooter}><span>Stuck in the Middle</span><p>4-week course · Starts 26 August · 19:00 CET</p><a href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Go to the group →</a></section>
  </main>;
}
