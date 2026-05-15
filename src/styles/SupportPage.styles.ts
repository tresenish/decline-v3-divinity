import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
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
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0 auto;
`;

export const HeroImageWrapper = styled.div`
  display: none;
`;

export const HeroImage = styled.img`
  display: none;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.5rem;
  color: #222;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.05em;
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
  color: #666;
  margin: 0 auto 3rem;
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
  border-left: 1px solid #e0e0e0;
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #e0e0e0;
    padding-top: 1.5rem;
  }
`;

export const PhoneIcon = styled.div`
  display: none;
`;

export const PhoneNumber = styled.a`
  font-size: 2.5rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  font-family: 'Playfair Display', Georgia, serif;
  transition: color 0.3s ease;

  &:hover {
    color: #0074D9;
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
  color: #888;

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 116, 217, 0.35);

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 116, 217, 0.45);
  }

  &:active {
    transform: translateY(0);
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
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.75rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCard = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const HelpIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(0, 116, 217, 0.1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #0074D9;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.6rem;
  font-weight: 600;
`;

export const HelpCardDescription = styled.p`
  color: #666;
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
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.75rem;
  color: #222;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FAQSectionDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
  border-left: 1px solid #e0e0e0;
  padding-left: 1.5rem;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 1.75rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $isOpen }) => ($isOpen ? '#0074D9' : '#222')};
  transition: all 0.2s ease;
  font-family: inherit;

  @media (max-width: 640px) {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
  }
`;

export const FAQAnswer = styled.div`
  max-height: 400px;
  overflow: hidden;
  padding: 0 1.75rem 1.5rem;
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
  max-width: 700px;

  @media (max-width: 640px) {
    padding: 0 1.5rem 1.25rem;
    font-size: 0.95rem;
  }
`;

export const FAQIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${({ $isOpen }) => ($isOpen ? '#0074D9' : '#f0f0f0')};
  border-radius: 50%;
  color: ${({ $isOpen }) => ($isOpen ? '#fff' : '#666')};
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }
`;
