import type { CSSProperties } from 'react';

type CampaignContactProps = {
  language?: 'bg' | 'en';
  color?: string;
  align?: 'left' | 'center';
  style?: CSSProperties;
};

const CONTACT_EMAIL = 'info@coachingreallive.com';
const CONTACT_PHONE_DISPLAY = '+359 88 5841441';
const CONTACT_PHONE_LINK = '+359885841441';

export function CampaignContact({
  language = 'bg',
  color = 'inherit',
  align = 'center',
  style,
}: CampaignContactProps) {
  return (
    <p
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: '4px 8px',
        margin: 0,
        color,
        fontSize: '13px',
        lineHeight: 1.6,
        textAlign: align,
        ...style,
      }}
    >
      <span>{language === 'en' ? 'Questions?' : 'За въпроси:'}</span>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}
      >
        {CONTACT_EMAIL}
      </a>
      <span aria-hidden="true">·</span>
      <a
        href={`tel:${CONTACT_PHONE_LINK}`}
        aria-label={`${language === 'en' ? 'Telephone' : 'Телефон'} ${CONTACT_PHONE_DISPLAY}`}
        style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}
      >
        {language === 'en' ? 'Tel:' : 'Тел:'} {CONTACT_PHONE_DISPLAY}
      </a>
    </p>
  );
}
