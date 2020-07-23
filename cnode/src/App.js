import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Collect from './Login';

function App() {
  return (
    <BrowserRouter>
            header
     <Route path="/login" component={Login}/>
     <PrivateRoute path="/collect" component={Collect}/>
    </BrowserRouter>
  );
}

export default App;
