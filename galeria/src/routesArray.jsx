// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesFotos from './pages/DetalhesFotos/Index';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/DetalhesFotos/:id" component={DetalhesFotos} />
      </Switch>
    </Router>
  );
}

export default App;
