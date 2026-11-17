'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Shield,
  MapPin,
  CreditCard,
  Smartphone,
  Server,
  UserCheck,
  FileText,
  RefreshCw,
  AlertTriangle,
  Lock,
  Eye,
  Trash2,
  Phone,
  Mail,
} from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL, CONTACT_PHONE, CONTACT_PHONE_RAW, WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/site';

export default function PrivacyPolicyPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO Partner Logistics Privacy Policy',
    url: `${SITE_URL}/privacy-policy`,
    description:
      'Official Privacy Policy for GO Partner Logistics website, Customer App, and Driver App compliant with DPDP Act 2023, IT Act 2000, and Google Play Policies.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `PRIVACY POLICY — GO PARTNER LOGISTICS (WEBSITE & MOBILE APPS)

Effective Date: November 16, 2026
Last Updated: November 16, 2026
Platform Name: GO Partner Logistics ("GO Partner", "We", "Us", "Our")
Operating Entity: GO PARTNER SERVICES
Website / App Covered: GO Partner Website, GO Partner Customer App, and GO Partner Driver App

------------------------------------------------------------------------
ZERO DATA SALE GUARANTEE
GO Partner Logistics does NOT sell, rent, lease, or trade your personal data to any third-party advertisers, data brokers, or marketing agencies. Your personal information is processed strictly to provide goods transportation, booking, safety, and logistics support services.
------------------------------------------------------------------------

1. INTRODUCTION & LEGAL COMPLIANCE
This Privacy Policy explains how GO Partner Logistics collects, uses, stores, shares, and protects personal information when you visit our website or use the GO Partner Customer Application or GO Partner Driver Application.

We comply with applicable Indian and international platform laws, including:
- The Digital Personal Data Protection Act, 2023 (DPDP Act, India)
- The Information Technology Act, 2000 (Section 43A) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)
- The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
- Google Play Developer Distribution Agreement & User Data / Prominent Disclosure Policies
- Applicable Motor Vehicles and Goods Transport guidelines in India

By accessing our website, registering an account, booking a trip, or driving on our platform, you agree to the practices described in this Privacy Policy.

2. INFORMATION WE COLLECT

A. Customer / Consignor Information
- Identity & Contact Details: Full name, mobile phone number (for OTP login and trip coordination), and optional email address.
- Pickup & Drop Location Data: GPS coordinates, street addresses, landmarks, pickup points, extra stops, and drop-off locations.
- Consignment & Receiver Details: Goods category (cartons, electronics, furniture, hardware, wholesale cargo, etc.), approximate payload weight, and receiver/consignee name and mobile number.
- Payment & Transaction History: Booking IDs, invoices, trip fares, highway toll/parking breakdown, promo codes, wallet coins, and payment transaction references. (We do NOT store raw debit/credit card numbers, CVV, or UPI PINs.)
- Support & Feedback Data: Trip ratings, customer reviews, complaint tickets, and helpline communication records.

B. Driver Partner / Vehicle Operator Information
- Identity & KYC Documents: Full name, mobile number, profile photograph, Driving Licence (DL number and front/back images), Aadhaar/PAN or permanent address verification records (where legally required for onboarding).
- Commercial Vehicle Records: Vehicle category (2-Wheeler Bike/Scooter, 3-Wheeler Tempo/Loader, Tata Ace, Bolero Pickup, Truck), Vehicle Registration Number, Registration Certificate (RC), Commercial Vehicle Insurance, Fitness Certificate, and Pollution Under Control (PUC) Certificate.
- Payout & Financial Details: Bank account number, IFSC code, account holder name, or UPI ID for transferring trip earnings and wallet settlements.
- Location Data: Real-time foreground and background GPS coordinates during active duty (explained in Section 3).
- Duty, Trip & Compliance Logs: Online/offline logs, trip acceptance/completion history, waiting timer logs, cancellation records, and SOS alerts.

C. Website Cookies & Device Information
- Technical Data: Device model, operating system version, app version, IP address, browser type, and crash/diagnostic logs to improve app stability and security.
- Cookies (Website Only): Essential cookies used on our website to remember basic session preferences and keep the site secure and fast. You can disable cookies from your browser settings at any time.

3. MANDATORY LOCATION DATA & BACKGROUND TRACKING DISCLOSURE (GOOGLE PLAY COMPLIANCE)

A. Driver App — Background Location Access
The GO Partner Driver Application collects and transmits real-time geographic location data even when the app is closed, minimized, running in the background, or when the mobile screen is locked.

