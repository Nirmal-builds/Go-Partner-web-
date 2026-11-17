'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  IndianRupee,
  RefreshCw,
  Truck,
  Wallet,
  AlertCircle,
  AlertTriangle,
  CreditCard,
  Ban,
  UserCheck,
  Shield,
  FileText,
  Zap,
  Phone,
  Mail,
} from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL, CONTACT_PHONE, CONTACT_PHONE_RAW, WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/site';

export default function RefundPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Cancellation & Refunds', path: '/refund' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO Partner Logistics Cancellation & Refund Policy',
    url: `${SITE_URL}/refund`,
    description:
      'Official Cancellation, Refund, Goodwill Compensation, and Driver Wallet Policy for GO Partner Logistics website and mobile apps.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `CANCELLATION & REFUND POLICY — GO PARTNER LOGISTICS (WEBSITE & MOBILE APPS)

Effective Date: November 16, 2026
Last Updated: November 16, 2026
Platform Name: GO Partner Logistics ("GO Partner", "Platform", "We", "Us", "Our")
Operating Entity: GO PARTNER SERVICES
Applicable To: GO Partner Website, GO Partner Customer App, and GO Partner Driver App

------------------------------------------------------------------------
OVERVIEW & FAIR DISPATCH GUARANTEE
This Cancellation & Refund Policy governs customer booking cancellations, driver goodwill compensations, wallet balance adjustments, platform commission rules, and digital refund processing for GO Partner Logistics.
------------------------------------------------------------------------

1. CANCELLATION BY CUSTOMER & GOODWILL COMPENSATION
- Free Cancellation Before Driver Dispatch: ₹0 cancellation fee while your request is searching for nearby vehicles or before driver dispatch.
- Customer-Side Cancellation Goodwill Compensation: If a Customer cancels due to a customer-side issue (such as wrong pickup location, wrong vehicle selected, goods not ready, or plan changed) AFTER the Driver has travelled 4 km or more toward the pickup location (or arrived at pickup), a Goodwill Compensation of ₹20 becomes eligible upon rebooking.
- Zero Goodwill on Driver Fault: No goodwill compensation is charged if cancellation is caused by Driver delay, vehicle breakdown, or driver-side fault.

2. DRIVER PARTNER CANCELLATION RULES & DAILY LIMITS
- Driver Daily Cancellation Limit: To ensure reliable service for Customers, Driver Partners are subject to a maximum of 2 driver-fault cancellations per calendar day (resetting at 12:00 AM), unless waived by Admin review. Once reached, new driver-fault cancellations are restricted for that day.
- Automatic Order Reassignment: If a driver cancels, the customer's request is instantly re-routed to the next nearest available commercial vehicle at no added fee to the customer.
- Anti-Circumvention Ban: Accepting a booking on GO Partner, arriving at pickup, cancelling on the app, and completing the trip privately for cash to bypass platform fees is strictly prohibited. Automated 3-Strike Anti-Fraud rules apply.

3. VOLUNTARY FARE BOOST (PRIORITY EXTRA OFFER) POLICY
- Optional Customer Fare Boost: Customers have the optional facility to voluntarily add an extra fare amount ("Extra Offer / Priority Boost") to encourage faster driver acceptance during busy periods.
- 100% Optional & Non-Reversible: Adding this extra amount is completely voluntary. Once accepted by a driver and the trip has commenced, the boosted fare cannot be disputed or reversed.

4. REFUND METHODS & PROCESSING TIMELINES
- GO Wallet Balances: Deductions or credits are refunded instantly to your GO Wallet balance (0-60 seconds).
- Digital Payments (UPI / NetBanking / Cards): Processed securely via RBI-licensed payment aggregators (such as Razorpay / Cashfree) back to the original source bank account within 2 to 4 business days.
- Cash on Delivery (COD) Trips: Settle directly between Customer and Driver upon trip completion; no online refund is required.

