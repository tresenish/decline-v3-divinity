/**
 * Contact / Get Started section with form (Light theme).
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useContent, useCompanyInfo } from '../context/ThemeContext';

const Section = styled.section`
  padding: 10rem 1.5rem 6rem;
  background: #fafafa;
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
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 2.5rem;
  max-width: 400px;
`;

const ResponseNote = styled.p`
  font-size: 0.9rem;
  color: #888;
  line-height: 1.6;
  margin: 0 0 3rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
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
  color: #888;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0074D9;
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
  font-weight: 600;
  color: #444;
`;

const FormInput = styled.input`
  background: #fff;
  border: none;
  border-radius: 16px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #222;
  font-family: inherit;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 20px rgba(0, 116, 217, 0.15);
  }
`;

const FormTextarea = styled.textarea`
  background: #fff;
  border: none;
  border-radius: 16px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #222;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 20px rgba(0, 116, 217, 0.15);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 4px 20px rgba(0, 116, 217, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 116, 217, 0.45);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
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
