'use client';

import { useState, type FormEvent } from 'react';
import { trackLead } from '@/app/pixel';
import { CampaignContact } from '@/components/campaign-contact';
import styles from './page.module.css';

type Status = 'idle' | 'submitting' | 'error';

export function SignupForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setMessage('');

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/palen-grafik-postoyanni-klienti/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok || body?.ok !== true) {
        setStatus('error');
        setMessage(body?.error || 'Възникна грешка. Опитай отново.');
        return;
      }
      trackLead('palen-grafik-postoyanni-klienti');
      window.location.href = '/palen-grafik-postoyanni-klienti/thank-you';
    } catch {
      setStatus('error');
      setMessage('Няма връзка със системата. Опитай отново след малко.');
    }
  }

  const suffix = compact ? 'bottom' : 'hero';

  return (
    <form className={`${styles.signupForm} ${compact ? styles.compactForm : ''}`} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor={`full-name-${suffix}`}>Име и фамилия</label>
        <input id={`full-name-${suffix}`} name="name" autoComplete="name" placeholder="Твоето име" required disabled={status === 'submitting'} />
      </div>
      <div className={styles.field}>
        <label htmlFor={`email-${suffix}`}>Имейл адрес</label>
        <input id={`email-${suffix}`} name="email" type="email" autoComplete="email" placeholder="name@example.com" required disabled={status === 'submitting'} />
      </div>
      {status === 'error' && <p className={styles.formError} role="alert">{message}</p>}
      <button className={styles.primaryButton} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Запазваме мястото ти…' : 'Искам място в безплатния курс'}
        <span aria-hidden="true">→</span>
      </button>
      <p className={styles.formNote}>Отнема под 1 минута. Ще получиш потвърждение и информация за първата среща по имейл.</p>
      <CampaignContact language="bg" color="#5d6865" />
    </form>
  );
}
