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
        Effective Date: December 24, 2025
      </p>

      <p className="mb-4 text-base md:text-lg text-gray-700">
        This Privacy Policy describes how EGAC GROUP LLC (d/b/a "Lynx," "we,"
        "us," or "our") handles the collection, use, and disclosure of personal
        information across our mobile application and associated digital
        services (collectively, the "Service"). By utilizing the Service, you
        acknowledge the data practices detailed herein.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        1. DATA COLLECTION ARCHITECTURE
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        We collect information through direct user input and automated tracking
        to facilitate a secure university-focused environment.
      </p>

      <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
        1.1. User-Provided Information
      </h3>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        We collect data when you register an account, subscribe to newsletters,
        or engage in transactions:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Identity Data: Legal name, username, age, and university affiliation.
        </li>
        <li>Contact Credentials: Email addresses and account passwords.</li>
        <li>
          Financial Data: Credit/debit card numbers for processing one-time
          payment plans or event ticketing.
        </li>
      </ul>

      <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
        1.2. Mobile & Hardware-Specific Data
      </h3>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        The following data collection is optional and requires explicit
        device-level permissions:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Geospatial Data (GPS): Used to identify general locations and deliver
          relevant local content.
        </li>
        <li>
          Visual Media: Optional access to the Camera and Photo Gallery for
          profile customization and content sharing.
        </li>
        <li>
          Technical Identifiers: IP addresses and device-specific technographics
          used for security auditing and analytics.
        </li>
      </ul>

      <h3 className="text-base md:text-2xl font-semibold mb-2 text-black">
        1.3. Third-Party Data Integration
      </h3>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Social Media: We may collect publicly available information if you
          voluntarily link social media profiles to the Service.
        </li>
        <li>
          Security Partners: We receive information from third-party automated
          fraud detection services to protect platform integrity.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        2. UTILIZATION OF INFORMATION
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Lynx processes data for the following essential business purposes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Personalization: Tailoring Service offerings to individual user needs
          and interests.
        </li>
        <li>
          Service Optimization: Improving application functionality based on
          user feedback and engagement patterns.
        </li>
        <li>
          Transactional Integrity: Processing payments and delivering
          order-related updates.
        </li>
        <li>
          Communication: Sending periodic emails regarding site features or
          community promotions. Users may opt out of marketing communications at
          any time.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        3. DISCLOSURE AND DATA SHARING
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        We do not sell user personal information. Disclosure occurs only under
        the following circumstances:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Service Providers: Sharing data with trusted vendors for hosting,
          database management, and payment processing.
        </li>
        <li>
          Business Transitions: Transferring data to successors-in-interest
          during mergers or asset sales.
        </li>
        <li>
          Legal Mandates: Disclosing information to law enforcement or
          government officials when required by legal process or to protect
          public safety.
        </li>
        <li>
          University Accountability: Lynx reserves the right to report serious
          misconduct, including harassment or threats, directly to university
          administrations.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        4. SECURITY AND INTERNATIONAL TRANSFERS
      </h2>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Security Protocols: We employ Secure Socket Layer (SSL) technology and
          physical/electronic safeguards to protect sensitive financial data.
          However, absolute security cannot be guaranteed.
        </li>
        <li>
          Cross-Border Transfers: As a U.S.-based entity, your data may be
          transferred to and hosted in the United States and other global
          jurisdictions. By using the Service, you consent to this trans-border
          hosting.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        5. DATA RETENTION AND SUBJECT RIGHTS
      </h2>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Retention: Conversation and personal data are generally stored for up
          to six years. If an account is deleted, we dispose of data within 60
          days.
        </li>
        <li>
          User Autonomy: * Account Controls: You may update, correct, or request
          the deletion of your personal data by managing your account settings.
        </li>
        <li>
          Visibility: Users have the unilateral right to control their
          visibility on public features like leaderboards.
        </li>
        <li>
          Children’s Privacy: We do not knowingly collect data from individuals
          under the age of 13. If such data is discovered, it will be removed
          promptly.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        6. JURISDICTION-SPECIFIC NOTICES
      </h2>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          GDPR (EEA Residents): We implement GDPR controls as our baseline
          standard for data protection, ensuring fair and transparent processing
          for all users.
        </li>
        <li>
          CCPA/CalOPPA (California Residents): California users have the
          specific right to know what data is collected, the right to equal
          service, and the right to request deletion.
        </li>
        <li>
          Governing Law: This policy is governed by the laws of the United
          States.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        7. CONTACT ADMINISTRATION
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        For inquiries regarding your privacy rights or this policy, contact us
        via:
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
