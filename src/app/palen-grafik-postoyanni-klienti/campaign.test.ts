import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./page.tsx', import.meta.url), 'utf8');
const thankYou = readFileSync(new URL('./thank-you/page.tsx', import.meta.url), 'utf8');
const signupForm = readFileSync(new URL('./signup-form.tsx', import.meta.url), 'utf8');
const globalFooter = readFileSync(new URL('../../components/global-contact-footer.tsx', import.meta.url), 'utf8');

describe('Пълен график campaign', () => {
  it('keeps the supplied free four-week offer and practical format', () => {
    expect(page).toContain('Безплатен 4-седмичен практически курс');
    expect(page).toContain('4 практически срещи на живо');
    expect(page).toContain('90 минути');
    expect(page).toContain('Деница Димитрова');
  });

  it('publishes the confirmed October schedule and repeats the campaign promise at the close and footer', () => {
    expect(page).toContain('10–31 октомври');
    expect(page).toContain('всяка събота');
    expect(page).toContain('19:00–20:30 ч.');
    expect(page.match(/Превърни уменията си като Nail специалист в система за повече постоянни клиенти и по-предвидим график/g)).toHaveLength(2);
    expect(globalFooter).toContain('Превърни уменията си като Nail специалист в система за повече постоянни клиенти и по-предвидим график');
  });

  it('uses the dedicated signup and thank-you paths', () => {
    expect(signupForm).toContain('/api/palen-grafik-postoyanni-klienti/signup');
    expect(signupForm).toContain('/palen-grafik-postoyanni-klienti/thank-you');
    expect(thankYou).toContain('1E1WtwAnie');
  });

  it('does not publish source placeholders, fabricated testimonials or scarcity', () => {
    for (const source of [page, thankYou]) {
      expect(source).not.toMatch(/\[(ДАТА|ЧАС|ПЛАТФОРМА|ЛИНК)/);
      expect(source).not.toContain('РЕАЛЕН ОТЗИВ');
      expect(source).not.toContain('Местата са ограничени');
    }
  });
});
