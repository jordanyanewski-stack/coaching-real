/**
 * Best-effort BG (Cyrillic) → Latin transliteration for fields that must be
 * ASCII (e.g. myPOS customer name). Uses the official Streamlined System for
 * the Romanization of Bulgarian (държавен стандарт) where it matches; any
 * character not in the table is dropped.
 */

const MAP: Record<string, string> = {
  а: 'a',  б: 'b',  в: 'v',  г: 'g',  д: 'd',  е: 'e',  ж: 'zh', з: 'z',
  и: 'i',  й: 'y',  к: 'k',  л: 'l',  м: 'm',  н: 'n',  о: 'o',  п: 'p',
  р: 'r',  с: 's',  т: 't',  у: 'u',  ф: 'f',  х: 'h',  ц: 'ts', ч: 'ch',
  ш: 'sh', щ: 'sht', ъ: 'a',  ь: 'y',  ю: 'yu', я: 'ya',
};

export function transliterateToAscii(input: string): string {
  let out = '';
  for (const ch of input) {
    const lower = ch.toLowerCase();
    if (MAP[lower] !== undefined) {
      const replacement = MAP[lower];
      out += ch === lower ? replacement : replacement.charAt(0).toUpperCase() + replacement.slice(1);
    } else if (/[\x00-\x7F]/.test(ch)) {
      out += ch;
    } else {
      // Drop characters we don't have a mapping for (rare diacritics, emoji).
    }
  }
  return out;
}
