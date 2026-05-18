import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyRecoverySection from './components/WhyRecoverySection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import SlideReveal from './components/SlideReveal';
import { AnimatedBlobs } from './components/blobs';
import { useIsDSTheme } from './context/ThemeContext';
import SupportPage from './pages/SupportPage';
import DataSubjectRequestPage from './pages/DataSubjectRequestPage';
import ESignaturePage from './pages/ESignaturePage';
import CCPANoticePage from './pages/CCPANoticePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import DataProcessingPage from './pages/DataProcessingPage';
import EndUserTermsPage from './pages/EndUserTermsPage';
import MerchantDisclosurePage from './pages/MerchantDisclosurePage';
import GetStartedPage from './pages/GetStartedPage';
import RequestRefundPage from './pages/RequestRefundPage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
  margin-left: 240px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const ScrollSnapContainer = styled.div`
  @media (min-width: 1025px) {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    perspective: 1000px;
    perspective-origin: center center;

    /* Hide scrollbar but keep functionality */
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Slide = styled.section`
  @media (min-width: 1025px) {
    min-height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterSlide = styled.section`
  @media (min-width: 1025px) {
    scroll-snap-align: end;
  }
`;

const HeroSlide = styled(Slide)`
  position: relative;
  background: #fafafa;
`;

const BlobsLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const HomePage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDSTheme = useIsDSTheme();

  // Handle hash navigation for scroll-snap container
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && scrollContainerRef.current) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // On desktop, scroll within the snap container
          if (window.innerWidth > 1024) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <>
      <Header />
      <ScrollSnapContainer ref={scrollContainerRef}>
        <HeroSlide>
          <BlobsLayer>
            <AnimatedBlobs />
          </BlobsLayer>
          <SlideContent>
            <SlideReveal>
              <HeroSection />
            </SlideReveal>
          </SlideContent>
        </HeroSlide>

        <Slide id="features-slide">
          <SlideReveal>
            <FeaturesSection />
          </SlideReveal>
        </Slide>

        <Slide id="how-it-works-slide">
          <SlideReveal>
            <HowItWorksSection />
          </SlideReveal>
        </Slide>

        {isDSTheme && (
          <Slide id="why-recovery-slide">
            <SlideReveal>
              <WhyRecoverySection />
            </SlideReveal>
          </Slide>
        )}

        <Slide id="cta-slide">
          <SlideReveal>
            <CTASection />
          </SlideReveal>
        </Slide>

        <Slide id="faq-slide">
          <SlideReveal>
            <FAQSection />
          </SlideReveal>
        </Slide>

        <FooterSlide>
          <SlideReveal>
            <Footer />
          </SlideReveal>
        </FooterSlide>
      </ScrollSnapContainer>
    </>
  );
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      navigate('/get-started', { replace: true });
      return;
    }
    // Handle hash navigation (e.g., /#features)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else if (location.pathname !== '/') {
      // Scroll to top on route change (non-home pages)
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <>
      <IntroScreen />
      <AppContainer>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/request-refund" element={<RequestRefundPage />} />
        <Route path="/data-subject-request" element={<DataSubjectRequestPage />} />
        <Route path="/e-signature" element={<ESignaturePage />} />
        <Route path="/ccpa-notice" element={<CCPANoticePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/digital-products" element={<DigitalProductsPage />} />
        <Route path="/data-processing" element={<DataProcessingPage />} />
        <Route path="/end-user-terms" element={<EndUserTermsPage />} />
        <Route path="/merchant-disclosure" element={<MerchantDisclosurePage />} />
      </Routes>
    </AppContainer>
    </>
  );
}

export default App;
