import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createStore,
  combineReducers
} from 'redux';
import {Provider,connect} from 'react-redux';
import addProduct from './Actions/ProductActions';
import addTotal from './Actions/UserActions';


const Productsreducer = (state=[],action)=>{
  switch(action.type){
    case 'PRODUCT_ADDED':
      return [...state,action.payload]
             
    default: return state;
  }
  
}


const Userreducer = (state=0,action)=>{
  switch(action.type){
    case 'ADDED_TO_TOTAL':
      return state + action.payload
             
      
    default: return state;
  }
       
}

const allReducers = combineReducers({
  Productsreducer,
  Userreducer
  
  });

const store = createStore(allReducers);

console.log(store.getState());

store.dispatch(addProduct({product:'banana',count:10}));
console.log(store.getState());
store.dispatch(addTotal(20));
console.log(store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));

