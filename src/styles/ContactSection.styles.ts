import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 50%, #f0ece8 100%);

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContactTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a2b4a;
  font-weight: 600;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const ContactDescription = styled.p`
  text-align: center;
  color: rgba(26, 43, 74, 0.7);
  font-size: 1.15rem;
  margin-bottom: 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactForm = styled.form`
  background: rgba(26, 43, 74, 0.03);
  padding: 2.5rem;
  border: 1px solid rgba(26, 43, 74, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #1a2b4a;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  > p {
    color: rgba(26, 43, 74, 0.6);
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(26, 43, 74, 0.7);
  font-weight: 500;
  font-size: 0.85rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(26, 43, 74, 0.15);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  color: #1a2b4a;

  &:focus {
    outline: none;
    border-color: rgba(26, 43, 74, 0.4);
    background: #ffffff;
  }

  &::placeholder {
    color: rgba(26, 43, 74, 0.35);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.95rem;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(26, 43, 74, 0.15);
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  color: #1a2b4a;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: rgba(26, 43, 74, 0.4);
    background: #ffffff;
  }

  &::placeholder {
    color: rgba(26, 43, 74, 0.35);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.95rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #1a2b4a;
  color: #ffffff;
  border: 2px solid #1a2b4a;
  padding: 1.1rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:hover {
    background: transparent;
    color: #1a2b4a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
  }
`;

export const InfoCard = styled.div`
  background: rgba(26, 43, 74, 0.03);
  padding: 1.75rem;
  border: 1px solid rgba(26, 43, 74, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(26, 43, 74, 0.05);
    border-color: rgba(26, 43, 74, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 1.25rem;
  }
`;

export const InfoTitle = styled.h4`
  font-size: 1.2rem;
  color: #1a2b4a;
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const InfoDescription = styled.p`
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const InfoLink = styled.a`
  color: rgba(26, 43, 74, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1a2b4a;
  }
`;
