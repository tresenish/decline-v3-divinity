/**
 * Sidebar Navigation — Clean modern design.
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useActiveNavId, useHeaderNavigation } from './useHeaderNavigation';
import { useNavItems } from './useNavItems';
import BrandLogo from '../BrandLogo';

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.25rem;
  background: #fafafa;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    background: #fff;
    box-shadow: 4px 0 32px rgba(0, 0, 0, 0.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
  color: #333;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease;
  }
`;

const StyledBrandLogo = styled(BrandLogo)`
  margin-bottom: 2.5rem;
  justify-content: flex-start;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const NavButton = styled.button<{ $active: boolean; $color: string }>`
  background: ${({ $active }) => ($active ? '#fff' : 'transparent')};
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  cursor: pointer;
  color: ${({ $active, $color }) => ($active ? $color : '#666')};
  text-align: left;
  transition: all 0.2s ease;
  position: relative;

  ${({ $active }) => $active && `
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  `}

  &:hover {
    background: #fff;
    color: ${({ $color }) => $color};
  }
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 1.5rem;
  margin-top: 1rem;
  border-top: 1px solid #eee;
`;

const SupportButton = styled.button`
  background: #fff;
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    color: #222;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #0074D9 0%, #39CCCC 100%);
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 116, 217, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 116, 217, 0.4);
  }
`;

const navColors = ['#0074D9', '#FF4136', '#3D9970', '#B10DC9'];

const DsNavigationV1: React.FC = () => {
  const items = useNavItems();
  const { goToSection, handleButtonClick, handleCustomerCareClick } = useHeaderNavigation();
  const activeId = useActiveNavId(items);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [activeId]);

  const handleNavClick = (href: string) => {
    goToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </MobileMenuButton>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Sidebar $isOpen={isOpen}>
        <StyledBrandLogo onClick={() => handleNavClick('/')} />

        <Nav>
          {items.map((item, index) => (
            <NavButton
              key={item.href}
              type="button"
              $active={activeId === item.href}
              $color={navColors[index % navColors.length]}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </NavButton>
          ))}
        </Nav>

        <CTASection>
          <SupportButton type="button" onClick={handleCustomerCareClick}>
            Support
          </SupportButton>
          <PrimaryButton type="button" onClick={handleButtonClick}>
            Get Started
          </PrimaryButton>
        </CTASection>
      </Sidebar>
    </>
  );
};

export default DsNavigationV1;
