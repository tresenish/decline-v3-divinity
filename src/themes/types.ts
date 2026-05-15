// Theme type definitions for the single-theme website

export interface ColorTheme {
  // Primary colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryDarker: string;

  // Background gradients
  heroGradient: string;
  statsGradient: string;
  ctaGradient: string;
  contactGradient: string;
  whyRecoveryGradient?: string;
  faqGradient?: string;

  // Button gradients
  buttonPrimaryGradient: string;
  buttonPrimaryHoverGradient: string;

  // Accent colors for features
  accentColors: string[];

  // Text colors
  textDark: string;
  textMedium: string;
  textLight: string;

  // Tagline colors
  taglineColor: string;
  taglineBackground: string;
  taglineBorder: string;

  // Highlight gradient (for title highlights)
  highlightGradient: string;

  // Section title underline gradient
  titleUnderlineGradient: string;

  // Shadow color for buttons
  shadowColor: string;

  // Success color
  successColor: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTAFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFeature {
  title: string;
  description: string;
}

export interface WhyRecoveryBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface HeroContent {
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  secondaryButtonText?: string;
}

export interface FeaturesContent {
  sectionTitle: string;
  sectionDescription: string;
  items: Feature[];
  buttonText?: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface HowItWorksContent {
  sectionTitle: string;
  sectionDescription: string;
  steps: HowItWorksStep[];
}

export interface FAQContent {
  sectionTitle: string;
  sectionDescription: string;
  items: FAQ[];
}

export interface CTAContent {
  sectionTitle: string;
  sectionDescription: string;
  buttonText: string;
  features: CTAFeature[];
}

export interface ContactContent {
  sectionTitle: string;
  sectionDescription: string;
  formDescription: string;
  features: ContactFeature[];
  formFields: {
    companyLabel?: string;
    companyPlaceholder?: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
  };
  submitButtonText: string;
  successMessage: string;
}

export interface WhyRecoveryContent {
  sectionTitle: string;
  statHighlight: string;
  sectionDescription: string;
  benefits: WhyRecoveryBenefit[];
}

export interface LogoIcon {
  viewBox: string;
  paths: string[];
  extraElements?: string; // For complex SVG content like gradients
}

export type SupportActionType = 'email' | 'contactForm' | 'refund';

/** Customer Care page — help tiles, FAQ, hero blurb (per vertical). */
export interface SupportHelpTopicContent {
  title: string;
  description: string;
  /** Material-style SVG path `d` for a 24×24 icon */
  iconPath: string;
}

export interface SupportPageContent {
  supportHeroDescription: string;
  helpSubline: string;
  helpTopics: SupportHelpTopicContent[];
  faqSubline: string;
  faqItems: FAQ[];
}

export interface ContentTheme {
  siteTitle: string;
  brandName: string;
  companyName: string;
  emailSupport: string;
  phoneNumber: string;
  phoneDisplay: string;
  companyAddress: string;
  apiUrl: string;
  apiKey: string;
  logoIcon: LogoIcon;
  hero: HeroContent;
  features: FeaturesContent;
  howItWorks: HowItWorksContent;
  faq: FAQContent;
  cta: CTAContent;
  contact: ContactContent;
  whyRecovery?: WhyRecoveryContent;
  navigationLinks: string[];
  /** Header primary button — navigates to /get-started (wording varies by theme). */
  headerPrimaryCtaLabel: string;
  supportActions?: SupportActionType[];
  /** /support — themed copy & tiles */
  supportPage: SupportPageContent;
}

export interface ThemeConfig {
  colors: ColorTheme;
  content: ContentTheme;
}

// Styled-components theme augmentation
declare module 'styled-components' {
  export interface DefaultTheme extends ColorTheme {}
}
