import { SiteNav, SiteFooter } from "@/app/_shared";

export const metadata = {
  title: "Политика за бисквитките | Coaching Real",
  description: "Информация за употребата на бисквитки на уебсайта coachingreallive.com от БИЗНЕС МАЙНД КОУЧИНГ ЕООД.",
};

export default function CookiesPage() {
  return (
    <div style={{ fontFamily: "var(--font-mv, sans-serif)" }}>
      <SiteNav />
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          color: "var(--mv-text-primary)",
          lineHeight: 1.8,
        }}
      >
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.02em" }}>
          Политика за бисквитките
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.4)", marginBottom: "48px" }}>
          Последна актуализация: 28.10.2024
        </p>

        <H2>Какво са бисквитките?</H2>
        <Section>
          <p>Бисквитките (cookies) са малки текстови файлове, които се съхраняват на Вашето устройство (компютър, таблет или мобилен телефон), когато посещавате уебсайтове. Те се използват широко, за да накарат уебсайтовете да работят по-ефективно и да предоставят информация на собствениците им.</p>
          <p>Настоящата политика описва как "БИЗНЕС МАЙНД КОУЧИНГ" ЕООД използва бисквитки на уебсайта <strong>coachingreallive.com</strong>.</p>
        </Section>

        <H2>Как използваме бисквитките?</H2>
        <Section>
          <p>Ние използваме бисквитки, за да:</p>
          <ul>
            <li>Осигурим правилното функциониране на уебсайта;</li>
            <li>Запомним Вашите предпочитания при посещение;</li>
            <li>Анализираме начина, по който се използва уебсайтът, с цел неговото подобряване;</li>
            <li>Осигурим сигурността на платежните транзакции.</li>
          </ul>
        </Section>

        <H2>Видове бисквитки, които използваме</H2>
        <Section>
          <div style={{ overflowX: "auto", marginTop: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ backgroundColor: "#faf8f5" }}>
                  <Th>Вид бисквитка</Th>
                  <Th>Цел</Th>
                  <Th>Срок на съхранение</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td><strong>Необходими (функционални)</strong></Td>
                  <Td>Осигуряват основната функционалност на сайта - навигация, сигурност и обработка на плащания. Без тях сайтът не може да функционира правилно.</Td>
                  <Td>Сесия / до 1 година</Td>
                </tr>
                <tr style={{ backgroundColor: "#faf8f5" }}>
                  <Td><strong>Аналитични</strong></Td>
                  <Td>Помагат ни да разберем как посетителите взаимодействат с уебсайта, като събират и отчитат информация анонимно.</Td>
                  <Td>До 2 години</Td>
                </tr>
                <tr>
                  <Td><strong>Предпочитания</strong></Td>
                  <Td>Позволяват на уебсайта да запомни информация, която променя начина, по който се държи или изглежда сайтът.</Td>
                  <Td>До 1 година</Td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <H2>Бисквитки на трети страни</H2>
        <Section>
          <p>Някои бисквитки се поставят от трети страни, чиито услуги използваме на нашия сайт. Тези трети страни включват:</p>
          <ul>
            <li><strong>myPOS</strong> - за обработка на онлайн плащания;</li>
            <li><strong>Vercel</strong> - за хостинг и производителност на сайта.</li>
          </ul>
          <p>Нямаме контрол върху бисквитките на тези трети страни. Препоръчваме да прегледате техните политики за поверителност за повече информация.</p>
        </Section>

        <H2>Как да управлявате бисквитките?</H2>
        <Section>
          <p>Можете да контролирате и/или изтриете бисквитките по всяко време. Повечето уеб браузъри автоматично приемат бисквитки, но обикновено можете да промените настройките на браузъра си, за да откажете бисквитките, ако предпочитате.</p>
          <p>Инструкции за управление на бисквитките в основните браузъри:</p>
          <ul>
            <li><strong>Google Chrome:</strong> Настройки &gt; Поверителност и сигурност &gt; Бисквитки и данни на сайта</li>
            <li><strong>Mozilla Firefox:</strong> Настройки &gt; Поверителност и сигурност &gt; Бисквитки и данни на сайта</li>
            <li><strong>Safari:</strong> Предпочитания &gt; Поверителност &gt; Управление на данни за уебсайтове</li>
            <li><strong>Microsoft Edge:</strong> Настройки &gt; Бисквитки и разрешения на сайта</li>
          </ul>
          <p>Имайте предвид, че забраняването на бисквитките може да повлияе на функционалността на нашия уебсайт и да Ви попречи да използвате пълния му потенциал.</p>
        </Section>

        <H2>Правно основание</H2>
        <Section>
          <p>Използването на необходимите (функционални) бисквитки се основава на нашия легитимен интерес да осигурим функционирането на уебсайта. За аналитичните и маркетингови бисквитки се основаваме на Вашето съгласие, когато е приложимо.</p>
        </Section>

        <H2>Промени в политиката</H2>
        <Section>
          <p>Тази политика за бисквитките може да бъде актуализирана периодично. Препоръчваме да я преглеждате редовно, за да сте информирани за начина, по който използваме бисквитките.</p>
        </Section>

        <H2>Контакт</H2>
        <Section>
          <p>Ако имате въпроси относно употребата на бисквитки на нашия уебсайт, можете да се свържете с нас на:</p>
          <ul>
            <li>Електронна поща: <a href="mailto:info@coachingreallive.com" style={{ color: "#6b150e" }}>info@coachingreallive.com</a></li>
            <li>Адрес: с.Мещица, ул.Ген.Гурко 16, общ.Перник, област София, п.к. 2353</li>
          </ul>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#1a1a1a", marginTop: "40px", marginBottom: "12px", letterSpacing: "-0.01em" }}>
      {children}
    </h2>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#1a1a1a", border: "1px solid rgba(107,21,14,0.1)" }}>
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td style={{ padding: "10px 12px", border: "1px solid rgba(107,21,14,0.08)", verticalAlign: "top" }}>
      {children}
    </td>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.65)", display: "flex", flexDirection: "column", gap: "10px" }}>
      {children}
    </div>
  );
}
