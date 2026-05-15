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

const CCPANoticePage: React.FC = () => {
  const { companyName, emailSupport, phoneDisplay } = useCompanyInfo();

  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>California Consumer Privacy Act (CCPA) Notice</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Your California Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              This notice applies to California residents and describes how <LegalCompanyNameCanvas companyName={companyName} />{' '}
              collects, uses, and shares personal information in connection with our decline recovery service, and
              explains your rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy
              Rights Act (CPRA).
            </LegalParagraph>
            <LegalParagraph>
              You may interact with us as (a) a merchant client or merchant&apos;s authorized user, or (b) a cardholder
              whose declined transaction was forwarded to us by a merchant we work with. The categories below apply
              accordingly.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Categories of Personal Information We Collect</LegalSectionTitle>
            <LegalParagraph>
              We may collect the following categories of personal information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Identifiers:</strong> Name, business email, phone number, business address, IP address</LegalListItem>
              <LegalListItem><strong>Commercial Information:</strong> Declined and recovered transaction records, retry outcomes, recovered-revenue history</LegalListItem>
              <LegalListItem><strong>Financial Information (tokenized):</strong> Gateway-issued payment tokens or transaction references — we do not collect or store raw card numbers</LegalListItem>
              <LegalListItem><strong>Internet Activity:</strong> Dashboard usage, API access logs, interaction with our website</LegalListItem>
              <LegalListItem><strong>Professional Information:</strong> Employment details and business information for merchant users</LegalListItem>
              <LegalListItem><strong>Inferences:</strong> Decline-pattern and recovery-likelihood signals derived from transaction data</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Use Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We use personal information for the following business purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Operating the decline recovery service — classifying declines, executing retries, and reporting outcomes</LegalListItem>
              <LegalListItem>Servicing merchant accounts and providing customer support</LegalListItem>
              <LegalListItem>Billing performance fees and reconciling recovered revenue</LegalListItem>
              <LegalListItem>Detecting and preventing fraud and security incidents</LegalListItem>
              <LegalListItem>Complying with legal obligations and processor / card-network rules</LegalListItem>
              <LegalListItem>Improving our recovery models, products, and reporting</LegalListItem>
              <LegalListItem>With consent, sending product news to merchant users</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Categories of Third Parties We Share Information With</LegalSectionTitle>
            <LegalParagraph>
              We may share personal information with:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Payment processors, gateways, and acquirers — to retry and route recoveries</LegalListItem>
              <LegalListItem>Cloud infrastructure, transactional email, observability, and support service providers</LegalListItem>
              <LegalListItem>The merchant whose transaction was processed (for recovery outcomes on its own transactions)</LegalListItem>
              <LegalListItem>Legal and regulatory authorities</LegalListItem>
              <LegalListItem>Professional advisors (auditors, counsel)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Your CCPA Rights</LegalSectionTitle>
            <LegalParagraph>
              As a California resident, you have the following rights:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal 
                information we have collected about you
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Correct:</strong> Request correction of inaccurate personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Non-Discrimination:</strong> Exercise your rights without discriminatory treatment
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Sale and Sharing of Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We do not sell personal information for monetary consideration, and we do not share personal information
              for cross-context behavioral advertising as those terms are defined under the CCPA.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              If our practices change, this notice will be updated and you will be able to opt out using the contact
              information below.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Sensitive Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We do not collect or process sensitive personal information for purposes other than those permitted 
              by the CCPA. Sensitive personal information includes information such as Social Security numbers, 
              driver's license numbers, precise geolocation, racial or ethnic origin, religious beliefs, and 
              health information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Exercise Your Rights</LegalSectionTitle>
            <LegalParagraph>
              To exercise your CCPA rights, please submit a request by:
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
            <LegalSectionTitle>Verification Process</LegalSectionTitle>
            <LegalParagraph>
              To protect your privacy, we must verify your identity before processing your request. We will 
              request information to match with our records. The information we request may vary depending on 
              the type of request and the sensitivity of the information involved.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Response Timeline</LegalSectionTitle>
            <LegalParagraph>
              We will respond to verifiable consumer requests within 45 days of receipt. If we require more time 
              (up to 90 days total), we will inform you of the reason and extension period in writing.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Authorized Agent</LegalSectionTitle>
            <LegalParagraph>
              You may designate an authorized agent to submit requests on your behalf. To verify an authorized 
              agent's authority, we require:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Written authorization signed by you</LegalListItem>
              <LegalListItem>Proof of the agent's identity</LegalListItem>
              <LegalListItem>Verification of your identity</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Retention</LegalSectionTitle>
            <LegalParagraph>
              We retain personal information for as long as necessary to fulfill the purposes for which it was 
              collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Children's Privacy</LegalSectionTitle>
            <LegalParagraph>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
              personal information from children under 18. If we learn that we have collected personal information 
              from a child under 18, we will delete it promptly.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Notice</LegalSectionTitle>
            <LegalParagraph>
              We may update this CCPA notice from time to time. The "Last Updated" date at the bottom of this 
              notice indicates when it was last revised. Any changes will become effective when we post the 
              revised notice.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about this CCPA notice or our privacy practices, contact:
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

export default CCPANoticePage;