Why Background Location is required for Drivers:
1. Nearby Load Dispatch: To match drivers with nearby customer cargo bookings (0–5 km radius) even while using Google Maps navigation or keeping the phone in a pocket.
2. Live Freight Tracking: To provide senders and receivers continuous real-time vehicle tracking and accurate Estimated Time of Arrival (ETA) for cargo safety.
3. Fair Distance, Waiting & Toll Calculation: To verify exact route kilometers, waiting duration at pickup/drop, and applicable highway toll reimbursements accurately.
4. Emergency SOS Safety: In case of an accident, breakdown, or safety threat, Emergency SOS sends live background GPS coordinates immediately to our safety desk and emergency contacts.

When Location Tracking Stops:
Driver background location tracking operates ONLY when the Driver explicitly sets their duty status to "ONLINE" or is completing an active delivery. The moment the Driver switches to "OFFLINE" or logs out, background location tracking stops immediately. We NEVER track drivers during off-duty hours.

B. Customer App — Foreground Location Only
For Customers, location permission is used ONLY in the foreground while you actively use the app to pin pickup or drop addresses. We NEVER track Customer location in the background.

4. DEVICE PERMISSIONS WE MAY REQUEST
Depending on the feature you use, the app may request permission for:
- Location (GPS): For pickup/drop selection, navigation, and live trip tracking.
- Camera & Photo Gallery / Storage: For Drivers to upload KYC/vehicle documents (DL, RC, Insurance, PUC) or proof of cargo delivery, and for Customers/Drivers to attach photos in Support Tickets.
- Notifications & Audio Alerts: For instant new-booking alarms, driver arrival alerts, trip status updates, and cancellation notifications.
- Phone / Dialer Access: When you tap "Call Care", "Call Helpline", or call your assigned driver/customer, your phone's native dialer opens to connect the call. We do NOT access your personal phone contacts list or call recordings without explicit permission.

5. HOW WE USE YOUR INFORMATION
We process collected data strictly on lawful grounds (user consent and service contract fulfillment) to:
- Create and verify Customer and Driver accounts via OTP and KYC checks.
- Match cargo transport requests with nearby verified vehicles and drivers.
- Calculate transparent upfront fares, platform service fees, applicable waiting charges, and highway toll inclusions.
- Process digital payments, driver payouts, wallet settlements, and GST/trip invoices.
- Provide 24x7 Customer Care and Driver Partner support, resolve disputes, and handle Emergency SOS alerts.
- Detect and prevent fraud, fake bookings, prohibited goods transport, account sharing, and policy abuse.
- Comply with Indian tax, accounting, transport, and law-enforcement requirements.

6. THIRD-PARTY SERVICES & DATA SHARING
We only share minimum required data with trusted service partners under strict confidentiality:
- Mapping & Navigation Partners: Google Maps Platform (for map display, route distance, geocoding, and ETA).
- Payment Gateways: RBI-licensed payment aggregators (such as Razorpay / Cashfree / UPI gateways) following PCI-DSS encryption standards.
- Cloud Hosting & SMS/OTP Providers: Encrypted cloud servers and telecom OTP gateways to deliver verification codes and store operational records securely.
- Between Trip Participants: During an active booking, the Customer sees the assigned Driver's name, photo, vehicle number, live location, and contact number; the Driver sees the Customer's/receiver's name, pickup/drop address, cargo category, and contact number solely to complete that delivery.
- Legal & Government Authorities: Only when strictly required by a valid court order, statutory notice, or lawful police/government request under Indian law.

7. PROHIBITED GOODS & SAFETY POLICY
Users and Driver Partners are strictly prohibited from using GO Partner to transport illegal narcotics, explosives, flammable or hazardous chemicals, unlicensed firearms, ammunition, stolen goods, currency, or any item banned under Indian law. Violations may lead to immediate permanent suspension and mandatory reporting to law enforcement authorities.

8. DATA SECURITY & RETENTION
- Security Safeguards: All data transferred between our apps/website and servers is protected using HTTPS / TLS encryption, role-based access control, and secure database storage.
- Data Retention: Active account records are retained while your account remains active. Financial invoices, trip ledgers, and tax/GST records are retained only for the period mandated under Indian tax and corporate laws (typically up to 8 years for financial audit records), after which data is securely anonymized or deleted.

