'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Truck,
  Ban,
  IndianRupee,
  Scale,
  Shield,
  FileText,
  RefreshCw,
  Clock,
  Wallet,
  Zap,
  Phone,
  Mail,
  UserCheck,
} from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL, CONTACT_PHONE, CONTACT_PHONE_RAW, WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/site';

export default function TermsAndConditionsPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO Partner Logistics Terms & Conditions',
    url: `${SITE_URL}/terms-and-conditions`,
    description:
      'Official Terms & Conditions for GO Partner Logistics website, Customer App, and Driver App operated by GO PARTNER SERVICES.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `TERMS & CONDITIONS — GO PARTNER LOGISTICS (WEBSITE & MOBILE APPS)

Effective Date: November 16, 2026
Last Updated: November 16, 2026
Platform Name: GO Partner Logistics ("GO Partner", "Platform", "We", "Us", "Our")
Operating Entity: GO PARTNER SERVICES
Applicable To: GO Partner Website, GO Partner Customer App, and GO Partner Driver App

------------------------------------------------------------------------
PLEASE READ THESE TERMS & CONDITIONS CAREFULLY BEFORE USING THE WEBSITE OR APPS. BY REGISTERING AN ACCOUNT, BOOKING A VEHICLE, OR ACCEPTING TRIPS ON GO PARTNER, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS.
------------------------------------------------------------------------

1. NATURE OF PLATFORM & SERVICE SCOPE
GO Partner Logistics is a digital goods transportation and commercial logistics technology marketplace operated by GO PARTNER SERVICES. Our platform connects Customers/Consignors who need to transport commercial cargo, parcels, or goods with independent commercial vehicle owners and Driver Partners (2-Wheelers, 3-Wheeler Tempos, Mini Trucks, Pickups, and Commercial Trucks).

- GO Partner acts solely as a technology facilitator and booking intermediary and does not itself own commercial transport vehicles or employ Driver Partners.
- Driver Partners operate strictly as independent third-party commercial transport contractors and not as employees, agents, or legal representatives of GO Partner Logistics.

2. USER ELIGIBILITY & ACCOUNT REGISTRATION
- Minimum Age: Only individuals aged 18 years or older and legally competent to enter into binding contracts under the Indian Contract Act, 1872 may register or use the Platform.
- Accurate Information: Users must register using a valid mobile number (verified via OTP) and provide true, accurate, and complete details.
- Driver Partner KYC Requirements: Before accepting trips, Driver Partners must submit valid and active documents including Driving Licence (DL), Vehicle Registration Certificate (RC), Commercial Vehicle Insurance, Fitness Certificate, Pollution Under Control (PUC) Certificate, and verified Bank/UPI payout details.
- Account Security: You are solely responsible for all activity occurring under your registered mobile account. Sharing accounts or transferring driver IDs to unauthorized drivers is strictly prohibited and will lead to permanent termination.

3. BOOKING, FARES, VOLUNTARY FARE BOOST, HIGHWAY TOLLS & WAITING CHARGES
- Upfront Fare Calculation: Fares shown at the time of booking are calculated based on vehicle category, route distance, loading/unloading options, extra stops, applicable surge/night rules, and highway toll estimates.
- Voluntary Customer Fare Boost (Priority Extra Offer): If nearby Driver Partners are busy or have not yet accepted a pending booking, the Customer has the optional facility to voluntarily add an extra fare amount ("Extra Offer / Priority Boost") at their own sole discretion to encourage faster driver acceptance. Adding this extra amount is 100% optional and never mandatory. Once added by the Customer and accepted by a Driver Partner, the boosted amount becomes part of the agreed final fare (subject to standard platform commission) and cannot be disputed or reversed once the trip starts.
- Highway Toll Policy: Where displayed as "Toll Included / Toll Free on Road", applicable route highway tolls are already factored into the customer's quoted booking fare, and Drivers receive toll reimbursement in accordance with platform calculation rules.
- Waiting Time Rules: Standard free loading/unloading waiting time applies as shown in the booking screen (default 15 minutes free waiting). Extended waiting beyond the free threshold may attract waiting charges as displayed in the app.
- Extra Stops & Route Changes: Any additional drop points, route deviations, or manual loading/unloading services requested after trip confirmation may revise the final payable fare.

