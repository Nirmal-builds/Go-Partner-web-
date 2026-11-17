import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions | Commercial Logistics & Transport Agreement',
  description:
    'Review the official GO Partner Logistics Terms & Conditions for website and mobile apps. Covers digital marketplace intermediary scope, voluntary fare boost, commission, driver wallet rules, and cargo safety.',
  path: '/terms-and-conditions',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO Partner Logistics Terms and Conditions Agreement',
  keywords: [
    'GO Partner Logistics terms and conditions',
    'goods transportation terms of service',
    'commercial freight contract India',
    'voluntary fare boost policy',
    'driver partner commission tariff',
    'driver wallet recharge rules',
    'prohibited goods transport policy',
  ],
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
