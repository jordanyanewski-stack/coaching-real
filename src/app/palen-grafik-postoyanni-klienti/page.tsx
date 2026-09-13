import type { Metadata } from 'next';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import { SignupForm } from './signup-form';
import styles from './page.module.css';

const display = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-full-calendar-display',
  display: 'swap',
});

const weeks = [
  {
    number: 'Седмица 1',
    title: 'Къде губиш постоянния клиент?',
    intro: 'Преди да търсим още клиенти, трябва да разберем какво се случва с хората, които вече идват.',
    focus: 'Техника · материали · издръжливост · отношение · комуникация · клиентско преживяване',
    result: 'Ще разпознаеш най-важните места в собствения си процес, през които потенциално губиш постоянни клиенти.',
  },
  {
    number: 'Седмица 2',
    title: 'От нов клиент към постоянен клиент',
    intro: 'Какво кара една жена не просто да остане доволна, а да си каже: „Тук искам да се върна.“',
    focus: 'Преди посещението → по време на услугата → след посещението → следващо записване',
    result: 'Ще видиш как първото посещение може да стане начало на дългосрочна връзка с клиента.',
  },
  {
    number: 'Седмица 3',
    title: 'Как да те изберат, преди да са седнали на стола ти',
    intro: 'Не преследваме „перфектния Instagram“. Използваме реалната работа, присъствието и доверието.',
    focus: 'Какво да показвам → как да го снимам → какво да кажа → как да насоча към записване',
    result: 'Ще знаеш как да показваш реалната стойност на работата си, без постоянно да се сравняваш с чужди профили.',
  },
  {
    number: 'Седмица 4',
    title: 'Твоята система за постоянни клиенти',
    intro: 'Събираме техниката, преживяването, съдържанието и препоръките в една работеща последователност.',
    focus: 'Привличам → обслужвам → задържам → презаписвам → получавам препоръки → привличам',
    result: 'Ще излезеш с конкретна посока какво да запазиш, какво да подобриш и каква да бъде следващата ти стъпка.',
  },
];

const included = [
  ['4 практически срещи на живо', 'Веднъж седмично в продължение на четири седмици.'],
  ['90 минути работа във всяка среща', 'Примери, анализи и практически насоки вместо пасивна теория.'],
  ['Задачи между срещите', 'Прилагаш наученото върху реалните си клиенти още докато курсът върви.'],
  ['Система за постоянния клиент', 'Свързваш качество, преживяване, презаписване, препоръки и видимост.'],
  ['Практична посока за съдържанието', 'Показваш стойността си, без профилът ти да изглежда като фотосесия.'],
  ['План за следващите действия', 'Знаеш къде има смисъл да насочиш усилията си след четирите седмици.'],
];

const fits = [
  'Вече работиш като Nail специалист, но графикът ти все още има твърде много свободни часове.',
  'Имаш нови клиенти, но не достатъчно от тях се превръщат в постоянни.',
  'Искаш повече презаписвания, вместо всеки месец да започваш от нулата.',
  'Не знаеш какво да показваш онлайн или се сравняваш с „перфектните“ Nail профили.',
  'Готова си да приложиш наученото върху реалния си бизнес още по време на курса.',
];

const notFor = [
  'Все още нямаш практически опит и търсиш базово обучение по маникюр.',
  'Търсиш магическа формула за пълен график без действия от твоя страна.',
  'Искаш единствено „тайна“ за алгоритъма на Instagram.',
  'Не си готова да погледнеш критично работата, преживяването и управлението на бизнеса си.',
];

