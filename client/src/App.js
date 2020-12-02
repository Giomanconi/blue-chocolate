import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Nabvar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
