import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Lynx | Terms & Conditions",
  description: "Terms and Conditions for Lynx",
};

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
    TERMS AND CONDITIONS OF SERVICE
  </h1>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Effective Date: March 9, 2026
  </p>

  {/* ARTICLE I */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE I: DEFINITIONS, SCOPE, AND ACCEPTANCE OF AGREEMENT
  </h2>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.1 Definitions
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700 space-y-2">
    <li>
      <strong>App:</strong> The Lynx mobile application including all websites,
      APIs, source code, user interfaces, databases, infrastructure, updates,
      and related digital features.
    </li>
    <li>
      <strong>Company:</strong> EGAC GROUP LLC, a Delaware limited liability
      company, including its members, managers, employees, affiliates, and
      permitted assigns.
    </li>
    <li>
      <strong>Services:</strong> The marketplace functionality enabling Users to
      discover, communicate, schedule, book, and process payments for services.
    </li>
    <li>
      <strong>User:</strong> Any individual or entity accessing or using the
      App, including Service Providers and Service Consumers.
    </li>
    <li>
      <strong>Service Provider:</strong> A User offering services through the
      App such as tutoring, photography, event planning, or IT support.
    </li>
    <li>
      <strong>Service Consumer:</strong> A User who books or purchases services
      through the App.
    </li>
    <li>
      <strong>Transaction:</strong> Any interaction, booking, or agreement
      between a Service Provider and Service Consumer initiated through the
      App.
    </li>
    <li>
      <strong>Content:</strong> Text, images, profiles, reviews, messages, or
      other materials uploaded or displayed on the App.
    </li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.2 Scope and Nature of Agreement
  </h3>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    These Terms constitute a legally binding agreement between you and the
    Company governing your use of the App and Services. Your continued use of
    the App is conditioned upon compliance with these Terms.
  </p>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    1.3 Acceptance of Terms
  </h3>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    By downloading, accessing, or using the App you acknowledge that you have
    read, understood, and agree to be bound by these Terms and all policies
    referenced herein, including the Privacy Policy.
  </p>

  {/* ARTICLE II */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE II: MARKETPLACE MODEL AND COMPANY ROLE
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Lynx operates solely as a technology-enabled marketplace platform that
    connects Service Providers with Service Consumers.
  </p>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>The Company does not perform or supervise services offered.</li>
    <li>The Company does not set pricing, schedules, or performance terms.</li>
    <li>
      Transactions occur directly between Service Providers and Service
      Consumers.
    </li>
  </ul>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Nothing in these Terms creates an employment, agency, partnership, or joint
    venture relationship between the Company and Users.
  </p>

  {/* ARTICLE III */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE III: USER ELIGIBILITY AND ACCOUNTS
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    You must be at least <strong>18 years old</strong> to access or use the App.
    By using the Services, you represent that you have the legal capacity to
    enter into this agreement.
  </p>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Provide accurate account information.</li>
    <li>Maintain confidentiality of login credentials.</li>
    <li>Be responsible for all activity under your account.</li>
  </ul>

  <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
    Prohibited Uses
  </h3>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Misrepresent identity or qualifications.</li>
    <li>Offer services without required licenses.</li>
    <li>Use the App for unlawful or fraudulent activities.</li>
    <li>Harass or harm other Users.</li>
    <li>Attempt to circumvent platform payment systems.</li>
  </ul>

  {/* ARTICLE IV */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE IV: SERVICE PROVIDER RESPONSIBILITIES
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Service Providers are solely responsible for complying with all applicable
    laws, licensing requirements, and professional obligations relating to the
    services they provide.
  </p>

  <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
    <li>Maintain accurate service listings and qualifications.</li>
    <li>Ensure compliance with all licensing and regulatory requirements.</li>
    <li>Deliver services safely and professionally.</li>
    <li>Resolve disputes directly with Service Consumers.</li>
  </ul>

  {/* ARTICLE V */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE V: PAYMENTS AND PLATFORM FEES
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Payments are processed through approved third-party payment processors such
    as Stripe or PayPal. The Company may charge platform fees or commissions
    which will be disclosed in the App and deducted before funds are remitted to
    Service Providers.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Refunds, cancellations, and disputes are governed primarily by the Service
    Provider’s stated terms. The Company may assist in mediation but does not
    guarantee resolution.
  </p>

  {/* ARTICLE VI */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VI: INTELLECTUAL PROPERTY
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    All intellectual property relating to the App—including software, design,
    trademarks, and databases—is owned by the Company.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Users are granted a limited, non-exclusive license to use the App solely for
    its intended marketplace purposes.
  </p>

  {/* ARTICLE VII */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VII: DISCLAIMER OF WARRANTIES
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    The App and Services are provided <strong>“AS IS”</strong> and{" "}
    <strong>“AS AVAILABLE.”</strong> The Company disclaims all warranties,
    including merchantability, fitness for a particular purpose, and
    non-infringement.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    The Company does not guarantee the quality, legality, safety, or outcomes of
    services provided by Users.
  </p>

  {/* ARTICLE VIII */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE VIII: INDEMNIFICATION
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Users agree to defend, indemnify, and hold harmless the Company and its
    affiliates from any claims, liabilities, damages, or expenses arising from
    use of the App, violation of these Terms, or unlawful conduct.
  </p>

  {/* ARTICLE IX */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE IX: TERMINATION
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    The Company may suspend or terminate accounts at any time for violations of
    these Terms or activities that threaten the security or integrity of the
    platform.
  </p>

  {/* ARTICLE X */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE X: DISPUTE RESOLUTION AND ARBITRATION
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Any disputes not resolved informally will be resolved through binding
    arbitration under the American Arbitration Association (AAA) rules in
    Wilmington, Delaware.
  </p>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    Users waive the right to participate in class-action lawsuits and agree that
    claims must be brought individually.
  </p>

  {/* ARTICLE XI */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE XI: GOVERNING LAW
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    These Terms are governed by the laws of the State of Delaware, United
    States, without regard to conflict-of-law principles.
  </p>

  {/* ARTICLE XII */}
  <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
    ARTICLE XII: ASSIGNMENT
  </h2>

  <p className="mb-4 text-base md:text-lg text-gray-700">
    The Company may assign these Terms in connection with mergers, acquisitions,
    or asset transfers. Users may not assign their rights or obligations without
    prior written consent from the Company.
  </p>
</div>
  );
};

export default TermsAndConditions;
