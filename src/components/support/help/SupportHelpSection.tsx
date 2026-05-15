import React, { useMemo } from 'react';
import { useContent } from '../../../context/ThemeContext';
import { buildSupportHelpTopics } from './buildSupportHelpTopics';
import SupportHelpVariant1 from './SupportHelpVariant1';

export type SupportHelpSectionProps = {
  onTopicClick: () => void;
};

const SupportHelpSection: React.FC<SupportHelpSectionProps> = ({ onTopicClick }) => {
  const content = useContent();
  const topics = useMemo(() => buildSupportHelpTopics(content), [content]);

  return <SupportHelpVariant1 onTopicClick={onTopicClick} topics={topics} />;
};

export default SupportHelpSection;
