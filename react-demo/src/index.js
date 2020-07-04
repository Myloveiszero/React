import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';

//reducx 中的重要角色： action reducer, state
const counterReducer = function(state = { count : 1 }, action) {
  switch(action.type) {
    case 'COUNT_ADD': 
    return {
      ...state, count: state.count + 1
    }
    case 'COUNT_REDUCE': 
    return {
      ...state,count: state.count - 1
    }
    default:
      return state;
  }
}

const postReducer = function(state = { list: [{ title: '你好'}]}, action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      }
      default: 
      return state
  }
}

//combin
const rootReducers = combineReducers({
  counter: counterReducer,
  

})
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// 创建一个store

console.log(store);
console.log(store.getState());

// 想要改变reducer 的值,需要使用dispatch派发一个action 
//cation 里面需要两个参数  type  playload

store.dispatch({
  type: "COUNT_ADD",
  payload: {}
})

console.log(store);
console.log(store.getState());

store.dispatch({
  type: "COUNT_REDUCE",
  payload: {}
})

console.log(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
