import styled from 'styled-components';
import {
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  AvailabilityText,
} from '../../../styles/SupportPage.styles';

/** V2 — light card on gradient */
export const V2Shell = styled.section`
  background: ${({ theme }) => theme.heroGradient};
  padding: 3rem 1.5rem 4.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 55%);
    pointer-events: none;
  }
`;

export const V2Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 24px;
  padding: 2.5rem 2.5rem 2.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.18);
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 2rem 2.5rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.75rem;
  }
`;

export const V2HeroTitle = styled(HeroTitle)`
  color: ${({ theme }) => theme.textDark};
`;

export const V2HeroDescription = styled(HeroDescription)`
  color: ${({ theme }) => theme.textMedium};
  margin-bottom: 2rem;
`;

export const V2ContactInfo = styled(ContactInfo)`
  background: ${({ theme }) => `${theme.primary}14`};
  border-color: rgba(0, 0, 0, 0.06);
  margin-bottom: 1.75rem;
`;

export const V2PhoneNumber = styled(PhoneNumber)`
  color: ${({ theme }) => theme.textDark};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const V2AvailabilityText = styled(AvailabilityText)`
  color: ${({ theme }) => theme.textMedium};
`;

export const V2Image = styled(HeroImage)`
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.12));
`;

/** V3 — centered stack */
export const V3Shell = styled.section`
  background: ${({ theme }) => theme.heroGradient};
  padding: 4rem 1.5rem 4.5rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.14) 0%, transparent 55%);
    pointer-events: none;
  }
`;

export const V3Inner = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const V3ImageWrap = styled(HeroImageWrapper)`
  flex: 0 0 auto;
  width: 100%;
  max-width: min(36rem, 100%);
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const V3Image = styled(HeroImage)`
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  object-position: center;
`;

export const V3HeroTitle = styled(HeroTitle)`
  text-align: center;
`;

export const V3HeroDescription = styled(HeroDescription)`
  text-align: center;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
`;

export const V3ContactInfo = styled(ContactInfo)`
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

/** V4 — content first (row-reverse on desktop) */
export const V4Shell = styled(SupportHero)`
  & > div {
    flex-direction: row-reverse;
  }
`;

/** V5 — compact split + eyebrow */
export const V5Shell = styled.section`
  background: ${({ theme }) => theme.heroGradient};
  padding: 2.75rem 1.5rem 3.5rem;
  position: relative;
  overflow: hidden;
  min-height: 480px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 45%,
      rgba(0, 0, 0, 0.08) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    min-height: auto;
  }
`;

export const V5Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 0.75rem;
`;

export const V5Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2rem 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const V5ImageWrap = styled(HeroImageWrapper)`
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const V5HeroContent = styled(HeroContent)`
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const V5HeroTitle = styled(HeroTitle)`
  font-size: 2.35rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const V5HeroDescription = styled(HeroDescription)`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;
