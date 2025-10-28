import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">MerchantHaus Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: August 5, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction & Scope</h2>
          <p className="mb-4 text-foreground/90">
            Welcome to MerchantHaus LLC ("MerchantHaus", "we", "us", or "our"). This Privacy Policy explains how we collect, use, store, share, and protect information when you interact with us.
          </p>
          <p className="mb-4 text-foreground/90">This policy applies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Merchants:</strong> The businesses and individuals who register for and use our payment services (the "Services").</li>
            <li><strong>Customers:</strong> The end-users or customers who make payments to our Merchants through our Services.</li>
            <li><strong>Visitors:</strong> Individuals who browse our website (merchanthaus.io) or otherwise interact with us.</li>
          </ul>
          <p className="text-foreground/90">
            By accessing our website or using our Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. The Information We Collect</h2>
          <p className="mb-4 text-foreground/90">
            We collect different types of information from various sources to provide and manage our Services.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Information You Provide to Us (Merchants)</h3>
          <p className="mb-2 text-foreground/90">When you register for a MerchantHaus account, we collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Business Information:</strong> Your business's legal name, "Doing Business As" (DBA) name, physical address, industry type (MCC), and government-issued tax ID (e.g., EIN).</li>
            <li><strong>Owner and User Details:</strong> For business owners, principals, and authorized users, we collect full legal name, email address, phone number, and home address.</li>
            <li><strong>Identity Verification Data:</strong> To comply with "Know Your Customer" (KYC) requirements, we collect identity document information (such as a driver's license, passport, or national ID card) and, in some cases, biometric data (like a facial scan) provided through our secure verification partners.</li>
            <li><strong>Financial Information:</strong> Bank account details (account and routing numbers) for processing payouts (settlements).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Information Collected from Your Customers</h3>
          <p className="mb-2 text-foreground/90">When a Customer makes a payment to you (our Merchant) through our Services, we collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Payment Information:</strong> Cardholder data (credit or debit card number, expiration date, CVV), bank account details for bank transfers, or other payment method details.</li>
            <li><strong>Transaction Data:</strong> The transaction amount, date and time, method of payment, and details about the goods or services purchased.</li>
            <li><strong>Identifying Information:</strong> The Customer's name, email, billing address, or shipping address, as required by the Merchant or for fraud prevention.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Information We Collect Automatically (Technical Data)</h3>
          <p className="mb-2 text-foreground/90">When you (Merchant, Customer, or Visitor) interact with our website or Services, we automatically collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Log Data:</strong> Your IP address, device type, operating system, browser type and settings, and the date, time, and content of your requests.</li>
            <li><strong>Usage Data:</strong> Information about how you navigate our Services, which features you use, and performance metrics.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to gather this data. (See Section 5 for details).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-foreground">2.4 Information from Third Parties</h3>
          <p className="mb-2 text-foreground/90">We may also receive information about you from third-party sources, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Fraud Prevention Services:</strong> To assess risk, we receive data from credit bureaus, identity verification services, and public databases.</li>
            <li><strong>Financial Partners:</strong> Our acquiring banks and financial partners may provide us with information about your financial standing or transaction activity.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information (and Legal Bases)</h2>
          <p className="mb-4 text-foreground/90">
            We use your information for specific purposes and only where we have a legal basis to do so, such as contractual necessity, legal obligation, legitimate interest, or consent.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-3 text-foreground/90">
            <li>
              <strong>To Provide and Manage Payment Services:</strong> We use your business, financial, and transaction data to process payments, issue payouts, manage your account, and provide customer support.<br />
              <em className="text-sm">Legal Basis: Performance of a Contract</em>
            </li>
            <li>
              <strong>To Verify Identity and Prevent Fraud:</strong> We use your identity details, biometric data, and transaction data to verify your identity, mitigate fraud, prevent money laundering, and comply with Anti-Money Laundering (AML) laws.<br />
              <em className="text-sm">Legal Basis: Legal Obligation & Legitimate Interest (Security)</em>
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> We are subject to various laws and regulations (e.g., financial services, tax laws) that require us to collect, retain, and report certain data to authorities.<br />
              <em className="text-sm">Legal Basis: Legal Obligation</em>
            </li>
            <li>
              <strong>To Improve Our Products and Services:</strong> We analyze technical and usage data to understand how our Services are used, identify areas for improvement, and develop new features.<br />
              <em className="text-sm">Legal Basis: Legitimate Interest (Service Improvement)</em>
            </li>
            <li>
              <strong>To Communicate with You:</strong> We use your contact details to send you important service updates, security alerts, and administrative messages. We may also send you marketing communications, which you can opt out of at any time.<br />
              <em className="text-sm">Legal Basis: Performance of a Contract & Legitimate Interest (Communication)</em>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">4. How and Why We Share Information</h2>
          <p className="mb-4 text-foreground/90">
            We do not sell your personal information. We only share it in the following circumstances to provide our Services and meet our legal obligations:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Financial Institutions and Card Networks:</strong> We share transaction and payment data with our acquiring bank partners (like Wells Fargo, Chase) and the Card Networks (like Visa, Mastercard) to process payments.</li>
            <li><strong>Service Providers:</strong> We share information with third-party vendors who assist in our operations, such as cloud hosting (e.g., AWS, Azure), identity verification partners, customer support tools, and data analytics providers. These providers are contractually bound to protect your data.</li>
            <li><strong>Fraud Prevention Services:</strong> We may share information with specialized services to analyze transactions for high-risk or fraudulent activity.</li>
            <li><strong>Legal Authorities:</strong> We will disclose information to law enforcement, government agencies, or other third parties when required by law, subpoena, or court order, or to protect our legal rights.</li>
            <li><strong>Our Partners and Affiliates:</strong> We may share information within the MerchantHaus corporate family for operational purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies and Tracking Technologies</h2>
          <p className="mb-4 text-foreground/90">
            We use cookies (small text files stored on your device) and similar technologies (like web beacons or pixels) for several purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Essential Cookies:</strong> Required for the basic functionality of our Services, such as security and login authentication.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how Visitors and Merchants interact with our website so we can improve performance.</li>
            <li><strong>Functional Cookies:</strong> Remember your settings and preferences (like language) to enhance your experience.</li>
          </ul>
          <p className="text-foreground/90">
            You can manage your cookie preferences through your browser settings. However, disabling essential cookies may impact your ability to use our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Security Measures</h2>
          <p className="mb-4 text-foreground/90">
            We are committed to protecting your data. We implement robust, industry-standard security measures, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>PCI DSS Compliance:</strong> We maintain strict compliance with the Payment Card Industry Data Security Standard (PCI DSS) to protect cardholder data.</li>
            <li><strong>Encryption:</strong> We encrypt sensitive data (like card numbers and bank details) both in transit (using TLS/SSL) and at rest (using AES-256).</li>
            <li><strong>Access Controls:</strong> We enforce strict access controls, ensuring that your personal data is only accessible to authorized personnel with a legitimate business need.</li>
            <li><strong>Monitoring and Audits:</strong> We continuously monitor our systems for vulnerabilities and conduct regular security assessments and audits.</li>
            <li><strong>Employee Training:</strong> Our employees receive comprehensive training on data privacy and security best practices.</li>
          </ul>
          <p className="text-foreground/90">
            While we take extensive measures to protect your data, no security system is impenetrable. We cannot guarantee 100% security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention</h2>
          <p className="mb-4 text-foreground/90">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
          </p>
          <p className="mb-4 text-foreground/90">
            We must retain data related to your account and transactions for several years after you close your account to comply with legal, regulatory (e.g., AML laws), tax, and financial reporting requirements.
          </p>
          <p className="text-foreground/90">
            Data that is no longer needed for service, legal, or compliance purposes will be securely disposed of or anonymized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Data Privacy Rights</h2>
          <p className="mb-4 text-foreground/90">
            You have certain rights regarding the personal information we hold about you, subject to local laws. These rights may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
            <li><strong>Right to Access:</strong> The right to request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> The right to request correction of any inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure (Deletion):</strong> The right to request that we delete your personal data, subject to our legal and regulatory retention obligations.</li>
            <li><strong>Right to Object to Processing:</strong> The right to object to our processing of your data for certain purposes (like direct marketing).</li>
            <li><strong>Right to Lodge a Complaint:</strong> The right to lodge a complaint with your local data protection regulator if you believe we have violated your privacy rights.</li>
          </ul>
          <p className="mb-4 text-foreground/90">
            <strong>How to Exercise Your Rights:</strong> To make a request, please contact us at support@merchanthaus.io. We will need to verify your identity before processing your request.
          </p>
          <p className="text-foreground/90">
            <strong>A Note to Our Merchants' Customers:</strong> If you are a Customer of a MerchantHaus Merchant, MerchantHaus acts as a "data processor" on their behalf. The Merchant is the "data controller." If you wish to exercise your data rights for a transaction, please contact the Merchant you did business with directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">9. International Data Transfers</h2>
          <p className="text-foreground/90">
            MerchantHaus is based in the United States. If you are accessing our Services from outside the U.S. (e.g., in Europe or the UK), your information will be processed and stored in the United States. We use appropriate safeguards, such as Standard Contractual Clauses, to protect your data when it is transferred.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
          <p className="text-foreground/90">
            Our Services are not intended for or directed at children. We do not knowingly collect personal information from individuals under the age of 18. If we learn we have collected data from a child, we will take steps to delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Privacy Policy</h2>
          <p className="text-foreground/90">
            We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date at the top.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
          <p className="mb-4 text-foreground/90">
            If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="font-semibold mb-2 text-foreground">MerchantHaus LLC</p>
            <p className="text-foreground/90">Attn: Privacy Officer</p>
            <p className="text-foreground/90">1209 Mountain Road Pl NE, Ste N</p>
            <p className="text-foreground/90">Albuquerque, NM 87110 USA</p>
            <p className="mt-4 text-foreground/90">Email: support@merchanthaus.io</p>
            <p className="text-foreground/90">Phone: 1-505-600-6042</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
