/**
 * Intro/Welcome screen that shows on initial page load.
 */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const drawArc = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Overlay = styled.div<{ $slideOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  animation: ${({ $slideOut }) => ($slideOut ? slideUp : 'none')} 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  pointer-events: ${({ $slideOut }) => ($slideOut ? 'none' : 'auto')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LogoWrapper = styled.div`
  transform: scale(2);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    transform: scale(1.5);
  }
`;

const Logo = styled.svg`
  width: 140px;
  height: 60px;
  overflow: visible;
  display: block;
`;

const LogoText = styled.text<{ $visible: boolean }>`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 18px;
  font-weight: 600;
  fill: #222;
  letter-spacing: 0.15em;
  opacity: 0;
  animation: ${({ $visible }) => ($visible ? fadeIn : 'none')} 0.5s ease forwards;
`;

const Arc = styled.path<{ $visible: boolean; $delay: number }>`
  fill: none;
  stroke: #222;
  stroke-width: 1.5;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${({ $visible }) => ($visible ? drawArc : 'none')} 0.6s ease ${({ $delay }) => $delay}s forwards;
`;

const Tagline = styled.p<{ $visible: boolean }>`
  font-size: 1rem;
  color: #888;
  margin: 1.25rem 0 0;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0;
  animation: ${({ $visible }) => ($visible ? fadeInUp : 'none')} 0.5s ease 0.8s forwards;
`;

const IntroScreen: React.FC = () => {
  // Check env variable, default to true if not specified
  const showIntroScreen = import.meta.env.VITE_SHOW_INTRO_SCREEN !== 'false';

  const [logoVisible, setLogoVisible] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [mounted, setMounted] = useState(showIntroScreen);

  useEffect(() => {
    if (!showIntroScreen) return;

    // Show logo after brief white screen
    const showLogoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // Start slide up animation
    const slideTimer = setTimeout(() => {
      setSlideOut(true);
    }, 1500);

    // Remove from DOM after slide animation
    const removeTimer = setTimeout(() => {
      setMounted(false);
    }, 2100);

    return () => {
      clearTimeout(showLogoTimer);
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, [showIntroScreen]);

  if (!mounted) return null;

  return (
    <Overlay $slideOut={slideOut}>
      <Content>
        <LogoWrapper>
          <Logo viewBox="0 0 100 50">
            <LogoText
              x="50"
              y="25"
              textAnchor="middle"
              dominantBaseline="middle"
              $visible={logoVisible}
            >
              DIVINITY
            </LogoText>
            <Arc
              d="M 71 10 A 26 26 0 0 0 29 10"
              $visible={logoVisible}
              $delay={0.3}
            />
            <Arc
              d="M 29 38 A 26 26 0 0 0 71 38"
              $visible={logoVisible}
              $delay={0.5}
            />
          </Logo>
        </LogoWrapper>
        <Tagline $visible={logoVisible}>Payment Recovery</Tagline>
      </Content>
    </Overlay>
  );
};

export default IntroScreen;
