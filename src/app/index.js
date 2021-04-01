import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import Header from './components/Header';

export function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/data/buffaloLoadProfile.csv');
      const reader = response.body.getReader();

      const result = await reader.read(); // raw array

      const decoder = new TextDecoder('utf-8');

      const csv = decoder.decode(result.value); // the csv text

      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      console.log('results', results);

      const loadedProfile = results.data; // array of objects
      setProfile(loadedProfile);
    }

    getData();
  }, []); // [] means just do this once, after initial render

  console.log(profile);

  return (
    <Header />

    // <BillCalculator />
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
