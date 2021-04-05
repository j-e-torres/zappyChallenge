import React, { useState, useEffect, Component } from 'react';
import Papa from 'papaparse';

import Header from './components/Header';
import BillCalculator from './containers/BillCalculator';

/*
todo:
  - create react state
    - loadedProfile data
    - electricRate
    - milesDriven
    - timeCharging
  - create handleChange to pass down to filters to affect react state
  -

*/
export class App extends Component {
  constructor() {
    super();

    this.state = {
      electricRate: 'RATE-A',
      milesDriven: 10000,
      chargingTime: '6am',
      zappyProfile: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('/data/buffaloLoadProfile.csv');
    const reader = response.body.getReader();

    const result = await reader.read(); // raw array

    const decoder = new TextDecoder('utf-8');

    const csv = decoder.decode(result.value); // the csv text

    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    console.log('results', results);

    const loadedProfile = results.data; // array of objects

    this.setState({ zappyProfile: loadedProfile });
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    const { electricRate, milesDriven } = this.state;

    return (
      <>
        <Header />

        <div className="pageWrapper">
          <BillCalculator
            milesDriven={milesDriven}
            electricRate={electricRate}
            handleChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

/*
  useEffect keep re rendering, fetching API constantly
*/

// export function Eee() {
//   const [profile, setProfile] = useState(null);
//   const [electricRate, setElectricRate] = useState('RATE-A');
//   const [milesDriven, setMilesDriven] = useState(10000);
//   const [chargingTime, setChargingTime] = useState('');

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch('/data/buffaloLoadProfile.csv');
//       const reader = response.body.getReader();

//       const result = await reader.read(); // raw array

//       const decoder = new TextDecoder('utf-8');

//       const csv = decoder.decode(result.value); // the csv text

//       const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
//       console.log('results', results);

//       const loadedProfile = results.data; // array of objects
//       setProfile(loadedProfile);
//     }

//     getData();
//   }, []); // [] means just do this once, after initial render

//   console.log(profile);

//   return (
//     <>
//       <Header />

//       <div className="pageWrapper">
//         <BillCalculator
//           setElectricRate={setElectricRate}
//           setMilesDriven={setMilesDriven}
//           milesDriven={milesDriven}
//           electricRate={electricRate}
//         />
//       </div>
//     </>
//   );
// }
