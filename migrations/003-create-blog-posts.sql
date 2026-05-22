-- Move blog posts from hardcoded src/app/blog/_posts.ts into the database so
-- they can be created/edited from the admin CMS. Seeded once from _posts.ts;
-- after the seed the .ts file becomes a dead artifact and can be deleted.

CREATE TABLE IF NOT EXISTS blog_posts (
  slug         VARCHAR(160) PRIMARY KEY,
  title        TEXT         NOT NULL,
  excerpt      TEXT         NOT NULL,
  cover        TEXT         NOT NULL,
  date_label   VARCHAR(32)  NOT NULL,  -- display string e.g. "26.04.2026"
  category     VARCHAR(64)  NOT NULL,
  read_min     INTEGER      NOT NULL,
  content      TEXT         NOT NULL,
  published    BOOLEAN      NOT NULL DEFAULT true,
  sort_at      TIMESTAMPTZ  NOT NULL DEFAULT now(),
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts (published);
CREATE INDEX IF NOT EXISTS blog_posts_sort_at_idx   ON blog_posts (sort_at DESC);