const faqs = [
  {
    question: 'Курсът наистина ли е безплатен?',
    answer: 'Да. Това е пилотното издание и участието е напълно безплатно. В замяна Деница очаква активно участие — да присъстваш, да прилагаш задачите в реалната си работа и да споделяш обратна връзка за процеса.',
  },
  {
    question: 'Подходящ ли е, ако все още нямам пълен график?',
    answer: 'Да. Ще разгледаме не само откъде идват новите клиенти, а и какво се случва, след като вече са седнали на стола ти — къде губиш възможности за задържане, презаписване и препоръки.',
  },
  {
    question: 'А ако имам клиенти, но не всички се връщат?',
    answer: 'Тогава курсът е особено подходящ. Ще разгледаме възможните причини — от техника, материали и издръжливост до комуникация, отношение, клиентско преживяване и начина, по който насърчаваш следващото записване.',
  },
  {
    question: 'Трябва ли да имам много опит като Nail специалист?',
    answer: 'Не е нужен дългогодишен опит, но трябва вече да практикуваш професията и да работиш или да започваш работа с реални клиенти. Така можеш веднага да приложиш наученото.',
  },
  {
    question: 'Това технически курс по маникюр ли е?',
    answer: 'Не. Техническото качество и издръжливостта са част от причината клиентът да се върне, но няма да изучаваме конкретна техника стъпка по стъпка. Гледаме цялата връзка между умения, преживяване, доверие, презаписване, препоръки и видимост.',
  },
  {
    question: 'Ще учим ли Instagram и социални мрежи?',
    answer: 'Да, но това не е курс за инфлуенсъри. Ще използваш реалната си работа и собственото си присъствие, за да създаваш доверие и да насочваш интереса към записване.',
  },
  {
    question: 'Колко време трябва да отделям?',
    answer: 'Курсът продължава четири седмици с по една 90-минутна практическа среща на живо седмично. Между срещите има малки задачи, които прилагаш директно в работата си.',
  },
  {
    question: 'Трябва ли да присъствам на живо?',
    answer: 'Препоръчително е да участваш на живо, когато имаш възможност. Стойността е и в примерите, анализа на реални ситуации и възможността да задаваш въпроси. Информация дали ще има записи ще получиш преди старта.',
  },
  {
    question: 'Ще имам ли резултат след четири седмици?',
    answer: 'Ще получиш система, практични насоки и конкретни действия. Резултатите зависят от стартовата ти позиция, клиентската база и приложението. Курсът не обещава магически „пълен график за 4 седмици“.',
  },
  {
    question: 'Ще трябва ли да купувам продукти или инструменти?',
    answer: 'Не. Работим с това, което вече имаш — твоята работа, твоите клиенти и твоят бизнес. Ако откриеш технически проблем, ще знаеш по-добре какво и защо има смисъл да подобриш.',
  },
  {
    question: 'Защо Деница предлага курса безплатно?',
    answer: 'Това е пилотното издание. Деница иска да премине през процеса с първата група Nail специалисти, да наблюдава приложението на системата в реален бизнес и да получи обратна връзка.',
  },
];

export const metadata: Metadata = {
  title: 'Пълен график. Постоянни клиенти. · Безплатен курс с Деница Димитрова',
  description: 'Безплатен 4-седмичен практически курс за работещи Nail специалисти: повече постоянни клиенти, презаписвания и по-предвидим график.',
  alternates: { canonical: '/palen-grafik-postoyanni-klienti' },
  openGraph: {
    title: 'Пълен график. Постоянни клиенти.',
    description: '4 седмици · 4 срещи на живо · практически задачи · пилотно участие безплатно.',
    images: [{
      url: '/palen-grafik-postoyanni-klienti/opengraph-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Пълен график. Постоянни клиенти. с Деница Димитрова',
    }],
  },
};

