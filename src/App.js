import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Article from './Components/Article'
import './App.css';


/* Main app that serves our routes. */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}




export default App;
