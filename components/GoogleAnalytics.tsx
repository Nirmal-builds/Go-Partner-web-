'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId) return;

    const checkConsent = () => {
      try {
        const saved = localStorage.getItem('go_partner_cookie_consent_v1');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.analytics === false) {
            // Disable GA tracking per user cookie preference
            // @ts-expect-error GA disable window property
            window[`ga-disable-${measurementId}`] = true;
          } else {
            // @ts-expect-error GA disable window property
            window[`ga-disable-${measurementId}`] = false;
          }
        }
      } catch {
        // Ignore storage access errors
      }
    };

    checkConsent();

    window.addEventListener('cookie_consent_updated', checkConsent);
    return () => window.removeEventListener('cookie_consent_updated', checkConsent);
  }, [measurementId]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
