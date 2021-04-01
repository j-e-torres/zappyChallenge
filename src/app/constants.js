import React from 'react';
const FLAT = 'FLAT';
const TOU = 'TOU';

export const RATES_DROPDOWN = [
  <option value="RATE-A">Rate A</option>,
  <option value="RATE-B">Rate B</option>,
];

export const RATES = {
  RATEA: {
    type: FLAT,
    kWh: 0.15,
  },

  RATEB: {
    type: TOU,
  },
};
