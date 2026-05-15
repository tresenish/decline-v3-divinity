/**
 * Contact / Get Started section with form (Light theme).
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useContent, useCompanyInfo } from '../context/ThemeContext';

const Section = styled.section`
  padding: 10rem 1.5rem 6rem;
  background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 50%, #f0ece8 100%);
  min-height: 100vh;
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

const ResponseNote = styled.p`
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

const ContactSection: React.FC = () => {
  const { contact } = useContent();
  const { emailSupport, phoneDisplay } = useCompanyInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Section id="contact">
      <Inner>
        <Layout>
          <LeftColumn>
            <Label>Get Started</Label>
            <Title>{contact.sectionTitle}</Title>
            <Desc>{contact.sectionDescription}</Desc>
            <ResponseNote>
              Expect a reply within one business day with a suggested setup plan and a short integration checklist.
            </ResponseNote>
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
              <FormRow>
                <FormGroup>
                  <FormLabel>Contact Name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Business Email</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="you@yourcompany.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <FormLabel>Phone</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Message (Optional)</FormLabel>
                <FormTextarea
                  name="message"
                  placeholder="Tell us about your business and integration needs..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </RightColumn>
        </Layout>
      </Inner>
    </Section>
  );
};

export default ContactSection;
