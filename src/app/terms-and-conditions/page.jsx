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
        TERMS AND CONDITIONS
      </h1>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Last Updated: December 24th, 2025
      </p>

      <p className="mb-4 text-base md:text-lg text-gray-700">
        These Terms and Conditions (the "Agreement") constitute a legally
        binding contract between EGAC GROUP LLC (d/b/a "Lynx"), located at 8 THE
        Green STE B Dover, DE 19901 (the "Company," "we," "us," or "our"), and
        you, whether personally or on behalf of an entity ("you" or "user").
      </p>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        By accessing the Lynx website or using the software application (the
        "Service"), you acknowledge that you have read, understood, and agreed
        to be bound by these terms. If you do not agree with all of these terms,
        you are expressly prohibited from using the Service and must discontinue
        use immediately.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        1. GRANT OF LICENSE
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Lynx grants you a revocable, non-exclusive, non-transferable, and
        limited license to download, install, and utilize the application
        strictly in accordance with the terms of this Agreement. All rights not
        expressly granted to you are reserved by Lynx.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        2. RESTRICTIONS ON USE
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Users shall not, and shall not permit any third party to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Commercially exploit the Service, including licensing, selling,
          renting, or leasing the application.
        </li>
        <li>
          Reverse engineer, disassemble, decompile, or attempt to derive the
          source code of any part of the Service.
        </li>
        <li>Modify or create derivative works of the application.</li>
        <li>
          Remove, alter, or obscure any proprietary notices, including copyright
          or trademark notices.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        3. PAYMENTS AND BILLING
      </h2>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Fees: You agree to pay all charges incurred by your account at the
          prices in effect when such charges are incurred.
        </li>
        <li>
          Authorization: By providing a payment method, you authorize Lynx to
          verify your information and charge all due fees without further notice
          or consent.
        </li>
        <li>
          Price Adjustments: Lynx reserves the right to change prices and
          billing methods at any time.
        </li>
        <li>
          Collections: You are responsible for all costs, including attorney
          fees and court costs, incurred by Lynx in the collection of delinquent
          undisputed amounts.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        4. INTELLECTUAL PROPERTY RIGHTS
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        The Service, including its source code, databases, functionality,
        software, designs, audio, video, text, and graphics, is owned by Lynx or
        its licensors and is protected by United States and international
        intellectual property laws. Any unauthorized reproduction or
        distribution is strictly prohibited.
      </p>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Any feedback or suggestions you provide shall become the sole and
        exclusive property of Lynx, which may use such information for any
        purpose without compensation to you.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        5. THIRD-PARTY CONTENT AND SERVICES
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        The Service may contain links to third-party websites or include
        third-party content. Lynx does not monitor, endorse, or assume any
        liability for the accuracy or practices of these third parties. Your
        interaction with any third-party service is at your own risk and subject
        to their respective terms.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        6. WARRANTY DISCLAIMER
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        The service is provided on an "as-is" and "as-available" basis. to the
        fullest extent permitted by law, lynx disclaims all warranties, express
        or implied, including but not limited to the implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement.
        we do not warrant that the service will be uninterrupted, error-free, or
        free of viruses or other harmful components.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        7. LIMITATION OF LIABILITY
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        In no event shall lynx or its suppliers be liable for any indirect,
        consequential, incidental, or special damages, including loss of profits
        or data, even if advised of the possibility of such damages.
      </p>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Notwithstanding anything to the contrary, our total liability to you for
        any cause whatsoever shall be limited to the amount paid, if any, by you
        to us for the service.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        8. TERM AND TERMINATION
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        This Agreement remains in effect until terminated by either party. Lynx
        may, in its sole discretion and without notice, suspend or terminate
        your account for any reason, including violation of these terms. Upon
        termination, you must cease all use of the application and delete all
        copies in your possession.
      </p>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        9. DISPUTE RESOLUTION: BINDING ARBITRATION
      </h2>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Informal Negotiation: Parties agree to attempt to resolve any dispute
          informally for at least sixty (60) days before initiating arbitration.
        </li>
        <li>
          Binding Arbitration: If unresolved, disputes shall be settled by
          binding arbitration in accordance with the commercial arbitration
          rules of the American Arbitration Association.
        </li>
        <li>
          Waiver: You waive the right to litigate disputes in court before a
          judge or jury or to participate in class actions.
        </li>
        <li>
          Time Limit: Any cause of action must commence within one (1) year
          after the cause of action accrues; otherwise, it is permanently
          barred.
        </li>
      </ul>

      <h2 className="text-lg md:text-3xl font-semibold mb-2 text-black">
        10. CONTACT INFORMATION
      </h2>
      <p className="mb-4 text-base md:text-lg text-gray-700">
        Questions regarding these Terms and Conditions should be directed to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg text-gray-700">
        <li>
          Email:{" "}
          <Link
            href="mailto:info@lynxuni.com"
            className="underline text-blue-400"
          >
            info@lynxuni.com
          </Link>
        </li>
        <li>
          Phone:{" "}
          <Link href="tel:+18574004600" className="underline text-blue-400">
            +1 857 400 4600
          </Link>
        </li>
        <li>Address: 8 THE Green STE B Dover, DE 19901</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
