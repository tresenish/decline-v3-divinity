/**
 * Support Help — editorial style with grid layout (Light theme).
 */
import React from 'react';
import styled from 'styled-components';
import {
  SUPPORT_HELP_SECTION_TITLE,
  type SupportHelpTopic,
} from './supportHelpTopics';

type Props = { onTopicClick: () => void; topics: SupportHelpTopic[] };

const Section = styled.section`
  padding: 7rem 1.5rem 8rem;
  background: transparent;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
  }
`;

const HeaderLeft = styled.div`
  max-width: 500px;
`;

const Label = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(26, 43, 74, 0.5);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 600;
  color: #1a2b4a;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderRight = styled.div`
  max-width: 400px;
`;

const Desc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.7;
  margin: 0;
  border-left: 1px solid rgba(26, 43, 74, 0.2);
  padding-left: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid rgba(26, 43, 74, 0.1);
  border-left: 1px solid rgba(26, 43, 74, 0.1);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 2rem;
  border: none;
  border-right: 1px solid rgba(26, 43, 74, 0.1);
  border-bottom: 1px solid rgba(26, 43, 74, 0.1);
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(26, 43, 74, 0.02);
    transform: translateX(0.5rem);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardNumber = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: rgba(26, 43, 74, 0.25);
  font-family: 'Cormorant Garamond', Georgia, serif;
  line-height: 1;
  margin-bottom: 1rem;
`;


const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a2b4a;
  margin: 0 0 0.6rem;
  font-weight: 600;
`;

const CardDesc = styled.p`
  color: rgba(26, 43, 74, 0.6);
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(26, 43, 74, 0.1);
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  color: rgba(26, 43, 74, 0.5);
  margin: 0;
  line-height: 1.6;
`;

const ResponseTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ResponseDot = styled.span`
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
`;

const ResponseLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(26, 43, 74, 0.6);
  font-weight: 500;
`;

const SupportHelpVariant1: React.FC<Props> = ({ onTopicClick, topics }) => {
  return (
    <Section>
      <Inner>
        <Header>
          <HeaderLeft>
            <Label>How Can We Help</Label>
            <Title>{SUPPORT_HELP_SECTION_TITLE}</Title>
          </HeaderLeft>
          <HeaderRight>
            <Desc>Find answers to common questions or reach out to our support team directly.</Desc>
          </HeaderRight>
        </Header>
        <Grid>
          {topics.map((topic, index) => (
            <Card key={topic.title} type="button" onClick={onTopicClick}>
              <CardNumber>0{index + 1}</CardNumber>
              <CardTitle>{topic.title}</CardTitle>
              <CardDesc>{topic.description}</CardDesc>
            </Card>
          ))}
        </Grid>
        <Footer>
          <FooterText>
            Can't find what you're looking for? Our team is here to help with any questions about your account, transactions, or billing.
          </FooterText>
          <ResponseTime>
            <ResponseDot />
            <ResponseLabel>Typically responds within 24 hours</ResponseLabel>
          </ResponseTime>
        </Footer>
      </Inner>
    </Section>
  );
};

export default SupportHelpVariant1;
