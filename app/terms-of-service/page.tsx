/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center group cursor-pointer">
          <Link href="/">
            <Image
              src="/MK_Logo_WOB.webp"
              alt="MediKloud Logo"
              width={140}
              height={35}
              priority
              className="h-auto w-[120px] sm:w-[140px] transition-all duration-500 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 font-medium transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-blue-600 font-semibold underline">Terms</Link>
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
    <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700">{title}</h2>
    {children}
  </section>
);

export const metadata: Metadata = {
  title: 'Terms of Service | MediKloud',
  description: 'Read the legal terms that govern your use of MediKloud products and services.',
  alternates: { canonical: 'https://www.medikloud.com/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 leading-tight">Terms of Use</h1>
          <p className="mb-2 font-semibold">Last updated Aug 9, 2025</p>
          <div className="prose prose-blue max-w-none">
            <Section title="Agreement to Our Legal Terms">
              <p>We are Klinikmed Technologies Private Limited, doing business as Medikloud ("Company", "we", "us", or "our"), a company registered in India at:<br />11-1-18b, Putchala Street, Vizianagaram, Andhra Pradesh 535002.</p>
              <p>We operate:</p>
              <ul>
                <li>The website: <a href="https://www.medikloud.com" className="text-blue-600 underline">https://www.medikloud.com</a> (the "Site")</li>
                <li>The mobile application: Medikloud-mobile (the "App")</li>
                <li>Any other related products and services that refer or link to these legal terms (the "Legal Terms")</li>
              </ul>
              <p>(Collectively, the "Services")</p>
              <p>You can contact us by:</p>
              <ul>
                <li>Phone: (+91) 7702670993</li>
                <li>Email: <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a></li>
                <li>Mail: Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh 530048, India</li>
              </ul>
              <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Klinikmed Technologies Private Limited, concerning your access to and use of the Services. By accessing the Services, you acknowledge that you have read, understood, and agreed to be bound by all of these Legal Terms.</p>
              <p className="font-bold text-red-600">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            </Section>
            <Section title="Table of Contents">
              <ol className="list-decimal pl-6">
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
              <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
            </Section>
            <Section title="2. Intellectual Property Rights">
              <h3 className="font-semibold">Our Intellectual Property</h3>
              <p>We are the owner or the licensee of all intellectual property rights in our Services, including all:</p>
              <ul>
                <li>Source code</li>
                <li>Databases</li>
                <li>Functionality</li>
                <li>Software</li>
                <li>Website designs</li>
                <li>Audio, video, text, photographs, and graphics (collectively, the "Content")</li>
                <li>Trademarks, service marks, and logos (the "Marks")</li>
              </ul>
              <p>Our Content and Marks are protected by copyright and trademark laws, as well as other intellectual property rights and unfair competition laws and treaties globally. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.</p>
              <h3 className="font-semibold">Your Use of Our Services</h3>
              <p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable licence to:</p>
              <ul>
                <li>Access the Services</li>
                <li>Download or print a copy of any portion of the Content you have properly gained access to</li>
              </ul>
              <p>Solely for your personal, non-commercial use. You may not copy, reproduce, republish, upload, post, display, encode, translate, transmit, distribute, sell, license, or exploit any part of the Services, Content, or Marks for commercial purposes without our prior written permission. To request permission: hello@medikloud.coom</p>
              <p>If permission is granted, you must clearly identify us as the owners/licensors and retain copyright or proprietary notices. We reserve all rights not expressly granted. Any breach of these rights will result in immediate termination of your right to use the Services.</p>
              <h3 className="font-semibold">Your Submissions</h3>
              <p>By sending us any content (questions, feedback, suggestions, etc.), you agree to assign all intellectual property rights in such Submissions to us. We may use these for any lawful purpose, commercial or otherwise, without acknowledgment or compensation.</p>
              <h3 className="font-semibold">Your Responsibility</h3>
              <ul>
                <li>Confirm you've read and agree to "PROHIBITED ACTIVITIES"</li>
                <li>Will not send illegal, harassing, hateful, harmful, or misleading content</li>
                <li>Waive any moral rights</li>
                <li>Warrant originality or proper licensing</li>
                <li>Confirm Submissions are not confidential</li>
              </ul>
              <p>You are solely responsible for your Submissions and agree to reimburse us for any losses resulting from violations.</p>
            </Section>
            <Section title="3. User Representations">
              <p>By using the Services, you represent and warrant that:</p>
              <ul>
                <li>Registration info is accurate and will be kept current</li>
                <li>You have legal capacity and agree to these Terms</li>
                <li>You are not under the age of 13</li>
                <li>If a minor, you have parental permission</li>
                <li>You will not use automation (bots/scripts) to access the Services</li>
                <li>You will not use the Services for illegal purposes</li>
                <li>Your use complies with applicable laws</li>
              </ul>
              <p>Providing false info may result in suspension or termination of your account.</p>
            </Section>
            <Section title="4. User Registration">
              <p>You may be required to register to use the Services. You agree to:</p>
              <ul>
                <li>Keep your password confidential</li>
                <li>Be responsible for all activity under your account</li>
              </ul>
              <p>We may reclaim usernames if they are deemed inappropriate, obscene, or otherwise objectionable.</p>
            </Section>
            <Section title="5. Products">
              <p>We strive to accurately display:</p>
              <ul>
                <li>Colors</li>
                <li>Features</li>
                <li>Specifications</li>
                <li>Details of products</li>
              </ul>
              <p>However, we do not guarantee accuracy. Your display may differ from actual product colors or details.</p>
              <ul>
                <li>Availability: Not guaranteed</li>
                <li>Discontinuation: May occur at any time</li>
                <li>Prices: Subject to change</li>
              </ul>
            </Section>
            <Section title="6. Purchases and Payment">
              <h3 className="font-semibold">Accepted Payment Methods</h3>
              <ul>
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Discover</li>
                <li>PayPal</li>
              </ul>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate account and payment info</li>
                <li>Update info as needed</li>
                <li>Pay all charges including shipping and taxes in INR</li>
                <li>Allow us to charge your selected payment method upon order</li>
              </ul>
              <p>We may correct pricing errors and refuse or limit orders if necessary.</p>
            </Section>
            <Section title="7. Subscriptions">
              <h3 className="font-semibold">Billing and Renewal</h3>
              <p>Subscriptions auto-renew unless canceled. We charge your payment method recurringly without additional approval unless you cancel.</p>
              <h3 className="font-semibold">Cancellation</h3>
              <p>Email us at hello@medikloud.com. Cancellations take effect at the end of your paid term.</p>
              <h3 className="font-semibold">Fee Changes</h3>
              <p>We may adjust fees and will notify you in accordance with applicable law.</p>
            </Section>
            <Section title="8. Return/Refunds Policy">
              <h3 className="font-semibold">Return Policy</h3>
              <p>Thank you for your purchase. We hope you are happy with your order. However, if you are not completely satisfied for any reason, you may return the item to us for a refund, store credit, or exchange. Please review the guidelines below for more details on our return process.</p>
              <h4 className="font-semibold mt-4">Returns</h4>
              <ul>
                <li>All returns must be postmarked within two (2) days of the purchase date.</li>
                <li>Returned items must be in new and unused condition, with all original tags, labels, and packaging intact.</li>
              </ul>
              <h4 className="font-semibold mt-4">Return Process</h4>
              <p>To initiate a return, please email our customer service team at <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a> to obtain a Return Merchandise Authorization (RMA) number.</p>
              <p>After receiving your RMA number:</p>
              <ol className="list-decimal pl-6">
                <li>Place the item securely in its original packaging.</li>
                <li>Include proof of purchase and the RMA number.</li>
                <li>Ship the return to the following address:</li>
              </ol>
              <address className="not-italic my-4">
                Medikloud<br />
                Attn: Returns<br />
                RMA #<br />
                Startup Village, Chandrampalem,<br />
                Pedda Rushikonda, Madhurawada,<br />
                Visakhapatnam, Andhra Pradesh – 530048<br />
                India
              </address>
              <ul>
                <li>Please note: You are responsible for all return shipping charges.</li>
                <li>We strongly recommend using a trackable shipping method.</li>
              </ul>
              <h4 className="font-semibold mt-4">Refunds</h4>
              <p>After we receive and inspect your returned item, we will process your refund or exchange. Please allow up to two (2) business days from receipt of the return for processing.</p>
              <ul>
                <li>Refunds may take 1–2 billing cycles to appear on your credit card statement, depending on your payment provider.</li>
                <li>You will receive an email confirmation once your return has been processed.</li>
              </ul>
              <h4 className="font-semibold mt-4">Exceptions</h4>
              <p>The following items cannot be returned or exchanged:</p>
              <ul>
                <li>Any item explicitly marked as non-returnable on the product information page.</li>
              </ul>
              <p>If you receive a defective or damaged item, please contact us immediately at the email or phone number below to arrange a refund or replacement.</p>
              <h4 className="font-semibold mt-4">Questions</h4>
              <p>If you have any questions or need further assistance regarding our return policy, please contact us:</p>
              <ul>
                <li>📞 +91 77026 70993</li>
                <li>📧 <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a></li>
              </ul>
            </Section>
            <Section title="9. Software">
              <p>Software provided may come with an End User License Agreement (EULA). If not:</p>
              <ul>
                <li>You get a non-exclusive, personal, revocable, non-transferable license</li>
                <li>Software is provided "AS IS", with no warranties</li>
                <li>You accept all risks</li>
                <li>Reproduction or redistribution is prohibited unless allowed by the EULA</li>
              </ul>
            </Section>
            <Section title="10. Prohibited Activities">
              <p>You agree not to use the Services for anything outside their intended purpose. Prohibited activities include:</p>
              <ul>
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
              <p>Any such actions may result in suspension or termination of access.</p>
            </Section>
            <Section title="11. User Generated Contributions">
              <p>The Services do not offer users the ability to submit or post content. However, we may provide opportunities to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials (collectively, "Contributions"), including but not limited to:</p>
              <ul>
                <li>Text</li>
                <li>Writings</li>
                <li>Video</li>
                <li>Audio</li>
                <li>Photographs</li>
                <li>Graphics</li>
                <li>Comments</li>
                <li>Suggestions</li>
                <li>Personal information or other materials</li>
              </ul>
              <p>These Contributions may be viewable by other users and on third-party websites. Any Contributions will be treated in accordance with our Privacy Policy.</p>
              <p>By making Contributions, you represent and warrant that:</p>
              <ul>
                <li>You own or have the necessary rights and permissions to use and authorize us and other users to use your Contributions as intended.</li>
                <li>Your Contributions do not infringe on any third party's rights (e.g., copyright, trademark, patent).</li>
                <li>You have obtained consent from any identifiable individuals in your Contributions.</li>
                <li>Your Contributions are not false, misleading, or defamatory.</li>
                <li>They are not unsolicited advertisements or spam.</li>
                <li>They are not obscene, offensive, or inappropriate.</li>
                <li>They do not violate privacy rights, laws regarding minors, or any applicable law.</li>
                <li>They do not contain offensive content tied to race, gender, nationality, disability, etc.</li>
                <li>They do not violate these Legal Terms or link to any violating material.</li>
              </ul>
              <p>Any breach of the above may result in termination or suspension of your access to the Services.</p>
            </Section>
            <Section title="12. Contribution Licence">
              <ul>
                <li>We may access, store, process, and use any data you provide in accordance with the Privacy Policy and your settings.</li>
                <li>If you submit suggestions or feedback, we may use and share that feedback without compensation to you.</li>
              </ul>
              <p>You retain ownership of your Contributions and associated intellectual property rights. However:</p>
              <ul>
                <li>We are not liable for any statements in your Contributions.</li>
                <li>You are fully responsible for them.</li>
                <li>You agree not to pursue legal action against us regarding your Contributions.</li>
              </ul>
            </Section>
            <Section title="13. Mobile Application Licence">
              <h3 className="font-semibold">Use Licence</h3>
              <ul>
                <li>Install and use the App on your personal device</li>
                <li>Access and use the App in accordance with these Legal Terms</li>
              </ul>
              <p>You agree NOT to:</p>
              <ol className="list-decimal pl-6">
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
              <h3 className="font-semibold">Apple and Android Devices</h3>
              <ul>
                <li>The license is limited to use on Apple/Android devices only</li>
                <li>We, not the App Distributor, are responsible for support</li>
                <li>App Distributors are not liable for warranty issues beyond refunds</li>
                <li>You confirm you are not in a US-embargoed or sanctioned country</li>
                <li>You comply with your mobile provider's terms</li>
                <li>The App Distributor is a third-party beneficiary of this agreement and may enforce it against you</li>
              </ul>
            </Section>
            <Section title="14. Social Media">
              <p>You may connect your account with a Third-Party Account (e.g., Facebook, Google). By doing so:</p>
              <ul>
                <li>You authorize us to access and store content from that account (e.g., friend lists)</li>
                <li>You confirm you are allowed to grant us access</li>
                <li>We may use such data to display on your profile or enhance your experience</li>
              </ul>
              <p>You can disconnect a Third-Party Account at any time. We will attempt to delete all related data, except your username and profile picture. Your relationship with these third parties is governed by your agreements with them, not us. We do not review or guarantee the legality, accuracy, or content of Third-Party services.</p>
            </Section>
            <Section title="15. Third-Party Websites and Content">
              <p>The Services may contain links to or content from third-party websites or services (collectively, "Third-Party Content" and "Third-Party Websites"). We do not:</p>
              <ul>
                <li>Monitor or verify such websites or content</li>
                <li>Guarantee their accuracy, legality, or policies</li>
                <li>Endorse their offerings or practices</li>
              </ul>
              <p>Accessing or using them is at your own risk. Purchases made through such websites are between you and the third party only. You agree to hold us blameless from:</p>
              <ul>
                <li>Any loss or harm from using Third-Party Content or Websites</li>
                <li>Any dissatisfaction with your purchases or experience there</li>
              </ul>
            </Section>
            <Section title="16. Services Management">
              <ul>
                <li>Monitor for Legal Term violations</li>
                <li>Take legal action if you breach terms or laws</li>
                <li>Disable or restrict access to your Contributions</li>
                <li>Remove burdensome files or content</li>
                <li>Manage the Services to protect our platform and ensure smooth operation</li>
              </ul>
            </Section>
            <Section title="17. Privacy Policy">
              <p>We care about your privacy. Please review our Privacy Policy. By using the Services, you agree to be bound by it. Our Services are hosted in India. If you access them from another region with different data laws, you consent to your data being transferred and processed in India.</p>
            </Section>
            <Section title="18. Term and Termination">
              <p>These Terms remain effective while you use the Services. We may, without notice, terminate or suspend your access if:</p>
              <ul>
                <li>You breach any part of these Legal Terms</li>
                <li>You break any law</li>
                <li>We choose to do so for any reason or no reason</li>
              </ul>
              <p>If terminated:</p>
              <ul>
                <li>You may not register a new account under your name or any other name</li>
                <li>We reserve the right to take legal action against violations</li>
              </ul>
            </Section>
            <Section title="19. Modifications and Interruptions">
              <ul>
                <li>Modify or remove any content</li>
                <li>Change or discontinue the Services at any time</li>
                <li>Do so without notice or obligation</li>
              </ul>
              <p>We are not responsible for:</p>
              <ul>
                <li>Downtime</li>
                <li>Delays</li>
                <li>Interruptions due to updates or maintenance</li>
              </ul>
              <p>We are not obligated to provide:</p>
              <ul>
                <li>Continuous operation</li>
                <li>Bug fixes or new releases</li>
              </ul>
            </Section>
            <Section title="20. Governing Law">
              <p>These Legal Terms are governed by the laws of India. You and Klinikmed technologies Private Limited agree that all disputes will be subject to the exclusive jurisdiction of the courts of India.</p>
            </Section>
            <Section title="21. Dispute Resolution">
              <h3 className="font-semibold">Informal Negotiations</h3>
              <p>To expedite resolution and reduce costs of any dispute, controversy, or claim ("Dispute") related to these Legal Terms, the parties ("you" and "we") agree to first attempt informal negotiations for at least sixty (60) days before initiating arbitration. Informal negotiations begin upon written notice from one party to the other.</p>
              <h3 className="font-semibold">Binding Arbitration</h3>
              <p>Any Dispute shall be finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Brussels, Avenue Louise, 146), in accordance with its Rules.</p>
              <ul>
                <li>Arbitrator: One (1)</li>
                <li>Seat of Arbitration: Visakhapatnam, India</li>
                <li>Language: English</li>
                <li>Governing Law: Substantive law of India</li>
              </ul>
              <h3 className="font-semibold">Restrictions</h3>
              <ul>
                <li>No joint arbitration proceedings</li>
                <li>No class actions</li>
                <li>No representative capacity arbitration on behalf of the public</li>
              </ul>
              <h3 className="font-semibold">Exceptions</h3>
              <ul>
                <li>Enforcement or validity of intellectual property rights</li>
                <li>Allegations of theft, piracy, invasion of privacy, or unauthorised use</li>
                <li>Claims for injunctive relief</li>
              </ul>
              <p>If this section is found unenforceable, such Disputes shall be resolved in courts of competent jurisdiction in India.</p>
            </Section>
            <Section title="22. Corrections">
              <p>The Services may contain errors, inaccuracies, or omissions, including in descriptions, pricing, and availability. We reserve the right to correct, update, or change such information at any time without notice.</p>
            </Section>
            <Section title="23. Disclaimer">
              <p>THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. You agree to use the Services at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:</p>
              <ul>
                <li>Accuracy or completeness of the content</li>
                <li>Personal injury or property damage from using the Services</li>
                <li>Unauthorized access to your personal or financial data</li>
                <li>Bugs, viruses, or harmful code from third parties</li>
                <li>Errors or omissions in content</li>
              </ul>
              <p>We are not responsible for any third-party advertisements, products, or services linked through the Services. Exercise caution and sound judgment when making transactions.</p>
            </Section>
            <Section title="24. Limitations of Liability">
              <p>In no event shall we (including directors, employees, agents) be liable for:</p>
              <ul>
                <li>Direct or indirect damages</li>
                <li>Lost profits, data, or revenue</li>
                <li>Incidental, special, or punitive damages</li>
              </ul>
              <p>Our maximum liability shall not exceed the amount paid by you to us in the three (3) months prior to the event giving rise to the claim. Some jurisdictions may not allow these limitations, so they may not apply to you.</p>
            </Section>
            <Section title="25. Indemnification">
              <p>You agree to defend, indemnify, and hold us harmless from claims or damages resulting from:</p>
              <ol className="list-decimal pl-6">
                <li>Your use of the Services</li>
                <li>Breach of these Legal Terms</li>
                <li>Breach of your warranties</li>
                <li>Infringement of third-party rights</li>
                <li>Harm caused to another user</li>
              </ol>
              <p>We reserve the right to take over the defence of any matter at your expense and will notify you of any claim.</p>
            </Section>
            <Section title="26. User Data">
              <p>We retain data you transmit for the purpose of operating the Services. While we perform regular backups, you are solely responsible for your own data. We are not liable for:</p>
              <ul>
                <li>Loss or corruption of data</li>
                <li>Any resulting consequences or damages</li>
              </ul>
            </Section>
            <Section title="27. Electronic Communications, Transactions, and Signatures">
              <p>By using the Services, you agree to receive electronic communications (e.g., emails, forms). This includes all transactions initiated or completed electronically with us.</p>
            </Section>
            <Section title="28. SMS Text Messaging">
              <h3 className="font-semibold">Program Description</h3>
              <p>By opting in, you consent to receive SMS messages from Medikloud, which may include:</p>
              <h3 className="font-semibold">Opting Out</h3>
              <p>To stop receiving messages, call: +91 7702670993</p>
              <h3 className="font-semibold">Message and Data Rates</h3>
              <p>Standard message and data rates may apply as per your carrier.</p>
              <h3 className="font-semibold">Support</h3>
              <p>Questions? Email: hello@medikloud.com or call: +91 7702670993</p>
            </Section>
            <Section title="29. Miscellaneous">
              <p>[Reserved]</p>
            </Section>
            <Section title="30. Contact Us">
              <p>If you have complaints or require assistance regarding the Services, contact:</p>
              <ul>
                <li>Klinikmed Technologies Private Limited</li>
                <li>Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh 530048, India</li>
                <li>📞 Phone: +91 7702670993</li>
                <li>📧 Email: <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a></li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}