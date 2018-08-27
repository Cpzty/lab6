import React from 'react';
import {connect} from 'react-redux';
let grandtotal=0;

function sort(items){
  return items.sort((a,b)=> a.id<b.id)
}

function Cart(props){
  
  return <div><table>
    <thead>
    <tr>
    <th>Item</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Order Total</th>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item=><tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.quantity*item.price}</td>
        <td>{grandtotal=grandtotal+item.price}</td>
        <td>
        <button onClick={()=>props.addToCart(item)}>+</button>
        </td>
        <td>
        <button onClick={()=>props.removeFromCart(item)}>-</button>
        </td>
        <td>
          <button onClick={()=>props.removeAllFromCart(item)}>Remove all from cart</button>  
        </td>
        </tr>)
          
      }
    </tbody>
  </table>
    <h1>Order total</h1>
    <p>{grandtotal}</p>
    </div>
}

function mapStateToProps(state){
  return {
    cart: state.cart,
  }
}

function mapDispatchProps(dispatch){
  return{
    addToCart: (item)=>{
      dispatch({type:'ADD',payload: item})
    },
    removeFromCart:(item)=>{
      dispatch({type:'REMOVE',payload:item})
    },
    removeAllFromCart:(item)=>{
      dispatch({type:'REMOVE_ALL',payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchProps)(Cart);


