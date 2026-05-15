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

const DigitalProductsPage: React.FC = () => {
  const { companyName, emailSupport } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Digital Products Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              This Digital Products Policy governs your purchase and use of the digital products and services offered by{' '}
              <LegalCompanyNameCanvas companyName={companyName} />. By accessing or using these products, you agree to
              the terms outlined in this policy.
            </LegalParagraph>
            <LegalParagraph>
              Our digital products are SaaS components of the decline recovery service — the merchant dashboard, APIs,
              and reporting tools that connect to your payment gateway and process declined transactions on your behalf.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Types of Digital Products</LegalSectionTitle>
            <LegalParagraph>
              We provide the following categories of digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Decline Recovery Platform:</strong> The hosted service that classifies decline codes, schedules
                retries, and routes recoveries through the merchant&apos;s gateway
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Dashboard:</strong> Web app for monitoring recoveries, retry outcomes, decline-code
                breakdowns, and recovered-revenue reporting
              </LegalListItem>
              <LegalListItem>
                <strong>API and Webhooks:</strong> REST API endpoints and webhook callbacks for forwarding declined
                transactions and receiving recovery outcomes
              </LegalListItem>
              <LegalListItem>
                <strong>Batch File Integration:</strong> Scheduled file-based ingestion for merchants whose stack does
                not support real-time API integration
              </LegalListItem>
              <LegalListItem>
                <strong>Reports and Exports:</strong> Period, transaction-type, and outcome-code reports available in
                CSV and JSON
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Purchase and Payment</LegalSectionTitle>
            <LegalParagraph>
              When using our service:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Pricing:</strong> Performance-based — a percentage of recovered transaction value, set out in your order form, displayed in USD and exclusive of applicable taxes
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Methods:</strong> Invoices may be paid by ACH, wire, or major credit card per your order form
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Cycle:</strong> Performance fees are typically invoiced monthly against the prior period&apos;s recovered revenue
              </LegalListItem>
              <LegalListItem>
                <strong>No Subscriptions for Service Use:</strong> Use of the platform does not require a recurring subscription; you pay only when recoveries succeed
              </LegalListItem>
              <LegalListItem>
                <strong>Pricing Changes:</strong> We may adjust pricing with 30 days&apos; written notice; existing order forms remain in effect for their stated term
              </LegalListItem>
              <LegalListItem>
                <strong>Taxes:</strong> You are responsible for any applicable sales tax, VAT, or other taxes
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Delivery and Access</LegalSectionTitle>
            <LegalParagraph>
              Digital products are delivered and accessed as follows:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Immediate Access:</strong> SaaS products are accessible immediately upon successful payment and account creation
              </LegalListItem>
              <LegalListItem>
                <strong>API Credentials:</strong> API keys and authentication tokens are provided via your account dashboard
              </LegalListItem>
              <LegalListItem>
                <strong>Download Links:</strong> Plugins and mobile apps can be downloaded from your account or respective app stores
              </LegalListItem>
              <LegalListItem>
                <strong>Email Delivery:</strong> Purchase confirmations, license keys, and access instructions are sent to your registered email
              </LegalListItem>
              <LegalListItem>
                <strong>Account Required:</strong> Most digital products require an active account for access and ongoing use
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>License and Usage Rights</LegalSectionTitle>
            <LegalParagraph>
              Your license to use our digital products is subject to the following terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>License Grant:</strong> We grant you a non-exclusive, non-transferable, revocable license to use our 
                digital products for your internal business purposes
              </LegalListItem>
              <LegalListItem>
                <strong>Account-Based:</strong> Licenses are tied to your account and cannot be shared or transferred without authorization
              </LegalListItem>
              <LegalListItem>
                <strong>User Limits:</strong> Usage is subject to user limits, API rate limits, and data processing caps as 
                specified in your plan
              </LegalListItem>
              <LegalListItem>
                <strong>Prohibited Uses:</strong> You may not reverse engineer, decompile, redistribute, resell, or create 
                derivative works from our products
              </LegalListItem>
              <LegalListItem>
                <strong>Intellectual Property:</strong> All rights, title, and interest in our digital products remain with{' '}
                <LegalCompanyNameCanvas companyName={companyName} />
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refunds and Fee Reversals</LegalSectionTitle>
            <LegalParagraph>
              Refund and fee-reversal terms specific to our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Performance Fees:</strong> Charged only on successful recoveries; no fee is charged when a declined transaction cannot be recovered
              </LegalListItem>
              <LegalListItem>
                <strong>Reversed Recoveries:</strong> Performance fees are credited or refunded where a recovered transaction is later refunded by the merchant or charged back / reversed by the issuer, per your order form
              </LegalListItem>
              <LegalListItem>
                <strong>Service Outage:</strong> Where our service is unavailable beyond the agreed thresholds, fee credits may apply
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Process:</strong> Submit requests to {emailSupport} with the affected invoice, transaction IDs, and reason
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              See our Refund Policy for full terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Product Updates and Modifications</LegalSectionTitle>
            <LegalParagraph>
              We continuously improve our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Automatic Updates:</strong> SaaS products are automatically updated with new features, bug fixes, 
                and security patches
              </LegalListItem>
              <LegalListItem>
                <strong>Breaking Changes:</strong> We will provide advance notice of any updates that may affect your integration 
                or usage
              </LegalListItem>
              <LegalListItem>
                <strong>Feature Changes:</strong> Features may be added, modified, or deprecated based on business needs and 
                user feedback
              </LegalListItem>
              <LegalListItem>
                <strong>Version Support:</strong> API versions are supported for a minimum of 12 months after deprecation notice
              </LegalListItem>
              <LegalListItem>
                <strong>No Obligation:</strong> We are not obligated to provide any specific updates or maintain features indefinitely
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Level and Availability</LegalSectionTitle>
            <LegalParagraph>
              We strive to provide reliable access to our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Uptime Target:</strong> We aim for 99.9% uptime for our SaaS products, excluding scheduled maintenance
              </LegalListItem>
              <LegalListItem>
                <strong>Maintenance Windows:</strong> Scheduled maintenance is performed during off-peak hours with advance notice
              </LegalListItem>
              <LegalListItem>
                <strong>Monitoring:</strong> Our systems are monitored 24/7 for performance and availability issues
              </LegalListItem>
              <LegalListItem>
                <strong>Status Updates:</strong> Service status and incident reports are available on our status page
              </LegalListItem>
              <LegalListItem>
                <strong>No Guarantee:</strong> While we strive for high availability, we do not guarantee uninterrupted or 
                error-free service
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Technical Support</LegalSectionTitle>
            <LegalParagraph>
              Support for digital products includes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Documentation:</strong> Comprehensive guides, API references, and FAQs available in your account
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> Technical support via email at {emailSupport}
              </LegalListItem>
              <LegalListItem>
                <strong>Response Times:</strong> We aim to respond to support requests within 24 hours on business days
              </LegalListItem>
              <LegalListItem>
                <strong>Priority Support:</strong> Higher-tier plans include priority support with faster response times
              </LegalListItem>
              <LegalListItem>
                <strong>Community Forum:</strong> Access to user community for peer-to-peer assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Scope:</strong> Support covers product functionality, not custom development or third-party integrations
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Ownership and Export</LegalSectionTitle>
            <LegalParagraph>
              Regarding data processed through our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Your Data:</strong> You retain ownership of all data you input, upload, or generate using our products
              </LegalListItem>
              <LegalListItem>
                <strong>Data Export:</strong> You can export your data at any time in standard formats (CSV, JSON, XML)
              </LegalListItem>
              <LegalListItem>
                <strong>Data Portability:</strong> We provide tools to help you migrate to other platforms if you choose
              </LegalListItem>
              <LegalListItem>
                <strong>Post-Cancellation:</strong> After account cancellation, data is retained for 30 days, then permanently deleted
              </LegalListItem>
              <LegalListItem>
                <strong>Anonymized Data:</strong> We may retain anonymized, aggregated data for analytics and product improvement
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination and Suspension</LegalSectionTitle>
            <LegalParagraph>
              Your access to digital products may be terminated or suspended:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Non-Payment:</strong> Accounts with overdue payments may be suspended after grace period
              </LegalListItem>
              <LegalListItem>
                <strong>Terms Violation:</strong> Violation of our Terms of Service may result in immediate termination
              </LegalListItem>
              <LegalListItem>
                <strong>Fraudulent Activity:</strong> Suspected fraud or abuse will result in account suspension pending investigation
              </LegalListItem>
              <LegalListItem>
                <strong>Voluntary Cancellation:</strong> You may cancel the service at any time by contacting support or as described in your order form
              </LegalListItem>
              <LegalListItem>
                <strong>Effect of Termination:</strong> Upon termination, your license to use our products ends immediately
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Warranty Disclaimer</LegalSectionTitle>
            <LegalParagraph>
              Our digital products are provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not warrant that our products will meet your specific requirements or expectations
              </LegalListItem>
              <LegalListItem>
                We do not guarantee that our products will be uninterrupted, timely, secure, or error-free
              </LegalListItem>
              <LegalListItem>
                We do not warrant that results obtained from using our products will be accurate or reliable
              </LegalListItem>
              <LegalListItem>
                Any material downloaded or accessed through our products is done at your own risk
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of warranties, so some of the above may not apply to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, <LegalCompanyNameCanvas companyName={companyName} /> shall not be liable
              for:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Any indirect, incidental, special, consequential, or exemplary damages</LegalListItem>
              <LegalListItem>Loss of profits, revenue, data, or business opportunities</LegalListItem>
              <LegalListItem>Service interruptions or data loss</LegalListItem>
              <LegalListItem>Errors or bugs in the software</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claim related to digital products shall not exceed the amount you paid for the 
              product in the 12 months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For questions about our digital products or this policy, contact:
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

export default DigitalProductsPage;
