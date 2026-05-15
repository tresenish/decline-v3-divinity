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
import { getJurisdiction } from '../components/legal/jurisdiction';

const EndUserTermsPage: React.FC = () => {
  const { companyName, emailSupport, companyAddress } = useCompanyInfo();
  const { stateName, arbitrationVenue } = getJurisdiction(companyAddress);

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>End-User Terms of Service</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>1. Acceptance of Terms</LegalSectionTitle>
            <LegalParagraph>
              These End-User Terms of Service (&quot;End-User Terms&quot;) apply when you, as a cardholder, interact
              with <LegalCompanyNameCanvas companyName={companyName} /> in connection with a transaction at one of the
              merchants we work with — for example, when a previously declined charge is retried through our decline
              recovery service, or when you contact our Customer Care team about such a transaction.
            </LegalParagraph>
            <LegalParagraph>
              By using our Customer Care channels or otherwise engaging with us in this capacity, you acknowledge that
              you have read, understood, and agree to be bound by these End-User Terms.
            </LegalParagraph>
            <LegalParagraph>
              If you are a merchant or merchant&apos;s authorized user, the Terms &amp; Conditions and your order form
              govern your use of the service — not these End-User Terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>2. What Our Service Does</LegalSectionTitle>
            <LegalParagraph>
              <LegalCompanyNameCanvas companyName={companyName} /> operates a decline recovery service for merchants. We
              do not sell goods or services directly to cardholders, and we are not your loyalty program, club, or
              subscription provider. Specifically:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Retry of Soft Declines:</strong> When a card payment to a merchant we work with is declined for a
                temporary, recoverable reason (a &quot;soft decline&quot;), the merchant&apos;s gateway may retry the
                transaction at our direction
              </LegalListItem>
              <LegalListItem>
                <strong>No Card Data on Our Systems:</strong> Retries occur via the merchant&apos;s gateway under PCI-aligned
                practices; raw card data does not enter or leave our servers
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Care:</strong> If a charge does not match an order, or you have a question about a
                recovered transaction, you can contact our Customer Care team and we will help trace the transaction or
                route the issue to the merchant
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>3. Eligibility</LegalSectionTitle>
            <LegalParagraph>
              To use our Customer Care channels, you must:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Be at least 18 years of age or the age of majority in your jurisdiction</LegalListItem>
              <LegalListItem>Have the legal capacity to enter into binding agreements</LegalListItem>
              <LegalListItem>Be authorized to discuss the transaction in question (e.g., be the cardholder, account holder, or an authorized representative)</LegalListItem>
              <LegalListItem>Not be prohibited from using our services by applicable law</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>4. Authorization for Retried Transactions</LegalSectionTitle>
            <LegalParagraph>
              When a previously declined transaction is retried through our service:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Cardholder Authorization:</strong> The retry relies on your underlying authorization given to the
                merchant for the original purchase or recurring charge — we do not create new authorizations
              </LegalListItem>
              <LegalListItem>
                <strong>Statement Descriptor:</strong> The merchant&apos;s name (and, in some cases, an identifier
                referencing our platform) appears on your statement; see the Merchant Disclosure for descriptor patterns
              </LegalListItem>
              <LegalListItem>
                <strong>No Membership Fees:</strong> We do not charge cardholders any fee for the retry — the retry only
                attempts to complete the transaction you originally authorized with the merchant
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>5. Account Security</LegalSectionTitle>
            <LegalParagraph>
              You are responsible for maintaining the security of your account and payment information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Confidentiality:</strong> Keep account credentials, payment links, and verification codes confidential
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Access:</strong> Access payment links only from secure devices and networks
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Use:</strong> Notify us immediately at {emailSupport} if you 
                suspect unauthorized use of your account
              </LegalListItem>
              <LegalListItem>
                <strong>Verification:</strong> We may request additional verification to protect against fraud
              </LegalListItem>
              <LegalListItem>
                <strong>Liability:</strong> You are responsible for all transactions made using your payment information 
                until you report unauthorized use
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>6. Communication Preferences</LegalSectionTitle>
            <LegalParagraph>
              By using our services, you consent to receive communications:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Transactional Communications:</strong> Payment receipts, transaction confirmations, and account notifications
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Reminders:</strong> Email and SMS reminders about pending, failed, or upcoming payments
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Support:</strong> Responses to inquiries and support requests
              </LegalListItem>
              <LegalListItem>
                <strong>Service Updates:</strong> Important updates about our services or changes to terms
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To opt out of non-essential communications, click "unsubscribe" in emails or reply STOP to SMS messages. 
              Note that you cannot opt out of transactional communications required to provide services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>7. Prohibited Activities</LegalSectionTitle>
            <LegalParagraph>
              You may not use our services to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Submit fraudulent payment information or engage in payment fraud</LegalListItem>
              <LegalListItem>Use stolen credit cards, compromised payment methods, or unauthorized accounts</LegalListItem>
              <LegalListItem>Attempt to circumvent security measures or access controls</LegalListItem>
              <LegalListItem>Interfere with or disrupt the operation of our systems or services</LegalListItem>
              <LegalListItem>Reverse engineer, decompile, or attempt to derive source code from our platform</LegalListItem>
              <LegalListItem>Use automated tools (bots, scrapers, etc.) to access our services without authorization</LegalListItem>
              <LegalListItem>Impersonate another person or entity</LegalListItem>
              <LegalListItem>Violate any applicable laws or regulations</LegalListItem>
              <LegalListItem>Abuse, harass, or threaten our staff or support personnel</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Violation of these prohibitions may result in immediate termination of access, reporting to authorities, 
              and legal action.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>8. Refunds and Disputes</LegalSectionTitle>
            <LegalParagraph>
              Regarding refunds and transaction disputes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Responsibility:</strong> Refund requests should be directed to the merchant, not to{' '}
                <LegalCompanyNameCanvas companyName={companyName} />
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> The merchant's refund policy governs all refund requests
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Assistance:</strong> We will assist in facilitating refunds as directed by the merchant
              </LegalListItem>
              <LegalListItem>
                <strong>Chargebacks:</strong> Before initiating a chargeback, contact the merchant and us to resolve the issue
              </LegalListItem>
              <LegalListItem>
                <strong>Disputed Charges:</strong> Report unauthorized or incorrect charges to {emailSupport} 
                within 60 days
              </LegalListItem>
              <LegalListItem>
                <strong>Investigation:</strong> We will investigate disputed charges and work with you and the merchant to resolve
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>9. Data Privacy</LegalSectionTitle>
            <LegalParagraph>
              Your privacy is important to us:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We collect and process personal information as described in our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                Payment information is encrypted and processed in accordance with PCI-DSS standards
              </LegalListItem>
              <LegalListItem>
                We share data with merchants only as necessary to complete transactions and provide services
              </LegalListItem>
              <LegalListItem>
                You have rights regarding your personal data, including access, correction, and deletion
              </LegalListItem>
              <LegalListItem>
                To exercise your privacy rights, submit a Data Subject Request or contact {emailSupport}
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete information about how we collect, use, and protect your data, please review our Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>10. Disclaimer of Warranties</LegalSectionTitle>
            <LegalParagraph>
              Our services are provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not guarantee that services will be uninterrupted, timely, secure, or error-free
              </LegalListItem>
              <LegalListItem>
                We do not warrant that payment processing will be successful or that transactions will not be declined
              </LegalListItem>
              <LegalListItem>
                We are not responsible for issues caused by your payment provider, bank, or card issuer
              </LegalListItem>
              <LegalListItem>
                We disclaim all warranties, express or implied, including warranties of merchantability and fitness for 
                a particular purpose
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of implied warranties, so some of the above may not apply to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>11. Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <LegalCompanyNameCanvas companyName={companyName} /> shall not be liable for any indirect, incidental, special,
                consequential, or exemplary damages
              </LegalListItem>
              <LegalListItem>
                Our total liability for any claim shall not exceed the amount of the transaction in question or $100, 
                whichever is less
              </LegalListItem>
              <LegalListItem>
                We are not liable for losses resulting from unauthorized use of your account if you failed to secure your credentials
              </LegalListItem>
              <LegalListItem>
                We are not liable for merchant actions, product quality, or fulfillment issues
              </LegalListItem>
              <LegalListItem>
                We are not responsible for service interruptions caused by third parties, network issues, or circumstances 
                beyond our control
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>12. Indemnification</LegalSectionTitle>
            <LegalParagraph>
              You agree to indemnify and hold harmless <LegalCompanyNameCanvas companyName={companyName} />, its affiliates,
              officers, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees)
              arising from:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your use of our services</LegalListItem>
              <LegalListItem>Your violation of these End-User Terms</LegalListItem>
              <LegalListItem>Your violation of any rights of another party</LegalListItem>
              <LegalListItem>Fraudulent or unauthorized use of payment methods</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>13. Termination</LegalSectionTitle>
            <LegalParagraph>
              We may terminate or suspend your access to services:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>For violation of these End-User Terms or applicable laws</LegalListItem>
              <LegalListItem>For suspected fraudulent activity or security concerns</LegalListItem>
              <LegalListItem>At the request of a merchant or payment processor</LegalListItem>
              <LegalListItem>For any reason with or without notice</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Upon termination, your right to use our services ends immediately. Provisions regarding liability, indemnification, 
              and dispute resolution survive termination.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>14. Governing Law and Dispute Resolution</LegalSectionTitle>
            <LegalParagraph>
              These End-User Terms are governed by the laws of the State of {stateName}, United States, without
              regard to conflict of law principles.
            </LegalParagraph>
            <LegalParagraph>
              Any disputes shall be resolved through:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Informal Resolution:</strong> First, contact us at {emailSupport} to attempt to resolve the dispute informally
              </LegalListItem>
              <LegalListItem>
                <strong>Binding Arbitration:</strong> If informal resolution fails, disputes shall be resolved by binding arbitration under the rules of the American Arbitration Association
              </LegalListItem>
              <LegalListItem>
                <strong>Arbitration Location:</strong> Arbitration shall take place in {arbitrationVenue} or remotely by mutual agreement
              </LegalListItem>
              <LegalListItem>
                <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive the right to participate in class actions
              </LegalListItem>
              <LegalListItem>
                <strong>Small Claims Court:</strong> Either party may pursue claims in small claims court as an alternative to arbitration
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>15. Changes to Terms</LegalSectionTitle>
            <LegalParagraph>
              We may modify these End-User Terms at any time. Changes are effective immediately upon posting. Your continued 
              use of services after changes constitutes acceptance of the updated terms. Material changes will be communicated 
              via email or prominent notice on our platform.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>16. Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For questions, concerns, or support regarding these End-User Terms or our services:
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

export default EndUserTermsPage;
