import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const GetStartedPage: React.FC = () => (
  <Page>
    <Header />
    <Main>
      <ContactSection />
    </Main>
    <Footer />
  </Page>
);

export default GetStartedPage;
