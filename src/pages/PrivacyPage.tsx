import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';
import { useCompanyInfo } from '../context/ThemeContext';
import LegalCompanyNameCanvas from '../components/legal/LegalCompanyNameCanvas';
import LegalCompanyInfoCanvas from '../components/legal/LegalCompanyInfoCanvas';

const PrivacyPage: React.FC = () => {
  const { companyName } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Privacy Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              <LegalCompanyNameCanvas companyName={companyName} /> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              information when you use our decline recovery service, visit our website, or interact with us as a merchant
              client or as a cardholder whose transaction was processed by one of our merchant clients.
            </LegalParagraph>
            <LegalParagraph>
              By using our services, you consent to the data practices described in this policy. If you do not agree
              with this Privacy Policy, please do not use our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Information We Collect</LegalSectionTitle>
            <LegalParagraph>
              We collect several types of information to operate the decline recovery service:
            </LegalParagraph>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Merchant Account Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Business Contact:</strong> Company name, business address, contact name, business email, phone number</LegalListItem>
              <LegalListItem><strong>Account Credentials:</strong> Login email, hashed password, API keys, integration settings</LegalListItem>
              <LegalListItem><strong>Business Profile:</strong> Industry, processor and gateway in use, average transaction volume, currency</LegalListItem>
              <LegalListItem><strong>Billing Records:</strong> Invoices, recovered-revenue statements, performance fees owed, payout details</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Transaction and Decline Data
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Decline Records:</strong> Decline codes, issuer responses, original transaction amount, currency, timestamp</LegalListItem>
              <LegalListItem><strong>Tokenized Identifiers:</strong> Gateway-issued payment tokens or transaction references — no raw card data is received or stored on our systems</LegalListItem>
              <LegalListItem><strong>Cardholder Context (provided by the merchant):</strong> Customer name, billing email, billing address, order or invoice ID, where the merchant forwards them with the declined transaction</LegalListItem>
              <LegalListItem><strong>Retry Outcomes:</strong> Retry attempts, success/failure status, recovered amounts, post-recovery dispute or chargeback events</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Technical Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</LegalListItem>
              <LegalListItem><strong>Usage Data:</strong> Pages visited in our dashboard, features used, time spent, click patterns</LegalListItem>
              <LegalListItem><strong>Cookies and Tracking:</strong> Session cookies, analytics cookies, preference cookies</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Use Your Information</LegalSectionTitle>
            <LegalParagraph>
              We use the collected information for the following purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Service Delivery:</strong> Classify decline codes, schedule and execute retry attempts, route transactions through the appropriate recovery flow, and report recovered revenue to merchants</LegalListItem>
              <LegalListItem><strong>Account Management:</strong> Create and maintain merchant accounts, authenticate users, manage API access, and provide support</LegalListItem>
              <LegalListItem><strong>Billing:</strong> Calculate performance-based fees on successful recoveries and issue invoices and payout statements</LegalListItem>
              <LegalListItem><strong>Communication:</strong> Send service updates, recovery notifications, billing and account messages, and (with consent) product news</LegalListItem>
              <LegalListItem><strong>Analytics:</strong> Measure recovery performance, model issuer behavior, and improve retry timing and routing</LegalListItem>
              <LegalListItem><strong>Compliance:</strong> Meet legal obligations, prevent and investigate fraud, and enforce our agreements and processor rules</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Share Your Information</LegalSectionTitle>
            <LegalParagraph>
              We may share information with third parties in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Processors and Gateways:</strong> The processors, acquirers, and gateways used by the
                merchant — to retry transactions, route recoveries, and reconcile recovered revenue
              </LegalListItem>
              <LegalListItem>
                <strong>Service Providers:</strong> Cloud infrastructure, transactional email, observability, and
                support tooling vendors that operate under written confidentiality and data protection terms
              </LegalListItem>
              <LegalListItem>
                <strong>Merchants:</strong> Where you are a cardholder of a merchant client, the merchant receives the
                outcome of retries on its own transactions; we do not share your information with other merchants
              </LegalListItem>
              <LegalListItem>
                <strong>Legal Requirements:</strong> Law enforcement, regulatory authorities, or courts when required
                by law or to protect our rights
              </LegalListItem>
              <LegalListItem>
                <strong>Business Transfers:</strong> Potential buyers or investors in the event of a merger,
                acquisition, or sale of assets
              </LegalListItem>
              <LegalListItem>
                <strong>With Your Consent:</strong> Other third parties when you have given explicit consent
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We do not sell personal information, and we do not share it for cross-context behavioral advertising.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security</LegalSectionTitle>
            <LegalParagraph>
              We implement appropriate technical and organizational security measures to protect your information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Encryption:</strong> SSL/TLS encryption for data in transit, AES-256 encryption for data at rest</LegalListItem>
              <LegalListItem><strong>Access Controls:</strong> Role-based access, multi-factor authentication, regular access reviews</LegalListItem>
              <LegalListItem><strong>Network Security:</strong> Firewalls, intrusion detection systems, regular security audits</LegalListItem>
              <LegalListItem><strong>Monitoring:</strong> 24/7 security monitoring, incident response procedures</LegalListItem>
              <LegalListItem><strong>Compliance:</strong> PCI-DSS compliance for payment data, SOC 2 certification</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your 
              information, we cannot guarantee absolute security.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Retention</LegalSectionTitle>
            <LegalParagraph>
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Active Merchant Accounts:</strong> Account, decline, and recovery records retained while the merchant account is active</LegalListItem>
              <LegalListItem><strong>Closed Accounts:</strong> Records retained for up to 7 years after account closure for legal, tax, and processor-rule purposes</LegalListItem>
              <LegalListItem><strong>Transaction and Recovery Logs:</strong> Retained per the merchant&apos;s configured retention window and applicable financial-record laws</LegalListItem>
              <LegalListItem><strong>Marketing Data:</strong> Deleted within 3 years of last interaction or upon opt-out request</LegalListItem>
              <LegalListItem><strong>Anonymized / Aggregated Data:</strong> May be retained indefinitely to improve recovery models and reporting</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Your Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              Depending on your location, you may have the following rights regarding your personal information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Access:</strong> Request a copy of the personal information we hold about you</LegalListItem>
              <LegalListItem><strong>Correction:</strong> Request correction of inaccurate or incomplete information</LegalListItem>
              <LegalListItem><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements</LegalListItem>
              <LegalListItem><strong>Portability:</strong> Receive your data in a structured, machine-readable format</LegalListItem>
              <LegalListItem><strong>Restriction:</strong> Request limitation on how we process your information</LegalListItem>
              <LegalListItem><strong>Objection:</strong> Object to processing of your information for certain purposes</LegalListItem>
              <LegalListItem><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</LegalListItem>
              <LegalListItem><strong>Withdraw Consent:</strong> Withdraw previously given consent for data processing</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Cookies and Tracking Technologies</LegalSectionTitle>
            <LegalParagraph>
              We use cookies and similar tracking technologies to enhance your experience:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Essential Cookies:</strong> Required for basic site functionality, authentication, and security
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </LegalListItem>
              <LegalListItem>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </LegalListItem>
              <LegalListItem>
                <strong>Marketing Cookies:</strong> Track visitor activity to deliver relevant advertisements
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect 
              the functionality of our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Third-Party Links</LegalSectionTitle>
            <LegalParagraph>
              Our website may contain links to third-party websites and services. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies of any 
              third-party sites you visit.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Children's Privacy</LegalSectionTitle>
            <LegalParagraph>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child without 
              parental consent, we will take steps to delete that information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>International Data Transfers</LegalSectionTitle>
            <LegalParagraph>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in place 
              to protect your information in accordance with this Privacy Policy and applicable laws.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Privacy Policy</LegalSectionTitle>
            <LegalParagraph>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of material changes by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Posting the updated policy on our website with a new "Last Updated" date</LegalListItem>
              <LegalListItem>Sending an email notification to your registered email address</LegalListItem>
              <LegalListItem>Displaying a prominent notice on our website or dashboard</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </LegalParagraph>
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <LegalCompanyInfoCanvas />
            </div>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default PrivacyPage;
