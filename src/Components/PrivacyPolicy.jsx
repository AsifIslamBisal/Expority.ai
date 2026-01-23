import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: <span className="font-medium">1/21/2026</span>
          </p>
        </header>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-8">
          <span className="font-semibold">Expority</span> (“we,” “our,” or “us”) respects your
          privacy and is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard information when you visit our website, book a demo, or
          interact with our AI-powered systems.
        </p>

        <p className="text-gray-700 leading-relaxed mb-12">
          By using our website or services, you consent to the practices
          described in this policy.
        </p>

        {/* Sections */}
        <div className="space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 mb-4">
              We may collect personal and non-personal information in the
              following ways:
            </p>

            <h3 className="font-semibold text-gray-800 mb-2">
              a) Information You Provide Directly
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Book a demo or strategy call</li>
              <li>Fill out a contact or intake form</li>
              <li>Communicate with us via chat, SMS, voice, or email</li>
            </ul>

            <p className="text-gray-700 mb-2">We may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Industry</li>
              <li>Lead volume or business details</li>
              <li>Any information you choose to provide</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">
              b) Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral sources</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">
              c) AI Conversation Data
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Conversation transcripts</li>
              <li>Call recordings (where legally permitted)</li>
              <li>Message content</li>
              <li>Booking and qualification responses</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Respond to inquiries and requests</li>
              <li>Schedule demos and strategy calls</li>
              <li>Provide AI automation services</li>
              <li>Qualify leads and route conversations</li>
              <li>Improve system performance</li>
              <li>Send service-related communications</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
            <p className="text-gray-700 mt-4 font-medium">
              We do not sell personal data.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Share Information
            </h2>

            <h3 className="font-semibold text-gray-800 mb-2">
              a) Service Providers
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>CRM platforms</li>
              <li>Calendar and scheduling tools</li>
              <li>Analytics providers</li>
              <li>Messaging and telephony services</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">
              b) Legal Requirements
            </h3>
            <p className="text-gray-700 mb-4">
              We may disclose information if required by law or legal process.
            </p>

            <h3 className="font-semibold text-gray-800 mb-2">
              c) Business Transfers
            </h3>
            <p className="text-gray-700">
              Information may be transferred in the event of a merger,
              acquisition, or asset sale.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal information only as long as necessary to
              provide services, comply with legal obligations, and resolve
              disputes. Conversation data may be retained for training,
              quality assurance, and compliance purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to analyze traffic,
              improve user experience, and track marketing performance. You
              can control cookies via your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Privacy Rights
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          {/* Section 7–11 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We use reasonable safeguards, but no system can be guaranteed
              100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Third-Party Links
            </h2>
            <p className="text-gray-700 mb-6">
              We are not responsible for third-party privacy practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children’s Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for individuals under 18.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              Updates will be posted with a revised effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">Expority</span><br />
              📧 Email: contact@expority.com<br />
              <span className='flex items-center gap-1'><FaLinkedin/> : <a className='text-blue-600' href="http://www.linkedin.com/company/exmarketing">LINKEDIN</a> </span>
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}