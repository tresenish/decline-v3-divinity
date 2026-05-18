/**
 * Why Recovery - Gradient card showcase design.
 */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useContent } from '../../context/ThemeContext';

const blob = keyframes`
  0%, 100% { transform: translateY(10px); }
  50% { transform: translate(-10px); }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  padding-bottom: 8rem;
  background: #f8f8f8;
  overflow: visible;

  @media (min-width: 1025px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    padding-bottom: 6rem;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const StatHighlight = styled.div`
  display: inline-block;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
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
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  width: 320px;
  margin: 40px 30px;
  transition: all 0.5s;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    margin: 30px 15px;
  }
`;

const SkewPanel = styled.span<{ $from: string; $to: string }>`
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: 50px;
  width: 60%;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: all 0.5s;
  background: linear-gradient(315deg, ${({ $from }) => $from}, ${({ $to }) => $to});

  ${Card}:hover & {
    transform: skewX(0);
    left: 30px;
    width: calc(100% - 80px);
  }
`;

const BlobContainer = styled.span`
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 10;
`;

const BlobCircle = styled.span<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  ${({ $position }) => $position === 'top' ? 'top: 0; left: 0;' : 'bottom: 0; right: 0;'}
  width: 0;
  height: 0;
  border-radius: 8px;
  opacity: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all ${({ $position }) => $position === 'top' ? '0.1s' : '0.5s'};
  animation: ${blob} 2s ease-in-out infinite;
  ${({ $position }) => $position === 'bottom' && 'animation-delay: -1s;'}

  ${Card}:hover & {
    ${({ $position }) => $position === 'top'
      ? 'top: -50px; left: 50px;'
      : 'bottom: -50px; right: 50px;'}
    width: 100px;
    height: 100px;
    opacity: 1;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 20;
  left: 0;
  width: calc(100% - 50px);
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: all 0.5s;

  ${Card}:hover & {
    left: -25px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: #222;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
  color: #444;
`;

const gradients = [
  { from: '#0074D9', to: '#39CCCC' },
  { from: '#FF4136', to: '#FF851B' },
  { from: '#3D9970', to: '#01FF70' },
  { from: '#B10DC9', to: '#85144B' },
  { from: '#0074D9', to: '#39CCCC' },
  { from: '#FF4136', to: '#FF851B' },
];

const WhyRecoveryVariant1: React.FC = () => {
  const { whyRecovery } = useContent();
  if (!whyRecovery) return null;
  const { sectionTitle, statHighlight, sectionDescription, benefits } = whyRecovery;

  return (
    <Section id="why-recovery">
      <Inner>
        <Header>
          <StatHighlight>{statHighlight}</StatHighlight>
          <Title>{sectionTitle}</Title>
          <Subtitle>{sectionDescription}</Subtitle>
        </Header>
        <Grid>
          {benefits.map((item, index) => {
            const gradient = gradients[index] || gradients[0];
            return (
              <Card key={index}>
                <SkewPanel $from={gradient.from} $to={gradient.to} />
                <BlobContainer>
                  <BlobCircle $position="top" />
                  <BlobCircle $position="bottom" />
                </BlobContainer>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDesc>{item.description}</CardDesc>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
};

export default WhyRecoveryVariant1;
