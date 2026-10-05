// Single source of truth for iCode's legal/company identity.
// Apple (organization enrollment) and Google Play (organization account) match
// these against the D-U-N-S record, so legalName + address must be written
// EXACTLY as registered with ARBK and Dun & Bradstreet.
// Empty fields are simply not rendered.

export const COMPANY = {
  brand: 'iCode',
  legalName: 'iCode LLC',      // TODO: exact registered name (e.g. "iCode L.L.C." / "iCode SH.P.K.")
  regNumber: '',               // TODO: NUI / business registration no. (ARBK)
  vatNumber: '',               // optional: VAT / fiscal number
  duns: '',                    // optional: D-U-N-S number
  founded: 2016,

  address: {
    street: '',                // TODO: street + number, e.g. "Rr. Adem Jashari, nr. 12"
    postalCode: '60000',
    city: 'Gjilan',
    country: { sq: 'Kosovë', en: 'Kosovo' },
    countryCode: 'XK',
  },

  phone: '+383 48 331 333',
  phoneHref: '+38348331333',
  email: 'info@icode-ks.com',
  officeEmail: 'office@icode-ks.com',
  supportEmail: 'info@icode-ks.com', // consider a dedicated support@icode-ks.com
  privacyEmail: 'info@icode-ks.com', // consider a dedicated privacy@icode-ks.com
  hours: { sq: 'Hën–Pre, 09:00–17:00 (CET)', en: 'Mon–Fri, 09:00–17:00 (CET)' },

  website: 'https://icode-ks.com',
  socials: [
    'https://www.linkedin.com/company/icode-ks',
    'https://x.com/icode_ks',
    'https://www.facebook.com/icode.ks',
    'https://www.instagram.com/icode_ks',
  ],

  // Google Search Console "HTML tag" token (Play Console org website verification).
  // Paste only the content value, e.g. 'AbC123...'. DNS TXT verification also works.
  googleSiteVerification: '',

  // Apps published under iCode's own developer accounts (shown on Support and
  // Delete-account pages). Example: { name: 'iData+', platforms: 'iOS · Android' }
  apps: [],

  legalUpdated: { iso: '2026-10-05', sq: '5 tetor 2026', en: 'October 5, 2026' },
};

export function addressLine(lang = 'sq') {
  const a = COMPANY.address;
  return [a.street, [a.postalCode, a.city].filter(Boolean).join(' '), a.country[lang]]
    .filter(Boolean)
    .join(', ');
}
