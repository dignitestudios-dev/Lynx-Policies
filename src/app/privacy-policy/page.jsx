import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Lynx | Privacy Policy",
  description: "Privacy Policy for Lynx",
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
    PRIVACY POLICY
  </h1>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Effective Date: March 9, 2026
  </p>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE I: INTRODUCTION AND SCOPE
  </h2>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.1 Purpose of Policy
  </h3>
  <p className="mb-4 text-base md:text-lg text-gray-700">
    This Privacy Policy (the “Policy”) describes how EGAC GROUP LLC (“Company,”
    “We,” “Us,” or “Our”), operator of the Lynx mobile application (the “App”),
    collects, processes, stores, protects, and discloses personal data.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    The App functions as a marketplace platform connecting Service Providers
    and Service Consumers, facilitating transactions, events, and peer-to-peer
    services. This Policy is intended to:
  </p>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Explain what types of personal data are collected.</li>
    <li>Describe how data is processed and used.</li>
    <li>Outline User rights and options regarding personal data.</li>
    <li>
      Ensure transparency in compliance with applicable privacy laws including
      U.S. state privacy laws (e.g., CCPA/CPRA), GDPR, and Apple App Store /
      Google Play requirements.
    </li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.2 Applicability
  </h3>
  <p className="mb-4 text-base md:text-lg text-gray-700">
    This Policy applies to all Users of the App, including Service Providers,
    Service Consumers, and any other individuals interacting with the Services.
    By accessing or using the App, you consent to the collection, use, and
    sharing of your personal data as described in this Policy.
  </p>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.3 Definitions
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>
      <strong>User:</strong> Any individual accessing or using the App.
    </li>
    <li>
      <strong>Service Provider:</strong> A User offering services through the
      App such as tutoring, photography, event planning, or IT support.
    </li>
    <li>
      <strong>Service Consumer:</strong> A User requesting or booking services
      through the App.
    </li>
    <li>
      <strong>Personal Data:</strong> Information that identifies or can
      reasonably identify a User directly or indirectly.
    </li>
    <li>
      <strong>Third-Party Services:</strong> External providers such as payment
      processors, analytics tools, cloud storage, and integrated SDKs.
    </li>
    <li>
      <strong>Processing:</strong> Any operation performed on personal data,
      including collection, storage, use, disclosure, or deletion.
    </li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE II: TYPES OF PERSONAL DATA COLLECTED
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    We collect several categories of personal data necessary to operate the
    marketplace and provide the App’s services.
  </p>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    2.1 Identity and Contact Information
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>
      <strong>Full Name, Email Address, Physical Address:</strong> Used for
      verification, billing, and legal compliance.
    </li>
    <li>
      <strong>Phone Number:</strong> Used for authentication, confirmations, and
      secure communication.
    </li>
    <li>
      <strong>Account Credentials:</strong> Includes User ID and password for
      secure platform access.
    </li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    2.2 Financial and Transaction Data
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>
      <strong>Payment Information:</strong> Payment processing is performed by
      secure third-party providers such as Stripe. Full card details are
      generally not stored by the Company.
    </li>
    <li>
      <strong>Transaction Records:</strong> Payments made, services booked,
      platform fees, and related timestamps.
    </li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    2.3 Profile and User-Generated Data
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>
      Profile information including skills, academic or professional
      information, interests, and availability.
    </li>
    <li>
      Service Provider details such as pricing, qualifications, and service
      availability.
    </li>
    <li>
      Booking preferences and instructions submitted by Service Consumers.
    </li>
    <li>
      User-generated content such as reviews, ratings, messages, and uploaded
      photos.
    </li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    2.4 Technical, Usage, and Location Data
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>IP address, device identifiers, operating system, and browser type.</li>
    <li>Usage analytics including feature interaction and crash reports.</li>
    <li>
      Approximate or precise location (if permitted) to connect nearby service
      providers and consumers.
    </li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE III: LAWFUL BASES & PURPOSES OF DATA PROCESSING
  </h2>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>
      <strong>Performance of Contract:</strong> Required to deliver platform
      services and transactions.
    </li>
    <li>
      <strong>Legitimate Interests:</strong> Improve platform performance,
      maintain security, and prevent fraud.
    </li>
    <li>
      <strong>Consent:</strong> Required for marketing communications or precise
      location tracking.
    </li>
    <li>
      <strong>Legal Obligation:</strong> Compliance with regulatory requirements
      and court orders.
    </li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE IV: DATA SHARING & DISCLOSURE
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Personal data is shared only when necessary for marketplace functionality,
    legal compliance, or service providers assisting the Company.
  </p>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Sharing between Service Providers and Service Consumers.</li>
    <li>Third-party services such as Stripe, Firebase, and analytics tools.</li>
    <li>Legal authorities when required by law.</li>
    <li>Business transfers such as mergers or acquisitions.</li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE V: DATA STORAGE, PROTECTION & RETENTION
  </h2>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Industry-standard encryption and security measures.</li>
    <li>Restricted access to authorized personnel.</li>
    <li>Account data retained while active and up to 90 days after deletion.</li>
    <li>Financial records retained for up to 7 years for legal compliance.</li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VI: USER RIGHTS & CHOICES
  </h2>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Access and correction of personal data.</li>
    <li>Right to deletion or “right to be forgotten”.</li>
    <li>Opt-out of marketing communications.</li>
    <li>Data portability where legally applicable.</li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VII: INTERNATIONAL DATA TRANSFERS & GOVERNING LAW
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Personal data may be processed or stored in countries outside your home
    jurisdiction including the United States. Safeguards such as contractual
    clauses and processor agreements are implemented to protect such transfers.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    This Policy is governed by the laws of the State of Delaware, USA.
  </p>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VIII: CHILDREN’S PRIVACY
  </h2>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>The App is not intended for children under 13.</li>
    <li>We do not knowingly collect personal data from children.</li>
    <li>Parents may contact us to request deletion of a child’s data.</li>
  </ul>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE IX: COOKIES & TRACKING TECHNOLOGIES
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Cookies, pixels, and tracking technologies are used to maintain sessions,
    analyze usage, and improve platform performance. Users can control tracking
    permissions through device or browser settings.
  </p>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE X: CHANGES TO THIS PRIVACY POLICY
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    We may update this Privacy Policy periodically. Updates will be posted in
    the App and reflected with a revised “Effective Date.” Continued use of the
    App after changes constitutes acceptance of the updated Policy.
  </p>

  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE XI: CONTACT INFORMATION
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    If you have questions or concerns regarding this Privacy Policy, you may
    contact us:
  </p>

  <p className="mb-2 text-base md:text-lg text-gray-700">
    <strong>Business Name:</strong> EGAC GROUP LLC
  </p>
  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Email: <Link href={"mailto:info@lynxuni.com"} className="underline text-blue-400">info@lynxuni.com</Link>
        </li>
        <li>Address: 8 THE Green STE B Dover, DE 19901</li>
      </ul>

  
</div>
      
    
  );
};

export default PrivacyPolicy;