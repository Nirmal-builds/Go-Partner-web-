/**
 * GO-PARTNER Official Site Configuration
 * Verified business information, contact details, and canonical URL settings.
 */

export const SITE_NAME = 'GO-PARTNER';
export const SITE_LEGAL_NAME = 'GO-PARTNER Logistics';
export const SITE_TAGLINE = 'Reliable Goods Transportation, From Pickup to Delivery';
export const SITE_MOTTO_HINDI = 'हर सफ़र का पार्टनर';

/**
 * Production Canonical Site URL.
 * Defaults to the verified production domain https://gopartner.in.
 * Localhost is strictly avoided for production canonical resolution.
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('localhost'))
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://gopartnerlogistics.in';

export const CONTACT_PHONE = '+91 81697 24736';
export const CONTACT_PHONE_RAW = '+918169724736';
export const CONTACT_EMAIL = 'contact@gopartnerlogistics.in';
export const GRIEVANCE_EMAIL = 'contact@gopartnerlogistics.in';

export const WHATSAPP_PHONE = '+91 81697 24736';
export const WHATSAPP_PHONE_RAW = '918169724736';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Go-Partner Team, I would like to enquire about your services.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

/**
 * Official Google Play Store App URL
 * TEMPORARILY COMMENTED OUT: Awaiting official Google Play Store URL upon app launch.
 * Replace '#' with the official package URL once live on Play Store.
 */
// export const GOOGLE_PLAY_URL = 'https://play.google.com/store/search?q=GO-PARTNER&c=apps';
export const GOOGLE_PLAY_URL = '#';

export const BUSINESS_ADDRESS = {
  streetAddress: 'Mumbai MMR Logistics & Transport Hub',
  addressLocality: 'Mumbai',
  addressRegion: 'Maharashtra',
  postalCode: '400001',
  addressCountry: 'IN',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/gopar.tner?cplk=cmg2enJwZTJ5cnVn',
  facebook: 'https://www.facebook.com/share/1Ea5p13wy9/',
  whatsapp: WHATSAPP_URL,
};

/**
 * Developer & Design Agency Credit
 * Official Website: https://www.ashsolutions.site/
 */
export const ASH_SOLUTION_URL =
  process.env.NEXT_PUBLIC_ASH_SOLUTION_URL || 'https://www.ashsolutions.site/';

