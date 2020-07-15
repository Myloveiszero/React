import React,{ useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/header/Header.jsx';
import Journey from './components/journey/Journey.jsx';


function App(props) {
  const { 
    from,
    to
  } = props;

  const onBack = useCallback(() => {
      window.history.back();
    },[])

  return (
    <div className="App">
     <div class="header-wrapper">
       <Header title="火车票" onBack={onBack}/>
     </div>
     <form action="./query.html" className="form">
      <Journey from={from} to={to} />
     </form>
    </div>
  );
}

// export default App;
export default connect(function mapStateToProps(state) {
  //状态的读操作
  return state;
})(App);
