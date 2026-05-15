import React from 'react';
import { useContent } from '../../../context/ThemeContext';
import SupportFAQVariant1 from './SupportFAQVariant1';

const SupportFAQSection: React.FC = () => {
  const content = useContent();
  const { faqItems, faqSubline } = content.supportPage;

  return <SupportFAQVariant1 items={faqItems} subline={faqSubline} />;
};

export default SupportFAQSection;
