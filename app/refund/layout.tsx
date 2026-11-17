import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Cancellation & Refund Policy | Goodwill & Wallet Settlements',
  description:
    'Review the official GO Partner Logistics Cancellation & Refund Policy. Covers free cancellation windows, ₹20 driver goodwill compensation, driver daily cancellation limits, and wallet refund timelines.',
  path: '/refund',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO Partner Logistics Cancellation and Refund Policy',
  keywords: [
    'GO Partner Logistics refund policy',
    'goods transport cancellation rules',
    'driver goodwill compensation ₹20',
    'driver daily cancellation limit',
    'wallet refund processing timelines',
  ],
});

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
