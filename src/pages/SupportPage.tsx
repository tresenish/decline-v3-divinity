import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SupportContainer } from '../styles/SupportPage.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SupportHeroSection, SupportHelpSection, SupportFAQSection } from '../components/support';
import RevealOnScroll from '../components/RevealOnScroll';
import { useCompanyInfo } from '../context/ThemeContext';
import { SupportActionType } from '../themes/types';

const SupportPage: React.FC = () => {
  const navigate = useNavigate();
  const { emailSupport } = useCompanyInfo();

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailSupport}`;
  };

  const handleContactClick = () => {
    navigate('/get-started');
  };

  const actionConfig: Record<SupportActionType, { label: string; icon: React.ReactNode; handler: () => void }> = {
    email: {
      label: 'Email Support',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      handler: handleEmailClick,
    },
    contactForm: {
      label: 'Contact Form',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zM13 9V3.5L18.5 9H13z"/>
        </svg>
      ),
      handler: handleContactClick,
    },
    refund: {
      label: 'Request Refund',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </svg>
      ),
      handler: () => navigate('/request-refund'),
    },
  };

  return (
    <>
      <Header />
      <SupportContainer>
        <SupportHeroSection actionConfig={actionConfig} />

        <RevealOnScroll delayMs={160}>
          <SupportHelpSection onTopicClick={handleContactClick} />
        </RevealOnScroll>

        <RevealOnScroll delayMs={320}>
          <SupportFAQSection />
        </RevealOnScroll>
      </SupportContainer>
      <Footer />
    </>
  );
};

export default SupportPage;