export default function FullCalendarPage() {
  return (
    <main className={`${styles.page} ${display.variable}`}>
      <a className={styles.skip} href="#main-content">Към съдържанието</a>
      <div id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Безплатен 4-седмичен практически курс</p>
            <h1>Пълен график.<br /><em>Постоянни клиенти.</em></h1>
            <p className={styles.heroLead}>Превърни уменията си като Nail специалист в система за повече постоянни клиенти и по-предвидим график.</p>
            <ul className={styles.heroFacts} aria-label="Формат на курса">
              <li><span>04</span> седмици</li>
              <li><span>04</span> срещи на живо</li>
              <li><span>90</span> минути практика</li>
            </ul>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#registration">Запиши се безплатно <span aria-hidden="true">→</span></a>
              <a className={styles.textLink} href="#program">Виж програмата <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image src="/palen-grafik-postoyanni-klienti/denitsa-hero.webp" alt="Деница Димитрова, инструктор в Nail индустрията" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
        </section>

        <section className={styles.tensionSection}>
          <div>
            <p className={styles.eyebrow}>Добрият маникюр е основата</p>
            <h2>Но добрата работа невинаги е достатъчна за <em>пълен график.</em></h2>
          </div>
          <div className={styles.tensionCopy}>
            <p>Работиш. Стараеш се. Инвестираш в обучения, материали и техника. Клиенти идват — но част от тях не се връщат.</p>
            <blockquote>„Може би трябва да публикувам повече. Може би просто ми трябват още нови клиенти.“</blockquote>
            <p>Ами ако първо трябва да видиш какво се случва от момента, в който клиентът те открие, до момента, в който реши дали иска да се върне?</p>
          </div>
        </section>

        <section className={styles.systemSection}>
          <div className={styles.systemImage}>
            <Image src="/palen-grafik-postoyanni-klienti/denitsa-system.webp" alt="Деница Димитрова с палитра от Nail цветове" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className={styles.systemCopy}>
            <p className={styles.eyebrow}>Пълният график се изгражда чрез система</p>
            <h2>Не ти трябват безкрайно много нови клиенти.</h2>
            <p className={styles.systemLead}>Трябва повече от хората, които вече те избират, да поискат да останат.</p>
            <ol className={styles.systemSteps}>
              {['Привличам', 'Създавам доверие', 'Обслужвам', 'Задържам', 'Презаписвам', 'Получавам препоръки'].map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>
              ))}
            </ol>
            <a className={styles.inlineCta} href="#registration">Искам да изградя системата <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className={styles.programSection} id="program">
          <div className={styles.sectionHeadingLight}>
            <p className={styles.eyebrow}>Четири седмици · една последователност</p>
            <h2>От първото впечатление до <em>следващото записване.</em></h2>
            <p>Няма да събираш още информация. Всяка седмица поглеждаш конкретна част от реалната си работа и прилагаш следваща стъпка.</p>
          </div>
          <div className={styles.weeksGrid}>
            {weeks.map(week => (
              <article className={styles.weekCard} key={week.number}>
                <div className={styles.weekTop}><span>{week.number}</span></div>
                <h3>{week.title}</h3>
                <p>{week.intro}</p>
                <dl>
                  <div><dt>Фокус</dt><dd>{week.focus}</dd></div>
                  <div><dt>След седмицата</dt><dd>{week.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.includedSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Какво получаваш</p>
            <h2>Практична работа върху бизнеса, който <em>вече имаш.</em></h2>
          </div>
          <div className={styles.includedGrid}>
            {included.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.mentorSection}>
          <div className={styles.mentorCopy}>
            <p className={styles.eyebrow}>Кой ще те води</p>
            <h2>Деница<br /><em>Димитрова</em></h2>
            <p className={styles.mentorRole}>Инструктор в Nail индустрията</p>
            <p>За Деница добрият Nail специалист не е просто човек, който може да направи красив маникюр. Това е професионалист, който разбира решенията си, адаптира се към конкретния клиент и превръща техническите умения в преживяване, доверие и устойчиви взаимоотношения.</p>
            <p>В курса тя няма просто да ти каже „публикувай повече“ или „намери повече клиенти“. Ще погледнете по-дълбоко: какво кара клиента да те избере, какво преживява и какво го кара да се върне.</p>
          </div>
          <div className={styles.mentorVisual}>
            <Image src="/palen-grafik-postoyanni-klienti/denitsa-mentor.webp" alt="Деница Димитрова" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div><strong>Ти вече имаш уменията.</strong><span>Време е да ги превърнеш в система.</span></div>
          </div>
        </section>

        <section className={styles.fitSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>За кого е курсът</p>
            <h2>За работещ специалист, готов да погледне на бизнеса си <em>като система.</em></h2>
          </div>
          <div className={styles.fitGrid}>
            <article>
              <h3><span>✓</span> Това е за теб, ако</h3>
              <ul>{fits.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className={styles.notFor}>
              <h3><span>×</span> Това не е за теб, ако</h3>
              <ul>{notFor.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className={styles.registrationSection} id="registration">
          <div className={styles.registrationCopy}>
            <p className={styles.eyebrow}>Пилотно участие · безплатно</p>
            <h2>Изгради причина правилните клиенти да <em>поискат да останат.</em></h2>
            <p>Четири практически срещи на живо, реални примери и малки задачи за твоята работа. Датата, часът и платформата ще получиш по имейл веднага щом бъдат потвърдени.</p>
          </div>
          <div className={styles.formPanel}>
            <p className={styles.formEyebrow}>Запази своето място</p>
            <h3>Включи се безплатно.</h3>
            <SignupForm compact />
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqIntro}>
            <p className={styles.eyebrow}>Често задавани въпроси</p>
            <h2>Преди да се <em>запишеш.</em></h2>
            <p>Ако не откриеш своя въпрос, пиши на екипа на Coaching Real.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.closingSection}>
          <p className={styles.eyebrow}>Пълен график. Постоянни клиенти.</p>
          <h2>Имаш уменията.<br /><em>Изгради системата.</em></h2>
          <p>4 седмици · 4 практически срещи на живо · пилотно участие безплатно</p>
          <a className={styles.primaryButton} href="#registration">Искам място в безплатната група <span aria-hidden="true">↑</span></a>
        </section>
      </div>

    </main>
  );
}
