/**
 * One-shot seed: reads src/app/blog/_posts.ts and INSERTs every post into the
 * Neon blog_posts table.  Idempotent (skips slugs that already exist).
 *
 * Run with:
 *   node --experimental-strip-types --env-file=.env.local scripts/seed-blog-posts.ts
 */

import { neon } from '@neondatabase/serverless';
import { POSTS } from '../src/app/blog/_posts.ts';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set. Use --env-file=.env.local or export the var.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

/** Parse "DD.MM.YYYY" into an ISO timestamp at noon UTC (avoids TZ flips). */
function parseDateLabel(label: string): string {
  const [d, m, y] = label.split('.').map(Number);
  if (!d || !m || !y) {
    console.warn(`[seed] could not parse date "${label}"; falling back to now`);
    return new Date().toISOString();
  }
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0)).toISOString();
}

async function run() {
  console.log(`Seeding ${POSTS.length} posts...`);
  let inserted = 0;
  let skipped = 0;

  for (const post of POSTS) {
    const sortAt = parseDateLabel(post.date);
    const result = (await sql`
      INSERT INTO blog_posts (
        slug, title, excerpt, cover, date_label, category, read_min, content, published, sort_at
      )
      VALUES (
        ${post.slug},
        ${post.title},
        ${post.excerpt},
        ${post.cover},
        ${post.date},
        ${post.category},
        ${post.readMin},
        ${post.content},
        true,
        ${sortAt}
      )
      ON CONFLICT (slug) DO NOTHING
      RETURNING slug
    `) as { slug: string }[];

    if (result.length > 0) {
      console.log(`  + ${post.slug}`);
      inserted++;
    } else {
      console.log(`  · ${post.slug} (already exists, skipped)`);
      skipped++;
    }
  }

  console.log(`\nDone: ${inserted} inserted, ${skipped} skipped.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
