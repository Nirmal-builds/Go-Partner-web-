'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X, Check, Settings2 } from 'lucide-react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'go_partner_cookie_consent_v1';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Delay slightly for smooth page entrance
        const timer = setTimeout(() => setShowBanner(true), 900);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setAnalyticsEnabled(parsed.analytics ?? true);
      }
    } catch {
      setShowBanner(true);
    }

    // Listen for custom trigger from Footer "Cookie Settings"
    const handleOpenSettings = () => {
      setShowPreferences(true);
      setShowBanner(false);
    };

    window.addEventListener('open_cookie_settings', handleOpenSettings);
    return () => window.removeEventListener('open_cookie_settings', handleOpenSettings);
  }, []);

  const saveConsent = (analytics: boolean) => {
    const preferences: CookiePreferences = {
      essential: true, // Always required
      analytics,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      window.dispatchEvent(
        new CustomEvent('cookie_consent_updated', { detail: preferences })
      );
    } catch {
      // Ignore local storage errors
    }

    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => saveConsent(true);
  const handleEssentialOnly = () => saveConsent(false);

  if (!mounted) return null;

  return (
    <>
      {/* 1. FLOATING BOTTOM BANNER */}
      {showBanner && !showPreferences && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-50 bg-brand-navy/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                  <span>Cookie &amp; Privacy Notice</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                    Zero Data Sale
                  </span>
                </h3>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="text-slate-400 hover:text-white transition-colors p-1 -mr-1"
                  aria-label="Close and accept essential cookies only"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We use essential cookies to maintain site security and session performance.
                As per our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-brand-orange underline underline-offset-2 hover:text-orange-400 font-medium"
                >
                  Privacy Policy
                </Link>
                , we guarantee <strong>zero sale or trading of your personal data</strong> to advertisers.
              </p>

              {/* Action Buttons */}
              <div className="pt-2.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                >
                  Accept All
                </button>

                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
                >
                  Essential Only
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5 ml-auto"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* 2. CUSTOMIZE PREFERENCES MODAL */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-800 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="cookie-modal-title" className="text-base font-bold text-brand-navy font-heading">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compliant with the DPDP Act 2023 &amp; IT Rules 2011.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-3.5 text-xs">
              {/* Category 1: Essential Cookies */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm font-bold text-brand-navy">
                      Essential Site Cookies
                    </strong>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      Always Active
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Necessary for core website navigation, quote request token validation, rate-limiting protection, and secure server routing. Cannot be switched off.
                  </p>
                </div>
                <div className="text-emerald-600 pt-1">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <strong className="text-sm font-bold text-brand-navy block">
                    Analytics &amp; Performance Cookies
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    Helps us understand page load speeds and visitor flow anonymously to improve freight calculator performance. No marketing or advertiser profiling.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Enable performance and analytics cookies"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
                </label>
              </div>
            </div>

            {/* Zero Data Guarantee Note */}
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p>
                <strong>Zero Data Sale Guarantee:</strong> We do NOT sell, rent, or trade your IP or session data to any third-party brokers or advertisers.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <Link
                href="/privacy-policy"
                className="text-xs text-slate-500 hover:text-brand-navy underline"
              >
                Read Full Privacy Policy
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent(analyticsEnabled)}
                  className="px-4 py-2 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
