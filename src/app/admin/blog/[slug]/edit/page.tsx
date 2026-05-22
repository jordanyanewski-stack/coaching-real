import { notFound } from 'next/navigation';
import { AdminShell } from '../../../_admin-shell';
import { PostEditor } from '../../_post-editor';
import { deletePostAction, updatePostAction } from '../../actions';
import { getPost } from '@/lib/blog-posts';

export const metadata = {
  title: 'Admin · Редакция',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const update = updatePostAction.bind(null, slug);
  const remove = deletePostAction.bind(null, slug);

  return (
    <AdminShell title={`Редакция · ${post.title}`}>
      <PostEditor
        submitLabel="Запази промените"
        onSubmit={update}
        onDelete={remove}
        defaults={{
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          cover: post.cover,
          date: post.date,
          category: post.category,
          readMin: post.readMin,
          content: post.content,
          published: post.published,
        }}
      />
    </AdminShell>
  );
}