5. DRIVER WALLET COMMISSION & RECHARGE THRESHOLDS
- Platform Commission: 5% on 2-Wheeler Bike/Scooter trips and 8% on Commercial Vehicle trips.
- Cash Trip Dues Thresholds: Drivers must maintain wallet dues below their category threshold to accept new bookings:
  * 2-Wheeler: ₹250 limit
  * 3-Wheeler / Tempo: ₹400 limit
  * Heavy Commercial Vehicles: ₹1,000 limit

6. HIGHWAY TOLLS & WAITING TIME
- Highway Tolls: Tolls displayed as "Toll Included / Toll Free on Road" are factored into quoted fares and reimbursed 100% to drivers under platform calculation rules.
- Free Waiting Time: Standard 15 minutes free loading/unloading time applies at pickup and drop locations.

7. GRIEVANCE REDRESSAL OFFICER & CONTACT
In accordance with Indian Law, for any cancellation or refund dispute, contact:
- Grievance Officer: Waris Khan
- Entity Name: GO Partner Logistics (GO PARTNER SERVICES)
- Legal & Compliance Email: contact@gopartnerlogistics.in
- Customer & Driver Support Email: contact@gopartnerlogistics.in
- Helpline Phone Number: +91 81697 24736
- Registered Office Address: BEHRAM NAGAR, A.K. MARG, OPP. NATIONAL SCHOOL, OLD BANDRA EAST, MUMBAI – 400051, Maharashtra, India

