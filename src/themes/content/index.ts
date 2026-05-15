import { ContentTheme } from '../types';

// Content theme - update these values for your brand
export const contentTheme: ContentTheme = {
  siteTitle: 'Payment Recovery',
  brandName: 'Divinity',
  companyName: 'Divinity Inc.',
  emailSupport: 'support@example.com',
  phoneNumber: '+10000000000',
  phoneDisplay: '+1 (000) 000-0000',
  companyAddress: '123 Street Name, City, ST 00000',
  apiUrl: 'https://your-api-url.com',
  apiKey: 'your-api-key',
  logoIcon: {
    viewBox: '0 0 24 24',
    paths: ['M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'],
    extraElements: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>',
  },
  navigationLinks: ['What We Do', 'How It Works', 'Results', 'FAQ'],
  headerPrimaryCtaLabel: 'Get in Touch',
  hero: {
    tagline: 'Turn failed card transactions into recovered revenue—decline salvage built for merchants losing money to soft declines.',
    title: 'Recover Revenue Lost to Declined Payments',
    titleHighlight: 'On every transaction.',
    description: 'Salvage soft declines across your payment flow—without manual work, without added friction.',
  },
  features: {
    sectionTitle: 'What We Do',
    sectionDescription:
      'Recover failed card payments across your entire transaction volume.\n\nWe map decline codes, retry intelligently, and report results—so lost revenue comes back to your books.',
    buttonText: 'Learn How It Works',
    items: [
      {
        icon: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
        title: 'Smart decline mapping',
        description: 'Classify every soft decline by code and route it to the right retry strategy.',
        color: '#1a1a1a',
      },
      {
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        title: 'Intelligent retry timing',
        description: 'Retry windows tuned to issuer patterns—never brute-force, always optimized.',
        color: '#333333',
      },
      {
        icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
        title: 'PCI-safe automation',
        description: 'Declines are captured and retried automatically—no card data touches your team.',
        color: '#4d4d4d',
      },
      {
        icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        title: 'Transparent reporting',
        description: 'Track recovered revenue by period, transaction type, and outcome code.',
        color: '#666666',
      },
      {
        icon: 'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z',
        title: 'Gateway-ready',
        description: 'Works with the major processors and gateways your stack already uses.',
        color: '#808080',
      },
      {
        icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
        title: 'Performance pricing',
        description: 'Pay only when we recover—fees scale with results, not with volume. No upfront costs, no monthly minimums, no hidden charges. Our success-based model means we only win when you win, aligning our incentives with your revenue goals.',
        color: '#404040',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'How It Works',
    sectionDescription: 'Connect your gateway, forward declines, recover revenue—four steps.',
    steps: [
      {
        title: 'Connect your gateway',
        description:
          'Link your processor or order system—API or batch file, whichever fits your stack.',
        icon:
          'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#1a1a1a',
      },
      {
        title: 'Forward declined transactions',
        description:
          'Declined charges enter our salvage queue with the original transaction context preserved.',
        icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
        color: '#333333',
      },
      {
        title: 'AI-powered approvals',
        description:
          'A neural model reads the decline code, issuer fingerprint, and outcome history, then lifts the approvals that were always going to clear.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        color: '#4d4d4d',
      },
      {
        title: 'Collect recovered funds',
        description:
          'You receive recovered revenue. Recovered funds are returned to you, minus our performance-based fee.',
        icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
        color: '#666666',
      },
    ],
  },
  faq: {
    sectionTitle: 'Common Questions',
    sectionDescription: 'Short answers on how decline recovery works.',
    items: [
      {
        question: 'What is a soft decline?',
        answer: 'A temporary payment failure—often issuer-side and recoverable with smart retry logic.',
      },
      {
        question: 'Do you access our cards?',
        answer: 'No. Declines flow through PCI-compliant infrastructure; card data never leaves the gateway.',
      },
      {
        question: 'How fast do recoveries happen?',
        answer: 'Most are attempted within hours; complex cases follow issuer-specific retry windows.',
      },
      {
        question: 'Will this affect our processor relationships?',
        answer: 'No. We retry within the compliance rules processors require for recovery flows.',
      },
      {
        question: 'How much integration work is needed?',
        answer: 'Minimal. Most merchants are live in days, not weeks.',
      },
      {
        question: 'What does this cost?',
        answer: 'Fees are performance-based—you pay when we recover. No recovery, no fee.',
      },
    ],
  },
  cta: {
    sectionTitle: 'Results & Proof Points',
    sectionDescription: 'See recovery lift across your transaction volume.',
    buttonText: 'Request a Demo →',
    features: [
      {
        icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
        title: '8–15% Recovery Rate',
        description: 'On average, our clients recover 8–15% of previously failed charges, turning lost revenue into actual income.',
      },
      {
        icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
        title: 'Lower Chargeback Risk',
        description: 'Reduced involuntary churn and improved billing relationships result in fewer refund disputes and chargebacks.',
      },
      {
        icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        title: 'Improved Payment Success',
        description: 'Boost overall transaction success rates and reduce billing friction across your entire payment flow.',
      },
    ],
  },
  contact: {
    sectionTitle: 'Ready to Recover Lost Revenue?',
    sectionDescription: "Tell us about your payment volume—we'll tailor a demo.",
    formDescription: "We'll follow up to schedule a call and share sample recovery metrics.",
    features: [
      {
        title: 'PCI-Compliant Infrastructure',
        description: 'Enterprise-grade security for payment data handling. Our platform meets PCI DSS Level 1 certification requirements.',
      },
      {
        title: 'GDPR & CCPA Compliant',
        description: 'Full compliance with data protection regulations. Transparent data handling and merchant-controlled retention policies.',
      },
      {
        title: 'Secure API Integration',
        description: 'OAuth 2.0 authentication, encrypted data transmission, and real-time monitoring for all merchant integrations.',
      },
    ],
    formFields: {
      companyLabel: 'Company Name',
      companyPlaceholder: 'Your company name',
      nameLabel: 'Contact Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Business Email',
      emailPlaceholder: 'you@yourcompany.com',
      messageLabel: 'Message (Optional)',
      messagePlaceholder: 'Tell us about your business, payment volume, current decline rates, or specific questions...',
    },
    submitButtonText: 'Request Demo',
    successMessage: 'Demo request received! Our sales team will contact you within 24 hours.',
  },
  whyRecovery: {
    sectionTitle: 'Why Recovery Matters',
    statHighlight: 'Built for sustainable growth.',
    sectionDescription: 'Every payment failure leaves revenue on the table—recovery brings it back without the cost of acquisition.',
    benefits: [
      {
        icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
        title: 'Recover Lost Revenue',
        description: 'Turn failed transactions into income. Recovered payments go straight to your bottom line without additional customer acquisition costs.',
      },
      {
        icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
        title: 'Reduce Customer Churn',
        description: 'Keep customers whose payments fail. Most declines are temporary issues, not intentional cancellations or lost accounts.',
      },
      {
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        title: 'Increase Lifetime Value',
        description: 'Retain customers longer by preventing involuntary cancellations. Higher retention means increased LTV and better ROI.',
      },
      {
        icon: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
        title: 'Smoother Billing Cycles',
        description: 'Automated recovery reduces billing interruptions and customer friction. Maintain predictable and consistent cash flow.',
      },
      {
        icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        title: 'Boost Your Profitability',
        description: 'Increase revenue without extra marketing spend. Performance-based fees mean you only pay when we recover.',
      },
      {
        icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
        title: 'Lower Processing Costs',
        description: 'Reduce chargeback rates and dispute volume. Better payment success means fewer admin costs and happier processors.',
      },
    ],
  },
  supportPage: {
    supportHeroDescription:
      'Help with payments, orders, and charges—we reply within business hours.',
    helpSubline: 'Pick a topic—we route you to email or the right form.',
    helpTopics: [
      {
        title: 'Orders & transactions',
        description: 'Order status, tracking, and transaction history.',
        iconPath:
          'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
      },
      {
        title: 'Billing & charges',
        description: 'Descriptors, statement lines, and billing questions.',
        iconPath:
          'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
      },
      {
        title: 'Declined payments',
        description: 'Retries, soft declines, and recovery timing.',
        iconPath:
          'M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z',
      },
      {
        title: 'Disputed transactions',
        description: 'Chargebacks, refunds, and resolution timelines.',
        iconPath:
          'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z',
      },
      {
        title: 'Returns & refunds',
        description: 'Return policies and refund timelines.',
        iconPath:
          'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      },
      {
        title: 'Data & security',
        description: 'How we handle card data and payment information.',
        iconPath:
          'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      },
    ],
    faqSubline: 'Short answers for merchants and customers.',
    faqItems: [
      {
        question: 'How fast do you respond?',
        answer: 'Usually within one business day.',
      },
      {
        question: "A charge doesn't match my order—what now?",
        answer: "Share the date, amount, and last four digits—we'll trace the transaction.",
      },
      {
        question: 'What is decline recovery?',
        answer: 'Smart retries and routing so legitimate charges can complete after a soft decline.',
      },
      {
        question: 'How do refunds work?',
        answer: 'Open Customer Care and choose Request Refund; we confirm eligibility and typical timelines.',
      },
      {
        question: 'Is my data secure?',
        answer: 'We follow PCI-aligned practices and only ask for details over official channels.',
      },
      {
        question: 'How do I reach you?',
        answer: 'Phone, email, or the contact form—include your order code if you have it.',
      },
    ],
  },
  supportActions: ['email', 'contactForm', 'refund'],
};
