import sanitizeHtml from 'sanitize-html';

const ALLOWED_TAGS = [
  'p', 'br', 'hr', 'span', 'div',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'strong', 'em', 'b', 'i', 'u', 's', 'sub', 'sup', 'mark',
  'blockquote', 'q', 'cite',
  'ul', 'ol', 'li', 'dl', 'dt', 'dd',
  'a', 'img', 'figure', 'figcaption',
  'pre', 'code', 'kbd', 'samp',
  'table', 'thead', 'tbody', 'tr', 'td', 'th', 'caption',
  'iframe',
];

export function sanitizeBlogHtml(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'title'],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      iframe: ['src', 'width', 'height', 'allow', 'allowfullscreen', 'frameborder', 'title'],
      '*': ['class', 'id', 'style'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: { img: ['http', 'https', 'data'] },
    allowedIframeHostnames: [
      'www.youtube.com', 'youtube.com', 'youtu.be',
      'player.vimeo.com', 'vimeo.com',
      'open.spotify.com',
    ],
    allowedStyles: {
      '*': {
        color: [/.*/],
        'background-color': [/.*/],
        'text-align': [/^(left|right|center|justify)$/],
        'font-weight': [/.*/],
        'font-style': [/.*/],
        'text-decoration': [/.*/],
      },
    },
    transformTags: {
      // Force external links to open safely
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }, true),
    },
  });
}
