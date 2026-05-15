import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApiConfig, useCompanyInfo } from '../context/ThemeContext';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 50%, #f0ece8 100%);
`;

const Section = styled.section`
  padding: 10rem 1.5rem 6rem;
  flex: 1;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div``;

const Label = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(26, 43, 74, 0.5);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #1a2b4a;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: rgba(26, 43, 74, 0.7);
  line-height: 1.7;
  margin: 0 0 2.5rem;
  max-width: 400px;
`;

const InfoNote = styled.p`
  font-size: 0.9rem;
  color: rgba(26, 43, 74, 0.5);
  line-height: 1.6;
  margin: 0 0 3rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(26, 43, 74, 0.2);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div``;

const ContactLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(26, 43, 74, 0.4);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(26, 43, 74, 0.8);
  text-decoration: none;
  font-family: 'Cormorant Garamond', Georgia, serif;
  transition: color 0.3s ease;

  &:hover {
    color: #1a2b4a;
  }
`;

const RightColumn = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(26, 43, 74, 0.7);
`;

const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(26, 43, 74, 0.15);
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #1a2b4a;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(26, 43, 74, 0.35);
  }

  &:focus {
    outline: none;
    border-color: rgba(26, 43, 74, 0.4);
    background: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FormTextarea = styled.textarea`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(26, 43, 74, 0.15);
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #1a2b4a;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(26, 43, 74, 0.35);
  }

  &:focus {
    outline: none;
    border-color: rgba(26, 43, 74, 0.4);
    background: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  background: #1a2b4a;
  color: #ffffff;
  border: 2px solid #1a2b4a;
  padding: 1.1rem 2.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: transparent;
    color: #1a2b4a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem 1.25rem;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: #16a34a;
  font-size: 0.95rem;
`;

const RequestRefundPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { apiUrl, apiKey } = useApiConfig();
  const { emailSupport, phoneDisplay } = useCompanyInfo();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(`${apiUrl}/refund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          website: window.location.origin,
          name: data.name,
          email: data.email,
          lastFourDigits: data.lastFourDigits,
          message: data.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert(result.errors?.join(', ') || 'Failed to submit. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <Header />
      <Section>
        <Inner>
          <Layout>
            <LeftColumn>
              <Label>Refunds</Label>
              <Title>Request a Refund</Title>
              <Desc>
                We want you to be completely satisfied. If you're not happy with your purchase, submit a refund request and we'll review it promptly.
              </Desc>
              <InfoNote>
                Our team will review your request within 5-7 business days and get back to you via email.
              </InfoNote>
              <ContactDetails>
                <ContactItem>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue href={`mailto:${emailSupport}`}>{emailSupport}</ContactValue>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue href={`tel:${phoneDisplay}`}>{phoneDisplay}</ContactValue>
                </ContactItem>
              </ContactDetails>
            </LeftColumn>

            <RightColumn>
              <Form onSubmit={handleSubmit}>
                {showSuccess && (
                  <SuccessMessage>
                    Refund request submitted successfully. We'll get back to you shortly.
                  </SuccessMessage>
                )}
                <FormRow>
                  <FormGroup>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <FormLabel>Last 4 Digits of Card</FormLabel>
                  <FormInput
                    type="text"
                    name="lastFourDigits"
                    placeholder="1234"
                    required
                    maxLength={4}
                    pattern="\d{4}"
                    title="Please enter exactly 4 digits"
                    inputMode="numeric"
                    disabled={isSubmitting}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Reason for Refund</FormLabel>
                  <FormTextarea
                    name="message"
                    placeholder="Please describe your reason for requesting a refund..."
                    required
                    disabled={isSubmitting}
                  />
                </FormGroup>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </SubmitButton>
              </Form>
            </RightColumn>
          </Layout>
        </Inner>
      </Section>
      <Footer />
    </Page>
  );
};

export default RequestRefundPage;
