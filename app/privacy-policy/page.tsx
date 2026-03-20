/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | MediKloud',
  description:
    'Learn how MediKloud collects, uses, and protects your data. Privacy practices for our website, apps, and services.',
  alternates: { canonical: 'https://www.medikloud.com/privacy-policy' },
}

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center group cursor-pointer">
          <Link href="/">
            <Image
              src="/medikloud-logo-primary.webp"
              alt="MediKloud Logo"
              width={140}
              height={35}
              priority
              className="h-auto w-[120px] sm:w-[140px] transition-all duration-500 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className="text-blue-600 font-semibold underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 leading-tight">Privacy Policy</h1>
          <p className="mb-2 font-semibold">Last updated Aug 9, 2025</p>
          <p className="mb-4">
            This Privacy Notice for Klinikmed Technologies Private Limited (doing
            business as Medikloud) ("we", "us", or "our"), describes how and why we
            might access, collect, store, use, and/or share ("process") your personal
            information when you use our services ("Services"), including when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Visit our website at{' '}
              <a
                href="https://www.medikloud.com"
                className="text-blue-600 underline"
              >
                https://www.medikloud.com
              </a>{' '}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>
              Download and use our mobile application (Medikloud-mobile), or any other
              application of ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us in other related ways, including any sales, marketing, or
              events
            </li>
          </ul>
          <p className="mb-4">
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for making
            decisions about how your personal information is processed. If you do not
            agree with our policies and practices, please do not use our Services. If
            you still have any questions or concerns, please contact us at{' '}
            <a
              href="mailto:hello@medikloud.com"
              className="text-blue-600 underline"
            >
              hello@medikloud.com
            </a>
            .
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 leading-tight">Summary of Key Points</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              We may process personal information depending on how you interact with us
              and the Services, the choices you make, and the products and features
              you use.
            </li>
            <li>We do not process sensitive personal information.</li>
            <li>
              We may collect information from public databases, marketing partners,
              social media platforms, and other outside sources.
            </li>
            <li>
              We process your information to provide, improve, and administer our
              Services, communicate with you, ensure security and fraud prevention,
              and comply with law.
            </li>
            <li>
              We may share information in specific situations and with specific third
              parties.
            </li>
            <li>
              We use appropriate organizational and technical safeguards to protect
              your personal information. However, no system can guarantee complete
              security.
            </li>
            <li>
              Depending on your location, applicable privacy laws may give you
              certain rights regarding your personal information.
            </li>
            <li>
              You can exercise your rights by submitting a data subject access request
              or contacting us. We will respond in accordance with applicable data
              protection laws.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>What information do we collect?</li>
            <li>How do we process your information?</li>
            <li>When and with whom do we share your personal information?</li>
            <li>Do we use cookies and other tracking technologies?</li>
            <li>Do we offer artificial intelligence-based products?</li>
            <li>How do we handle your social logins?</li>
            <li>How long do we keep your information?</li>
            <li>How do we keep your information safe?</li>
            <li>What are your privacy rights?</li>
            <li>Controls for do-not-track features</li>
            <li>Do we make updates to this notice?</li>
            <li>How can you contact us about this notice?</li>
            <li>How can you review, update, or delete the data we collect from you?</li>
          </ol>
          <h2 className="text-xl font-bold mt-8 mb-2">1. What Information Do We Collect?</h2>
          <h3 className="font-semibold mt-4 mb-2">
            Personal information you disclose to us
          </h3>
          <p className="mb-2">
            We collect personal information that you voluntarily provide when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Register on the Services</li>
            <li>Express interest in our products/services</li>
            <li>Participate in activities on the Services</li>
            <li>Contact us</li>
          </ul>
          <p className="mb-2">
            Personal Information Provided by You may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Contact or authentication data</li>
            <li>Billing addresses</li>
            <li>Debit/credit card numbers</li>
            <li>Contact preferences</li>
            <li>Mailing addresses</li>
          </ul>
          <p className="mb-2">
            <span className="font-semibold">Sensitive Information:</span> We do not
            process sensitive information.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Payment Data:</span> We may collect data
            needed to process your payment, such as your card number and security
            code. Payments are handled by Razorpay. View their privacy notice{' '}
            <a
              href="https://razorpay.com/privacy/"
              className="text-blue-600 underline"
            >
              here
            </a>
            .
          </p>
          <p className="mb-2">
            <span className="font-semibold">Social Media Login Data:</span> You may
            register using your social media account (e.g., Facebook, X). We will
            collect your profile info as outlined in the section "How do we handle
            your social logins?"
          </p>
          <h3 className="font-semibold mt-4 mb-2">Application Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Geolocation Information: With your permission, we may collect location
              data. You can manage this in your device settings.
            </li>
            <li>
              Push Notifications: We may send notifications about your account or app
              features. You may opt out in your device settings.
            </li>
          </ul>
          <p className="mb-2">
            This data supports app security, troubleshooting, analytics, and
            reporting. All personal information you provide must be accurate and
            current. Notify us of any changes.
          </p>
          <h3 className="font-semibold mt-4 mb-2">
            Information automatically collected
          </h3>
          <p className="mb-2">
            We automatically collect some technical data when you use our Services.
            This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser and device type</li>
            <li>Operating system</li>
            <li>Language preference</li>
            <li>Referring URLs</li>
            <li>Device name and country</li>
            <li>Usage patterns</li>
            <li>Security-related data</li>
          </ul>
          <p className="mb-2">Technologies Used: We use cookies and similar tools.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Log and Usage Data: Includes diagnostics, access times, features used,
              and system logs.
            </li>
            <li>
              Device Data: Includes hardware details, browser type, OS, ISP/carrier
              info, and configuration.
            </li>
            <li>
              Location Data: Includes approximate or precise geolocation depending on
              device settings. You can opt out in your device's Location settings.
            </li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Google API</h3>
          <p className="mb-4">
            Our use of information from Google APIs complies with the Google API
            Services User Data Policy, including Limited Use requirements.
          </p>
          <h3 className="font-semibold mt-4 mb-2">
            Information collected from other sources
          </h3>
          <p className="mb-2">
            We may collect limited personal information from third parties. Sources
            include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Public databases</li>
            <li>Joint marketing partners</li>
            <li>Affiliate programs</li>
            <li>Data providers</li>
            <li>Social media platforms</li>
            <li>Other third parties</li>
          </ul>
          <p className="mb-2">Collected data may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mailing and email addresses</li>
            <li>Phone numbers</li>
            <li>Job titles</li>
            <li>User behavior data</li>
            <li>IP addresses</li>
            <li>Social profiles and URLs</li>
          </ul>
          <p className="mb-2">
            If you interact via a platform (e.g., Facebook or X), we may receive:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Gender</li>
          </ul>
          <p className="mb-4">
            Access depends on your privacy settings on that platform. Their use of
            your data is governed by their privacy policy, not ours.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            2. How Do We Process Your Information?
          </h2>
          <p className="mb-4">
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other purposes
            with your consent.
          </p>
          <p className="mb-2">
            We process your personal information for a variety of reasons, depending
            on how you interact with our Services, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              To facilitate account creation and authentication and otherwise manage
              user accounts.
            </li>
            <li>
              To deliver and facilitate delivery of services to the user.
            </li>
            <li>
              To respond to user inquiries/offer support to users.
            </li>
            <li>
              To send administrative information to you.
            </li>
            <li>
              To fulfil and manage your orders.
            </li>
            <li>
              To request feedback.
            </li>
            <li>
              To send you marketing and promotional communications.
            </li>
            <li>
              To deliver targeted advertising to you.
            </li>
            <li>
              To evaluate and improve our Services, products, marketing, and your
              experience.
            </li>
            <li>
              To identify usage trends.
            </li>
            <li>
              To determine the effectiveness of our marketing and promotional
              campaigns.
            </li>
            <li>
              To comply with our legal obligations.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-2">
            3. When and With Whom Do We Share Your Personal Information?
          </h2>
          <p className="mb-4">
            We may share information in specific situations described in this section
            and/or with the following third parties.
          </p>
          <p className="mb-2">
            We may need to share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of company
              assets, financing, or acquisition of our business.
            </li>
            <li>
              Offer Wall. Our application(s) may display a third-party hosted "offer
              wall" offering virtual currency or gifts in exchange for completing
              advertisements. When you interact with an offer wall, your user ID may
              be shared to prevent fraud and assign rewards correctly.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-2">
            4. Do We Use Cookies and Other Tracking Technologies?
          </h2>
          <p className="mb-4">
            We may use cookies and other tracking technologies to collect and store
            your information.
          </p>
          <p className="mb-2">
            We may use cookies and similar technologies (e.g., web beacons, pixels)
            for purposes like:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Maintaining security and account protection
            </li>
            <li>
              Preventing crashes and fixing bugs
            </li>
            <li>
              Saving your preferences
            </li>
            <li>
              Enabling basic functionality
            </li>
          </ul>
          <p className="mb-2">
            Third-party use: We allow service providers and third parties to use
            tracking technologies for analytics and advertising, including displaying
            personalized ads and abandoned cart reminders.
          </p>
          <p className="mb-2">
            Google Analytics: We may share information with Google Analytics. To opt
            out: <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-blue-600 underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            . Learn more at Google's Privacy & Terms. Details are available in our
            Cookie Notice.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            5. Do We Offer Artificial Intelligence-Based Products?
          </h2>
          <p className="mb-4">
            We offer products, features, or tools powered by artificial intelligence,
            machine learning, or similar technologies.
          </p>
          <p className="mb-2">
            Use of AI Technologies Our Services may include AI features delivered by
            providers such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>OpenAI</li>
            <li>Amazon Web Services (AWS) AI</li>
            <li>Anthropic</li>
            <li>Hugging Face</li>
            <li>LLama</li>
          </ul>
          <p className="mb-2">
            Your input and personal information may be processed by these providers
            under our agreement and in line with this Privacy Notice. Do not use AI
            features in ways that violate their terms.
          </p>
          <p className="mb-2">
            Our AI Products Include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Image analysis</li>
            <li>AI automation</li>
            <li>AI applications</li>
            <li>Natural language processing</li>
          </ul>
          <p className="mb-2">
            We safeguard your personal information during AI-based processing with
            technical and legal protections.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            6. How Do We Handle Your Social Logins?
          </h2>
          <p className="mb-4">
            If you choose to register or log in using a social media account, we may
            have access to certain profile information.
          </p>
          <p className="mb-2">
            This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your name</li>
            <li>Email address</li>
            <li>Profile picture</li>
            <li>Friends list</li>
            <li>Other public information on your profile</li>
          </ul>
          <p className="mb-2">
            We use this information as outlined in this Privacy Notice. We are not
            responsible for how social platforms process your data — please check
            their privacy policies to learn more and adjust your privacy settings.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            7. How Long Do We Keep Your Information?
          </h2>
          <p className="mb-4">
            We keep your information as long as necessary for the purposes described
            in this Privacy Notice unless required by law.
          </p>
          <p className="mb-2">
            Maximum retention: 24 months after account termination
          </p>
          <p className="mb-2">
            When no longer needed, we delete, anonymize, or securely store your data
            (e.g., in backups) until deletion is feasible
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            8. How Do We Keep Your Information Safe?
          </h2>
          <p className="mb-4">
            We aim to protect your personal information through organizational and
            technical security measures.
          </p>
          <p className="mb-2">
            While we take reasonable steps to safeguard your information, no digital
            transmission or storage system is 100% secure. Use the Services in a
            secure environment and stay vigilant.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            9. What Are Your Privacy Rights?
          </h2>
          <p className="mb-4">
            You may review, change, or terminate your account at any time, depending
            on your legal jurisdiction.
          </p>
          <p className="mb-2">
            Withdrawing Consent If we rely on your consent to process your data, you
            may withdraw it anytime via the contact info below. This won't affect
            lawful processing prior to withdrawal.
          </p>
          <p className="mb-2">
            Opting Out of Marketing You can unsubscribe by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Clicking "unsubscribe" in our emails</li>
            <li>Replying "STOP" or "UNSUBSCRIBE" to SMS messages</li>
            <li>Contacting us directly</li>
          </ul>
          <p className="mb-2">
            We may still send service-related communications.
          </p>
          <p className="mb-2">
            Account Information To update or delete your account:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact us via the details below</li>
            <li>Or log in to your account settings</li>
          </ul>
          <p className="mb-2">
            Note: We may retain certain data for legal or troubleshooting purposes.
          </p>
          <p className="mb-2">
            Cookies and Similar Technologies You can adjust your browser to reject or
            remove cookies. This may affect your experience.
          </p>
          <p className="mb-4">
            Questions or concerns? Email us at hello@medikloud.com
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            10. Controls for Do-Not-Track Features
          </h2>
          <p className="mb-4">
            We do not currently respond to DNT signals.
          </p>
          <p className="mb-2">
            Most browsers and mobile OSs support a "Do-Not-Track" (DNT) setting. As
            no standard has been adopted, we do not respond to DNT signals at this
            time. If that changes, we'll update this notice.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            11. Do We Make Updates to This Notice?
          </h2>
          <p className="mb-4">
            Yes, we will update this notice as necessary to remain compliant with
            laws.
          </p>
          <p className="mb-2">
            You'll see a "Last Updated" date at the top of this page. Material
            changes may be notified by email or website notice. Please review this
            notice periodically.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-2">
            12. How Can You Contact Us About This Notice?
          </h2>
          <p className="mb-4">
            If you have questions or comments, you may contact us by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>📧 Email: hello@medikloud.com</li>
            <li>
              📬 Post:
              <br />
              Klinikmed Technologies Private Limited
              <br />
              Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada
              <br />
              Visakhapatnam, Andhra Pradesh 530048, India
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-2">
            13. How Can You Review, Update, or Delete The Data We Collect From You?
          </h2>
          <p className="mb-4">
            You may have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Request access to the personal information we collect about you
            </li>
            <li>
              Review how it is processed
            </li>
            <li>
              Correct inaccuracies
            </li>
            <li>
              Delete your information
            </li>
            <li>
              Withdraw your consent (where applicable)
            </li>
          </ul>
          <p className="mb-4">
            To submit a request, please fill out and submit a Data Subject Access
            Request.
          </p>
        </div>
      </div>
    </div>
  );
}