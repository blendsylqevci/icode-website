// Single source of truth for iCode's legal/company identity.
// Apple (organization enrollment) and Google Play (organization account) match
// these against the D-U-N-S record, so legalName + address must be written
// EXACTLY as registered with ARBK and Dun & Bradstreet.
// Empty fields are simply not rendered.

export const COMPANY = {
  brand: 'iCode',
  legalName: 'ICODE L.L.C.',   // as registered (D-U-N-S / Play Console developer name)
  regNumber: '',               // TODO: NUI / business registration no. (ARBK)
  vatNumber: '',               // optional: VAT / fiscal number
  duns: '',                    // optional: D-U-N-S number
  founded: 2016,

  address: {
    street: 'Rr. Adem Jashari, Flora Center, Kati III', // as on Google Maps — must match D-U-N-S
    postalCode: '60000',
    city: 'Gjilan',
    country: { sq: 'Kosovë', en: 'Kosovo' },
    countryCode: 'XK',
  },

  geo: { lat: 42.4662797, lng: 21.4684537 },
  // Google Maps place "iCode". The embed is only loaded after cookie consent.
  mapsUrl: 'https://www.google.com/maps?ftid=0x1354f3aac8dafb2f:0x42a2942f7cd67583',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d21.4684537!3d42.4662797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f3aac8dafb2f%3A0x42a2942f7cd67583!2siCode!5e0!3m2!1sen!2s!4v1791216930204!5m2!1sen!2s',

  phone: '+383 48 331 333',
  phoneHref: '+38348331333',
  email: 'info@icode-ks.com',
  officeEmail: 'office@icode-ks.com',
  supportEmail: 'info@icode-ks.com', // consider a dedicated support@icode-ks.com
  privacyEmail: 'info@icode-ks.com', // consider a dedicated privacy@icode-ks.com
  hours: { sq: 'Hën–Pre, 09:00–17:00 (CET)', en: 'Mon–Fri, 09:00–17:00 (CET)' },

  website: 'https://www.icode-ks.com',
  socials: [
    'https://www.linkedin.com/company/icode-ks',
    'https://x.com/icode_ks',
    'https://www.facebook.com/icode.ks',
    'https://www.instagram.com/icode_ks',
  ],

  // Google Search Console "HTML tag" token (Play Console org website verification).
  // Paste only the content value, e.g. 'AbC123...'. DNS TXT verification also works.
  googleSiteVerification: 'jkvIBSGQXRnO7DJzw1TvWNPpnmQvlHwtq_504OQpM-E',

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
