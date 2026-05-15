/**
 * Support Help — clean modern design matching home page.
 */
import React from 'react';
import styled from 'styled-components';
import {
  SUPPORT_HELP_SECTION_TITLE,
  type SupportHelpTopic,
} from './supportHelpTopics';

type Props = { onTopicClick: () => void; topics: SupportHelpTopic[] };

const Section = styled.section`
  padding: 6rem 2rem;
  background: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Label = styled.span`
  display: inline-block;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.85rem;
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
  line-height: 1.1;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border: none;
  background: #f8f8f8;
  border-radius: 24px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardNumber = styled.span`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0074D9;
  line-height: 1;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #222;
  margin: 0 0 0.6rem;
  font-weight: 600;
`;

const CardDesc = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

const SupportHelpVariant1: React.FC<Props> = ({ onTopicClick, topics }) => {
  return (
    <Section>
      <Inner>
        <Header>
          <Label>How Can We Help</Label>
          <Title>{SUPPORT_HELP_SECTION_TITLE}</Title>
          <Subtitle>Find answers to common questions or reach out to our support team directly.</Subtitle>
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
      </Inner>
    </Section>
  );
};

export default SupportHelpVariant1;
