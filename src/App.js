import React from 'react';
import './App.css';
import Row from './Row';

import requests  from './request';

function App() {
  let tetst='Testing';
  return (
    <div className="App">
      <h1> {tetst} </h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
