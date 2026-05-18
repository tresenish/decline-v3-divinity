import styled from 'styled-components';

export const LegalPageContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

export const LegalHeroSection = styled.div`
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 425px) {
    padding: 5rem 1rem 2.5rem;
  }
`;

export const LegalTitle = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const LegalContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2rem 1rem;
  }
`;

export const LegalSection = styled.section`
  background: #fff;
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 425px) {
    padding: 1.5rem;
    border-radius: 16px;
    margin-bottom: 1rem;
  }
`;

export const LegalSectionTitle = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
`;

export const LegalParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 0.875rem;
  }
`;

export const LegalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  @media (max-width: 425px) {
    margin: 1.25rem 0;
  }
`;

export const LegalListItem = styled.li`
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 0.75rem;
  padding-left: 1.75rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
    border-radius: 50%;
  }

  strong {
    color: #222;
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 0.625rem;
    padding-left: 1.5rem;

    &::before {
      width: 6px;
      height: 6px;
      top: 0.55rem;
    }
  }
`;
