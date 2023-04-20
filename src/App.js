import './App.css';
import './assets/styles/styles.css';
import Shipmate from './app/Shipmate';
import { BrowserRouter as Router } from 'react-router-dom';
import { createContext } from 'react';

function App() {
  const Context = createContext();
  return (
    <Router>
      <Context.Provider value={{}}>
        <Shipmate />
      </Context.Provider>
    </Router>
  );
}

export default App;
