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

export const HOURS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];