9. CHILDREN'S PRIVACY
GO Partner Logistics services and Driver onboarding are strictly intended for individuals aged 18 years and above. We do not knowingly collect personal data from minors under 18 years of age. If we learn that a minor has submitted personal data, we will delete it promptly.

10. YOUR PRIVACY RIGHTS (DPDP ACT, 2023)
Every Customer and Driver Partner has the right to:
- Right to Access: View your profile, KYC status, trip history, and wallet/payment records inside the app.
- Right to Correction & Updating: Update your name, contact details, saved addresses, vehicle documents, or bank/UPI details.
- Right to Withdraw Consent & Erasure: Request account deactivation and permanent deletion of your personal data (subject to completion of pending trips, settlement of dues, and statutory tax retention rules).
- Right to Grievance Redressal: Escalate any privacy concern directly to our designated Grievance Officer.

11. ACCOUNT & DATA DELETION REQUEST PROCESS
You can permanently delete your GO Partner account and associated personal data using either method below:
1. In-App Method: Open Profile / Settings -> Tap "Privacy, Legal & Data Protection" -> Select "Delete My Account" -> Verify via OTP.
2. Email Method: Send an email from your registered email or mention your registered mobile number to contact@gopartnerlogistics.in with the subject line: "Account Deletion Request - [Your Mobile Number]".

Upon verification and settlement of any active trips or wallet dues, personal identifiers are permanently erased from active databases within 7 working days.

12. UPDATES TO THIS PRIVACY POLICY
We may update this Privacy Policy from time to time to reflect new features, legal requirements, or security improvements. The updated version will always be published on this website page with the revised "Last Updated" date.

13. GRIEVANCE REDRESSAL OFFICER & CONTACT INFORMATION
In accordance with the Digital Personal Data Protection Act, 2023 and the IT Rules, 2021, if you have any questions, privacy requests, or complaints regarding your personal data, please contact:

- Grievance & Data Protection Officer: Waris Khan
- Entity Name: GO Partner Logistics (GO PARTNER SERVICES)
- Privacy & Compliance Email: contact@gopartnerlogistics.in
- Customer & Driver Support Email: contact@gopartnerlogistics.in
- Helpline Phone Number: +91 81697 24736
- Registered Office Address: BEHRAM NAGAR, A.K. MARG, OPP. NATIONAL SCHOOL, OLD BANDRA EAST, MUMBAI – 400051, Maharashtra, India
- Response Time: Complaint acknowledgment within 48 hours and final resolution within 30 days.