© 2026 GO Partner Logistics (GO PARTNER SERVICES). All Rights Reserved.`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'GO-Partner-Cancellation-and-Refund-Policy.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'customer-cancel', number: '01', title: 'Customer Cancellations & Goodwill' },
    { id: 'driver-cancel',   number: '02', title: 'Driver Cancellation Limits' },
    { id: 'fare-boost',      number: '03', title: 'Voluntary Fare Boost Rules' },
    { id: 'refund-timeline', number: '04', title: 'Refund Methods & Timelines' },
    { id: 'wallet-rules',    number: '05', title: 'Driver Wallet & Commission' },
    { id: 'tolls-waiting',   number: '06', title: 'Highway Tolls & Waiting Time' },
    { id: 'grievance',       number: '07', title: 'Disputes & Grievance Desk' },
  ];

  return (
    <div className="w-full flex flex-col bg-brand-light-bg/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-navy">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Cancellation &amp; Refunds</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-orange text-xs font-bold border border-orange-200 mb-2">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Fair Dispatch &amp; Goodwill Protection Policy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Transparent cancellation guidelines, ₹20 driver goodwill compensation, wallet dues limits, and refund processing timelines.
              </p>
            </div>

            {/* Legal Tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 md:border-none pb-2 md:pb-0">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/refund"
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
              >
                Cancellation &amp; Refunds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE BANNER */}
      <section className="bg-brand-navy text-white py-3.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
          <AlertTriangle className="w-4 h-4 text-brand-orange flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">
            By requesting a booking, dispatching cargo, or driving on GO Partner, you agree to be bound by this Cancellation &amp; Refund Policy.
          </span>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-subtle sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <div className="mb-5 pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Legal &amp; Compliance Hub
                  </span>
                  <div className="space-y-1.5">
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        <span>Privacy Policy</span>
                      </span>
                    </Link>

                    <Link
                      href="/terms-and-conditions"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Terms &amp; Conditions</span>
                      </span>
                    </Link>

                    <Link
                      href="/refund"
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Cancellation &amp; Refund</span>
                      </span>
                    </Link>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                  Policy Table of Contents
                </span>
                <nav className="space-y-1 text-xs">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center gap-2 px-2.5 py-1.5 font-medium text-slate-600 hover:text-brand-orange hover:bg-slate-50 rounded transition-colors"
                    >
                      <span className="font-mono text-slate-400 text-[10px]">{sec.number}</span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    {downloadSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Downloaded Plain Text</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Policy (.txt)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 p-3.5 rounded-md bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-xs mb-1">
                    <UserCheck className="w-4 h-4 text-brand-orange" />
                    <span>Grievance Officer: Waris Khan</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">
                    Formal statutory redressal under Indian Law. Acknowledged within 48 hours.
                  </p>
                  <a
                    href="mailto:contact@gopartnerlogistics.in"
                    className="text-[11px] font-semibold text-brand-navy hover:text-brand-orange underline block truncate"
                  >
                    contact@gopartnerlogistics.in
                  </a>
                </div>
              </div>
            </div>

            {/* Document Body */}
            <div className="lg:col-span-8 space-y-10">

              {/* Meta Card */}
              <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-subtle">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Operating Entity</span>
                    <span className="font-bold text-slate-800">GO PARTNER SERVICES</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Goodwill Charge</span>
                    <span className="font-bold text-slate-800">₹20 upon late rebooking</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Refund Turnaround</span>
                    <span className="font-bold text-slate-800">Instant (Wallet) / 2-4d (Bank)</span>
                  </div>
                </div>
              </div>

              {/* SECTION 1 */}
              <article id="customer-cancel" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Customer Cancellations &amp; Goodwill Compensation
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Customers may cancel a goods transport booking directly through the GO Partner App or website by selecting an accurate cancellation reason.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md">
                    <strong className="text-emerald-900 block mb-1 text-sm">Free Cancellation Window (₹0 Fee)</strong>
                    <span className="text-emerald-800">
                      Cancellation is 100% free while the status displays &quot;Searching for Driver&quot; or before a Driver Partner has travelled toward the pickup location.
                    </span>
                  </div>

                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-md space-y-2">
                    <strong className="text-brand-orange block text-sm">₹20 Driver Goodwill Compensation Rule</strong>
                    <p className="text-slate-700">
                      If a Customer cancels due to a customer-side issue (such as wrong pickup location, wrong vehicle selected, goods not ready, or change of plan) <strong>AFTER the Driver has travelled 4 km or more</strong> toward pickup (or arrived at pickup), a <strong>Goodwill Compensation of ₹20</strong> becomes eligible upon rebooking.
                    </p>
                    <p className="text-slate-600 text-[11px] italic">
                      This nominal amount compensates the driver partner for fuel consumed and time spent navigating to the pickup point. No goodwill compensation is charged if cancellation was caused by driver delay or fault.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="driver-cancel" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Driver Cancellation Limits &amp; Reliability Rules
                  </h2>
                </div>

                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1 text-sm">Driver Daily Cancellation Limit</strong>
                    <p>
                      To ensure dependable service for Customers, Driver Partners are subject to a daily cancellation limit: <strong>maximum 2 driver-fault cancellations per calendar day</strong> (resetting at 12:00 AM midnight), unless waived or reset upon Admin review. Once the limit is reached, further driver-fault cancellations are restricted for that day.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1 text-sm">Instant Auto-Reassignment</strong>
                    <p>
                      If an assigned driver cancels due to an emergency or vehicle issue, the customer&apos;s booking is instantly re-routed to the next nearest available commercial vehicle at no penalty or extra fee.
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-900">
                    <strong className="block mb-1 text-sm">Anti-Circumvention &amp; Private Trip Ban (3-Strike System)</strong>
                    <p>
                      Accepting a booking on GO Partner, arriving at pickup, cancelling the order on the app, and completing the trip privately for cash to bypass platform fees is strictly prohibited. Our automated <strong>3-Strike Anti-Fraud system</strong> enforces warnings, penalties, or permanent account ban.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="fare-boost" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Voluntary Customer Fare Boost (Priority Extra Offer)
                  </h2>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-700 leading-relaxed space-y-2">
                  <p>
                    If nearby Driver Partners are busy or have not yet accepted a pending order, the Customer has the optional facility to voluntarily add an extra fare amount (<strong>&quot;Extra Offer / Priority Boost&quot;</strong>) at their sole discretion to encourage faster driver acceptance.
                  </p>
                  <p className="font-semibold text-brand-navy">
                    Adding this extra amount is 100% voluntary and never mandatory. Once added by the Customer and accepted by a Driver Partner, the boosted amount becomes part of the agreed final fare (subject to platform commission) and cannot be disputed or reversed once the trip starts.
                  </p>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="refund-timeline" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Refund Methods &amp; Processing Timelines
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">GO Wallet Balance</strong>
                    <span className="font-mono text-emerald-600 font-bold block mb-1">Instant (0–60 seconds)</span>
                    <span className="text-slate-600">Wallet balance deductions are credited back instantly to your in-app wallet upon valid cancellation.</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">UPI &amp; NetBanking</strong>
                    <span className="font-mono text-brand-orange font-bold block mb-1">2 to 4 Business Days</span>
                    <span className="text-slate-600">Processed securely through RBI-licensed payment gateways back to the original bank account.</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Cash on Delivery (COD)</strong>
                    <span className="font-mono text-slate-700 font-bold block mb-1">Zero Monetary Exchange</span>
                    <span className="text-slate-600">Cash trips are settled in person only upon cargo delivery; canceled cash trips require no monetary refund.</span>
                  </div>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="wallet-rules" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Driver Wallet Rules, Joining Fee &amp; Commission
                  </h2>
                </div>

                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Joining Fee &amp; Commission Tariff</strong>
                    <ul className="list-disc list-inside space-y-1">
                      <li>One-time Driver registration/joining fee: currently ₹100.</li>
                      <li>Platform Service Commission: <strong>5% on 2-Wheeler Bike/Scooter trips</strong> and <strong>8% on Commercial Vehicles</strong>.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Cash Trip Dues &amp; Wallet Limits</strong>
                    <p className="mb-2">For cash-collected trips, commission is debited from the Driver&apos;s wallet balance. Drivers must keep dues below their vehicle limit by recharging:</p>
                    <div className="grid grid-cols-3 gap-2 text-center font-medium">
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block text-brand-navy">2-Wheeler</span>
                        <span className="font-mono text-brand-orange font-bold">₹250 limit</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block text-brand-navy">3-Wheeler / Tempo</span>
                        <span className="font-mono text-brand-orange font-bold">₹400 limit</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block text-brand-navy">Heavy Commercial</span>
                        <span className="font-mono text-brand-orange font-bold">₹1,000 limit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="tolls-waiting" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Highway Tolls &amp; Loading Waiting Time
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Highway Toll Inclusions</strong>
                    <span className="text-slate-600">Where marked &quot;Toll Included / Toll Free on Road&quot;, applicable highway tolls are already factored into the booking fare and reimbursed 100% to drivers.</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Free Waiting Time</strong>
                    <span className="text-slate-600">Standard 15 minutes free loading and unloading waiting time applies. Extended delays beyond this threshold may incur displayed waiting charges.</span>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="grievance" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Disputes &amp; Grievance Redressal Desk
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For any billing dispute, incorrect cancellation charge, or refund inquiry, our dedicated compliance and grievance desk is available:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-md p-5 text-xs space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Grievance Officer</span>
                      <span className="font-bold text-slate-800 text-sm">Waris Khan</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Operating Entity</span>
                      <span className="font-bold text-slate-800">GO Partner Logistics (GO PARTNER SERVICES)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Legal &amp; Compliance Email</span>
                      <a href="mailto:contact@gopartnerlogistics.in" className="font-bold text-brand-navy hover:underline">
                        contact@gopartnerlogistics.in
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Customer &amp; Driver Support</span>
                      <a href="mailto:contact@gopartnerlogistics.in" className="font-bold text-brand-navy hover:underline">
                        contact@gopartnerlogistics.in
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Helpline Phone</span>
                      <a href={`tel:${CONTACT_PHONE_RAW}`} className="font-bold text-brand-navy hover:underline">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Jurisdiction</span>
                      <span className="font-bold text-slate-800">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Registered Office Address</span>
                    <span className="font-medium text-slate-700">
                      BEHRAM NAGAR, A.K. MARG, OPP. NATIONAL SCHOOL, OLD BANDRA EAST, MUMBAI – 400051, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="text-center pt-4 text-xs text-slate-400 border-t border-slate-100">
                  &copy; 2026 GO Partner Logistics (GO PARTNER SERVICES). All Rights Reserved.
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
