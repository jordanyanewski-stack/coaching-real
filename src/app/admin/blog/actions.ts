'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
  type UpsertPostInput,
} from '@/lib/blog-posts';

function readFormInput(formData: FormData): UpsertPostInput {
  const slug = String(formData.get('slug') ?? '').trim().toLowerCase();
  const title = String(formData.get('title') ?? '').trim();
  const excerpt = String(formData.get('excerpt') ?? '').trim();
  const cover = String(formData.get('cover') ?? '').trim();
  const date = String(formData.get('date') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim();
  const readMin = parseInt(String(formData.get('readMin') ?? '5'), 10);
  const content = String(formData.get('content') ?? '');
  const published = formData.get('published') === 'on';
  const sortAtInput = String(formData.get('sortAt') ?? '').trim();

  if (!slug || !title || !excerpt || !cover || !date || !category || !content) {
    throw new Error('Всички задължителни полета трябва да бъдат попълнени.');
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error('Slug трябва да съдържа само малки латински букви, цифри и тирета.');
  }
  if (Number.isNaN(readMin) || readMin < 1) {
    throw new Error('Минути четене трябва да е положително число.');
  }

  return {
    slug,
    title,
    excerpt,
    cover,
    date,
    category,
    readMin,
    content,
    published,
    sortAt: sortAtInput ? new Date(sortAtInput).toISOString() : undefined,
  };
}

export async function createPostAction(formData: FormData): Promise<void> {
  const input = readFormInput(formData);
  const existing = await getPost(input.slug);
  if (existing) {
    throw new Error(`Slug "${input.slug}" вече съществува.`);
  }
  await createPost(input);
  revalidatePath('/blog');
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function updatePostAction(originalSlug: string, formData: FormData): Promise<void> {
  const input = readFormInput(formData);
  if (input.slug !== originalSlug) {
    const collision = await getPost(input.slug);
    if (collision) {
      throw new Error(`Slug "${input.slug}" вече съществува.`);
    }
  }
  await updatePost(originalSlug, input);
  revalidatePath('/blog');
  revalidatePath(`/blog/${originalSlug}`);
  if (input.slug !== originalSlug) revalidatePath(`/blog/${input.slug}`);
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function deletePostAction(slug: string): Promise<void> {
  await deletePost(slug);
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}
