import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 50%, #f0ece8 100%);
`;

export const SupportHero = styled.section`
  background: transparent;
  padding: 12rem 2rem 8rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 10rem 2rem 6rem;
  }

  @media (max-width: 768px) {
    padding: 9rem 1.5rem 5rem;
  }

  @media (max-width: 425px) {
    padding: 8rem 1.25rem 4rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  text-align: left;
  position: relative;
  z-index: 1;
`;

export const HeroImageWrapper = styled.div`
  display: none;
`;

export const HeroImage = styled.img`
  display: none;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #1a2b4a;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.15rem;
  color: rgba(26, 43, 74, 0.7);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  border-left: 1px solid rgba(26, 43, 74, 0.2);
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(26, 43, 74, 0.2);
    padding-top: 1.5rem;
  }
`;

export const PhoneIcon = styled.div`
  display: none;
`;

export const PhoneNumber = styled.a`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(26, 43, 74, 0.5);
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(26, 43, 74, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const AvailabilityText = styled.p`
  font-size: 0.9rem;
  color: rgba(26, 43, 74, 0.5);

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: #1a2b4a;
  color: #ffffff;
  border: 2px solid #1a2b4a;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(26, 43, 74, 0.15);
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: transparent;
    color: #1a2b4a;
    box-shadow: 0 4px 30px rgba(26, 43, 74, 0.1);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
  }
`;

export const HelpSection = styled.section`
  padding: 7rem 1.5rem 8rem;
  background: transparent;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

/** Request Refund — same surface as HelpSection, with room for AmbientOrbs behind content. */
export const RefundFormSection = styled(HelpSection)`
  position: relative;
  overflow: hidden;
  isolation: isolate;
`;

export const RefundFormContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HelpTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 600;
  color: #1a2b4a;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid rgba(26, 43, 74, 0.1);
  border-left: 1px solid rgba(26, 43, 74, 0.1);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCard = styled.div`
  padding: 2.5rem 2rem;
  border-right: 1px solid rgba(26, 43, 74, 0.1);
  border-bottom: 1px solid rgba(26, 43, 74, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(26, 43, 74, 0.02);
    transform: translateX(0.5rem);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const HelpIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: rgba(26, 43, 74, 0.4);

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a2b4a;
  margin-bottom: 0.6rem;
  font-weight: 600;
`;

export const HelpCardDescription = styled.p`
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0;
`;

// FAQ Section Styles
export const FAQSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 7rem 1.5rem 8rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

export const FAQSectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #1a2b4a;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FAQSectionDescription = styled.p`
  font-size: 1rem;
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.7;
  margin: 0;
  border-left: 1px solid rgba(26, 43, 74, 0.2);
  padding-left: 1.5rem;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(26, 43, 74, 0.1);
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid rgba(26, 43, 74, 0.1);
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $isOpen }) => ($isOpen ? '#1a2b4a' : 'rgba(26, 43, 74, 0.85)')};
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    transform: translateX(1rem);
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr 30px;
    gap: 1rem;
    padding: 1.5rem 0;
    font-size: 1rem;
  }
`;

export const FAQAnswer = styled.div`
  max-height: 400px;
  overflow: hidden;
  padding: 0 0 2rem 76px;
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.7;
  font-size: 1rem;
  max-width: 700px;

  @media (max-width: 640px) {
    padding: 0 0 1.5rem 56px;
    font-size: 0.95rem;
  }
`;

export const FAQIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: rgba(26, 43, 74, 0.4);
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
`;
