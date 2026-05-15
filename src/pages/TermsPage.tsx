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

const TermsPage: React.FC = () => {
  const { companyName, companyAddress } = useCompanyInfo();
  const { stateName } = getJurisdiction(companyAddress);

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Terms & Conditions</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Agreement to Terms</LegalSectionTitle>
            <LegalParagraph>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (the
              merchant or merchant&apos;s authorized user) and{' '}
              <LegalCompanyNameCanvas companyName={companyName} /> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) concerning access to and use of our website and our decline recovery service.
            </LegalParagraph>
            <LegalParagraph>
              By accessing or using our services, you agree that you have read, understood, and agree to be bound by these Terms.
              If you do not agree with these Terms, you must not access or use our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Services Description</LegalSectionTitle>
            <LegalParagraph>
              <LegalCompanyNameCanvas companyName={companyName} /> provides a decline recovery service that helps merchants
              recapture revenue lost to soft declines on card transactions. The service includes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Smart classification of decline codes and routing to the appropriate retry strategy</LegalListItem>
              <LegalListItem>Intelligent retry timing tuned to issuer behavior and processor rules</LegalListItem>
              <LegalListItem>PCI-safe automation — declines are processed via the merchant&apos;s gateway and raw card data does not enter our systems</LegalListItem>
              <LegalListItem>Transparent reporting on recovered revenue, retry outcomes, and decline categories</LegalListItem>
              <LegalListItem>Integration with major payment processors and gateways via API or batch file</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Accounts</LegalSectionTitle>
            <LegalParagraph>
              To use the service, you must create a merchant account. You agree to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Provide accurate, current, and complete business and contact information</LegalListItem>
              <LegalListItem>Maintain and promptly update your account information and integration settings</LegalListItem>
              <LegalListItem>Keep account credentials and API keys confidential and rotate them on personnel changes</LegalListItem>
              <LegalListItem>Accept responsibility for all activity performed under your account or API keys</LegalListItem>
              <LegalListItem>Notify us immediately of any unauthorized access, key compromise, or security incident</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We may suspend or terminate accounts that violate these Terms, processor or card-network rules, or that
              engage in fraudulent or illegal activity.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Fees and Billing</LegalSectionTitle>
            <LegalParagraph>
              Our pricing is performance-based: you pay only when we successfully recover a previously declined
              transaction.
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Performance Fee:</strong> A percentage of recovered transaction value, as set out in your order form or service agreement</LegalListItem>
              <LegalListItem><strong>No Recovery, No Fee:</strong> If a declined transaction is not recovered, no performance fee is owed for that transaction</LegalListItem>
              <LegalListItem><strong>Billing Cycle:</strong> Performance fees are typically invoiced monthly against the prior period&apos;s recovered revenue</LegalListItem>
              <LegalListItem><strong>Reversed Recoveries:</strong> Where a recovered transaction is later refunded, charged back, or otherwise reversed, the corresponding fee may be credited under the terms of your order form</LegalListItem>
              <LegalListItem><strong>Taxes:</strong> Fees are exclusive of applicable taxes, which are your responsibility</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Acceptable Use</LegalSectionTitle>
            <LegalParagraph>
              You agree not to use the service for any unlawful or prohibited purpose. Prohibited activities include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Violating any applicable laws, regulations, or third-party rights</LegalListItem>
              <LegalListItem>Submitting transactions in violation of card-network rules, processor rules, or retry-frequency policies</LegalListItem>
              <LegalListItem>Forwarding transactions for which you do not hold valid cardholder authorization</LegalListItem>
              <LegalListItem>Transmitting malicious code, viruses, or harmful software</LegalListItem>
              <LegalListItem>Attempting to gain unauthorized access to our systems, APIs, or networks</LegalListItem>
              <LegalListItem>Interfering with or disrupting the integrity or performance of the service</LegalListItem>
              <LegalListItem>Reverse engineering retry models or scraping decline-intelligence data for competing services</LegalListItem>
              <LegalListItem>Impersonating any person or entity or misrepresenting your affiliation</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Intellectual Property Rights</LegalSectionTitle>
            <LegalParagraph>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
              software, and trademarks, are owned by <LegalCompanyNameCanvas companyName={companyName} /> or our licensors
              and are protected by copyright, trademark, and other intellectual property laws.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You are granted a limited, non-exclusive, non-transferable license to access and use our services for their 
              intended purpose. You may not:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Copy, modify, or create derivative works of our services or content</LegalListItem>
              <LegalListItem>Reverse engineer, decompile, or disassemble our software</LegalListItem>
              <LegalListItem>Remove or alter any copyright, trademark, or proprietary notices</LegalListItem>
              <LegalListItem>Use our services or content for commercial purposes without authorization</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Privacy and Security</LegalSectionTitle>
            <LegalParagraph>
              We are committed to protecting your privacy and the security of your data. Our collection, use, and disclosure 
              of personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              By using our services, you acknowledge and agree that we may collect, process, and store your data as described 
              in our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Availability and Modifications</LegalSectionTitle>
            <LegalParagraph>
              We strive to maintain high availability of our services but do not guarantee uninterrupted or error-free operation. 
              We reserve the right to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Modify, suspend, or discontinue any aspect of our services at any time</LegalListItem>
              <LegalListItem>Perform scheduled maintenance and updates with or without notice</LegalListItem>
              <LegalListItem>Change these Terms at any time by posting updated Terms on our website</LegalListItem>
              <LegalListItem>Change our pricing, features, or service offerings with reasonable notice</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Continued use of our services after any modifications constitutes acceptance of the revised Terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, <LegalCompanyNameCanvas companyName={companyName} /> and its officers,
              directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or
              punitive 
              damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your access to or use of or inability to access or use our services</LegalListItem>
              <LegalListItem>Any conduct or content of any third party on our services</LegalListItem>
              <LegalListItem>Unauthorized access, use, or alteration of your transmissions or content</LegalListItem>
              <LegalListItem>Statements or conduct of any third party on our services</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed 
              the amount you paid to us in the twelve (12) months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Indemnification</LegalSectionTitle>
            <LegalParagraph>
              You agree to defend, indemnify, and hold harmless <LegalCompanyNameCanvas companyName={companyName} /> and its
              affiliates, officers, directors, employees, contractors, and agents from and against any claims, liabilities,
              damages, 
              losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your access to or use of our services</LegalListItem>
              <LegalListItem>Your violation of these Terms</LegalListItem>
              <LegalListItem>Your violation of any third-party rights, including intellectual property or privacy rights</LegalListItem>
              <LegalListItem>Any content or information you submit or transmit through our services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution and Governing Law</LegalSectionTitle>
            <LegalParagraph>
              These Terms shall be governed by and construed in accordance with the laws of the State of {stateName},
              United States, without regard to its conflict of law provisions.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Any disputes arising from or relating to these Terms or our services shall be resolved through binding 
              arbitration in accordance with the rules of the American Arbitration Association, except that either party 
              may seek injunctive or equitable relief in a court of competent jurisdiction.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination</LegalSectionTitle>
            <LegalParagraph>
              Either party may terminate this agreement at any time:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>You may cancel your account by contacting support or as described in your order form</LegalListItem>
              <LegalListItem>We may suspend or terminate your account immediately for violation of these Terms or processor / card-network rules</LegalListItem>
              <LegalListItem>We may terminate your account with 30 days&apos; written notice for any reason</LegalListItem>
              <LegalListItem>Performance fees earned on recoveries completed prior to termination remain due</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Upon termination, your right to use the service ceases. Provisions that by their nature should survive
              termination shall survive, including ownership provisions, fees due, warranty disclaimers, and limitations
              of liability.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about these Terms, please contact us:
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

export default TermsPage;
