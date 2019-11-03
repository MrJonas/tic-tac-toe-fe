import React from 'react';
import './App.css';
import Board from './components/board';
import Reports from './components/reports';

const App: React.FC = () => (
  <div className="app">
    <Board />
    <Reports /> 
  </div>
);

export default App;