4. PAYMENT TERMS, PLATFORM COMMISSION & DRIVER WALLET RULES
- Customer Payment Modes: Customers may pay via approved digital payment methods (UPI, Cards, NetBanking, Wallets) processed through RBI-licensed payment gateways, or via Cash directly to the Driver Partner on trip completion.
- Joining Fee & Platform Commission:
  - New Driver Partners may be subject to a one-time registration/joining fee (currently ₹100 or as updated in the Platform Tariff).
  - Platform Service Commission is deducted on the total trip fare (including any voluntary customer extra offer) as configured by the Platform (currently 5% on 2-Wheeler Bike/Scooter trips and 8% on Commercial Vehicle trips, subject to updates notified via the Driver App / Notice Board).
- Cash Trip Dues & Wallet Recharge Thresholds: For cash-collected trips, the Customer pays the full fare directly to the Driver, and the applicable Platform Commission is recorded as a due balance in the Driver's wallet. To continue accepting new orders, Drivers must keep dues below their vehicle category limit (2-Wheeler: ₹250; 3-Wheeler/Tempo: ₹400; Heavy Commercial Vehicles: ₹1,000) by recharging their wallet.
- Online Trip Payouts: For online/prepaid trips, after deducting applicable Platform Commission, the Driver's net earnings are credited to their Platform Wallet for withdrawal to their verified bank/UPI account.

5. CANCELLATION POLICY, DAILY LIMITS & GOODWILL COMPENSATION
- Customer Cancellations: Customers may cancel a booking through the app by selecting an accurate cancellation reason.
- Driver Goodwill Compensation: If a Customer cancels due to a customer-side issue (such as wrong pickup location, wrong vehicle selected, goods not ready, or plan changed) AFTER the Driver has travelled 4 km or more toward the pickup location (or arrived at pickup), a Goodwill Compensation (currently ₹20 as per platform policy) becomes eligible upon rebooking. No goodwill applies if cancellation is caused by Driver delay or fault.
- Driver Daily Cancellation Limit: To ensure reliable service for Customers, Driver Partners are subject to a daily cancellation limit (default: maximum 2 driver-fault cancellations per calendar day, resetting at 12:00 AM), unless waived or reset by Admin review. Once the daily limit is reached, new driver-fault cancellations are restricted for that day.
- Anti-Circumvention & Private Trip Ban: Accepting a booking on GO Partner, arriving at the pickup location, cancelling the order on the app, and completing the trip privately for cash to bypass platform fees is strictly prohibited. Our automated 3-Strike Anti-Fraud system may issue warnings, fines, or permanent account suspension for circumvention.

6. STRICT PROHIBITED GOODS POLICY & INDEMNIFICATION
Customers and Driver Partners are STRICTLY PROHIBITED from booking, carrying, or transporting any of the following items:
- Illegal drugs, narcotics, psychotropic substances, or contraband
- Explosives, fireworks, ammunition, unlicensed firearms, or weapons
- Hazardous, toxic, radioactive, or highly flammable chemicals/fuels
- Stolen goods, counterfeit currency, smuggled items, or wildlife products
- Live animals (unless explicitly permitted under compliant transport rules) or human remains
- Unbilled/illegal cash or high-value bullion without statutory e-way/tax documentation

Driver Right to Inspect & Refuse:
Driver Partners have full authority to visually inspect outer packaging and immediately refuse any consignment suspected of containing prohibited or unsafe goods without penalty.

Statutory Owner & Platform Indemnification:
The Customer/Consignor shall be 100% legally and financially responsible for the contents of the consignment. The Customer and Driver agree to fully indemnify and hold harmless GO Partner Logistics, GO PARTNER SERVICES, and its owners/operators against all police cases, customs/GST penalties, seizure, fines, lawsuits, losses, or third-party claims arising from misdeclared, illegal, or prohibited cargo.

7. CARGO SAFETY, LOSS OR DAMAGE & LIMITATION OF LIABILITY
- Proper Packaging: Customers must ensure all goods are properly packed, sealed, and labeled for commercial transit.
- E-Way Bill & Tax Compliance: Wherever required under GST laws, the Customer/Consignor must provide valid invoices and E-Way Bills to the Driver before dispatch.
- Transit Liability: While we strive to onboard verified drivers and offer live GPS tracking and SOS support, GO Partner acts strictly as a technology marketplace. Customers transporting high-value, fragile, or sensitive goods are strongly advised to obtain independent transit cargo insurance.
- Maximum Liability: To the fullest extent permitted by Indian law, GO Partner Logistics shall not be liable for any indirect, incidental, consequential, or business-loss damages, and any proven direct platform liability shall not exceed the platform service fee collected for the specific disputed booking.

