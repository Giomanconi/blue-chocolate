import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Nabvar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CrearAgenda from './pages/CrearAgenda'
import Agenda from './pages/Agenda'

function App() {
  return (
    <div className="App">
      <Nabvar />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/nuevaagenda" component={CrearAgenda} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
