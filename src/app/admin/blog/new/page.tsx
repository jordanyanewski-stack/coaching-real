import { AdminShell } from '../../_admin-shell';
import { PostEditor } from '../_post-editor';
import { createPostAction } from '../actions';

export const metadata = {
  title: 'Admin · Нова статия',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

function todayLabel(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}

export default function NewPostPage() {
  return (
    <AdminShell title="Нова статия">
      <PostEditor
        submitLabel="Създай статия"
        onSubmit={createPostAction}
        defaults={{
          slug: '',
          title: '',
          excerpt: '',
          cover: '',
          date: todayLabel(),
          category: '',
          readMin: 5,
          content: '<p></p>',
          published: false,
        }}
      />
    </AdminShell>
  );
}
