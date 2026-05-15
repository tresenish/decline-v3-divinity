import React from 'react';
import { useContent } from '../context/ThemeContext';
import WhyRecoveryVariant1 from './whyRecovery/WhyRecoveryVariant1';

const WhyRecoverySection: React.FC = () => {
  const content = useContent();
  if (!content.whyRecovery) {
    return null;
  }

  return <WhyRecoveryVariant1 />;
};

export default WhyRecoverySection;
