import React, { type ReactNode } from 'react';
import { useContent, useCompanyInfo } from '../../../context/ThemeContext';
import { getSupportHeroCopy } from './supportHeroCopy';
import type { SupportHeroModel } from './supportHeroTypes';
import type { SupportActionType } from '../../../themes/types';
import SupportHeroVariant1 from './SupportHeroVariant1';

const ALL_ACTIONS: SupportActionType[] = ['email', 'contactForm', 'refund'];

export type SupportHeroSectionProps = {
  actionConfig: Record<
    SupportActionType,
    { label: string; icon: ReactNode; handler: () => void }
  >;
};

const SupportHeroSection: React.FC<SupportHeroSectionProps> = ({ actionConfig }) => {
  const content = useContent();
  const { phoneDisplay, phoneNumber } = useCompanyInfo();
  const copy = getSupportHeroCopy(content);
  const supportActions = content.supportActions ?? ALL_ACTIONS;

  const phoneHref = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  const model: SupportHeroModel = {
    title: copy.title,
    description: copy.description,
    availability: copy.availability,
    phoneDisplay,
    phoneHref,
    imageSrc: copy.imageSrc,
    imageAlt: copy.imageAlt,
    actions: supportActions.map((key) => ({
      key,
      label: actionConfig[key].label,
      icon: actionConfig[key].icon,
      onClick: actionConfig[key].handler,
    })),
  };

  return <SupportHeroVariant1 model={model} />;
};

export default SupportHeroSection;
