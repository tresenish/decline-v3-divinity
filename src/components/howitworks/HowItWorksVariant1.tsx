/**
 * How It Works - Clean modern design.
 */
import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../context/ThemeContext';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: #f8f8f8;
  border-radius: 24px;
  padding: 2rem 1.75rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
`;

const StepNumber = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  background: ${({ $color }) => $color}15;
  border-radius: 14px;
  color: ${({ $color }) => $color};
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.75rem;
`;

const StepDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.65;
  margin: 0;
`;

const Connector = styled.div`
  display: none;

  @media (min-width: 901px) {
    display: block;
    position: absolute;
    top: 50%;
    right: -1.5rem;
    width: 1.5rem;
    height: 2px;
    background: #e0e0e0;
  }
`;

const colors = ['#0074D9', '#FF4136', '#3D9970', '#B10DC9'];

const HowItWorksVariant1: React.FC = () => {
  const { howItWorks } = useContent();
  const steps = howItWorks.steps;

  return (
    <Section id="how-it-works">
      <Inner>
        <Header>
          <Title>{howItWorks.sectionTitle}</Title>
          <Subtitle>{howItWorks.sectionDescription}</Subtitle>
        </Header>
        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard key={index}>
              <StepNumber $color={colors[index]}>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.description}</StepDesc>
              {index < steps.length - 1 && <Connector />}
            </StepCard>
          ))}
        </StepsGrid>
      </Inner>
    </Section>
  );
};

export default HowItWorksVariant1;
