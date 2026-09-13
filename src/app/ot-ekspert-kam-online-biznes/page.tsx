import Image from 'next/image';
import { LOGO_URL, SiteFooter } from '@/app/_shared';
import { EnrollForm } from '@/app/masterclass/enroll-form';
import { EXPERT_CAMPAIGN as campaign, EXPERT_DAYS as days } from './campaign';
import styles from './page.module.css';

export const metadata = {
  title: 'От експерт към онлайн бизнес · 23–27 септември | Coaching Real',
  description: '5-дневен бизнес интензив със Станислава Павлова. Позициониране, онлайн оферта, клиенти, продажби и мащаб. 23–27 септември 2026, 17:00–19:00 ч. Участие: €47.',
  alternates: { canonical: campaign.path },
  openGraph: {
    title: campaign.name,
    description: '5 дни. 10 часа. 5 ключови стъпки. 23–27 септември 2026 · €47.',
    images: [{ url: '/expert-online-business/group-cover.png', width: 1920, height: 1008, alt: campaign.name }],
  },
};

const fits = [
  'Имаш поне 1–3 години професионален опит и вече работиш с реални клиенти.',
  'Работиш като коуч, психолог, терапевт, консултант, ментор, обучител или друг експерт.',
  'Искаш да превърнеш експертността си в собствена онлайн програма.',
  'Вече работиш онлайн, но ти липсва ясна система за клиенти и продажби.',
  'Искаш да увеличиш приходите си, без просто да увеличаваш часовете си.',
];

export default function ExpertOnlineBusinessPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">Към съдържанието</a>
      <header className={styles.header}>
        <a href="/" aria-label="Coaching Real — начало"><Image src={LOGO_URL} alt="Coaching Real" width={120} height={48} className={styles.logo} /></a>
        <nav aria-label="Навигация на интензива"><a href="#program">Програмата</a><a className={styles.smallCta} href="#enroll">Запази място →</a></nav>
      </header>
      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>5-дневен бизнес интензив на живо</p>
            <h1>От експерт<br />към <span>онлайн<br /> бизнес.</span></h1>
            <p className={styles.lead}>Превърни знанията, опита и експертността си в устойчив онлайн бизнес с потенциал за растеж.</p>
            <p className={styles.meta}><strong>{campaign.dates}</strong><br />Всеки ден · {campaign.time} · Онлайн на живо</p>
            <a className={styles.cta} href="#enroll">Искам да изградя онлайн бизнес <span aria-hidden>↗</span></a>
            <p className={styles.heroNote}>5 дни. 10 часа. Участие: <strong>€47</strong></p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image src="/expert-online-business/stasi-red.webp" alt="Станислава Павлова — водещ на интензива" fill priority sizes="(max-width: 760px) 100vw, 45vw" />
            <figcaption><strong>Станислава Павлова</strong><span>Бизнес ментор · Coaching Real</span></figcaption>
          </figure>
          </div>
        </section>

        <div className={styles.route} aria-label="Петте стъпки на интензива">{['Позициониране', 'Онлайн оферта', 'Клиенти', 'Продажби', 'Мащаб'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div>

        <section className={`${styles.section} ${styles.split}`}>
          <div><p className={styles.eyebrow}>Имаш основата</p><h2>Ти вече<br />си експерт.</h2></div>
          <div className={styles.prose}><p>Не започваш от нулата. Имаш професионален опит, знания, методи, които работят, и резултати с клиенти.</p><p>Но голяма част от приходите ти може би все още зависят от <strong>твоето време</strong>. Повече клиенти означава повече индивидуални срещи. Повече приходи — повече часове в календара.</p><p>Може би публикуваш, правиш видеа, имаш сайт и онлайн консултации. Може би дори имаш курс. Следващата стъпка е да свържеш всичко това в работещ бизнес.</p></div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.section}>
            <p className={styles.eyebrow}>Ясна посока за следващото ниво</p>
            <h2>Онлайн бизнесът<br />е <em>система.</em></h2>
            <p className={styles.darkLead}>Ясен клиент. Конкретен продукт. Път към покупката. Модел, който може да расте.</p>
            <div className={styles.systemGrid}><p><span>01</span>Знаеш на кого помагаш и какъв проблем решаваш.</p><p><span>02</span>Имаш предложение, което хората разбират и искат.</p><p><span>03</span>Свързваш съдържание, доверие и продажби в общ процес.</p></div>
          </div>
        </section>

        <section id="program" className={styles.section}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Програмата · 23–27 септември</p><h2>5 дни.<br />5 ключови стъпки.</h2></div><p>10 часа работа върху петте основи на твоя експертен онлайн бизнес. Всеки ден от 17:00 до 19:00 ч.</p></div>
          <div className={styles.days}>{days.map((day, i) => <article key={day.title} className={styles.day}>
            <div className={styles.dayNumber}><span>Ден {i + 1}</span><p>{23 + i} септември</p></div>
            <div><h3>{day.title}</h3><p className={styles.question}>{day.question}</p><p>{day.intro}</p><ul>{day.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><p className={styles.outcome}><strong>Резултат</strong>{day.outcome}</p></div>
          </article>)}</div>
          <a className={`${styles.cta} ${styles.burgundyCta}`} href="#enroll">Запази мястото си за €47 <span aria-hidden>↗</span></a>
        </section>

        <section className={styles.paperBand}><div className={`${styles.section} ${styles.split}`}>
          <div><p className={styles.eyebrow}>За специалисти с реален опит</p><h2>Това е твоят<br />следващ ход, ако…</h2></div>
          <div><ul className={styles.fitList}>{fits.map(item => <li key={item}>{item}</li>)}</ul><details className={styles.details}><summary>За кого интензивът не е подходящ?</summary><p>Ако още избираш професията си, нямаш практически опит или никога не си работил/а с клиенти, този интензив вероятно не е следващата ти стъпка. Не обещава бързи пари или пасивен доход без работа. Нужно е желание да приложиш наученото.</p></details></div>
        </div></section>

        <section className={`${styles.section} ${styles.mentor}`}>
          <figure><Image src="/expert-online-business/stasi-white.webp" alt="Станислава Павлова" width={1200} height={800} sizes="(max-width: 760px) 100vw, 45vw" /></figure>
          <div><p className={styles.eyebrow}>Твоят водещ</p><h2>Станислава<br />Павлова</h2><p className={styles.question}>Бизнес ментор и създател на Coaching Real</p><p>Повече от 11 години развивам проекти в сферата на онлайн бизнеса и личностното развитие, а от 2018 година развивам собствен онлайн бизнес.</p><p>Работя със специалисти и експерти, които искат да превърнат знанията и професионалния си опит в устойчив онлайн бизнес чрез онлайн програми, групови формати, маркетингови кампании и системи за продажби.</p><blockquote>„Искам да ти покажа как да превърнеш това, което вече знаеш, в онлайн бизнес модел, който може да расте.“</blockquote></div>
        </section>

        <section className={styles.darkSection} id="enroll"><div className={`${styles.section} ${styles.enroll}`}>
          <div><p className={styles.eyebrow}>Твоята инвестиция</p><h2>Имаш експертността.<br /><em>Време е за бизнес.</em></h2><p>5 срещи на живо. 10 часа работа. Един ясен фокус: да превърнеш експертността си в онлайн бизнес.</p><p className={styles.price}>€47<span>за целия интензив</span></p><p><strong>{campaign.dates}</strong><br />Всеки ден · {campaign.time}<br />Онлайн на живо · българско време</p><ul className={styles.includes}><li>Петте ключови стъпки за твоя бизнес</li><li>Работа върху собствената ти оферта и клиентска пътека</li><li>Facebook група за участниците</li></ul></div>
          <div className={styles.form}><p className={styles.eyebrow}>Запази мястото си</p><h3>От експерт към<br />онлайн бизнес</h3><p>Попълни данните си, за да продължиш към плащане с карта.</p><EnrollForm product={campaign.slug} cardOnly variant="light-gold" submitLabel="Запази място за €47 →" /><p className={styles.formNote}>След потвърденото плащане ще получиш имейл с програмата и връзка към Facebook групата.</p></div>
        </div></section>

        <section className={`${styles.section} ${styles.faq}`}><p className={styles.eyebrow}>Преди да започнем</p><h2>Практичните детайли.</h2>
          <details className={styles.details}><summary>Кога и къде се провежда?</summary><p>От 23 до 27 септември 2026, всеки ден от 17:00 до 19:00 ч. българско време. Срещите са онлайн на живо. Линкът за тях ще получиш допълнително по имейл.</p></details>
          <details className={styles.details}><summary>Нужно ли е вече да имам онлайн програма?</summary><p>Не. Нужно е да имаш професионален опит и реална работа с клиенти. Можеш да дойдеш както с идея за онлайн продукт, така и със съществуваща оферта, която искаш да подредиш.</p></details>
          <details className={styles.details}><summary>Какво да подготвя?</summary><p>Тетрадка или работен файл, текущото си позициониране, услугата или програмата, която предлагаш, идеята си за онлайн продукт и въпросите, по които търсиш яснота.</p></details>
          <details className={styles.details}><summary>Какво става след записването?</summary><p>След потвърденото плащане ще видиш страница с детайлите за участието и връзка към Facebook групата. Ще получиш и потвърждаващ имейл. Провери папките „Спам“ и „Промоции“, ако не го виждаш.</p></details>
        </section>
      </main>
      <SiteFooter />
      <div className={styles.mobileBar}><span><strong>€47</strong> · 23–27 септември</span><a href="#enroll">Запази място ↗</a></div>
    </div>
  );
}
