/**
 * Support FAQ — editorial style with numbers (Light theme).
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { SUPPORT_FAQ_TITLE, type SupportFAQEntry } from './supportFAQData';

type Props = { items: SupportFAQEntry[]; subline: string };

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 7rem 1.5rem 8rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(26, 43, 74, 0.1);
`;

const Item = styled.div`
  border-bottom: 1px solid rgba(26, 43, 74, 0.1);
`;

const Question = styled.button<{ $open: boolean }>`
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(1rem);
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr 30px;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`;

const QNumber = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: rgba(26, 43, 74, 0.25);
  font-family: 'Cormorant Garamond', Georgia, serif;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const QText = styled.span<{ $open: boolean }>`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $open }) => ($open ? '#1a2b4a' : 'rgba(26, 43, 74, 0.85)')};
  line-height: 1.4;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: rgba(26, 43, 74, 0.4);
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: transform 0.3s ease;

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
`;

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
`;

const AnswerInner = styled.div`
  padding: 0 0 2rem 76px;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(26, 43, 74, 0.6);
  max-width: 700px;

  @media (max-width: 640px) {
    padding: 0 0 1.5rem 56px;
    font-size: 0.95rem;
  }
`;

const SupportFAQVariant1: React.FC<Props> = ({ items, subline }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="support-faq">
      <Header>
        <HeaderLeft>
          <Label>Common Questions</Label>
          <Title>{SUPPORT_FAQ_TITLE}</Title>
        </HeaderLeft>
        <HeaderRight>
          <Desc>{subline}</Desc>
        </HeaderRight>
      </Header>
      <FAQList>
        {items.map((faq, index) => {
          const open = openIndex === index;
          return (
            <Item key={faq.question}>
              <Question
                type="button"
                $open={open}
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
              >
                <QNumber>0{index + 1}</QNumber>
                <QText $open={open}>{faq.question}</QText>
                <Chevron $open={open} aria-hidden>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </Chevron>
              </Question>
              <Answer $open={open}>
                <AnswerInner>{faq.answer}</AnswerInner>
              </Answer>
            </Item>
          );
        })}
      </FAQList>
    </Section>
  );
};

export default SupportFAQVariant1;
