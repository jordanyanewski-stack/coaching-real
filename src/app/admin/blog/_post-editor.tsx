'use client';

import { useMemo, useRef, useState, useTransition } from 'react';
import { sanitizeBlogHtml } from '@/lib/sanitize';

export interface PostFormDefaults {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: string;
  readMin: number;
  content: string;
  published: boolean;
}

interface PostEditorProps {
  defaults: PostFormDefaults;
  submitLabel: string;
  onSubmit: (formData: FormData) => Promise<void>;
  /** Optional delete handler. If provided, shows a Delete button. */
  onDelete?: () => Promise<void>;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  fontSize: '14px',
  border: '1.5px solid rgba(15,19,26,0.12)',
  borderRadius: '8px',
  outline: 'none',
  backgroundColor: '#ffffff',
  color: '#1a1a1a',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(15,19,26,0.55)',
  marginBottom: '6px',
  display: 'block',
};

export function PostEditor({ defaults, submitLabel, onSubmit, onDelete }: PostEditorProps) {
  const [title, setTitle] = useState(defaults.title);
  const [slug, setSlug] = useState(defaults.slug);
  const [excerpt, setExcerpt] = useState(defaults.excerpt);
  const [cover, setCover] = useState(defaults.cover);
  const [date, setDate] = useState(defaults.date);
  const [category, setCategory] = useState(defaults.category);
  const [readMin, setReadMin] = useState(String(defaults.readMin));
  const [content, setContent] = useState(defaults.content);
  const [published, setPublished] = useState(defaults.published);
  const [coverUploading, setCoverUploading] = useState(false);
  const [bodyUploading, setBodyUploading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isPending, startTransition] = useTransition();
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const slugManuallyEdited = useRef(defaults.slug !== '');
  const previewHtml = useMemo(() => sanitizeBlogHtml(content), [content]);

  function slugify(s: string): string {
    return s
      .toLowerCase()
      .normalize('NFD')
      // Map Bulgarian characters to Latin equivalents
      .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g')
      .replace(/д/g, 'd').replace(/е/g, 'e').replace(/ж/g, 'zh').replace(/з/g, 'z')
      .replace(/и/g, 'i').replace(/й/g, 'y').replace(/к/g, 'k').replace(/л/g, 'l')
      .replace(/м/g, 'm').replace(/н/g, 'n').replace(/о/g, 'o').replace(/п/g, 'p')
      .replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't').replace(/у/g, 'u')
      .replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'ts').replace(/ч/g, 'ch')
      .replace(/ш/g, 'sh').replace(/щ/g, 'sht').replace(/ъ/g, 'a').replace(/ь/g, 'y')
      .replace(/ю/g, 'yu').replace(/я/g, 'ya')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function onTitleChange(v: string) {
    setTitle(v);
    if (!slugManuallyEdited.current) {
      setSlug(slugify(v));
    }
  }
  function onSlugChange(v: string) {
    slugManuallyEdited.current = true;
    setSlug(v);
  }

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error ?? `Качването неуспешно (${res.status}).`);
    }
    const data = await res.json() as { url: string };
    return data.url;
  }

  async function onCoverUpload(file: File) {
    setCoverUploading(true);
    try {
      const url = await uploadFile(file);
      setCover(url);
    } catch (err) {
      alert(`Cover upload: ${(err as Error).message}`);
    } finally {
      setCoverUploading(false);
    }
  }

  async function onBodyImageUpload(file: File) {
    setBodyUploading(true);
    try {
      const url = await uploadFile(file);
      const ta = contentRef.current;
      const tag = `<p><img src="${url}" alt="" style="width:100%;border-radius:8px;margin:16px 0;" /></p>\n`;
      if (ta) {
        const start = ta.selectionStart ?? content.length;
        const end = ta.selectionEnd ?? content.length;
        const next = content.slice(0, start) + tag + content.slice(end);
        setContent(next);
        // Restore cursor after the inserted tag
        requestAnimationFrame(() => {
          ta.focus();
          const pos = start + tag.length;
          ta.setSelectionRange(pos, pos);
        });
      } else {
        setContent(content + '\n' + tag);
      }
    } catch (err) {
      alert(`Image upload: ${(err as Error).message}`);
    } finally {
      setBodyUploading(false);
    }
  }

  // Next.js redirect()/notFound() throw internal errors with these digests.
  // We must rethrow them so the framework can handle the navigation; only
  // genuine user-facing errors should surface in submitError.
  function isFrameworkError(err: unknown): boolean {
    const digest = (err as { digest?: string })?.digest;
    return typeof digest === 'string' && (digest.startsWith('NEXT_REDIRECT') || digest === 'NEXT_NOT_FOUND');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError('');
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await onSubmit(formData);
      } catch (err) {
        if (isFrameworkError(err)) throw err;
        setSubmitError((err as Error).message);
      }
    });
  }

  function handleDelete() {
    if (!onDelete) return;
    if (!confirm(`Сигурен ли си, че искаш да изтриеш "${defaults.title}"?\nТова не може да се отмени.`)) return;
    startTransition(async () => {
      try {
        await onDelete();
      } catch (err) {
        if (isFrameworkError(err)) throw err;
        setSubmitError((err as Error).message);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '24px',
        }}
      >
        {/* ── LEFT: form ───────────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Field label="Заглавие">
            <input name="title" value={title} onChange={e => onTitleChange(e.target.value)} required style={inputStyle} />
          </Field>

          <Field label="Slug (URL)">
            <input name="slug" value={slug} onChange={e => onSlugChange(e.target.value)} required pattern="[-a-z0-9]+" style={{ ...inputStyle, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '13px' }} />
            <p style={{ fontSize: '11px', color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
              Само малки латински букви, цифри и тирета. Ще се появи на /blog/{slug || '...'}.
            </p>
          </Field>

          <Field label="Кратко описание (excerpt)">
            <textarea name="excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} required rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
          </Field>

          <Field label="Cover image URL">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
              <input name="cover" value={cover} onChange={e => setCover(e.target.value)} required style={{ ...inputStyle, flex: 1 }} placeholder="https://coaching-real.b-cdn.net/..." />
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#70150E',
                  backgroundColor: '#fbf6f5',
                  border: '1.5px solid rgba(107,21,14,0.2)',
                  borderRadius: '8px',
                  cursor: coverUploading ? 'wait' : 'pointer',
                  whiteSpace: 'nowrap',
                  opacity: coverUploading ? 0.6 : 1,
                }}
              >
                {coverUploading ? 'Качване...' : 'Качи'}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  disabled={coverUploading}
                  onChange={e => {
                    const f = e.target.files?.[0];
                    if (f) onCoverUpload(f);
                    e.target.value = '';
                  }}
                />
              </label>
            </div>
            {cover && (
              <div style={{ marginTop: '8px', position: 'relative', width: '160px', height: '90px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt="cover preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 110px', gap: '12px' }}>
            <Field label="Дата (DD.MM.YYYY)">
              <input name="date" value={date} onChange={e => setDate(e.target.value)} required placeholder="26.04.2026" pattern="\d{2}\.\d{2}\.\d{4}" style={inputStyle} />
            </Field>
            <Field label="Категория">
              <input name="category" value={category} onChange={e => setCategory(e.target.value)} required style={inputStyle} />
            </Field>
            <Field label="Мин четене">
              <input name="readMin" value={readMin} onChange={e => setReadMin(e.target.value)} required type="number" min={1} style={inputStyle} />
            </Field>
          </div>

          <Field label="Сортиращ ред (опц., ISO timestamp)">
            <input name="sortAt" placeholder="Напр. 2026-04-26T12:00:00Z (празно = запази съществуващото)" style={inputStyle} />
            <p style={{ fontSize: '11px', color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
              Контролира реда в /blog. Празно за нова статия = сега. Празно при редакция = запазва съществуващото.
            </p>
          </Field>

          <label
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              backgroundColor: published ? 'rgba(34,197,94,0.08)' : 'rgba(15,19,26,0.04)',
              border: `1.5px solid ${published ? 'rgba(34,197,94,0.25)' : 'rgba(15,19,26,0.1)'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '13px',
              fontWeight: 600,
              alignSelf: 'flex-start',
            }}
          >
            <input
              type="checkbox"
              name="published"
              checked={published}
              onChange={e => setPublished(e.target.checked)}
              style={{ width: 16, height: 16, accentColor: '#15803d' }}
            />
            {published ? 'Публикувана' : 'Чернова (скрита от /blog)'}
          </label>

          <Field label="HTML съдържание">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#70150E',
                  backgroundColor: '#fbf6f5',
                  border: '1.5px solid rgba(107,21,14,0.2)',
                  borderRadius: '6px',
                  cursor: bodyUploading ? 'wait' : 'pointer',
                  opacity: bodyUploading ? 0.6 : 1,
                }}
              >
                {bodyUploading ? 'Качване...' : '+ Вмъкни изображение'}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  disabled={bodyUploading}
                  onChange={e => {
                    const f = e.target.files?.[0];
                    if (f) onBodyImageUpload(f);
                    e.target.value = '';
                  }}
                />
              </label>
              <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.45)', alignSelf: 'center' }}>
                Курсорът в textarea определя къде се вмъква.
              </span>
            </div>
            <textarea
              ref={contentRef}
              name="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows={24}
              style={{
                ...inputStyle,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: '12.5px',
                lineHeight: 1.6,
                resize: 'vertical',
                minHeight: '420px',
              }}
              spellCheck={false}
            />
          </Field>
        </div>

        {/* ── RIGHT: live preview ──────────────────────────────────── */}
        <div>
          <div
            style={{
              position: 'sticky',
              top: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px',
              padding: '24px',
              maxHeight: 'calc(100vh - 60px)',
              overflow: 'auto',
            }}
          >
            <p style={{ ...labelStyle, marginBottom: '12px' }}>Предварителен преглед</p>
            <h2 style={{ fontSize: '22px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', color: '#0f131a' }}>
              {title || '(без заглавие)'}
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.7, marginBottom: '16px' }}>
              {excerpt || '(без описание)'}
            </p>
            {cover && (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '10px', marginBottom: '20px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <div
              className="blog-content"
              style={{ fontSize: '15px', lineHeight: 1.85, color: '#0f131a' }}
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          </div>
        </div>
      </div>

      {submitError && (
        <p
          style={{
            marginTop: '20px',
            padding: '12px 16px',
            backgroundColor: 'rgba(244,63,94,0.08)',
            border: '1px solid rgba(244,63,94,0.2)',
            borderRadius: '8px',
            color: '#9f1239',
            fontSize: '13px',
          }}
        >
          {submitError}
        </p>
      )}

      <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={isPending}
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: '#70150E',
              border: 'none',
              borderRadius: '8px',
              cursor: isPending ? 'wait' : 'pointer',
              opacity: isPending ? 0.6 : 1,
            }}
          >
            {isPending ? 'Запис...' : submitLabel}
          </button>
          <a
            href="/admin/blog"
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'rgba(0,0,0,0.65)',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Назад
          </a>
        </div>
        {onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            style={{
              padding: '12px 20px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#9f1239',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(244,63,94,0.3)',
              borderRadius: '8px',
              cursor: isPending ? 'wait' : 'pointer',
              opacity: isPending ? 0.6 : 1,
            }}
          >
            Изтрий статията
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}
