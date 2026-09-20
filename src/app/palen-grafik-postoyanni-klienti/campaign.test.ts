import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./page.tsx', import.meta.url), 'utf8');
const thankYou = readFileSync(new URL('./thank-you/page.tsx', import.meta.url), 'utf8');
const signupForm = readFileSync(new URL('./signup-form.tsx', import.meta.url), 'utf8');
const globalFooter = readFileSync(new URL('../../components/global-contact-footer.tsx', import.meta.url), 'utf8');

describe('Пълен график campaign', () => {
  it('keeps the supplied free four-week offer and practical format', () => {
    expect(page).toContain('Безплатен 4-седмичен практически курс');
    expect(page).toContain('4 срещи на живо');
    expect(page).toContain('90 минути');
    expect(page).toContain('Деница Димитрова');
  });

  it('publishes the confirmed October schedule and keeps one coherent campaign promise', () => {
    expect(page).toContain('10–31 октомври');
    expect(page).toContain('всяка събота');
    expect(page).toContain('19:00–20:30 ч.');
    expect(page).toContain('как да привличаш, задържаш и презаписваш правилните клиенти');
    expect(page).toContain('Метод „Постоянен клиент“');
    expect(page).toContain('Сега направи така, че клиентите да се връщат');
    expect(globalFooter).toContain('правилните клиенти да те изберат, да се върнат и да те препоръчат');
  });

  it('explains the pilot offer and sharpens the practical outcomes without invented proof', () => {
    expect(page).toContain('Защо участието е без такса');
    expect(page).toContain('6 часа общо практическа работа');
    expect(page).toContain('Проблемът не е само да намериш повече клиенти');
    expect(page).toContain('Резултат</dt>');
    expect(signupForm).toContain('Отнема под 1 минута');
  });

  it('uses the dedicated signup and thank-you paths', () => {
    expect(signupForm).toContain('/api/palen-grafik-postoyanni-klienti/signup');
    expect(signupForm).toContain('/palen-grafik-postoyanni-klienti/thank-you');
    expect(thankYou).toContain('1E1WtwAnie');
  });

  it('keeps a direct registration action in every landing-page section', () => {
    expect(page.match(/href="#registration"/g) ?? []).toHaveLength(11);
    expect(signupForm).toContain('type="submit"');
  });

  it('does not publish source placeholders, fabricated testimonials or scarcity', () => {
    for (const source of [page, thankYou]) {
      expect(source).not.toMatch(/\[(ДАТА|ЧАС|ПЛАТФОРМА|ЛИНК)/);
      expect(source).not.toContain('РЕАЛЕН ОТЗИВ');
      expect(source).not.toContain('Местата са ограничени');
    }
  });
});
