import React from 'react';
import './index.scss';

import { UserFilters } from './UserFilters';

export default function BillCalculator({
  milesDriven,
  electricRate,
  handleChange,
}) {
  return (
    <section className="calculator">
      <h2 className="calculator__title u-margin-bottom-small">
        Calculate the lowest cost electric rate for your EV below!
      </h2>

      <UserFilters
        milesDriven={milesDriven}
        electricRate={electricRate}
        handleChange={handleChange}
      />

      {/* <Results /> */}
    </section>
  );
}
