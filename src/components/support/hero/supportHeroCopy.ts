import { ContentTheme } from '../../../themes/types';

export const SUPPORT_HERO_IMAGE = '/support-hero.png';

export function getSupportHeroCopy(content: ContentTheme) {
  return {
    title: `${content.brandName} Customer Care`,
    description: content.supportPage.supportHeroDescription,
    availability: 'Available Monday - Friday, 9 AM - 6 PM EST',
    imageSrc: SUPPORT_HERO_IMAGE,
    imageAlt: `${content.brandName} support`,
  };
}
