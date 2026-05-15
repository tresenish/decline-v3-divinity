/**
 * Features section - Bento grid design.
 */
import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../context/ThemeContext';

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #fafafa 0%, #fff 100%);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem;
  letter-spacing: 0.05em;

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

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ $accent: string; $span?: number }>`
  background: #fff;
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  ${({ $span }) => $span && `
    @media (min-width: 901px) {
      grid-column: span ${$span};
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ $accent }) => $accent};
    border-radius: 4px 0 0 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconBox = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: ${({ $color }) => $color}15;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ $color }) => $color};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  padding-top: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
`;

const accents = [
  '#0074D9',
  '#FF4136',
  '#3D9970',
  '#B10DC9',
  '#39CCCC',
  '#FF851B',
];

const FeaturesVariant1: React.FC = () => {
  const { features } = useContent();
  const items = features.items.slice(0, 6);

  return (
    <Section id="features">
      <Inner>
        <Header>
          <Title>{features.sectionTitle}</Title>
          <Subtitle>{features.sectionDescription.split('\n\n')[0]}</Subtitle>
        </Header>
        <BentoGrid>
          {items.map((item, idx) => (
            <Card
              key={idx}
              $accent={accents[idx]}
              $span={idx === 0 ? 2 : idx === 5 ? 3 : undefined}
            >
              <CardHeader>
                <IconBox $color={accents[idx]}>
                  <svg viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </IconBox>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardDesc>{item.description}</CardDesc>
            </Card>
          ))}
        </BentoGrid>
      </Inner>
    </Section>
  );
};

export default FeaturesVariant1;
