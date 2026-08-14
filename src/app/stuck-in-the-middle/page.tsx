import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { SignupForm } from './signup-form';
import styles from './stuck.module.css';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-stuck-display' });
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-stuck-body' });

export const metadata: Metadata = {
  title: 'Stuck in the Middle · 4-week course for middle managers',
  description: 'A practical 4-week course for experienced middle managers carrying high accountability with limited authority and too little useful feedback.',
  alternates: { canonical: '/stuck-in-the-middle' },
};

const dilemmas = [
  { number: '01', label: 'HIGH ACCOUNTABILITY', title: 'You own the result.', body: 'Every target, every miss, every deadline lands on you—even when the final decision does not.' },
  { number: '02', label: 'LIMITED AUTHORITY', title: 'You still need sign-off.', body: 'The responsibility is delegated. The power to decide often stays one level above you.' },
  { number: '03', label: 'LOW FEEDBACK', title: '“You’re doing fine” is all you hear.', body: 'Reassurance replaces useful feedback, leaving you to guess what strong leadership looks like.' },
];

const weeks = [
  { num: '01', title: 'The Authority Gap', what: 'Why you don’t have the authority you think you should', why: 'The difference between delegated responsibility and real trust—and why organizations blur the two by default.', result: 'A clear map of which decisions are actually yours, which only look like they are, and why.' },
  { num: '02', title: 'The Feedback Void', what: 'Why “you’re doing fine” tells you nothing about how to grow', why: 'Most managers above you were never taught to give useful feedback either. They repeat what was modeled for them.', result: 'A way to judge the quality of your own work instead of waiting for someone else’s approval.' },
  { num: '03', title: 'The Trust Loop', what: 'How authority and feedback actually feed each other', why: 'You won’t get more autonomy until you get clear feedback—and clear feedback becomes easier when you show initiative.', result: 'A concrete plan for asking for both—in words and in action.' },
  { num: '04', title: 'Leading From the Middle', what: 'What leadership looks like once you stop waiting', why: 'It becomes an identity: a manager who knows and shows their value without waiting for permission or praise.', result: 'Your own decision-making framework, with reasoning you can stand behind.' },
];

