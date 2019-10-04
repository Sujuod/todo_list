import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { List } from './pages/list/List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/List" component={List} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
