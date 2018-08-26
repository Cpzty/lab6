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

const Product = ({name,price,quantity})=>(
<div >
  {name}-Q:{price}-Count:{quantity}
<button>Add to cart</button>
  </div>
);

const Productsreducer = (state=[],action)=>{
  switch(action.type){
    case 'PRODUCT_ADDED':
      return [...state,action.payload];
    
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

const ProductApp = ({text})=>(
<div>
  <ul>
  <li>
  <Product
  name="bananas"
  price="50"
  quantity="10"
  />
  </li>
  <h1/>
  <li>
  <Product
  name="apples"
  price="10"
  quantity="5"
  />
  </li>
  
  
  </ul>
  <div>
  <input type="text" placeholder="name"/>
  <input type="text" placeholder="price"/>
  <input type="text" placeholder="quantity"/>
  <button>Add new product</button>
  </div>
  <div>
  <p>Total:0</p>
  </div>
  </div>
);

ReactDOM.render(
   <Provider store={store}>
  <ProductApp/>
  </Provider>
  , document.getElementById('root'));