export default function StuckInTheMiddlePage() {
  return (
    <main className={`${styles.page} ${display.variable} ${body.variable}`}>
      <header className={styles.nav}>
        <Link href="/stuck-in-the-middle" className={styles.wordmark}>STUCK <span>IN THE</span> MIDDLE</Link>
        <a href="#enroll" className={styles.navCta}>Enroll <span aria-hidden="true">→</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>A 4-WEEK COURSE FOR EXPERIENCED MIDDLE MANAGERS</p>
          <h1>Stuck in<br />the <em>middle.</em></h1>
          <p className={styles.heroLead}>You carry the <strong>responsibility.</strong><br />But don’t always have the <strong>authority.</strong></p>
          <div className={styles.heroActions}>
            <a href="#enroll" className={styles.primaryButton}>Enroll in the course <span aria-hidden="true">→</span></a>
            <a href="#weeks" className={styles.textLink}>See the 4-week structure <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroArch}>
            <Image src="/stuck-in-the-middle/stanislava-hero.png" alt="Stanislava Milorcheva, sustainable leadership coach" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <span className={styles.bridgeLine} aria-hidden="true" />
          <div className={styles.heroMeta}><span>Starts</span><strong>26 AUG</strong><span>19:00 CET</span></div>
        </div>
      </section>

      <section className={styles.dilemma}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>THE MIDDLE MANAGER DILEMMA</p>
          <h2>You’re leading in both directions, <em>with power in neither.</em></h2>
        </div>
        <div className={styles.dilemmaGrid}>
          {dilemmas.map(item => <article className={styles.dilemmaCard} key={item.number}>
            <div className={styles.cardTop}><span>{item.number}</span><small>{item.label}</small></div>
            <h3>{item.title}</h3><p>{item.body}</p>
          </article>)}
        </div>
        <p className={styles.resultLine}>The result: you carry the responsibility of a leader, without the authority, structure, or feedback that would let you lead like one.</p>
      </section>

      <section className={styles.quoteBand}>
        <blockquote>“Bridges carry a lot of weight.”<span>You’re not alone in the middle.</span></blockquote>
        <blockquote>“Leadership isn’t measured by how busy you are.”<span>It’s measured by the impact you have on your people.</span></blockquote>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.problemIntro}>
          <p className={styles.eyebrow}>WHY THIS ISN’T A “YOU” PROBLEM</p>
          <h2>Most organizations promote managers into leadership—<em>then never build the leader.</em></h2>
        </div>
        <div className={styles.problemCopy}>
          <p className={styles.pullQuote}>It’s not that you can’t lead.<br />It’s that no one taught you how to earn the room to.</p>
          <p>Decision-making authority and honest feedback aren’t things most companies hand out. They are things you build a case for—and most managers were never shown how.</p>
          <p>This course won’t promise your organization suddenly hands you more freedom. It gives you the framework, language, and track record that make it obvious you’re ready for more of it.</p>
          <a href="#enroll" className={styles.inlineCta}>Build the case for more trust <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className={styles.weeksSection} id="weeks">
        <div className={styles.sectionHeadingLight}>
          <p className={styles.eyebrow}>THE 4 WEEKS</p>
          <h2>Each week closes one gap.<br /><em>By week four, they connect.</em></h2>
          <p>This isn’t information to collect—it’s a sequence. Each week gives you something to use immediately at work.</p>
        </div>
        <div className={styles.weeksGrid}>
          {weeks.map(week => <article className={styles.weekCard} key={week.num}>
            <div className={styles.weekNumber}><small>WEEK</small><span>{Number(week.num)}</span></div>
            <h3>{week.title}</h3>
            <dl><div><dt>WHAT</dt><dd>{week.what}</dd></div><div><dt>WHY IT HAPPENS</dt><dd>{week.why}</dd></div></dl>
            <p className={styles.leaveWith}><strong>You leave with:</strong> {week.result}</p>
          </article>)}
        </div>
      </section>

      <section className={styles.signalsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>IN YOUR OWN WORDS</p>
          <h2>What we kept hearing from managers <em>exactly like you.</em></h2>
          <p>Patterns drawn from a survey of managers and team leaders in high-growth companies.</p>
        </div>
        <div className={styles.signalsGrid}>
          <blockquote><span>SIGNAL 01</span>“I want more freedom to decide—and fewer things that have to be escalated before anything moves.”</blockquote>
          <blockquote><span>SIGNAL 02</span>“I ask for real feedback and mostly get general comments instead of anything I can act on.”</blockquote>
          <blockquote><span>SIGNAL 03</span>“I manage and develop everyone on my team, while getting very little mentorship pointed back at me.”</blockquote>
        </div>
      </section>

      <section className={styles.mentorSection}>
        <div className={styles.mentorImage}>
          <Image src="/stuck-in-the-middle/stanislava-mentor.png" alt="Stanislava Milorcheva" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <div className={styles.experienceBadge}><strong>15+</strong><span>years in international<br />corporate leadership</span></div>
        </div>
        <div className={styles.mentorCopy}>
          <p className={styles.eyebrow}>YOUR GUIDE FOR THESE 4 WEEKS</p>
          <h2>Stanislava<br /><em>Milorcheva</em></h2>
          <p className={styles.mentorRole}>SUSTAINABLE LEADERSHIP COACH FOR MIDDLE MANAGERS</p>
          <p>Middle managers are often caught between senior leadership and their own team—carrying other people’s problems, struggling to delegate, and constantly trying to prove they are capable.</p>
          <p>That is the exact gap Stanislava works in: helping managers set healthier boundaries, communicate with clarity, and build real accountability without sacrificing their health, relationships, or personal life.</p>
          <ul><li>Worked across countries and professional cultures</li><li>Personal and professional experience with burnout</li><li>Creator of a structured leadership method for middle managers</li></ul>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHO THIS IS FOR</p><h2>Built for a specific kind of manager—<em>not every manager.</em></h2>
        </div>
        <div className={styles.fitGrid}>
          <article><h3><span>✓</span> This is for you if</h3><ul><li>You’re a manager, senior manager, or head of department in a fast-growing organization</li><li>You still care about doing this well, not just getting through it</li><li>You’re tired of escalating the same decisions over and over</li><li>You want direct, specific feedback—not vague reassurance</li><li>You’re ready to build the case for more trust</li></ul></article>
          <article className={styles.notFor}><h3><span>×</span> This isn’t for you if</h3><ul><li>You’re brand new to leadership and still finding your footing</li><li>You’re already setting organization-wide strategy</li><li>You’re in active burnout and need rest or clinical support first</li><li>You’re looking for another generic well-being workshop</li></ul></article>
        </div>
      </section>

      <section className={styles.enrollSection} id="enroll">
        <div className={styles.enrollCopy}><p className={styles.eyebrow}>START HERE</p><h2>Stop waiting to be told <em>where you stand.</em></h2><p>Four weeks. One clear framework for authority, feedback, and how the two actually work together.</p><div className={styles.startDetails}><span><small>START DATE</small>26 August</span><span><small>TIME</small>19:00 CET</span><span><small>FORMAT</small>Private Facebook group</span></div></div>
        <div className={styles.formPanel}><h3>Save your place.</h3><p>Join the course and receive the start details by email.</p><SignupForm compact /></div>
      </section>

      <footer className={styles.footer}><p>Leadership development for managers who still care.</p><span>Stuck in the Middle · 4-week course</span></footer>
    </main>
  );
}
