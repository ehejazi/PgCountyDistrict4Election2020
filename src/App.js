import React from 'react';
import logo from './logo.svg';
import mohAli from './images/MohamadAli.png'
import './App.css';
import Map from './Components/Map.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mohAli} className="App-logo" alt="logo" />
      </header>
      <Map />
    </div>
    
  );
}

export default App;

// '20708','20709','20726','20725','20707','20904','20903','20783','20912','20782','20788','20712','20781','20722','20710','20781','20784','20606','20703','20720','20774','20706','20785','20721','20792','20743','20731','20790','20799','20775','20774','20747','20752','20746','20762','20757','20748','20745','20750'