8. USER CONDUCT & ZERO TOLERANCE POLICY
- Both Customers and Driver Partners must treat each other respectfully without abusive language, harassment, intoxication, or threats.
- Misuse of the Emergency SOS button, submission of forged KYC documents, fake support tickets, or tampering with GPS/app functionality will result in immediate account suspension and legal action.

9. ACCOUNT SUSPENSION & TERMINATION
GO Partner reserves the right to temporarily suspend or permanently terminate any Customer or Driver account without prior notice if:
- You violate any clause of these Terms & Conditions or Privacy Policy;
- KYC/vehicle documents expire or are found to be forged/invalid;
- Wallet dues remain unpaid beyond permissible limits; or
- Fraud, safety complaints, or prohibited goods transport is detected.

Users may also request voluntary account deletion at any time as outlined in our Privacy Policy, subject to completion of active trips and clearance of pending wallet dues.

10. INTELLECTUAL PROPERTY RIGHTS
All names, logos ("GO Partner"), trademarks, software code, app design, pricing engines, graphics, and website content belong exclusively to GO PARTNER SERVICES. Unauthorized copying, reverse engineering, scraping, or commercial reuse is strictly prohibited.

11. FORCE MAJEURE
GO Partner Logistics shall not be held liable for delays, cancellations, or service interruptions caused by events beyond reasonable control, including natural disasters, heavy rains/floods, traffic blockades, strikes, riots, government restrictions, telecom/internet outages, or power failures.

12. GOVERNING LAW, DISPUTE RESOLUTION & JURISDICTION
These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to the use of the GO Partner Website or Apps shall first be attempted to be resolved amicably through our Grievance Officer within 30 days. Unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.

13. CHANGES TO TERMS & CONDITIONS
We may revise these Terms & Conditions from time to time. Updated Terms will be posted on this page with the revised "Last Updated" date. Continued use of our Website or Apps after updates constitutes acceptance of the revised Terms.

