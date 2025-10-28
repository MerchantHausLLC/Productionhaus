import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground mb-4">
            MerchantHaus Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: August 25, 2025
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                1. Overview & Acceptance of Agreement
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms & Conditions (this "Agreement" or "Terms") constitute a binding legal agreement between MerchantHaus LLC ("MerchantHaus", "we", "us", or "our") and the legal entity or individual registering for or using our services ("Merchant", "you", or "your").
                </p>
                <p>
                  This Agreement governs your access to and use of the MerchantHaus website, payment processing services, application programming interfaces (APIs), software, dashboards, and all other related tools and services (collectively, the "Services").
                </p>
                <p>
                  By creating an account, accessing our website, or using any of the Services, you signify that you have read, understood, and agree to be bound by this Agreement and all policies and guidelines incorporated by reference, including our Privacy Policy.
                </p>
                <p>
                  If you are using the Services on behalf of a business or other legal entity, you represent and warrant that you have the full legal authority to bind that entity to this Agreement. If you do not have such authority, or if you do not agree with any part of these Terms, you must not access or use the Services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                2. Definitions
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p><strong>Merchant:</strong> The business, organization, or individual that registers for an account to use the Services for business purposes.</p>
                <p><strong>User:</strong> An employee, agent, independent contractor, or other authorized individual who accesses or uses the Services on behalf of a Merchant.</p>
                <p><strong>Visitor:</strong> Any individual who browses the MerchantHaus website without registering for an account.</p>
                <p><strong>Services:</strong> All offerings provided by MerchantHaus, including but not limited to payment gateway facilitation, merchant onboarding, risk management, analytics dashboards, software, APIs, technical documentation, and customer support.</p>
                <p><strong>Card Networks:</strong> Payment networks such as Visa, Mastercard, American Express, and Discover, including their rules and guidelines.</p>
                <p><strong>Chargeback:</strong> A dispute initiated by a cardholder with their issuing bank, which may result in the reversal of a transaction.</p>
                <p><strong>Merchant Data:</strong> Any and all data, including personal information about your customers, that you submit to, or collect through, the Services.</p>
                <p><strong>Platform:</strong> The proprietary MerchantHaus software and technology platform through which the Services are delivered.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                3. Account Registration, Eligibility, and Use
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Eligibility</h3>
                  <p className="mb-2">To use the Services, you must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be a legal entity or an individual who is at least 18 years old and operating a bona fide business.</li>
                    <li>Provide accurate, complete, and current information about your business, identity, and financial status as requested during our registration and "Know Your Customer" (KYC) processes.</li>
                    <li>Not be engaged in any of the activities listed in our "Prohibited Industries Policy" (which may be provided separately or on our website).</li>
                    <li>Not be located in, or a resident of, any jurisdiction subject to comprehensive U.S. government embargoes.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Account Security</h3>
                  <p>You are solely responsible for safeguarding your account credentials, including usernames, passwords, and API keys. You are fully responsible for all activity that occurs under your account, whether or not authorized by you. You must notify MerchantHaus immediately at support@merchanthaus.io of any suspected or actual unauthorized use of your account or any other breach of security.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Account Suspension and Termination</h3>
                  <p className="mb-2">MerchantHaus reserves the right, in its sole discretion, to suspend, limit, or terminate your account or access to the Services at any time, with or without cause or notice. Reasons for suspension or termination may include, but are not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Suspected fraud, money laundering, terrorist financing, or other illegal activities.</li>
                    <li>A high volume of Chargebacks, refunds, or customer complaints.</li>
                    <li>Violation of this Agreement, the Privacy Policy, or any Card Network rules.</li>
                    <li>Failure to pay applicable fees.</li>
                    <li>A request from law enforcement or a government agency.</li>
                    <li>Your business becoming insolvent or subject to bankruptcy proceedings.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                4. Payment Processing, Fees, and Financial Terms
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Role of MerchantHaus</h3>
                  <p>MerchantHaus acts as a technology facilitator and intermediary. We are not a bank or a licensed financial institution. We facilitate the processing of payments through our relationships with third-party acquiring banks and Card Networks.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Fees</h3>
                  <p>You agree to pay the fees, charges, and other assessments (collectively, "Fees") applicable to your use of the Services, which will be disclosed to you during onboarding or in a separate signed agreement. All Fees are quoted in U.S. Dollars unless otherwise specified. Fees are non-refundable unless explicitly stated otherwise. We reserve the right to change our Fees with thirty (30) days' prior notice.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Payment of Fees</h3>
                  <p>Fees will typically be deducted from the settlement funds due to you from your processed transactions. If settlement funds are insufficient, or for any other charges due, you authorize MerchantHaus to debit your designated bank account on file.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Chargebacks and Refunds</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You are solely and fully liable for the total amount of all Chargebacks, refunds, retrievals, and any associated fees (including Card Network fees and MerchantHaus administrative fees).</li>
                    <li>You are responsible for managing your own customer service and providing refunds to your customers as per your business policies.</li>
                    <li>MerchantHaus is not responsible for handling customer service for your business or issuing refunds on your behalf, though we provide the tools to facilitate them.</li>
                    <li>In the event of a Chargeback, you agree to cooperate with MerchantHaus and provide all necessary information and documentation within the required timeframe.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.5 Reserves</h3>
                  <p>MerchantHaus reserves the right to establish a "Reserve" — a portion of your settlement funds held by us to cover potential future losses from Chargebacks, refunds, or other liabilities. We may establish or change the terms of your Reserve at any time based on our assessment of the risk associated with your account or business.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.6 Payouts (Settlements)</h3>
                  <p>MerchantHaus will settle funds from processed transactions to your designated bank account, less our Fees, any Chargebacks, refunds, and Reserve amounts, according to the payout schedule agreed upon. Payouts may be delayed by us or our partners for risk management, compliance, or investigative purposes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                5. Data Privacy & Security
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Privacy Policy</h3>
                  <p>Our Privacy Policy, which is incorporated by reference into this Agreement, describes how we collect, use, store, and disclose personal information. You agree to the practices described in the Privacy Policy.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5.2 MerchantHaus Security</h3>
                  <p>MerchantHaus maintains compliance with the Payment Card Industry Data Security Standard (PCI DSS) as a service provider. We use commercially reasonable administrative, technical, and physical safeguards, including encryption, to protect data processed through our Services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Merchant Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Your Compliance:</strong> You are responsible for the security of any Merchant Data you possess or otherwise control. You must maintain your own PCI DSS compliance (if applicable to your business) and must not store, process, or transmit sensitive cardholder data (such as full card numbers or CVV codes) in an unsecure manner.</li>
                    <li><strong>Data License:</strong> You grant MerchantHaus a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display Merchant Data solely for the purposes of providing and improving the Services.</li>
                    <li><strong>Customer Privacy:</strong> You must maintain your own customer-facing privacy policy that accurately describes how you collect, use, and share your customers' personal information, including its use by third-party service providers like MerchantHaus.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                6. Acceptable Use & Prohibited Conduct
              </h2>
              <p className="text-muted-foreground mb-2">You agree that you will not, and will not permit any third party to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the Services for any illegal, fraudulent, deceptive, or harmful purpose.</li>
                <li>Engage in any activity that violates any applicable local, state, federal, or international law, regulation, or Card Network rule.</li>
                <li>Use the Services to support or engage in any of the industries or activities on our "Prohibited Industries List."</li>
                <li>Interfere with, disrupt, or negatively affect the integrity, performance, or security of the Services or the data of another user.</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble the Platform or any part of the Services.</li>
                <li>Misuse our APIs, including by making excessive or abusive API calls.</li>
                <li>Resell, sublicense, or otherwise provide the Services to any third party without our express written authorization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                7. Intellectual Property
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7.1 MerchantHaus IP</h3>
                  <p>MerchantHaus and its licensors retain all right, title, and interest in and to the Services, the Platform, our website, trademarks, logos, documentation, and all underlying technology and intellectual property (collectively, "MerchantHaus IP").</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7.2 Limited License</h3>
                  <p>We grant you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Services, including our APIs and documentation, solely as permitted by this Agreement and for your internal business purposes.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7.3 Merchant Data</h3>
                  <p>As between you and MerchantHaus, you retain all ownership rights to your Merchant Data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7.4 Feedback</h3>
                  <p>If you provide us with any feedback, suggestions, or ideas for improvement (collectively, "Feedback"), you hereby grant MerchantHaus a worldwide, perpetual, irrevocable, royalty-free, and fully sublicensable license to use, implement, and otherwise commercialize such Feedback in any way without any obligation or compensation to you.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                8. Term & Termination
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8.1 Term</h3>
                  <p>This Agreement commences on the date you first accept it (by creating an account or using the Services) and continues until terminated by either party.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8.2 Termination by You</h3>
                  <p>You may terminate this Agreement at any time by closing your account and ceasing all use of the Services. You will remain liable for all outstanding fees, charges, and liabilities incurred prior to termination.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8.3 Termination by Us</h3>
                  <p>We may terminate this Agreement as outlined in Section 3.3.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8.4 Effect of Termination</h3>
                  <p>Upon termination, your license to use the Services is revoked. You must immediately pay any outstanding Fees. Any funds held in your Reserve may be held for a period (typically 180 days or longer) sufficient to cover potential Chargebacks. Sections of this Agreement that by their nature should survive termination will survive, including (but not limited to) sections on Fees, Chargebacks, Intellectual Property, Confidentiality, Disclaimers, Liability, Indemnification, and Dispute Resolution.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                9. Disclaimers & Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">9.1 DISCLAIMER OF WARRANTIES</h3>
                  <p className="uppercase text-sm">
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. MERCHANT HAUS, ITS AFFILIATES, AND ITS LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">9.2 LIMITATION OF LIABILITY</h3>
                  <p className="uppercase text-sm">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL MERCHANT HAUS, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH: (A) YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY; (C) ANY DATA OR CONTENT OBTAINED FROM THE SERVICES; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR DATA.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">9.3 LIABILITY CAP</h3>
                  <p className="uppercase text-sm">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, MERCHANT HAUS'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS AND DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, WILL NOT EXCEED THE TOTAL FEES PAID BY YOU TO MERCHANT HAUS DURING THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                10. Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless MerchantHaus, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with: (a) Your access to or use of the Services; (b) Your violation of this Agreement, any Card Network rules, or any applicable law; (c) Your Merchant Data or your violation of any third-party right, including any intellectual property or privacy right; (d) Any dispute between you and your customers, including any claims related to your goods or services; or (e) Your negligence, fraud, or willful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                11. Dispute Resolution & Governing Law
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">11.1 Governing Law</h3>
                  <p>These Terms and any dispute arising from them shall be governed by and construed in accordance with the laws of the State of New Mexico, United States, without regard to its conflict of law principles.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">11.2 Jurisdiction</h3>
                  <p>Unless otherwise required by law or the arbitration provisions below, you agree that any legal action or proceeding shall be brought exclusively in the state or federal courts located in Albuquerque (Bernalillo County), New Mexico, and you consent to the personal jurisdiction of such courts.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">11.3 Informal Resolution</h3>
                  <p>In case of any dispute, we strongly encourage you to contact our support team first at support@merchanthaus.io to seek a resolution. If a dispute is not resolved informally within forty-five (45) days, either party may initiate a formal proceeding.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">11.4 Binding Arbitration</h3>
                  <p>Any dispute or claim (excluding claims for injunctive relief) shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration will take place in Albuquerque, New Mexico. The arbitrator's decision will be final and binding.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">11.5 CLASS ACTION WAIVER</h3>
                  <p className="uppercase text-sm">
                    YOU AND MERCHANT HAUS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                12. General Provisions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.1 Changes to Terms</h3>
                  <p>MerchantHaus reserves the right to update or modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website, updating the "Effective Date," or by email. Your continued use of the Services after such notice constitutes your acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.2 Entire Agreement</h3>
                  <p>This Agreement, together with the Privacy Policy and any other agreements or policies incorporated by reference, constitutes the entire agreement between you and MerchantHaus regarding the Services and supersedes all prior agreements.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.3 Severability</h3>
                  <p>If any provision of this Agreement is found to be invalid or unenforceable, that provision will be severed, and the remaining provisions will remain in full force and effect.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.4 Waiver</h3>
                  <p>Our failure to exercise or enforce any right or provision of this Agreement will not constitute a waiver of that right or provision.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.5 Assignment</h3>
                  <p>You may not assign or transfer this Agreement (or your account) without our prior written consent. MerchantHaus may freely assign or transfer this Agreement without restriction.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.6 Force Majeure</h3>
                  <p>We will not be liable for any delays or failure in performance resulting from events or circumstances beyond our reasonable control, including acts of God, war, terrorism, pandemics, strikes, or government actions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">12.7 Notices</h3>
                  <p>All legal notices to MerchantHaus must be sent to the address below. Notices to you will be sent to the email address associated with your account.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-ubuntu font-semibold mb-4">
                13. Contact Information
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>For any legal questions, notices, or support requests regarding these Terms, please contact us at:</p>
                <div className="bg-muted/30 p-6 rounded-lg mt-4">
                  <p className="font-semibold text-foreground">MerchantHaus LLC</p>
                  <p>Attn: Legal Department</p>
                  <p>1209 Mountain Road Pl NE, Ste N</p>
                  <p>Albuquerque, NM 87110 USA</p>
                  <p className="mt-4">
                    <strong>Email:</strong> <a href="mailto:support@merchanthaus.io" className="text-primary hover:underline">support@merchanthaus.io</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+15056006042" className="text-primary hover:underline">1-505-600-6042</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
