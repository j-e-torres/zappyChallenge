import React from 'react';

import { RATES_DROPDOWN, HOURS } from '../../constants';

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
          max="125000"
          step="500"
          value={milesDriven}
          onChange={handleChange}
        />
        <span>{milesDriven} miles</span>
      </div>

      <div className="calculator__filterGroup">
        <label htmlFor="electric-rate">Charging Times</label>
        <select id="electric-rate">
          <option value="1">1:00 pm</option>
        </select>
      </div>
    </div>
  );
};
