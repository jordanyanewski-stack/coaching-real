'use client';

import { useState, type FormEvent } from 'react';
import { trackLead } from '@/app/pixel';
import { CampaignContact } from '@/components/campaign-contact';
import styles from './stuck.module.css';

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
      const response = await fetch('/api/stuck-in-the-middle/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus('error');
        setMessage(body?.error || 'Something went wrong. Please try again.');
        return;
      }
      trackLead('stuck-in-the-middle');
      window.location.href = '/stuck-in-the-middle/thank-you';
    } catch {
      setStatus('error');
      setMessage('Connection error. Please try again in a moment.');
    }
  }

  return (
    <form className={`${styles.signupForm} ${compact ? styles.compactForm : ''}`} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor={compact ? 'name-bottom' : 'name-hero'}>Your name</label>
        <input id={compact ? 'name-bottom' : 'name-hero'} name="name" autoComplete="name" placeholder="First and last name" required disabled={status === 'submitting'} />
      </div>
      <div className={styles.field}>
        <label htmlFor={compact ? 'email-bottom' : 'email-hero'}>Email address</label>
        <input id={compact ? 'email-bottom' : 'email-hero'} name="email" type="email" autoComplete="email" placeholder="you@company.com" required disabled={status === 'submitting'} />
      </div>
      {status === 'error' && <p className={styles.formError} role="alert">{message}</p>}
      <button className={styles.primaryButton} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Saving your place…' : 'Enroll in the course'}
        <span aria-hidden="true">→</span>
      </button>
      <p className={styles.formNote}>Starts 26 August · 19:00 CET · Private Facebook group</p>
      <CampaignContact language="en" color="#596261" />
    </form>
  );
}
