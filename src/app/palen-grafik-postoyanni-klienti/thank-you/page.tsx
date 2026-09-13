import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import styles from '../page.module.css';

const display = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-full-calendar-display',
  display: 'swap',
});

const FACEBOOK_GROUP = 'https://www.facebook.com/share/g/1E1WtwAnie/?mibextid=wwXIfr';

export const metadata: Metadata = {
  title: 'Записана си · Пълен график. Постоянни клиенти.',
  robots: { index: false, follow: false },
};

export default function FullCalendarThankYouPage() {
  return (
    <main className={`${styles.page} ${styles.thankPage} ${display.variable}`}>
      <section className={`${styles.groupSection} ${styles.groupSectionPrimary}`}>
        <div>
          <p className={styles.eyebrow}>Регистрацията е успешна</p>
          <h1 className={styles.thankPrimaryTitle}>Записана си.<br /><em>Добре дошла.</em></h1>
          <p className={styles.thankPrimaryIntro}>Потвърждението е изпратено на имейла ти. Ако не го виждаш, провери папките „Спам“ и „Промоции“.</p>
          <div className={styles.thankPrimaryAction}>
            <p className={styles.eyebrow}>Последната стъпка</p>
            <h2>Влез в частната Facebook група.</h2>
            <p>Датата, часът, платформата и линкът за първата среща ще бъдат изпратени по имейл и публикувани в групата, след като бъдат потвърдени.</p>
          </div>
        </div>
        <a className={styles.primaryButton} href={FACEBOOK_GROUP} target="_blank" rel="noreferrer">Влез във Facebook групата <span aria-hidden="true">→</span></a>
      </section>

      <section className={styles.nextSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Какво следва</p>
          <h2>Три малки стъпки преди <em>първата среща.</em></h2>
        </div>
        <div className={styles.nextGrid}>
          <article><span>01</span><h2>Провери имейла си</h2><p>Ще получиш потвърждение и следващите организационни подробности. Добави адреса на Coaching Real към контактите си.</p></article>
          <article><span>02</span><h2>Влез във Facebook групата</h2><p>Там ще бъдат материалите, важните съобщения и достъпът до общността на курса.</p></article>
          <article><span>03</span><h2>Ела с реален въпрос</h2><p>Запиши кое те затруднява най-много: свободните часове, клиентите, които не се връщат, или съдържанието, което не води до записвания.</p></article>
        </div>
      </section>

    </main>
  );
}
