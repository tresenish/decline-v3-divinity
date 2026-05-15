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

const RefundPage: React.FC = () => {
  const { companyName, emailSupport, phoneDisplay } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Refund Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Scope of This Policy</LegalSectionTitle>
            <LegalParagraph>
              This Refund Policy explains how <LegalCompanyNameCanvas companyName={companyName} /> handles refund and
              fee-reversal requests for our decline recovery service. It covers two distinct situations:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant fees:</strong> Performance-based fees we charge our merchant clients
              </LegalListItem>
              <LegalListItem>
                <strong>Cardholder charges (end customers of a merchant):</strong> Refunds for the underlying purchase
                you made from a merchant whose declined transaction was recovered through our platform — these are
                governed by that merchant&apos;s own refund policy
              </LegalListItem>
            </LegalList>
            <LegalParagraph>
              By using our services, you acknowledge that you have read and understood this Refund Policy and agree to be bound by its terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Performance-Based Fees</LegalSectionTitle>
            <LegalParagraph>
              Our pricing is performance-based — merchants pay a fee only when we successfully recover a previously
              declined transaction. The following terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>No Recovery, No Fee:</strong> If a declined transaction is not recovered, no performance fee is owed for that transaction
              </LegalListItem>
              <LegalListItem>
                <strong>Reversed Recoveries:</strong> If a recovered transaction is later refunded by the merchant, charged back, or otherwise reversed by the issuer, the corresponding performance fee is credited or refunded under the terms of your order form
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Errors:</strong> If you were invoiced for a recovery that did not occur, or were charged twice for the same recovery, the incorrect amount is refunded immediately upon verification
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Cardholder Refunds (End Customers of a Merchant)</LegalSectionTitle>
            <LegalParagraph>
              If you are a cardholder and your charge was completed through one of our merchant clients, the refund for
              the underlying purchase is handled by that merchant.
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact the merchant first:</strong> Refund timelines, eligibility, and amounts are governed by
                the merchant&apos;s own refund policy, not ours
              </LegalListItem>
              <LegalListItem>
                <strong>Statement descriptor help:</strong> If a charge does not match your records, see the Merchant
                Disclosure for descriptor patterns and contact us with the date, amount, and last four digits and
                we&apos;ll trace the transaction
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized charges:</strong> Report immediately — we will investigate, work with the merchant,
                and reverse the transaction where warranted
              </LegalListItem>
              <LegalListItem>
                <strong>Before initiating a chargeback:</strong> Please contact us through Customer Care so we can
                resolve the issue directly with the merchant; chargebacks initiated without prior contact may take
                longer to resolve
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Eligible Refund Scenarios</LegalSectionTitle>
            <LegalParagraph>
              Refunds or fee credits may be considered in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Service Outage:</strong> If our service is unavailable for more than 48 consecutive hours due to
                issues on our end and recoveries cannot be processed, eligible merchants may receive a credit on
                applicable fees
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Errors:</strong> Incorrect or duplicate invoiced amounts are corrected immediately upon
                verification
              </LegalListItem>
              <LegalListItem>
                <strong>Reversed Recoveries:</strong> Performance fees on transactions that are later refunded by the
                merchant, charged back, or reversed by the issuer are credited per your order form
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Charges:</strong> If charges were made without authorization, we will investigate
                and refund where warranted
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Non-Refundable Items</LegalSectionTitle>
            <LegalParagraph>
              The following are generally not eligible for refunds:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Performance fees on recoveries that completed successfully and were not subsequently reversed</LegalListItem>
              <LegalListItem>Custom integration, onboarding, or migration work that has already been delivered</LegalListItem>
              <LegalListItem>Third-party costs incurred on your behalf (gateway, processor, or interchange fees)</LegalListItem>
              <LegalListItem>Services terminated due to violation of our Terms or processor / card-network rules</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Request a Refund</LegalSectionTitle>
            <LegalParagraph>
              To request a refund, please follow these steps:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Secure refund form:</strong> Open <strong>Customer Care</strong> from the site header, then choose{' '}
                <strong>Request Refund</strong> to submit the web form. Our team will review it within 5–7 business days.
              </LegalListItem>
              <LegalListItem>
                <strong>Contact Support:</strong> Email us at {emailSupport} or call {phoneDisplay} with your refund request
              </LegalListItem>
              <LegalListItem>
                <strong>Provide Information:</strong> Include your account email, transaction ID or invoice number, 
                reason for refund request, and any supporting documentation
              </LegalListItem>
              <LegalListItem>
                <strong>Review Process:</strong> Our team will review your request within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Decision Notification:</strong> You will receive an email with our decision and next steps
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Processing:</strong> If approved, refunds are processed within 10-14 business days to 
                your original payment method
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Processing Time</LegalSectionTitle>
            <LegalParagraph>
              Once a refund is approved:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit/Debit Cards:</strong> 5-10 business days (may vary by bank)</LegalListItem>
              <LegalListItem><strong>PayPal:</strong> 3-5 business days</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> 7-14 business days</LegalListItem>
              <LegalListItem><strong>Other Payment Methods:</strong> Up to 14 business days</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Processing times may be longer depending on your financial institution. We are not responsible for delays 
              caused by banks or payment processors.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Credits</LegalSectionTitle>
            <LegalParagraph>
              In some cases we may offer service credits as an alternative to a cash refund:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Credits are applied against future performance fees on your account</LegalListItem>
              <LegalListItem>Credits are valid for 12 months from the date of issuance</LegalListItem>
              <LegalListItem>Credits are non-transferable and cannot be redeemed for cash</LegalListItem>
              <LegalListItem>Unused credits expire and cannot be refunded</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Chargebacks and Disputes</LegalSectionTitle>
            <LegalParagraph>
              If a cardholder initiates a chargeback or payment dispute on a recovered transaction:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>We encourage you to contact the merchant — and us via Customer Care — first, to resolve the issue directly</LegalListItem>
              <LegalListItem>The performance fee on a successfully disputed recovery is credited or refunded under your order form</LegalListItem>
              <LegalListItem>Repeated illegitimate chargebacks may result in account suspension</LegalListItem>
              <LegalListItem>We reserve the right to assist the merchant in disputing chargebacks that appear unwarranted</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Cancellation</LegalSectionTitle>
            <LegalParagraph>
              Merchants may cancel the service at any time:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Cancellations can be initiated by contacting support or as described in your order form</LegalListItem>
              <LegalListItem>Performance fees on recoveries completed prior to the effective cancellation date remain due</LegalListItem>
              <LegalListItem>After cancellation, your account data is retained per our Privacy Policy and applicable law</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Force Majeure</LegalSectionTitle>
            <LegalParagraph>
              We are not liable for refunds or service disruptions caused by circumstances beyond our reasonable control, including:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Natural disasters, pandemics, or acts of God</LegalListItem>
              <LegalListItem>Government actions, regulations, or restrictions</LegalListItem>
              <LegalListItem>Internet service provider failures or network outages</LegalListItem>
              <LegalListItem>Third-party service disruptions (payment gateways, hosting providers)</LegalListItem>
              <LegalListItem>Cyberattacks, security breaches, or malicious activities by third parties</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Policy</LegalSectionTitle>
            <LegalParagraph>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services after any changes constitutes acceptance of the 
              updated policy. Material changes will be communicated via email to registered users.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For refund requests or questions about this policy, please contact:
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

export default RefundPage;
