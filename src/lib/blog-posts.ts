import { getDb } from '@/lib/db';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;       // display string "DD.MM.YYYY"
  category: string;
  readMin: number;
  content: string;
  published: boolean;
  sortAt: string;
};

type Row = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date_label: string;
  category: string;
  read_min: number;
  content: string;
  published: boolean;
  sort_at: string;
};

function fromRow(row: Row): Post {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    cover: row.cover,
    date: row.date_label,
    category: row.category,
    readMin: row.read_min,
    content: row.content,
    published: row.published,
    sortAt: row.sort_at,
  };
}

/** Public list — published posts only, newest first. */
export async function listPublishedPosts(): Promise<Post[]> {
  const sql = getDb();
  const rows = (await sql`
    SELECT slug, title, excerpt, cover, date_label, category, read_min, content, published, sort_at
    FROM blog_posts
    WHERE published = true
    ORDER BY sort_at DESC
  `) as Row[];
  return rows.map(fromRow);
}

/** Admin list — everything, drafts included. */
export async function listAllPosts(): Promise<Post[]> {
  const sql = getDb();
  const rows = (await sql`
    SELECT slug, title, excerpt, cover, date_label, category, read_min, content, published, sort_at
    FROM blog_posts
    ORDER BY sort_at DESC
  `) as Row[];
  return rows.map(fromRow);
}

export async function getPost(slug: string): Promise<Post | null> {
  const sql = getDb();
  const rows = (await sql`
    SELECT slug, title, excerpt, cover, date_label, category, read_min, content, published, sort_at
    FROM blog_posts
    WHERE slug = ${slug}
    LIMIT 1
  `) as Row[];
  return rows[0] ? fromRow(rows[0]) : null;
}

export interface UpsertPostInput {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: string;
  readMin: number;
  content: string;
  published: boolean;
  sortAt?: string;  // ISO date; defaults to now() server-side
}

export async function createPost(input: UpsertPostInput): Promise<void> {
  const sql = getDb();
  await sql`
    INSERT INTO blog_posts (slug, title, excerpt, cover, date_label, category, read_min, content, published, sort_at)
    VALUES (
      ${input.slug},
      ${input.title},
      ${input.excerpt},
      ${input.cover},
      ${input.date},
      ${input.category},
      ${input.readMin},
      ${input.content},
      ${input.published},
      ${input.sortAt ?? new Date().toISOString()}
    )
  `;
}

export async function updatePost(slug: string, input: UpsertPostInput): Promise<void> {
  const sql = getDb();
  await sql`
    UPDATE blog_posts SET
      slug       = ${input.slug},
      title      = ${input.title},
      excerpt    = ${input.excerpt},
      cover      = ${input.cover},
      date_label = ${input.date},
      category   = ${input.category},
      read_min   = ${input.readMin},
      content    = ${input.content},
      published  = ${input.published},
      sort_at    = COALESCE(${input.sortAt ?? null}, sort_at),
      updated_at = now()
    WHERE slug = ${slug}
  `;
}

export async function deletePost(slug: string): Promise<void> {
  const sql = getDb();
  await sql`DELETE FROM blog_posts WHERE slug = ${slug}`;
}
