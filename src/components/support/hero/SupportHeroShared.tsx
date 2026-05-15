import React from 'react';
import {
  ActionButtons,
  ActionButton,
  ContactInfo,
  PhoneIcon,
} from '../../../styles/SupportPage.styles';
import type { SupportHeroModel } from './supportHeroTypes';
import SupportPhoneCanvas from './SupportPhoneCanvas';

const phonePath =
  'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z';

export function SupportHeroPhoneBlock({
  phoneDisplay,
  availability = '',
  phoneColor,
  availabilityColor,
}: Pick<SupportHeroModel, 'phoneDisplay' | 'phoneHref'> & {
  availability?: string;
  phoneColor?: string;
  availabilityColor?: string;
}) {
  return (
    <ContactInfo>
      <PhoneIcon>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d={phonePath} />
        </svg>
      </PhoneIcon>
      <div>
        <SupportPhoneCanvas
          phoneDisplay={phoneDisplay}
          availability={availability}
          phoneColor={phoneColor}
          availabilityColor={availabilityColor}
        />
      </div>
    </ContactInfo>
  );
}

export function SupportHeroActionRow({ actions }: Pick<SupportHeroModel, 'actions'>) {
  return (
    <ActionButtons>
      {actions.map((a) => (
        <ActionButton key={a.key} type="button" onClick={a.onClick}>
          {a.icon}
          {a.label}
        </ActionButton>
      ))}
    </ActionButtons>
  );
}
