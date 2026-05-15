/**
 * Hero - Clean white rounded design.
 */
import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../context/ThemeContext';
import { useGoToGetStarted } from '../../hooks/useGoToGetStarted';
import HeroStagger from './HeroStagger';

const Section = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: transparent;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 6rem 1.5rem 4rem;
  }
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Badge = styled.span`
  display: inline-block;
  background: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: #222;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.div`
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-size: 1.25rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #666;
  line-height: 1.7;
  max-width: 620px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2.25rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 116, 217, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 116, 217, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  background: #fff;
  color: #444;
  border: none;
  padding: 1rem 2.25rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  &:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 600px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const Stat = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  min-width: 140px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 600px) {
    padding: 1.25rem 1.5rem;
    min-width: 100px;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.25rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
`;

const HeroVariant1: React.FC = () => {
  const { hero, headerPrimaryCtaLabel } = useContent();
  const goToGetStarted = useGoToGetStarted();

  return (
    <Section id="hero">
      <Inner>
        <HeroStagger>
          <Badge>Payment Recovery Platform</Badge>
          <Tagline>Effortless recovery, exceptional results</Tagline>
          <Title>
            {hero.title}
          </Title>
          <Description>{hero.description}</Description>
          <ButtonGroup>
            <PrimaryButton type="button" onClick={goToGetStarted}>
              {headerPrimaryCtaLabel}
            </PrimaryButton>
            <SecondaryButton type="button" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </SecondaryButton>
          </ButtonGroup>
          <Stats>
            <Stat>
              <StatNumber>Fast</StatNumber>
              <StatLabel>Integration</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>Secure</StatNumber>
              <StatLabel>PCI Compliant</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>Simple</StatNumber>
              <StatLabel>Pay Per Recovery</StatLabel>
            </Stat>
          </Stats>
        </HeroStagger>
      </Inner>
    </Section>
  );
};

export default HeroVariant1;
