import type { ReactNode } from 'react';
import { SupportActionType } from '../../../themes/types';

export type SupportHeroActionItem = {
  key: SupportActionType;
  label: string;
  icon: ReactNode;
  onClick: () => void;
};

export type SupportHeroModel = {
  title: string;
  description: string;
  availability: string;
  phoneDisplay: string;
  phoneHref: string;
  imageSrc: string;
  imageAlt: string;
  actions: SupportHeroActionItem[];
};
