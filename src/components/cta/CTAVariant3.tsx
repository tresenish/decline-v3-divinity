/**
 * CTA — Clean modern design with proof points.
 */
import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../context/ThemeContext';
import { useGoToGetStarted } from '../../hooks/useGoToGetStarted';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const CTACard = styled.div`
  background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
  border-radius: 32px;
  padding: 4rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    border-radius: 24px;
  }
`;

const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1rem;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: 1.15rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled.button`
  background: #fff;
  color: #0074D9;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProofCard = styled.div`
  background: #f8f8f8;
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
`;

const ProofIcon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  background: ${({ $color }) => $color}15;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ $color }) => $color};
  }
`;

const ProofTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.75rem;
`;

const ProofDesc = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.65;
  margin: 0;
`;

const colors = ['#0074D9', '#3D9970', '#FF4136'];

const CTAVariant3: React.FC = () => {
  const { cta } = useContent();
  const goToGetStarted = useGoToGetStarted();

  return (
    <Section id="cta">
      <Inner>
        <CTACard>
          <Title>{cta.sectionTitle}</Title>
          <Desc>{cta.sectionDescription}</Desc>
          <CTAButton type="button" onClick={goToGetStarted}>
            {cta.buttonText}
          </CTAButton>
        </CTACard>
        <ProofGrid>
          {cta.features.map((f, i) => (
            <ProofCard key={i}>
              <ProofIcon $color={colors[i]}>
                <svg viewBox="0 0 24 24">
                  <path d={f.icon} />
                </svg>
              </ProofIcon>
              <ProofTitle>{f.title}</ProofTitle>
              <ProofDesc>{f.description}</ProofDesc>
            </ProofCard>
          ))}
        </ProofGrid>
      </Inner>
    </Section>
  );
};

export default CTAVariant3;
