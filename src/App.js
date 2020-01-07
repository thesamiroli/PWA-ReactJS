import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from'./Detail';

function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/:id' component={Detail}/>
     </Switch>
    </Router>
  );
}

export default App;
