/**
 * Support FAQ — clean modern accordion design matching home page.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { SUPPORT_FAQ_TITLE, type SupportFAQEntry } from './supportFAQData';

type Props = { items: SupportFAQEntry[]; subline: string };

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f8f8f8;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
`;

const Question = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 1.75rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: all 0.2s ease;
`;

const QText = styled.span<{ $open: boolean }>`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $open }) => ($open ? '#0074D9' : '#222')};
  line-height: 1.4;
  transition: color 0.2s ease;
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${({ $open }) => ($open ? '#0074D9' : '#f0f0f0')};
  border-radius: 50%;
  color: ${({ $open }) => ($open ? '#fff' : '#666')};
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: all 0.3s ease;
`;

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
`;

const AnswerInner = styled.div`
  padding: 0 1.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
`;

const SupportFAQVariant1: React.FC<Props> = ({ items, subline }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="support-faq">
      <Inner>
        <Header>
          <Label>Common Questions</Label>
          <Title>{SUPPORT_FAQ_TITLE}</Title>
          <Desc>{subline}</Desc>
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
                  <QText $open={open}>{faq.question}</QText>
                  <Chevron $open={open} aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
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
      </Inner>
    </Section>
  );
};

export default SupportFAQVariant1;
