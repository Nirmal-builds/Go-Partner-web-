import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | DPDP Act 2023 & Google Play Compliance',
  description:
    'Read the official GO Partner Logistics Privacy Policy for website, Customer App, and Driver App. Fully compliant with DPDP Act 2023, IT Act 2000, and Google Play Policies.',
  path: '/privacy-policy',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO Partner Logistics Data Protection and Privacy Standards',
  keywords: [
    'GO Partner Logistics privacy policy',
    'DPDP Act 2023 compliance',
    'Google Play background location disclosure',
    'logistics data protection India',
    'driver KYC policy',
    'goods transport privacy policy',
  ],
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
