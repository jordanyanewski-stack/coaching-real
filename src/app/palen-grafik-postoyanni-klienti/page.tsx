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
    date: '10 октомври',
    dateTime: '2026-10-10',
    title: 'Открий къде губиш клиента',
    intro: 'Преди да търсим още клиенти, трябва да разберем какво се случва с хората, които вече идват.',
    focus: 'Техника · материали · издръжливост · отношение · комуникация · клиентско преживяване',
    result: 'Ще знаеш кои части от собственото ти клиентско преживяване пречат на повторното записване.',
  },
  {
    number: 'Седмица 2',
    date: '17 октомври',
    dateTime: '2026-10-17',
    title: 'Превърни първото посещение в начало на навик',
    intro: 'Какво кара една жена не просто да остане доволна, а да си каже: „Тук искам да се върна.“',
    focus: 'Преди посещението → по време на услугата → след посещението → следващо записване',
    result: 'Ще изградиш процес, който увеличава вероятността клиентът да се върне.',
  },
  {
    number: 'Седмица 3',
    date: '24 октомври',
    dateTime: '2026-10-24',
    title: 'Покажи стойността си още преди посещението',
    intro: 'Не преследваме „перфектния Instagram“. Използваме реалната работа, присъствието и доверието.',
    focus: 'Какво да показвам → как да го снимам → какво да кажа → как да насоча към записване',
    result: 'Ще знаеш какво да комуникираш онлайн, за да привличаш по-подходящи клиенти.',
  },
  {
    number: 'Седмица 4',
    date: '31 октомври',
    dateTime: '2026-10-31',
    title: 'Сглоби своята система за постоянни клиенти',
    intro: 'Събираме техниката, преживяването, съдържанието и препоръките в една работеща последователност.',
    focus: 'Привличам → доверие → обслужвам → задържам → презаписвам → препоръки',
    result: 'Ще излезеш с конкретен процес за привличане, обслужване, презаписване и препоръки.',
  },
];

const included = [
  ['4 срещи на живо', 'Работиш всяка седмица върху различна част от клиентския си процес.'],
  ['90 минути практическа работа', 'По-малко теория, повече примери, анализи и конкретни решения.'],
  ['Задачи върху реалните ти клиенти', 'Не симулации, а работа върху това, което вече се случва в бизнеса ти.'],
  ['Система за презаписване', 'Подреждаш процеса от първото посещение до следващото записване.'],
  ['По-ясна комуникация', 'Знаеш какво да показваш и казваш, за да те разбират правилните хора.'],
  ['План за следващи действия', 'Знаеш какво точно да запазиш и подобриш след курса.'],
];

const painSignals = [
  'Имаш нови клиенти, но не всички се връщат.',
  'Редуваш седмици с много записвания и седмици с празни часове.',
  'Зависиш от случайни препоръки и постоянно мислиш какво да публикуваш.',
  'Сравняваш се с „перфектни“ Nail профили, без да знаеш какво реално води до записване.',
  'Не знаеш защо една клиентка се връща, а друга не.',
  'Всеки месец имаш усещането, че започваш почти отначало.',
];

const methodSteps = [
  ['Привличам', 'Правилният човек разбира защо да избере точно мен.'],
  ['Създавам доверие', 'Още преди първото посещение.'],
  ['Обслужвам', 'Клиентът получава цялостно преживяване, не просто услуга.'],
  ['Задържам', 'Има ясна причина да поиска да се върне.'],
  ['Презаписвам', 'Следващото посещение се случва естествено.'],
  ['Получавам препоръки', 'Доволните клиенти започват да водят нови клиенти.'],
];

