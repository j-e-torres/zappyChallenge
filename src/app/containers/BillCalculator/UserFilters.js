import React from 'react';

import { RATES_DROPDOWN } from '../../constants';

export const UserFilters = ({ handleChange, milesDriven, electricRate }) => {
  return (
    <div className="calculator__filters">
      <div className="calculator__filterGroup">
        <label htmlFor="electric-rate">Select Your Current Rate</label>

        <select
          value={electricRate}
          name="electricRate"
          id="electricRate"
          onChange={handleChange}
        >
          {RATES_DROPDOWN.map((rate) => rate)}
        </select>
      </div>

      <div className="calculator__filterGroup">
        <label htmlFor="milesDriven">Miles Driven Per Year</label>

        <input
          name="milesDriven"
          id="milesDriven"
          type="range"
          min="1000"
          max="25000"
          step="500"
          value={milesDriven}
          onChange={handleChange}
        />
        <span>{milesDriven}</span>
      </div>

      <div className="calculator__filterGroup">
        <label htmlFor="electric-rate">Charging Times</label>
        <select id="electric-rate">{RATES_DROPDOWN.map((rate) => rate)}</select>
      </div>
    </div>
  );
};
