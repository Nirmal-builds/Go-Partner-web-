'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  Shield,
  FileText,
  RefreshCw,
  Download,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/site';

interface LegalSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalSidebar({ isOpen, onClose }: LegalSidebarProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const legalPages = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy',
      icon: Shield,
      tag: 'DPDP Act 2023 & Play Policy',
      description:
        'Zero Data Sale Guarantee, background driver location disclosure, KYC documents, and account deletion rules.',
      downloadName: 'GO-Partner-Privacy-Policy.txt',
      content: `PRIVACY POLICY — GO PARTNER LOGISTICS (WEBSITE & MOBILE APPS)
Effective Date: November 16, 2026
Operating Entity: GO PARTNER SERVICES
Platform: GO Partner Logistics (Website, Customer App & Driver App)

ZERO DATA SALE GUARANTEE:
GO Partner Logistics does NOT sell, rent, lease, or trade personal data to third-party advertisers or brokers.

1. COMPLIANCE: Digital Personal Data Protection Act 2023, IT Act 2000, and Google Play Prominent Disclosure Policies.
2. BACKGROUND LOCATION (DRIVERS): Real-time tracking operates solely when drivers set duty status to "ONLINE" for load dispatch and live customer freight tracking.
3. GRIEVANCE REDRESSAL OFFICER: Waris Khan
Email: contact@gopartnerlogistics.in | Helpline: +91 81697 24736
Office: BEHRAM NAGAR, A.K. MARG, OPP. NATIONAL SCHOOL, OLD BANDRA EAST, MUMBAI – 400051, Maharashtra, India`,
    },
    {
      title: 'Terms of Service',
      href: '/terms-and-conditions',
      icon: FileText,
      tag: 'Indian Contract Act 1872',
      description:
        'Intermediary nature, voluntary customer fare boost, 5%-8% commission, driver wallet dues, and prohibited cargo rules.',
      downloadName: 'GO-Partner-Terms-and-Conditions.txt',
      content: `TERMS & CONDITIONS — GO PARTNER LOGISTICS (WEBSITE & MOBILE APPS)
Effective Date: November 16, 2026
Operating Entity: GO PARTNER SERVICES

1. PLATFORM SCOPE: Technology intermediary connecting consignors with independent commercial vehicle driver partners.
2. VOLUNTARY FARE BOOST: Optional customer incentive offer for faster driver acceptance during busy hours.
3. COMMISSION & WALLET: 5% on 2-Wheelers, 8% on Commercial Vehicles. Dues thresholds: 2W (₹250), Tempo (₹400), Heavy (₹1,000).
4. PROHIBITED CARGO: Zero-tolerance against narcotics, explosives, illegal cash, hazardous chemicals.
5. GRIEVANCE OFFICER: Waris Khan (contact@gopartnerlogistics.in | +91 81697 24736)`,
    },
    {
      title: 'Cancellation & Refund',
      href: '/refund',
      icon: RefreshCw,
      tag: '₹20 Goodwill & Wallet Rules',
      description:
        '₹0 free cancellation window, ₹20 driver goodwill compensation on late customer cancellation, and max 2 cancellations/day.',
      downloadName: 'GO-Partner-Cancellation-and-Refund-Policy.txt',
      content: `CANCELLATION & REFUND POLICY — GO PARTNER LOGISTICS
Effective Date: November 16, 2026
Operating Entity: GO PARTNER SERVICES

1. CANCELLATION RULES:
- Before driver dispatch: ₹0 fee (100% free while searching).
- Customer cancellation after driver travels 4+ km: ₹20 Driver Goodwill Compensation upon rebooking.
- Driver Daily Cancellation Limit: Maximum 2 driver-fault cancellations per calendar day.
2. REFUNDS: Instant for GO Wallet deductions; 2 to 4 business days to source bank via payment gateway.
3. GRIEVANCE OFFICER: Waris Khan (contact@gopartnerlogistics.in | +91 81697 24736)`,
    },
  ];

  const handleDownload = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 bg-brand-navy text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-orange" />
                <h2 className="text-base font-bold font-heading">Legal &amp; Policy Sidebar</h2>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Transparency &amp; Regulatory Compliance Desk
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close legal sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Document List */}
          <div className="p-6 space-y-5 flex-grow">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
              3 Primary Legal Documents
            </span>

            <div className="space-y-4">
              {legalPages.map((page) => {
                const Icon = page.icon;
                const isActive = pathname === page.href;

                return (
                  <div
                    key={page.href}
                    className={`rounded-lg border p-4 transition-all ${
                      isActive
                        ? 'border-brand-orange bg-orange-50/40 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center ${
                            isActive
                              ? 'bg-brand-orange text-white'
                              : 'bg-slate-100 text-brand-navy'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-brand-navy">{page.title}</h3>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {page.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {page.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <Link
                        href={page.href}
                        onClick={onClose}
                        className="flex-grow inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-brand-navy hover:bg-brand-orange text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        <span>View Document</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDownload(page.downloadName, page.content)}
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-semibold rounded-md transition-colors"
                        title="Download Text File"
                      >
                        <Download className="w-3.5 h-3.5 text-slate-500" />
                        <span>TXT</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compliance Info Box */}
            <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-brand-navy block">
                Compliance &amp; Grievance Office
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appointed pursuant to Section 5(1) of the Information Technology (Intermediary Guidelines) Rules:
              </p>
              <div className="pt-1 text-xs space-y-1 text-slate-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <a href="mailto:contact@gopartnerlogistics.in" className="hover:underline font-semibold">
                    contact@gopartnerlogistics.in
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <a href="tel:+918169724736" className="hover:underline font-semibold">
                    +91 81697 24736
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-semibold text-emerald-700"
                  >
                    {WHATSAPP_PHONE} (Message Only)
                  </a>
                </p>
                <p className="text-[11px] text-slate-500 pt-1">
                  Jurisdiction: Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="p-4 bg-slate-100 border-t border-slate-200 text-center text-[11px] text-slate-500">
            GO-PARTNER Digital Logistics &copy; 2026. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