© 2026 GO Partner Logistics (GO PARTNER SERVICES). All Rights Reserved.`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'GO-Partner-Privacy-Policy.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'compliance',   number: '01', title: 'Introduction & Legal Compliance' },
    { id: 'collection',   number: '02', title: 'Information We Collect' },
    { id: 'location',     number: '03', title: 'Background Location & Google Play' },
    { id: 'permissions',  number: '04', title: 'Device Permissions' },
    { id: 'usage',        number: '05', title: 'How We Use Your Information' },
    { id: 'sharing',      number: '06', title: 'Third-Party Services & Sharing' },
    { id: 'prohibited',   number: '07', title: 'Prohibited Goods Policy' },
    { id: 'security',     number: '08', title: 'Data Security & Retention' },
    { id: 'children',     number: '09', title: "Children's Privacy (18+)" },
    { id: 'rights',       number: '10', title: 'Your Privacy Rights (DPDP Act)' },
    { id: 'deletion',     number: '11', title: 'Account & Data Deletion' },
    { id: 'updates',      number: '12', title: 'Policy Updates' },
    { id: 'grievance',    number: '13', title: 'Grievance Officer & Contact' },
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
            <span className="text-slate-800 font-medium">Privacy Policy</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Data Sale Guarantee</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                GO Partner Logistics Website, Customer App, and Driver App. Fully compliant with the DPDP Act 2023 and Google Play User Data policies.
              </p>
            </div>

            {/* Legal Tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 md:border-none pb-2 md:pb-0">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
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
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Cancellation &amp; Refunds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZERO DATA SALE BANNER */}
      <section className="bg-emerald-600 text-white py-3.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
          <Lock className="w-4 h-4 text-emerald-200 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            <strong>ZERO DATA SALE GUARANTEE:</strong> We do NOT sell, rent, lease, or trade personal data to advertisers or brokers.
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
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
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
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                        <span>Cancellation &amp; Refund</span>
                      </span>
                    </Link>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                  Document Table of Contents
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
                        <span>Download Full Policy (.txt)</span>
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
                    Formal statutory redressal under DPDP Act 2023. Acknowledged within 48 hours.
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
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Platform Name</span>
                    <span className="font-bold text-slate-800">GO Partner Logistics</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Scope</span>
                    <span className="font-bold text-slate-800">Web, Customer &amp; Driver Apps</span>
                  </div>
                </div>
              </div>

              {/* SECTION 1 */}
              <article id="compliance" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Introduction &amp; Legal Compliance
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This Privacy Policy explains how <strong>GO Partner Logistics</strong> (&quot;GO Partner&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;), operated by <strong>GO PARTNER SERVICES</strong>, collects, uses, stores, shares, and protects personal information when you visit our website or use the GO Partner Customer Application or GO Partner Driver Application.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-md p-4 space-y-2">
                  <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Applicable Legal Frameworks:</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>The Digital Personal Data Protection Act, 2023 (DPDP Act, India)</li>
                    <li>The Information Technology Act, 2000 (Section 43A) &amp; SPDI Rules, 2011</li>
                    <li>The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
                    <li>Google Play Developer Distribution Agreement &amp; User Data / Prominent Disclosure Policies</li>
                    <li>Applicable Motor Vehicles and Commercial Goods Transport guidelines in India</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500 italic">
                  By accessing our website, registering an account, booking a trip, or driving on our platform, you agree to the practices described in this Privacy Policy.
                </p>
              </article>

              {/* SECTION 2 */}
              <article id="collection" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Information We Collect
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-md p-4">
                    <h3 className="text-sm font-bold text-brand-navy mb-2 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-brand-orange" />
                      <span>A. Customer / Consignor Information</span>
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li><strong>Identity &amp; Contact:</strong> Full name, mobile phone number (for OTP login and trip coordination), and optional email address.</li>
                      <li><strong>Pickup &amp; Drop Location Data:</strong> Precise GPS coordinates, street addresses, landmarks, pickup points, extra stops, and drop-off locations.</li>
                      <li><strong>Consignment &amp; Receiver Details:</strong> Goods category (cartons, electronics, furniture, hardware, wholesale cargo, etc.), approximate payload weight, receiver name, and mobile number.</li>
                      <li><strong>Payment &amp; Transaction History:</strong> Booking IDs, invoices, trip fares, highway toll/parking breakdown, promo codes, wallet coins, and payment references. <em>(We do NOT store raw debit/credit card numbers, CVV, or UPI PINs.)</em></li>
                      <li><strong>Support &amp; Feedback:</strong> Trip ratings, customer reviews, complaint tickets, and helpline communication records.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-md p-4">
                    <h3 className="text-sm font-bold text-brand-navy mb-2 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-brand-blue" />
                      <span>B. Driver Partner / Vehicle Operator Information</span>
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li><strong>Identity &amp; KYC Documents:</strong> Full name, mobile number, profile photograph, Driving Licence (DL number &amp; front/back images), Aadhaar/PAN or permanent address verification records where legally required.</li>
                      <li><strong>Commercial Vehicle Records:</strong> Vehicle category (2-Wheeler Bike/Scooter, 3-Wheeler Tempo/Loader, Tata Ace, Bolero Pickup, Truck), Vehicle Registration Number, Registration Certificate (RC), Commercial Vehicle Insurance, Fitness Certificate, and Pollution Under Control (PUC) Certificate.</li>
                      <li><strong>Payout &amp; Financial Details:</strong> Bank account number, IFSC code, account holder name, or UPI ID for transferring trip earnings and wallet settlements.</li>
                      <li><strong>Location Data:</strong> Real-time foreground and background GPS coordinates during active duty (detailed in Section 3).</li>
                      <li><strong>Duty &amp; Trip Logs:</strong> Online/offline logs, trip acceptance/completion history, waiting timer logs, cancellation records, and SOS alerts.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-md p-4">
                    <h3 className="text-sm font-bold text-brand-navy mb-2 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-slate-600" />
                      <span>C. Website Cookies &amp; Device Information</span>
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li><strong>Technical Data:</strong> Device model, operating system version, app version, IP address, browser type, and crash/diagnostic logs.</li>
                      <li><strong>Cookies (Website Only):</strong> Essential session cookies used on our website to keep the site fast and secure. You can disable cookies from browser settings anytime.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="location" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Mandatory Location Data &amp; Background Tracking Disclosure
                  </h2>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-xs text-amber-900">
                  <strong>Google Play Prominent Disclosure Compliance:</strong> This section clearly discloses our background location collection practices for driver partners and customers.
                </div>

                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h3 className="font-bold text-brand-navy text-sm mb-1.5">A. Driver App — Background Location Access</h3>
                    <p className="text-xs text-slate-600 mb-2">
                      The <strong>GO Partner Driver Application</strong> collects and transmits real-time geographic location data even when the app is closed, minimized, running in the background, or when the mobile screen is locked.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                        <strong className="text-brand-navy block mb-1">1. Nearby Load Dispatch</strong>
                        Matches drivers with nearby customer cargo bookings (0–5 km radius) even while using Google Maps navigation or keeping the phone in a pocket.
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                        <strong className="text-brand-navy block mb-1">2. Live Freight Tracking</strong>
                        Provides senders and receivers continuous real-time vehicle tracking and accurate Estimated Time of Arrival (ETA) for cargo safety.
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                        <strong className="text-brand-navy block mb-1">3. Distance, Waiting &amp; Toll</strong>
                        Verifies exact route kilometers, waiting duration at pickup/drop, and applicable highway toll reimbursements accurately.
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                        <strong className="text-brand-navy block mb-1">4. Emergency SOS Safety</strong>
                        In case of an accident or breakdown, Emergency SOS sends live background GPS coordinates immediately to our safety desk.
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900">
                      <strong>When Location Tracking Stops:</strong> Driver background tracking operates <u>ONLY</u> when the Driver explicitly sets their duty status to &quot;ONLINE&quot; or is completing an active delivery. The moment the Driver switches to &quot;OFFLINE&quot; or logs out, location tracking stops immediately. We NEVER track drivers during off-duty hours.
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <h3 className="font-bold text-brand-navy text-sm mb-1.5">B. Customer App — Foreground Location Only</h3>
                    <p className="text-xs text-slate-600">
                      For Customers, location permission is used <strong>ONLY in the foreground</strong> while you actively use the app to pin pickup or drop addresses. We NEVER track Customer location in the background.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="permissions" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Device Permissions We May Request
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">📍 Location (GPS)</strong>
                    <span className="text-slate-600">For pickup/drop selection, navigation, route distance computation, and live trip tracking.</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">📷 Camera &amp; Storage</strong>
                    <span className="text-slate-600">For Drivers to upload KYC/vehicle documents (DL, RC, Insurance, PUC) or proof of delivery, and for Support Tickets.</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">🔔 Notifications &amp; Audio</strong>
                    <span className="text-slate-600">For instant new-booking audio alarms, driver arrival alerts, trip status updates, and cancellation notifications.</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">📞 Phone / Dialer Access</strong>
                    <span className="text-slate-600">Opens native dialer to connect calls to driver, customer, or care. We do NOT access your personal address book or call recordings.</span>
                  </div>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="usage" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We process collected data strictly on lawful grounds (user consent and service contract fulfillment) to:
                </p>
                <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                  <li>Create and verify Customer and Driver accounts via OTP and KYC checks.</li>
                  <li>Match cargo transport requests with nearby verified commercial vehicles and drivers.</li>
                  <li>Calculate transparent upfront fares, platform service fees, applicable waiting charges, and highway toll inclusions.</li>
                  <li>Process digital payments, driver payouts, wallet settlements, and GST/trip invoices.</li>
                  <li>Provide 24x7 Customer Care and Driver Partner support, resolve disputes, and handle Emergency SOS alerts.</li>
                  <li>Detect and prevent fraud, fake bookings, prohibited goods transport, account sharing, and policy abuse.</li>
                  <li>Comply with Indian tax, accounting, transport, and law-enforcement requirements.</li>
                </ul>
              </article>

              {/* SECTION 6 */}
              <article id="sharing" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Third-Party Services &amp; Data Sharing
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We only share the minimum required data with trusted service partners under strict confidentiality:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>Mapping &amp; Navigation:</strong> Google Maps Platform (for map display, route distance, geocoding, and ETA).
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>Payment Gateways:</strong> RBI-licensed payment aggregators (such as Razorpay / Cashfree / UPI gateways) adhering to PCI-DSS standards.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>Cloud &amp; Telecom Gateways:</strong> Encrypted cloud servers and telecom OTP gateways to deliver verification codes and store records securely.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>Between Trip Participants:</strong> During an active booking, the Customer sees the assigned Driver&apos;s name, photo, vehicle number, live location, and contact; the Driver sees pickup/drop address, cargo type, and contact number solely to complete delivery.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>Legal Authorities:</strong> Only when strictly required by a valid court order, statutory notice, or lawful police/government request under Indian law.
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="prohibited" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Prohibited Goods &amp; Safety Policy
                  </h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-xs text-red-900 leading-relaxed">
                  Users and Driver Partners are strictly prohibited from using GO Partner to transport illegal narcotics, explosives, flammable or hazardous chemicals, unlicensed firearms, ammunition, stolen goods, currency, or any item banned under Indian law. Violations lead to immediate permanent suspension and mandatory reporting to law enforcement authorities.
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="security" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Data Security &amp; Retention
                  </h2>
                </div>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong>Security Safeguards:</strong> All data transferred between our apps/website and servers is protected using HTTPS / TLS encryption, role-based access control, and secure database storage.
                  </p>
                  <p>
                    <strong>Data Retention:</strong> Active account records are retained while your account remains active. Financial invoices, trip ledgers, and tax/GST records are retained only for the period mandated under Indian tax and corporate laws (typically up to 8 years for financial audit records), after which data is securely anonymized or deleted.
                  </p>
                </div>
              </article>

              {/* SECTION 9 */}
              <article id="children" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Children&apos;s Privacy (18+ Only)
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GO Partner Logistics services and Driver onboarding are strictly intended for individuals aged 18 years and above. We do not knowingly collect personal data from minors under 18 years of age. If we learn that a minor has submitted personal data, we will delete it promptly.
                </p>
              </article>

              {/* SECTION 10 */}
              <article id="rights" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Your Privacy Rights (DPDP Act, 2023)
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong className="text-brand-navy block mb-1">Right to Access</strong>
                    View your profile, KYC status, trip history, and wallet/payment records inside the app.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong className="text-brand-navy block mb-1">Right to Correction</strong>
                    Update your name, contact details, saved addresses, vehicle documents, or bank/UPI details.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong className="text-brand-navy block mb-1">Right to Withdraw &amp; Erasure</strong>
                    Request account deactivation and permanent deletion of your personal data.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong className="text-brand-navy block mb-1">Right to Grievance Redressal</strong>
                    Escalate any privacy concern directly to our designated Grievance Officer.
                  </div>
                </div>
              </article>

              {/* SECTION 11 */}
              <article id="deletion" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Account &amp; Data Deletion Request Process
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You can permanently delete your GO Partner account and associated personal data using either method below:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy text-sm block mb-1">Method 1: In-App Deletion</strong>
                    <span className="text-slate-600">Open Profile / Settings &rarr; Tap &quot;Privacy, Legal &amp; Data Protection&quot; &rarr; Select &quot;Delete My Account&quot; &rarr; Verify via OTP.</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy text-sm block mb-1">Method 2: Email Deletion Request</strong>
                    <span className="text-slate-600">Send an email from your registered email address or mention your registered mobile number to:</span>
                    <div className="mt-2 font-mono text-xs bg-white p-2.5 rounded border border-slate-200 text-brand-navy font-bold">
                      To: contact@gopartnerlogistics.in<br />
                      Subject: Account Deletion Request - [Your Mobile Number]
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Upon verification and settlement of any active trips or wallet dues, personal identifiers are permanently erased from active databases within 7 working days.
                </p>
              </article>

              {/* SECTION 12 */}
              <article id="updates" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Updates to this Privacy Policy
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect new features, legal requirements, or security improvements. The updated version will always be published on this website page with the revised &quot;Last Updated&quot; date.
                </p>
              </article>

              {/* SECTION 13 */}
              <article id="grievance" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Grievance Redressal Officer &amp; Contact Information
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Rules, 2021, if you have any questions, privacy requests, or complaints regarding your personal data, please contact:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-md p-5 text-xs space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Grievance &amp; Data Protection Officer</span>
                      <span className="font-bold text-slate-800 text-sm">Waris Khan</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Operating Entity</span>
                      <span className="font-bold text-slate-800">GO Partner Logistics (GO PARTNER SERVICES)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Privacy &amp; Compliance Email</span>
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
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Official Helpline Phone</span>
                      <a href={`tel:${CONTACT_PHONE_RAW}`} className="font-bold text-brand-navy hover:underline">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Statutory Response Window</span>
                      <span className="font-bold text-slate-800">48h acknowledgment, 30d resolution</span>
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
