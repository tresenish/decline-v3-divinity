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

const DataSubjectRequestPage: React.FC = () => {
  const { companyName, emailSupport, phoneDisplay } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Data Subject Request Form</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Your Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              <LegalCompanyNameCanvas companyName={companyName} /> respects your privacy rights under applicable data
              protection laws. This form lets you exercise your rights regarding personal information we hold.
            </LegalParagraph>
            <LegalParagraph>
              If you are a cardholder whose declined transaction was forwarded to us by a merchant, we generally process
              that information on the merchant&apos;s instructions as their service provider. We will route your request
              to the appropriate merchant where required and assist them in responding.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Available Rights</LegalSectionTitle>
            <LegalParagraph>
              Depending on your location and applicable laws, you may have the following rights:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</LegalListItem>
              <LegalListItem><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</LegalListItem>
              <LegalListItem><strong>Right to Erasure:</strong> Request deletion of your personal information</LegalListItem>
              <LegalListItem><strong>Right to Restriction:</strong> Request limitation on how we process your data</LegalListItem>
              <LegalListItem><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</LegalListItem>
              <LegalListItem><strong>Right to Object:</strong> Object to processing of your personal information</LegalListItem>
              <LegalListItem><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Submit a Request</LegalSectionTitle>
            <LegalParagraph>
              To exercise any of these rights, please contact us at:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Email: {emailSupport}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {phoneDisplay}
            </LegalParagraph>
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <LegalCompanyInfoCanvas variant="address" />
            </div>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Information Required</LegalSectionTitle>
            <LegalParagraph>
              To process your request, please provide:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your full name</LegalListItem>
              <LegalListItem>Email address associated with the transaction or account</LegalListItem>
              <LegalListItem>Phone number (if applicable)</LegalListItem>
              <LegalListItem>If you are a cardholder: the merchant name, transaction date and amount, and last four digits of the card used (so we can locate the record)</LegalListItem>
              <LegalListItem>Detailed description of your request</LegalListItem>
              <LegalListItem>Proof of identity (for security purposes)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Response Timeline</LegalSectionTitle>
            <LegalParagraph>
              We will respond to your request within 45 days of receipt. In some cases, we may require an additional 
              45 days to respond, in which case we will notify you of the extension and the reason for the delay.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Verification Process</LegalSectionTitle>
            <LegalParagraph>
              To protect your privacy and security, we must verify your identity before processing your request. 
              We may request additional information to confirm your identity and ensure we are disclosing 
              information only to the authorized individual.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>No Discrimination</LegalSectionTitle>
            <LegalParagraph>
              We will not discriminate against you for exercising any of your privacy rights. This means we will not:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Deny you goods or services</LegalListItem>
              <LegalListItem>Charge you different prices or rates for goods or services</LegalListItem>
              <LegalListItem>Provide you a different level or quality of goods or services</LegalListItem>
              <LegalListItem>Suggest that you may receive a different price or quality of goods or services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Questions or Concerns</LegalSectionTitle>
            <LegalParagraph>
              If you have questions about this form or our privacy practices, please contact us using the 
              information provided above.
            </LegalParagraph>
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

export default DataSubjectRequestPage;
