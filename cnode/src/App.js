import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
     <Route path="/login" component={Login}/>
     <PrivateRoute path="/" component={PrivateRoute}/>
    </BrowserRouter>
  );
}

export default App;
