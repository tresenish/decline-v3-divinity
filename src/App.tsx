import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import styled from 'styled-components';
import HeroFeaturesWrapper from './components/HeroFeaturesWrapper';
import HowItWorksWhyRecoveryWrapper from './components/HowItWorksWhyRecoveryWrapper';
import CTAFAQWrapper from './components/CTAFAQWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
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

const HomeShell = styled.div`
  position: relative;
  isolation: isolate;
`;

const HomeContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HomeShell>
        <HomeContent>
          <HeroFeaturesWrapper />
          <HowItWorksWhyRecoveryWrapper />
          <CTAFAQWrapper />
        </HomeContent>
      </HomeShell>
      <Footer />
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
      }, 100);
    } else {
      // Scroll to top on route change
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
