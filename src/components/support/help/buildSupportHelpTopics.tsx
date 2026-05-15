import React from 'react';
import type { ContentTheme } from '../../../themes/types';
import type { SupportHelpTopic } from './supportHelpTopics';

export function buildSupportHelpTopics(content: ContentTheme): SupportHelpTopic[] {
  return content.supportPage.helpTopics.map((t) => ({
    title: t.title,
    description: t.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={t.iconPath} />
      </svg>
    ),
  }));
}