14. CONTACT & GRIEVANCE REDRESSAL DETAILS
For any questions, booking disputes, or legal/compliance notices regarding these Terms & Conditions, please contact:

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
    element.download = 'GO-Partner-Terms-and-Conditions.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'nature',       number: '01', title: 'Platform Nature & Scope' },
    { id: 'eligibility',  number: '02', title: 'User Eligibility & KYC' },
    { id: 'fares',        number: '03', title: 'Fares, Boost, Tolls & Waiting' },
    { id: 'payments',     number: '04', title: 'Payments, Commission & Wallets' },
    { id: 'cancellation', number: '05', title: 'Cancellations & Goodwill' },
    { id: 'prohibited',   number: '06', title: 'Prohibited Goods Policy' },
    { id: 'liability',    number: '07', title: 'Cargo Safety & Liability' },
    { id: 'conduct',      number: '08', title: 'User Conduct & Zero Tolerance' },
    { id: 'suspension',   number: '09', title: 'Suspension & Termination' },
    { id: 'ip',           number: '10', title: 'Intellectual Property' },
    { id: 'force-majeure',number: '11', title: 'Force Majeure' },
    { id: 'governing',    number: '12', title: 'Governing Law & Disputes' },
    { id: 'changes',      number: '13', title: 'Changes to Terms' },
    { id: 'grievance',    number: '14', title: 'Contact & Grievance Desk' },
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
            <span className="text-slate-800 font-medium">Terms &amp; Conditions</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
                <Scale className="w-3.5 h-3.5" />
                <span>Legally Binding Agreement under Indian Contract Act 1872</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Operating terms for GO Partner Website, Customer Application, and Driver Partner Application.
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
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
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

      {/* WARNING BANNER */}
      <section className="bg-brand-navy text-white py-3.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
          <AlertTriangle className="w-4 h-4 text-brand-orange flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">
            By registering an account, booking a vehicle, or accepting trips on GO Partner, you agree to be legally bound by these Terms.
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
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5" />
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
                  Terms Table of Contents
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
                        <span>Download Terms (.txt)</span>
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
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Platform</span>
                    <span className="font-bold text-slate-800">GO Partner Logistics</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Governing Law</span>
                    <span className="font-bold text-slate-800">Laws of India</span>
                  </div>
                </div>
              </div>

              {/* SECTION 1 */}
              <article id="nature" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Nature of Platform &amp; Service Scope
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>GO Partner Logistics</strong> is a digital goods transportation and commercial logistics technology marketplace operated by <strong>GO PARTNER SERVICES</strong>. Our platform connects Customers/Consignors who need to transport commercial cargo, parcels, or goods with independent commercial vehicle owners and Driver Partners (2-Wheelers, 3-Wheeler Tempos, Mini Trucks, Pickups, and Commercial Trucks).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Technology Facilitator</strong>
                    GO Partner acts solely as a technology facilitator and booking intermediary. It does not own commercial transport vehicles or employ Driver Partners.
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Independent Contractors</strong>
                    Driver Partners operate strictly as independent third-party commercial contractors and not as employees, agents, or legal representatives of GO Partner.
                  </div>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="eligibility" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    User Eligibility &amp; Account Registration
                  </h2>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5 list-disc list-inside leading-relaxed">
                  <li><strong>Minimum Age:</strong> Only individuals aged 18 years or older and legally competent to enter into binding contracts under the Indian Contract Act, 1872 may register or use the Platform.</li>
                  <li><strong>Accurate Information:</strong> Users must register using a valid mobile number (verified via OTP) and provide true, accurate, and complete details.</li>
                  <li><strong>Driver Partner KYC Requirements:</strong> Before accepting trips, Driver Partners must submit valid and active documents including Driving Licence (DL), Vehicle Registration Certificate (RC), Commercial Vehicle Insurance, Fitness Certificate, Pollution Under Control (PUC) Certificate, and verified Bank/UPI payout details.</li>
                  <li><strong>Account Security:</strong> You are solely responsible for all activity occurring under your registered mobile account. Sharing accounts or transferring driver IDs to unauthorized drivers is strictly prohibited and will lead to permanent termination.</li>
                </ul>
              </article>

              {/* SECTION 3 */}
              <article id="fares" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Booking, Fares, Voluntary Fare Boost, Highway Tolls &amp; Waiting Charges
                  </h2>
                </div>

                <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy text-sm block mb-1">Upfront Fare Calculation</strong>
                    Fares shown at the time of booking are calculated based on vehicle category, route distance, loading/unloading options, extra stops, applicable surge/night rules, and highway toll estimates.
                  </div>

                  <div className="p-4 bg-orange-50/70 border border-orange-200 rounded-md">
                    <div className="flex items-center gap-2 text-brand-orange font-bold text-sm mb-1.5">
                      <Zap className="w-4 h-4" />
                      <span>Voluntary Customer Fare Boost (Priority Extra Offer)</span>
                    </div>
                    <p className="text-slate-700">
                      If nearby Driver Partners are busy or have not yet accepted a pending booking, the Customer has the optional facility to voluntarily add an extra fare amount (<strong>&quot;Extra Offer / Priority Boost&quot;</strong>) at their own sole discretion to encourage faster driver acceptance.
                    </p>
                    <p className="text-slate-700 mt-2 font-medium">
                      Adding this extra amount is 100% optional and never mandatory. Once added by the Customer and accepted by a Driver Partner, the boosted amount becomes part of the agreed final fare (subject to standard platform commission) and cannot be disputed or reversed once the trip starts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                      <strong className="text-brand-navy block mb-1">Highway Toll Policy</strong>
                      Where displayed as &quot;Toll Included / Toll Free on Road&quot;, applicable route tolls are already factored into the quoted fare, and Drivers receive toll reimbursement under platform calculation rules.
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                      <strong className="text-brand-navy block mb-1">Waiting Time Rules</strong>
                      Standard free loading/unloading waiting time applies as shown in the booking screen (default 15 minutes free waiting). Extended waiting beyond this may attract displayed waiting charges.
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                      <strong className="text-brand-navy block mb-1">Extra Stops &amp; Changes</strong>
                      Any additional drop points, route deviations, or manual loading/unloading services requested after trip confirmation may revise the final payable fare.
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="payments" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Payment Terms, Platform Commission &amp; Driver Wallet Rules
                  </h2>
                </div>

                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Customer Payment Modes</strong>
                    Customers may pay via approved digital payment methods (UPI, Cards, NetBanking, Wallets) processed through RBI-licensed payment gateways, or via Cash directly to the Driver Partner on trip completion.
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Joining Fee &amp; Platform Commission Structure</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside">
                      <li>New Driver Partners may be subject to a one-time registration/joining fee (currently ₹100 or as updated in the Platform Tariff).</li>
                      <li>Platform Service Commission is deducted on the total trip fare (including any voluntary customer extra offer): currently <strong>5% on 2-Wheeler Bike/Scooter trips</strong> and <strong>8% on Commercial Vehicle trips</strong> (subject to updates notified via Driver App / Notice Board).</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Cash Trip Dues &amp; Wallet Recharge Thresholds</strong>
                    <p className="mb-2">For cash-collected trips, the Customer pays the full fare to the Driver, and the Platform Commission is recorded as a due balance in the Driver&apos;s wallet. To continue accepting new orders, Drivers must keep dues below their vehicle category threshold:</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block font-bold text-brand-navy">2-Wheeler</span>
                        <span className="font-mono text-brand-orange font-bold">₹250 limit</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block font-bold text-brand-navy">3-Wheeler / Tempo</span>
                        <span className="font-mono text-brand-orange font-bold">₹400 limit</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200">
                        <span className="block font-bold text-brand-navy">Heavy Commercial</span>
                        <span className="font-mono text-brand-orange font-bold">₹1,000 limit</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
                    <strong className="text-brand-navy block mb-1">Online Trip Payouts</strong>
                    For online/prepaid trips, after deducting applicable Platform Commission, the Driver&apos;s net earnings are credited to their Platform Wallet for withdrawal to their verified bank or UPI account.
                  </div>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="cancellation" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Cancellation Policy, Daily Limits &amp; Goodwill Compensation
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-2">
                    <strong className="text-brand-navy block text-sm">Customer Cancellations &amp; Goodwill</strong>
                    <p className="text-slate-600">Customers may cancel a booking through the app by selecting an accurate cancellation reason.</p>
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">
                      <strong>Driver Goodwill Compensation:</strong> If a Customer cancels due to a customer-side issue (wrong location, wrong vehicle, goods not ready, plan changed) AFTER the Driver has travelled <strong>4 km or more</strong> toward pickup (or arrived at pickup), a <strong>Goodwill Compensation of ₹20</strong> becomes eligible upon rebooking. No goodwill applies if cancellation is caused by Driver delay or fault.
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-2">
                    <strong className="text-brand-navy block text-sm">Driver Cancellation Limits &amp; Rules</strong>
                    <p className="text-slate-600">
                      To ensure reliable service for Customers, Driver Partners are subject to a daily cancellation limit: <strong>maximum 2 driver-fault cancellations per calendar day</strong> (resetting at 12:00 AM). Once reached, further driver-fault cancellations are restricted for that day.
                    </p>
                    <div className="p-2.5 bg-red-50 border border-red-200 rounded text-red-900">
                      <strong>Anti-Circumvention Ban:</strong> Accepting a booking, arriving, cancelling on the app, and completing the trip privately for cash to bypass platform fees is strictly banned. Our automated <strong>3-Strike Anti-Fraud system</strong> enforces warnings, fines, or permanent ban.
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="prohibited" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Strict Prohibited Goods Policy &amp; Indemnification
                  </h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-xs text-red-900 leading-relaxed space-y-2">
                  <p><strong>Customers and Driver Partners are STRICTLY PROHIBITED from booking, carrying, or transporting:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Illegal drugs, narcotics, psychotropic substances, or contraband</li>
                    <li>Explosives, fireworks, ammunition, unlicensed firearms, or weapons</li>
                    <li>Hazardous, toxic, radioactive, or highly flammable chemicals/fuels</li>
                    <li>Stolen goods, counterfeit currency, smuggled items, or wildlife products</li>
                    <li>Live animals (unless explicitly permitted under compliant transport rules) or human remains</li>
                    <li>Unbilled/illegal cash or high-value bullion without statutory e-way/tax documentation</li>
                  </ul>
                  <div className="pt-2 border-t border-red-200">
                    <p><strong>Driver Right to Inspect &amp; Refuse:</strong> Driver Partners have full authority to visually inspect outer packaging and immediately refuse any consignment suspected of containing prohibited or unsafe goods without penalty.</p>
                  </div>
                  <div className="pt-2 border-t border-red-200">
                    <p><strong>Statutory Owner &amp; Platform Indemnification:</strong> The Customer/Consignor is 100% legally and financially responsible for consignment contents. The Customer and Driver agree to fully indemnify and hold harmless GO Partner Logistics, GO PARTNER SERVICES, and its operators against all police cases, customs/GST penalties, seizure, fines, lawsuits, or claims arising from misdeclared or illegal cargo.</p>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="liability" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Cargo Safety, Loss or Damage &amp; Limitation of Liability
                  </h2>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5 list-disc list-inside leading-relaxed">
                  <li><strong>Proper Packaging:</strong> Customers must ensure all goods are properly packed, sealed, and labeled for commercial transit.</li>
                  <li><strong>E-Way Bill &amp; Tax Compliance:</strong> Wherever required under GST laws, the Customer/Consignor must provide valid invoices and E-Way Bills to the Driver before dispatch.</li>
                  <li><strong>Transit Liability:</strong> While we strive to onboard verified drivers and offer live GPS tracking and SOS support, GO Partner acts strictly as a technology marketplace. Customers transporting high-value, fragile, or sensitive goods are strongly advised to obtain independent transit cargo insurance.</li>
                  <li><strong>Maximum Liability:</strong> To the fullest extent permitted by Indian law, GO Partner Logistics shall not be liable for any indirect, incidental, consequential, or business-loss damages, and any proven direct platform liability shall not exceed the platform service fee collected for the specific disputed booking.</li>
                </ul>
              </article>

              {/* SECTION 8 */}
              <article id="conduct" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    User Conduct &amp; Zero Tolerance Policy
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Both Customers and Driver Partners must treat each other respectfully without abusive language, harassment, intoxication, or threats. Misuse of the Emergency SOS button, submission of forged KYC documents, fake support tickets, or tampering with GPS/app functionality will result in immediate account suspension and legal action.
                </p>
              </article>

              {/* SECTION 9 */}
              <article id="suspension" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Account Suspension &amp; Termination
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GO Partner reserves the right to temporarily suspend or permanently terminate any Customer or Driver account without prior notice if you violate any clause of these Terms or Privacy Policy, if KYC documents expire or are forged, if wallet dues remain unpaid beyond permissible limits, or if fraud or prohibited goods transport is detected. Voluntary account deletion can also be requested anytime subject to settlement of dues.
                </p>
              </article>

              {/* SECTION 10 */}
              <article id="ip" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Intellectual Property Rights
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All names, logos (&quot;GO Partner&quot;), trademarks, software code, app design, pricing engines, graphics, and website content belong exclusively to <strong>GO PARTNER SERVICES</strong>. Unauthorized copying, reverse engineering, scraping, or commercial reuse is strictly prohibited.
                </p>
              </article>

              {/* SECTION 11 */}
              <article id="force-majeure" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Force Majeure
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GO Partner Logistics shall not be held liable for delays, cancellations, or service interruptions caused by events beyond reasonable control, including natural disasters, heavy rains/floods, traffic blockades, strikes, riots, government restrictions, telecom/internet outages, or power failures.
                </p>
              </article>

              {/* SECTION 12 */}
              <article id="governing" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Governing Law, Dispute Resolution &amp; Jurisdiction
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to the use of the GO Partner Website or Apps shall first be attempted to be resolved amicably through our Grievance Officer within 30 days. Unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
                </p>
              </article>

              {/* SECTION 13 */}
              <article id="changes" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Changes to Terms &amp; Conditions
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We may revise these Terms &amp; Conditions from time to time. Updated Terms will be posted on this page with the revised &quot;Last Updated&quot; date. Continued use of our Website or Apps after updates constitutes acceptance of the revised Terms.
                </p>
              </article>

              {/* SECTION 14 */}
              <article id="grievance" className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                    Contact &amp; Grievance Redressal Details
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For any questions, booking disputes, or legal/compliance notices regarding these Terms &amp; Conditions, please contact:
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
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Official Helpline Phone</span>
                      <a href={`tel:${CONTACT_PHONE_RAW}`} className="font-bold text-brand-navy hover:underline">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Operating Jurisdiction</span>
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
