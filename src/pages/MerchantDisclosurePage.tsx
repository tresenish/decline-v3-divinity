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

const MerchantDisclosurePage: React.FC = () => {
  const { companyName, emailSupport, phoneDisplay } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Merchant Disclosure</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Merchant Information</LegalSectionTitle>
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <LegalCompanyInfoCanvas />
            </div>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours:
            </LegalParagraph>
            <LegalParagraph>
              Monday - Friday: 9:00 AM - 6:00 PM EST
            </LegalParagraph>
            <LegalParagraph>
              Saturday - Sunday: Closed
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Nature of Business</LegalSectionTitle>
            <LegalParagraph>
              <LegalCompanyNameCanvas companyName={companyName} /> is a payments technology provider that operates a
              decline recovery service for merchants. We do not sell goods or services to consumers; we help merchants
              recapture revenue lost to soft declines on card transactions. Our services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Smart Decline Mapping:</strong> Classifying every soft decline by code and routing it to the appropriate retry strategy
              </LegalListItem>
              <LegalListItem>
                <strong>Intelligent Retry Timing:</strong> Retry windows tuned to issuer behavior and processor rules
              </LegalListItem>
              <LegalListItem>
                <strong>PCI-Safe Automation:</strong> Declines are processed through the merchant&apos;s gateway; raw card data does not enter or leave our systems
              </LegalListItem>
              <LegalListItem>
                <strong>Transparent Reporting:</strong> Recovered-revenue, retry-outcome, and decline-code reports for the merchant
              </LegalListItem>
              <LegalListItem>
                <strong>Gateway-Ready Integration:</strong> Connects to major payment processors and gateways via API or scheduled batch file
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We operate on a performance-based pricing model — merchants pay only when
              we successfully recover a previously declined transaction.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Billing Descriptor</LegalSectionTitle>
            <LegalParagraph>
              When you make a payment through our platform, the following descriptors may appear on your credit card or 
              bank statement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Primary Descriptor:</strong> &quot;
                <LegalCompanyNameCanvas companyName={companyName} />
                &quot; or &quot;
                <LegalCompanyNameCanvas companyName={companyName} />
                *[Merchant Name]&quot;
              </LegalListItem>
              <LegalListItem>
                <strong>Alternative Descriptors:</strong> May include the merchant's business name followed by our company name
              </LegalListItem>
              <LegalListItem>
                <strong>Phone Number:</strong> {phoneDisplay} will appear on your statement for customer service inquiries
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              If you do not recognize a charge on your statement with these descriptors, please contact us immediately 
              at {phoneDisplay} or {emailSupport} for assistance.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Transaction Processing</LegalSectionTitle>
            <LegalParagraph>
              Information about how transactions are processed:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Processing Time:</strong> Most transactions are processed immediately upon authorization
              </LegalListItem>
              <LegalListItem>
                <strong>Settlement:</strong> Charges typically appear on your statement within 1-3 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Currency:</strong> All transactions are processed in United States Dollars (USD) unless otherwise specified
              </LegalListItem>
              <LegalListItem>
                <strong>Authorization Holds:</strong> A temporary authorization hold may appear before the final charge is processed
              </LegalListItem>
              <LegalListItem>
                <strong>Failed Transactions:</strong> If a transaction fails, you will be notified and given an opportunity 
                to update payment information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Customer Service and Support</LegalSectionTitle>
            <LegalParagraph>
              We are committed to providing excellent customer service:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Methods:</strong> You may reach us by phone at {phoneDisplay}, 
                by email at {emailSupport}, or through our website contact form
              </LegalListItem>
              <LegalListItem>
                <strong>Response Time:</strong> We aim to respond to all customer inquiries within 24 hours during business days
              </LegalListItem>
              <LegalListItem>
                <strong>Support Languages:</strong> Customer support is available in English
              </LegalListItem>
              <LegalListItem>
                <strong>Emergency Support:</strong> For urgent payment issues or suspected fraud, please call our phone line 
                for immediate assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Self-Service Options:</strong> Many common issues can be resolved through your account dashboard, 
                including updating payment information and reviewing transaction history
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              Our refund policy is designed to be fair and transparent:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Refunds:</strong> Refunds for products or services purchased from merchants must be requested 
                directly from the merchant according to their refund policy
              </LegalListItem>
              <LegalListItem>
                <strong>Service Fees:</strong> Refunds for our service fees are governed by our Refund Policy, available on our website
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Approved refunds are processed within 5-10 business days to your original 
                payment method
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Requests:</strong> To request a refund, contact {emailSupport} with 
                your transaction details
              </LegalListItem>
              <LegalListItem>
                <strong>Disputed Charges:</strong> If you believe a charge is incorrect or unauthorized, contact us immediately 
                before initiating a chargeback
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms and conditions, please refer to our Refund Policy document.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Payment Methods Accepted</LegalSectionTitle>
            <LegalParagraph>
              We accept the following payment methods:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit Cards:</strong> Visa, Mastercard, American Express, Discover</LegalListItem>
              <LegalListItem><strong>Debit Cards:</strong> Visa Debit, Mastercard Debit with major card networks</LegalListItem>
              <LegalListItem><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> ACH transfers for qualified business accounts</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All payment methods are processed through PCI-DSS compliant payment processors. We do not store complete 
              credit card information on our servers.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Pricing and Fees</LegalSectionTitle>
            <LegalParagraph>
              Transparency in pricing and fees:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Performance-Based Fees:</strong> A percentage of recovered transaction value, charged to the merchant only on successful recoveries (no recovery, no fee)
              </LegalListItem>
              <LegalListItem>
                <strong>No Cardholder Fees:</strong> Cardholders are never charged any additional fee by us — retried transactions complete at the original amount authorized to the merchant
              </LegalListItem>
              <LegalListItem>
                <strong>Reversed Recoveries:</strong> Performance fees on transactions that are later refunded or reversed are credited to the merchant per the order form
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Costs:</strong> Gateway, processor, and interchange fees charged by the merchant&apos;s providers are not part of our pricing
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security and Privacy</LegalSectionTitle>
            <LegalParagraph>
              We take data security seriously:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>PCI-DSS Compliance:</strong> We maintain Payment Card Industry Data Security Standard (PCI-DSS) Level 1 compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Encryption:</strong> All payment information is encrypted using industry-standard SSL/TLS encryption 
                during transmission
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Storage:</strong> Sensitive data is encrypted at rest using AES-256 encryption
              </LegalListItem>
              <LegalListItem>
                <strong>Tokenization:</strong> Credit card numbers are tokenized and stored securely by our payment processors
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Our collection, use, and protection of personal information is governed by 
                our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Security:</strong> Our payment processors are certified PCI-DSS compliant and follow 
                strict security protocols
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For detailed information about how we protect your data, please review our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution Process</LegalSectionTitle>
            <LegalParagraph>
              If you have a dispute regarding a transaction:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Step 1 - Contact Us:</strong> Reach out to our customer service team at {emailSupport}                 or {phoneDisplay} with your concerns
              </LegalListItem>
              <LegalListItem>
                <strong>Step 2 - Investigation:</strong> We will investigate your dispute and respond within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Step 3 - Resolution:</strong> If your dispute is valid, we will process a refund or take corrective action
              </LegalListItem>
              <LegalListItem>
                <strong>Step 4 - Escalation:</strong> If you are not satisfied with our response, you may escalate to your 
                card issuer or payment provider
              </LegalListItem>
              <LegalListItem>
                <strong>Chargeback Rights:</strong> You retain the right to dispute charges with your card issuer, but we 
                encourage resolution through direct contact first
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Fraud Prevention and Detection</LegalSectionTitle>
            <LegalParagraph>
              We employ multiple measures to prevent and detect fraudulent transactions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Real-Time Monitoring:</strong> Transactions are monitored in real-time for suspicious activity
              </LegalListItem>
              <LegalListItem>
                <strong>Address Verification:</strong> AVS (Address Verification Service) checks billing address information
              </LegalListItem>
              <LegalListItem>
                <strong>CVV Verification:</strong> Card security codes (CVV/CVC) are required for card-not-present transactions
              </LegalListItem>
              <LegalListItem>
                <strong>3D Secure:</strong> Additional authentication may be required for high-risk transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Fraud Scoring:</strong> Machine learning algorithms assess transaction risk in real-time
              </LegalListItem>
              <LegalListItem>
                <strong>Reporting Fraud:</strong> If you suspect fraudulent activity on your account, contact us immediately 
                at {phoneDisplay}
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Regulatory Compliance</LegalSectionTitle>
            <LegalParagraph>
              We comply with all applicable regulations and industry standards:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Card Industry Standards:</strong> PCI-DSS Level 1 compliance maintained
              </LegalListItem>
              <LegalListItem>
                <strong>Data Protection Laws:</strong> GDPR (General Data Protection Regulation) and CCPA (California Consumer 
                Privacy Act) compliant
              </LegalListItem>
              <LegalListItem>
                <strong>Electronic Signatures:</strong> E-SIGN Act and UETA (Uniform Electronic Transactions Act) compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Consumer Protection:</strong> Federal Trade Commission (FTC) guidelines and state consumer protection laws
              </LegalListItem>
              <LegalListItem>
                <strong>Anti-Money Laundering:</strong> AML and KYC (Know Your Customer) procedures for high-value transactions
              </LegalListItem>
              <LegalListItem>
                <strong>State Registrations:</strong> Registered in all required states for payment processing operations
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Retries on Declined Transactions</LegalSectionTitle>
            <LegalParagraph>
              Where a card transaction to one of our merchants is declined for a temporary, recoverable reason (a
              &quot;soft decline&quot;), the following applies:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Authorization Source:</strong> Retries rely on the cardholder&apos;s underlying authorization to the merchant for the original purchase or recurring charge — we do not create new authorizations
              </LegalListItem>
              <LegalListItem>
                <strong>Retry Timing:</strong> Retry windows are tuned to issuer behavior and follow card-network and processor rules; we do not brute-force retries
              </LegalListItem>
              <LegalListItem>
                <strong>Same Merchant, Same Amount:</strong> A successful retry completes the originally authorized charge to the same merchant for the same amount
              </LegalListItem>
              <LegalListItem>
                <strong>Cardholder Inquiries:</strong> If a charge does not match an order, contact us through Customer Care with the date, amount, and last four digits of the card and we will trace it
              </LegalListItem>
              <LegalListItem>
                <strong>Stop Requests:</strong> If a cardholder reports the underlying agreement with the merchant has been canceled, we will stop further retries on that transaction and route the request to the merchant
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Terms and Conditions</LegalSectionTitle>
            <LegalParagraph>
              Use of our services is governed by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Terms of Service:</strong> Complete terms governing the use of our platform and services
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Details on how we collect, use, and protect your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> Terms and conditions for refunds and cancellations
              </LegalListItem>
              <LegalListItem>
                <strong>End-User Terms:</strong> Specific terms for end-users completing transactions through our platform
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All terms and policies are available on our website and were provided at the time of transaction. By completing 
              a transaction, you agree to these terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Disclosure</LegalSectionTitle>
            <LegalParagraph>
              We may update this Merchant Disclosure from time to time to reflect changes in our business practices, 
              regulatory requirements, or contact information. Material changes will be posted on our website and, where 
              appropriate, communicated to customers via email.
            </LegalParagraph>
            <LegalParagraph>
              The current version of this disclosure is always available at our website. We encourage you to review it 
              periodically to stay informed about how we process transactions and protect your information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For any questions about this Merchant Disclosure or our payment processing services:
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

export default MerchantDisclosurePage;
