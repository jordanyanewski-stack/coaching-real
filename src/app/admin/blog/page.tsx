import { AdminShell } from '../_admin-shell';
import { listAllPosts } from '@/lib/blog-posts';

export const metadata = {
  title: 'Admin · Блог',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminBlogListPage() {
  const posts = await listAllPosts();

  return (
    <AdminShell title="Блог">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)' }}>
          {posts.length} {posts.length === 1 ? 'статия' : 'статии'} общо.
        </p>
        <a
          href="/admin/blog/new"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffffff',
            backgroundColor: '#70150E',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          + Нова статия
        </a>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '14px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr 140px 110px 100px 100px',
            gap: '12px',
            padding: '14px 20px',
            backgroundColor: '#fbf6f5',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.55)',
          }}
        >
          <div>Cover</div>
          <div>Заглавие</div>
          <div>Категория</div>
          <div>Дата</div>
          <div>Статус</div>
          <div style={{ textAlign: 'right' }}>Действия</div>
        </div>

        {posts.length === 0 && (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: 'rgba(0,0,0,0.4)', fontSize: '14px' }}>
            Все още няма статии. Натисни „Нова статия" за да започнеш.
          </div>
        )}

        {posts.map(p => (
          <div
            key={p.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 140px 110px 100px 100px',
              gap: '12px',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <div style={{ width: '50px', height: '34px', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#f3f4f6', flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <a
                href={`/blog/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '14px', fontWeight: 600, color: '#0f131a', textDecoration: 'none' }}
              >
                {p.title}
              </a>
              <div style={{ fontSize: '11px', color: 'rgba(0,0,0,0.45)', marginTop: '2px', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                {p.slug}
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)' }}>{p.category}</div>
            <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)' }}>{p.date}</div>
            <div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: p.published ? '#15803d' : '#a16207',
                  backgroundColor: p.published ? 'rgba(34,197,94,0.12)' : 'rgba(234,179,8,0.14)',
                  padding: '3px 8px',
                  borderRadius: '999px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {p.published ? 'Live' : 'Чернова'}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <a
                href={`/admin/blog/${p.slug}/edit`}
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#70150E',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  backgroundColor: '#fbf6f5',
                  border: '1px solid rgba(107,21,14,0.18)',
                  borderRadius: '6px',
                }}
              >
                Редактирай
              </a>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
