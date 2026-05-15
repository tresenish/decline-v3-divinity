/**
 * Support Hero — with infinity blobs background (Light theme).
 */
import React from 'react';
import styled from 'styled-components';
import {
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from '../../../styles/SupportPage.styles';
import type { SupportHeroModel } from './supportHeroTypes';
import { SupportHeroActionRow, SupportHeroPhoneBlock } from './SupportHeroShared';
import InfinityBlobs from '../../InfinityBlobs';

const BlobsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.5;
`;

const Label = styled.span`
  display: inline-block;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 80px;
  height: 1px;
  background: #e0e0e0;
  margin: 2.5rem auto;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
`;

const SupportHeroVariant1: React.FC<{ model: SupportHeroModel }> = ({ model }) => {
  return (
    <SupportHero>
      <BlobsBackground>
        <InfinityBlobs />
      </BlobsBackground>
      <ContentWrapper>
        <HeroContent>
          <Label>Support Center</Label>
          <HeroTitle>{model.title}</HeroTitle>
          <HeroDescription>{model.description}</HeroDescription>
          <Divider />
          <SupportHeroPhoneBlock
            phoneDisplay={model.phoneDisplay}
            phoneHref={model.phoneHref}
            availability={model.availability}
          />
          <SupportHeroActionRow actions={model.actions} />
        </HeroContent>
      </ContentWrapper>
    </SupportHero>
  );
};

export default SupportHeroVariant1;