const pilotBenefits = [
  '4 срещи на живо и 6 часа общо практическа работа',
  'Задачи между срещите върху реалния ти бизнес',
  'Метод „Постоянен клиент“ за задържане и презаписване',
  'Анализ на реални ситуации и възможност за въпроси',
  'План с конкретни следващи действия',
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
    question: 'Трябва ли да имам собствен салон?',
    answer: 'Не. Можеш да работиш в салон, на наето място или от вкъщи. Важното е вече да работиш или да започваш работа с реални клиенти, за да прилагаш задачите веднага.',
  },
  {
    question: 'Подходящ ли е за начинаещ Nail специалист?',
    answer: 'Да, ако вече практикуваш и имаш контакт с реални клиенти. Ако търсиш първо базово обучение по маникюр, този курс няма да бъде най-подходящата начална стъпка.',
  },
  {
    question: 'Колко клиенти трябва да имам, за да има смисъл?',
    answer: 'Няма фиксиран минимум. Нужно е да имаш достатъчно реални ситуации, върху които да наблюдаваш първия контакт, услугата, презаписването и причините клиентите да се връщат или да не се връщат.',
  },
  {
    question: 'Това технически курс по маникюр ли е?',
    answer: 'Не. Техническото качество и издръжливостта са част от причината клиентът да се върне, но няма да изучаваме конкретна техника стъпка по стъпка. Гледаме цялата връзка между умения, преживяване, доверие, презаписване, препоръки и видимост.',
  },
  {
    question: 'Трябва ли да имам Instagram или платен софтуер за записвания?',
    answer: 'Не. Ще говорим за комуникация и съдържание, но курсът не зависи от конкретна социална мрежа или платен инструмент. Работим с процеса и клиентите, които вече имаш.',
  },
  {
    question: 'Колко време трябва да отделям?',
    answer: 'Курсът продължава четири седмици с по една 90-минутна практическа среща на живо седмично. Между срещите има малки задачи, които прилагаш директно в работата си.',
  },
  {
    question: 'Ще има ли записи и какво става, ако пропусна среща?',
    answer: 'Препоръчително е да участваш на живо, защото стойността е и в примерите, анализа на реални ситуации и възможността да задаваш въпроси. Политиката за записите ще бъде потвърдена преди старта.',
  },
  {
    question: 'Ще получа ли конкретна обратна връзка?',
    answer: 'Срещите включват анализ на реални ситуации и възможност за въпроси. Това е практическа групова работа, а не обещание за индивидуална бизнес консултация.',
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
    answer: 'Това е пилотното издание. Деница иска да премине през процеса с първата група Nail специалисти, да наблюдава приложението на системата в реален бизнес и да получи обратна връзка. Затова участието е без такса.',
  },
  {
    question: 'Има ли последваща платена програма?',
    answer: 'Участието в пилотното издание не те задължава да купуваш нищо. Ако след него бъде предложено по-задълбочено обучение, то ще бъде представено отделно и решението ще бъде изцяло твое.',
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
            <p className={styles.eyebrow}>Безплатен практически курс за работещи Nail специалисти</p>
            <h1>Пълен график.<br /><em>Постоянни клиенти.</em></h1>
            <p className={styles.heroLead}>За 4 седмици ще изградиш по-ясна система как да привличаш, задържаш и презаписваш правилните клиенти — без да разчиташ само на нови хора и Instagram.</p>
            <ul className={styles.heroFacts} aria-label="Формат на курса">
              <li><span>10–31</span> октомври</li>
              <li><span>Всяка</span> събота</li>
              <li><span>19:00</span> до 20:30 ч.</li>
            </ul>
            <p className={styles.heroTrust}>С Деница Димитрова · инструктор в Nail индустрията</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#registration">Искам място в безплатния курс <span aria-hidden="true">→</span></a>
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
            <p className={styles.eyebrow}>Ако си добра в работата си</p>
            <h2>Но графикът ти още е <em>непредвидим…</em></h2>
          </div>
          <div className={styles.tensionCopy}>
            <p>Добрият маникюр е основата. Но устойчивият график зависи и от това какво се случва преди, по време и след посещението.</p>
            <ul className={styles.tensionList}>
              {painSignals.map(item => <li key={item}>{item}</li>)}
            </ul>
            <blockquote>Проблемът не е само да намериш повече клиенти. Трябва да изградиш причина правилните клиенти да останат.</blockquote>
            <a className={`${styles.primaryButton} ${styles.sectionButton}`} href="#registration">Искам по-постоянен график <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={styles.systemSection}>
          <div className={styles.systemImage}>
            <Image src="/palen-grafik-postoyanni-klienti/denitsa-system.webp" alt="Деница Димитрова с палитра от Nail цветове" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className={styles.systemCopy}>
            <p className={styles.eyebrow}>Метод „Постоянен клиент“</p>
            <h2>Не ти трябват безкрайно много нови клиенти.</h2>
            <p className={styles.systemLead}>Трябва повече от хората, които вече те избират, да поискат да останат.</p>
            <ol className={styles.systemSteps}>
              {methodSteps.map(([title, description], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><p>{description}</p></div>
                </li>
              ))}
            </ol>
            <div className={styles.systemInsight}>
              <span>Повечето специалисти се фокусират върху привличането.</span>
              <strong>Печелившият график се изгражда и чрез задържане + презаписване + препоръки.</strong>
            </div>
            <a className={`${styles.primaryButton} ${styles.sectionButton}`} href="#registration">Искам да изградя системата <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={styles.fitSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>За кого е курсът</p>
            <h2>Разпознай дали това е точната стъпка <em>за твоя етап.</em></h2>
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
          <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.centeredButton}`} href="#registration">Искам място в курса <span aria-hidden="true">↓</span></a>
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
                <div className={styles.weekTop}><span>{week.number}</span><time dateTime={week.dateTime}>{week.date}</time></div>
                <h3>{week.title}</h3>
                <p>{week.intro}</p>
                <dl>
                  <div><dt>Фокус</dt><dd>{week.focus}</dd></div>
                  <div><dt>Резултат</dt><dd>{week.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.centeredButton} ${styles.lightButton}`} href="#registration">Искам да участвам <span aria-hidden="true">↓</span></a>
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
          <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.centeredButton}`} href="#registration">Искам тази система <span aria-hidden="true">↓</span></a>
        </section>

        <section className={styles.stakesSection}>
          <div>
            <p className={styles.eyebrow}>Цената на отлагането</p>
            <h2>Ако системата не се промени, графикът вероятно ще остане <em>непредвидим.</em></h2>
          </div>
          <div className={styles.stakesActions}>
            <ul>
              <li>Продължаваш постоянно да търсиш нови клиенти.</li>
              <li>Зависиш от Instagram и случайни препоръки.</li>
              <li>Имаш дупки в календара, които виждаш твърде късно.</li>
              <li>Чудиш се защо доволни хора не се връщат.</li>
              <li>Всеки месец започваш почти от нулата.</li>
            </ul>
            <a className={`${styles.primaryButton} ${styles.sectionButton}`} href="#registration">Искам да променя това <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={styles.mentorSection}>
          <div className={styles.mentorCopy}>
            <p className={styles.eyebrow}>Кой ще те води</p>
            <h2>Защо точно <em>Деница?</em></h2>
            <p className={styles.mentorRole}>Деница Димитрова · инструктор в Nail индустрията</p>
            <ul className={styles.mentorCredentials}>
              <li>Свързва техниката с клиентското преживяване и доверието.</li>
              <li>Работи с реални казуси, а не с общи бизнес формули.</li>
              <li>Гледа на привличането, обслужването и презаписването като на една система.</li>
            </ul>
            <p>За Деница добрият Nail специалист не е просто човек, който може да направи красив маникюр. Това е професионалист, който разбира решенията си, адаптира се към конкретния клиент и превръща техническите умения в преживяване, доверие и устойчиви взаимоотношения.</p>
            <p>В курса тя няма просто да ти каже „публикувай повече“ или „намери повече клиенти“. Ще погледнете по-дълбоко: какво кара клиента да те избере, какво преживява и какво го кара да се върне.</p>
            <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.lightButton}`} href="#registration">Искам да уча с Деница <span aria-hidden="true">↓</span></a>
          </div>
          <div className={styles.mentorVisual}>
            <Image src="/palen-grafik-postoyanni-klienti/denitsa-mentor.webp" alt="Деница Димитрова" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div><strong>Ти вече имаш уменията.</strong><span>Време е да ги превърнеш в система.</span></div>
          </div>
        </section>

        <section className={styles.pilotSection}>
          <div className={styles.pilotIntro}>
            <p className={styles.eyebrow}>Защо участието е без такса</p>
            <h2>Пилотното издание е възможност да получиш повече <em>практическа стойност.</em></h2>
            <p>Деница ще тества програмата с първата група Nail специалисти, ще наблюдава как системата се прилага в реален бизнес и ще събира обратна връзка. Затова участието е без такса — в замяна се очакват присъствие, работа по задачите и честна обратна връзка.</p>
          </div>
          <div className={styles.pilotOffer}>
            <p className={styles.formEyebrow}>Пилотна група · участие без такса</p>
            <h3>Получаваш</h3>
            <ul>{pilotBenefits.map(item => <li key={item}>{item}</li>)}</ul>
            <div className={styles.pilotPrice}><span>Твоята инвестиция</span><strong>Активно участие</strong></div>
            <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.pilotButton}`} href="#registration">Искам място в пилотната група <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={styles.registrationSection} id="registration">
          <div className={styles.registrationCopy}>
            <p className={styles.eyebrow}>10–31 октомври · всяка събота</p>
            <h2>Изгради причина правилните клиенти да <em>поискат да останат.</em></h2>
            <p>Четири практически срещи на живо, реални примери и малки задачи за твоята работа. Срещите са от 19:00 до 20:30 ч.</p>
            <ul className={styles.registrationValue}>
              <li>4 седмици</li>
              <li>4 срещи на живо</li>
              <li>6 часа практическа работа</li>
              <li>Участие без такса</li>
            </ul>
          </div>
          <div className={styles.formPanel}>
            <p className={styles.formEyebrow}>Регистрацията отнема под 1 минута</p>
            <h3>Заяви място в пилотната група.</h3>
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
          <a className={`${styles.primaryButton} ${styles.sectionButton} ${styles.centeredButton}`} href="#registration">Искам място в безплатния курс <span aria-hidden="true">↑</span></a>
        </section>

        <section className={styles.closingSection}>
          <p className={styles.eyebrow}>Пълен график. Постоянни клиенти.</p>
          <h2>Имаш уменията.<br /><em>Сега направи така, че клиентите да се връщат.</em></h2>
          <p className={styles.closingLead}>4 седмици. 4 срещи на живо. Една ясна система за по-постоянен график.</p>
          <p className={styles.closingSchedule}>10–31 октомври · всяка събота · 19:00–20:30 ч. · пилотно участие безплатно</p>
          <a className={styles.primaryButton} href="#registration">Искам място в безплатната група <span aria-hidden="true">↑</span></a>
          <p className={styles.closingNote}>Регистрацията отнема под 1 минута.</p>
        </section>
      </div>

    </main>
  );
}
