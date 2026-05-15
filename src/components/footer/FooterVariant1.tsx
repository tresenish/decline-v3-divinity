/**
 * Footer - Clean white rounded design.
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCompanyInfo } from '../../context/ThemeContext';
import LegalCompanyInfoCanvas from '../legal/LegalCompanyInfoCanvas';
import BrandLogo from '../BrandLogo';

const FooterContainer = styled.footer`
  background: #fff;
  padding: 4rem 2rem 2rem;
  margin: 1.5rem;
  margin-left: 0;
  border-radius: 24px;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledBrandLogo = styled(BrandLogo)`
  margin-bottom: 0.5rem;
  transform: scale(0.9);
  transform-origin: left center;
  justify-content: flex-start;
`;

const BrandDesc = styled.p`
  font-size: 0.9rem;
  color: #888;
  line-height: 1.6;
  margin: 0;
`;

const CanvasWrapper = styled.div`
  margin-top: 0.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.25rem 0;

  &:hover {
    color: #222;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #f0f0f0;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: #999;
  margin: 0;
`;

const FooterVariant1: React.FC = () => {
  const { brandName, emailSupport } = useCompanyInfo();
  const year = new Date().getFullYear();

  return (
    <FooterContainer id="footer">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <StyledBrandLogo />
            <BrandDesc>Payment recovery solutions for modern businesses.</BrandDesc>
            <CanvasWrapper>
              <LegalCompanyInfoCanvas />
            </CanvasWrapper>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Product</SectionTitle>
            <FooterLink to="/#features">Features</FooterLink>
            <FooterLink to="/#how-it-works">How It Works</FooterLink>
            <FooterLink to="/#faq">FAQ</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Legal</SectionTitle>
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/refund">Refund Policy</FooterLink>
            <FooterLink to="/ccpa-notice">CCPA Notice</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Contact</SectionTitle>
            <BrandDesc>{emailSupport}</BrandDesc>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>© {year} {brandName}. All rights reserved.</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterVariant1;
