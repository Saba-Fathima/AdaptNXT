// src/App.js
import React from 'react';
import Side from './components/Side';
import Chart from './components/Chart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Side />
      <main className="main-content">
        <Chart />
      </main>
    </div>
  );
}

export default App;
