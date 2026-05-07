/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo'

export const metadata = getMetadata({
  title: 'Terms of Service',
  description: 'Read the legal terms that govern your use of MediKloud products and services.',
  path: '/terms-of-service'
})

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-muted shadow-card">
    <div className="container-page">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center group cursor-pointer">
          <Link href="/">
            <Image
              src="/Logos/medikloud-logo-primary.webp"
              alt="MediKloud Logo"
              className="w-[120px] sm:w-[140px] h-auto transition-all duration-500 group-hover:scale-105"
              priority
              width={1536}
              height={1024}
              sizes="(max-width: 640px) 120px, 140px"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/privacy-policy" className="nav-link">Privacy Policy</Link>
          <Link href="/terms-of-service" className="nav-link active">Terms</Link>
        </div>
      </div>
    </div>
  </nav>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-8">
    <h2 className="text-h2 font-bold mt-8 mb-4 text-slate-900">{title}</h2>
    {children}
  </section>
);

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-section-hero text-slate-800 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-card-lg border border-muted p-8 md:p-12">

          <h1 className="text-h1 font-bold mb-6 text-brand-700 leading-tight">Terms of Use</h1>
          <p className="mb-2 font-semibold">Last updated Aug 9, 2025</p>

          {/* No prose wrapper — raw tags match privacy policy exactly */}
          <Section title="Agreement to Our Legal Terms">
            <p className="mb-4">We are Klinikmed Technologies Private Limited, doing business as Medikloud ("Company", "we", "us", or "our"), a company registered in India at:<br />11-1-18b, Putchala Street, Vizianagaram, Andhra Pradesh 535002.</p>
            <p className="mb-2">We operate:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The website: <a href="https://www.medikloud.com" className="text-brand-600 underline">https://www.medikloud.com</a> (the "Site")</li>
              <li>The mobile application: Medikloud-mobile (the "App")</li>
              <li>Any other related products and services that refer or link to these legal terms (the "Legal Terms")</li>
            </ul>
            <p className="mb-2">You can contact us by:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Phone: (+91) 7702670993</li>
              <li>Email: <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a></li>
              <li>Mail: Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh 530048, India</li>
            </ul>
            <p className="mb-4">These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Klinikmed Technologies Private Limited, concerning your access to and use of the Services. By accessing the Services, you acknowledge that you have read, understood, and agreed to be bound by all of these Legal Terms.</p>
            <p className="mb-4 font-bold text-danger">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
          </Section>

          <Section title="Table of Contents">
            <ol className="list-decimal pl-6 mb-4">
              <li>Our Services</li>
              <li>Intellectual Property Rights</li>
              <li>User Representations</li>
              <li>User Registration</li>
              <li>Products</li>
              <li>Purchases and Payment</li>
              <li>Subscriptions</li>
              <li>Return/Refunds Policy</li>
              <li>Software</li>
              <li>Prohibited Activities</li>
              <li>User Generated Contributions</li>
              <li>Contribution Licence</li>
              <li>Mobile Application Licence</li>
              <li>Social Media</li>
              <li>Third-Party Websites and Content</li>
              <li>Services Management</li>
              <li>Privacy Policy</li>
              <li>Term and Termination</li>
              <li>Modifications and Interruptions</li>
              <li>Governing Law</li>
              <li>Dispute Resolution</li>
              <li>Corrections</li>
              <li>Disclaimer</li>
              <li>Limitations of Liability</li>
              <li>Indemnification</li>
              <li>User Data</li>
              <li>Electronic Communications, Transactions, and Signatures</li>
              <li>SMS Text Messaging</li>
              <li>Miscellaneous</li>
              <li>Contact Us</li>
            </ol>
          </Section>

          <Section title="1. Our Services">
            <p className="mb-4">The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
          </Section>

          <Section title="2. Intellectual Property Rights">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Our Intellectual Property</h3>
            <p className="mb-2">We are the owner or the licensee of all intellectual property rights in our Services, including all:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Source code</li>
              <li>Databases</li>
              <li>Functionality</li>
              <li>Software</li>
              <li>Website designs</li>
              <li>Audio, video, text, photographs, and graphics (collectively, the "Content")</li>
              <li>Trademarks, service marks, and logos (the "Marks")</li>
            </ul>
            <p className="mb-4">Our Content and Marks are protected by copyright and trademark laws globally. The Content and Marks are provided "AS IS" for your personal, non-commercial use only.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Your Use of Our Services</h3>
            <p className="mb-2">Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable licence to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the Services</li>
              <li>Download or print a copy of any portion of the Content you have properly gained access to</li>
            </ul>
            <p className="mb-4">Solely for your personal, non-commercial use. You may not copy, reproduce, republish, upload, post, display, encode, translate, transmit, distribute, sell, license, or exploit any part of the Services for commercial purposes without our prior written permission. To request permission: hello@medikloud.com</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Your Submissions</h3>
            <p className="mb-4">By sending us any content, you agree to assign all intellectual property rights in such Submissions to us. We may use these for any lawful purpose without acknowledgment or compensation.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Your Responsibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Confirm you've read and agree to "PROHIBITED ACTIVITIES"</li>
              <li>Will not send illegal, harassing, hateful, harmful, or misleading content</li>
              <li>Waive any moral rights</li>
              <li>Warrant originality or proper licensing</li>
              <li>Confirm Submissions are not confidential</li>
            </ul>
            <p className="mb-4">You are solely responsible for your Submissions and agree to reimburse us for any losses resulting from violations.</p>
          </Section>

          <Section title="3. User Representations">
            <p className="mb-2">By using the Services, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Registration info is accurate and will be kept current</li>
              <li>You have legal capacity and agree to these Terms</li>
              <li>You are not under the age of 13</li>
              <li>If a minor, you have parental permission</li>
              <li>You will not use automation (bots/scripts) to access the Services</li>
              <li>You will not use the Services for illegal purposes</li>
              <li>Your use complies with applicable laws</li>
            </ul>
            <p className="mb-4">Providing false info may result in suspension or termination of your account.</p>
          </Section>

          <Section title="4. User Registration">
            <p className="mb-2">You may be required to register to use the Services. You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Keep your password confidential</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
            <p className="mb-4">We may reclaim usernames if they are deemed inappropriate, obscene, or otherwise objectionable.</p>
          </Section>

          <Section title="5. Products">
            <p className="mb-2">We strive to accurately display colors, features, specifications, and details of products. However, we do not guarantee accuracy.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Availability: Not guaranteed</li>
              <li>Discontinuation: May occur at any time</li>
              <li>Prices: Subject to change</li>
            </ul>
          </Section>

          <Section title="6. Purchases and Payment">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Accepted Payment Methods</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
              <li>PayPal</li>
            </ul>
            <p className="mb-2">You agree to provide accurate account and payment info, update info as needed, pay all charges including taxes in INR, and allow us to charge your selected payment method upon order.</p>
            <p className="mb-4">We may correct pricing errors and refuse or limit orders if necessary.</p>
          </Section>

          <Section title="7. Subscriptions">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Billing and Renewal</h3>
            <p className="mb-4">Subscriptions auto-renew unless canceled. We charge your payment method recurringly without additional approval unless you cancel.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Cancellation</h3>
            <p className="mb-4">Email us at hello@medikloud.com. Cancellations take effect at the end of your paid term.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Fee Changes</h3>
            <p className="mb-4">We may adjust fees and will notify you in accordance with applicable law.</p>
          </Section>

          <Section title="8. Return/Refunds Policy">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Returns</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>All returns must be postmarked within two (2) days of the purchase date.</li>
              <li>Returned items must be in new and unused condition, with all original tags, labels, and packaging intact.</li>
            </ul>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Return Process</h3>
            <p className="mb-2">To initiate a return, please email our customer service team at <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a> to obtain a Return Merchandise Authorization (RMA) number.</p>
            <p className="mb-2">After receiving your RMA number:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Place the item securely in its original packaging.</li>
              <li>Include proof of purchase and the RMA number.</li>
              <li>Ship the return to: Medikloud, Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh – 530048, India</li>
            </ol>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Refunds</h3>
            <p className="mb-4">After we receive and inspect your returned item, we will process your refund or exchange within two (2) business days. Refunds may take 1–2 billing cycles to appear on your statement.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Questions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>📞 +91 77026 70993</li>
              <li>📧 <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a></li>
            </ul>
          </Section>

          <Section title="9. Software">
            <p className="mb-2">Software provided may come with an End User License Agreement (EULA). If not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You get a non-exclusive, personal, revocable, non-transferable license</li>
              <li>Software is provided "AS IS", with no warranties</li>
              <li>You accept all risks</li>
              <li>Reproduction or redistribution is prohibited unless allowed by the EULA</li>
            </ul>
          </Section>

          <Section title="10. Prohibited Activities">
            <p className="mb-2">You agree not to use the Services for anything outside their intended purpose. Prohibited activities include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Scraping or collecting data without permission</li>
              <li>Deceiving or defrauding users</li>
              <li>Circumventing security features</li>
              <li>Uploading viruses or spam</li>
              <li>Automated use (scripts, bots)</li>
              <li>Harassment or impersonation</li>
              <li>Violating intellectual property rights</li>
              <li>Reverse engineering software</li>
              <li>Using Services to compete with or exploit us commercially</li>
              <li>Unauthorized selling or advertising</li>
            </ul>
            <p className="mb-4">Any such actions may result in suspension or termination of access.</p>
          </Section>

          <Section title="11. User Generated Contributions">
            <p className="mb-4">The Services may provide opportunities to create, submit, post, display, transmit, or broadcast content (collectively, "Contributions"). These may be viewable by other users and on third-party websites and will be treated in accordance with our Privacy Policy.</p>
            <p className="mb-2">By making Contributions, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You own or have the necessary rights to use and authorize us to use your Contributions as intended.</li>
              <li>Your Contributions do not infringe on any third party's rights.</li>
              <li>You have obtained consent from any identifiable individuals in your Contributions.</li>
              <li>Your Contributions are not false, misleading, defamatory, obscene, or inappropriate.</li>
              <li>They do not violate privacy rights, laws regarding minors, or any applicable law.</li>
              <li>They do not violate these Legal Terms or link to any violating material.</li>
            </ul>
          </Section>

          <Section title="12. Contribution Licence">
            <ul className="list-disc pl-6 mb-4">
              <li>We may access, store, process, and use any data you provide in accordance with the Privacy Policy.</li>
              <li>If you submit suggestions or feedback, we may use and share that feedback without compensation to you.</li>
            </ul>
            <p className="mb-4">You retain ownership of your Contributions but are fully responsible for them. We are not liable for any statements in your Contributions.</p>
          </Section>

          <Section title="13. Mobile Application Licence">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Use Licence</h3>
            <p className="mb-2">You may install and use the App on your personal device in accordance with these Legal Terms. You agree NOT to:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Decompile, reverse engineer, disassemble, or decrypt the App</li>
              <li>Modify or create derivative works of the App</li>
              <li>Violate laws while using the App</li>
              <li>Remove or obscure any copyright or trademark notices</li>
              <li>Use the App for commercial purposes</li>
              <li>Make it accessible over a network to multiple users</li>
              <li>Use it to build competing products</li>
              <li>Use it to send spam or unsolicited emails</li>
              <li>Use our IP or interfaces to design other software or hardware</li>
            </ol>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Apple and Android Devices</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>The license is limited to use on Apple/Android devices only</li>
              <li>We, not the App Distributor, are responsible for support</li>
              <li>You confirm you are not in a US-embargoed or sanctioned country</li>
              <li>The App Distributor is a third-party beneficiary of this agreement</li>
            </ul>
          </Section>

          <Section title="14. Social Media">
            <p className="mb-2">You may connect your account with a Third-Party Account (e.g., Facebook, Google). By doing so:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You authorize us to access and store content from that account</li>
              <li>You confirm you are allowed to grant us access</li>
              <li>We may use such data to display on your profile or enhance your experience</li>
            </ul>
            <p className="mb-4">You can disconnect a Third-Party Account at any time. Your relationship with these third parties is governed by your agreements with them, not us.</p>
          </Section>

          <Section title="15. Third-Party Websites and Content">
            <p className="mb-4">The Services may contain links to third-party websites or services. We do not monitor, verify, guarantee, or endorse them. Accessing or using them is at your own risk. You agree to hold us blameless from any loss or harm from using Third-Party Content or Websites.</p>
          </Section>

          <Section title="16. Services Management">
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Monitor for Legal Term violations</li>
              <li>Take legal action if you breach terms or laws</li>
              <li>Disable or restrict access to your Contributions</li>
              <li>Remove burdensome files or content</li>
              <li>Manage the Services to protect our platform and ensure smooth operation</li>
            </ul>
          </Section>

          <Section title="17. Privacy Policy">
            <p className="mb-4">We care about your privacy. Please review our Privacy Policy. By using the Services, you agree to be bound by it. Our Services are hosted in India. If you access them from another region with different data laws, you consent to your data being transferred and processed in India.</p>
          </Section>

          <Section title="18. Term and Termination">
            <p className="mb-4">These Terms remain effective while you use the Services. We may, without notice, terminate or suspend your access if you breach any part of these Legal Terms, break any law, or we choose to do so. If terminated, you may not register a new account and we reserve the right to take legal action against violations.</p>
          </Section>

          <Section title="19. Modifications and Interruptions">
            <p className="mb-4">We reserve the right to modify, remove, or discontinue the Services at any time without notice. We are not responsible for downtime, delays, or interruptions due to updates or maintenance.</p>
          </Section>

          <Section title="20. Governing Law">
            <p className="mb-4">These Legal Terms are governed by the laws of India. You and Klinikmed Technologies Private Limited agree that all disputes will be subject to the exclusive jurisdiction of the courts of India.</p>
          </Section>

          <Section title="21. Dispute Resolution">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Informal Negotiations</h3>
            <p className="mb-4">The parties agree to first attempt informal negotiations for at least sixty (60) days before initiating arbitration.</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Binding Arbitration</h3>
            <p className="mb-2">Any dispute shall be resolved by the International Commercial Arbitration Court under the European Arbitration Chamber.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Arbitrator: One (1)</li>
              <li>Seat of Arbitration: Visakhapatnam, India</li>
              <li>Language: English</li>
              <li>Governing Law: Substantive law of India</li>
            </ul>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Restrictions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>No joint arbitration proceedings</li>
              <li>No class actions</li>
              <li>No representative capacity arbitration on behalf of the public</li>
            </ul>
          </Section>

          <Section title="22. Corrections">
            <p className="mb-4">The Services may contain errors, inaccuracies, or omissions. We reserve the right to correct, update, or change such information at any time without notice.</p>
          </Section>

          <Section title="23. Disclaimer">
            <p className="mb-2">THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. To the fullest extent permitted by law, we disclaim all warranties. We are not responsible for any third-party advertisements or services linked through the Services.</p>
          </Section>

          <Section title="24. Limitations of Liability">
            <p className="mb-4">In no event shall we be liable for direct or indirect damages, lost profits, data, or revenue. Our maximum liability shall not exceed the amount paid by you to us in the three (3) months prior to the event giving rise to the claim.</p>
          </Section>

          <Section title="25. Indemnification">
            <p className="mb-4">You agree to defend, indemnify, and hold us harmless from claims or damages resulting from your use of the Services, breach of these Legal Terms, or harm caused to another user.</p>
          </Section>

          <Section title="26. User Data">
            <p className="mb-4">We retain data you transmit for the purpose of operating the Services. While we perform regular backups, you are solely responsible for your own data. We are not liable for loss or corruption of data.</p>
          </Section>

          <Section title="27. Electronic Communications, Transactions, and Signatures">
            <p className="mb-4">By using the Services, you agree to receive electronic communications. This includes all transactions initiated or completed electronically with us.</p>
          </Section>

          <Section title="28. SMS Text Messaging">
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Opting Out</h3>
            <p className="mb-4">To stop receiving messages, call: +91 7702670993</p>
            <h3 className="text-h3 font-semibold mt-4 mb-2 text-slate-800">Support</h3>
            <p className="mb-4">Questions? Email: hello@medikloud.com or call: +91 7702670993</p>
          </Section>

          <Section title="29. Miscellaneous">
            <p className="mb-4">[Reserved]</p>
          </Section>

          <Section title="30. Contact Us">
            <p className="mb-2">If you have complaints or require assistance regarding the Services, contact:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Klinikmed Technologies Private Limited</li>
              <li>Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh 530048, India</li>
              <li>📞 Phone: +91 7702670993</li>
              <li>📧 Email: <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a></li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
}