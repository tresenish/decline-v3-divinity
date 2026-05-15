const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'District of Columbia',
};

export interface Jurisdiction {
  stateCode: string;
  stateName: string;
  city: string;
  arbitrationVenue: string;
}

export function getJurisdiction(companyAddress: string): Jurisdiction {
  const stateMatch = companyAddress.match(/,\s*([A-Za-z .]+?),\s*([A-Z]{2})\s+\d{5}/);
  const stateCode = stateMatch ? stateMatch[2].toUpperCase() : '';
  const city = stateMatch ? stateMatch[1].trim() : '';
  const stateName = STATE_NAMES[stateCode] || 'the state in which the Company maintains its principal place of business';
  const arbitrationVenue = city && stateName !== STATE_NAMES[''] ? `${city}, ${stateName}` : stateName;
  return { stateCode, stateName, city, arbitrationVenue };
}
