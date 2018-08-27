const cartReducer = (state=[],action)=>{
  switch(action.type){
    case 'ADD':
      return [...state,action.payload]
    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload)
      {/*retorna todos excepto el que sea igual al index de la accion*/}
      return state.filter((item,index)=> index !== firstMatchIndex)
        
    default:return state;
  }
}

export default cartReducer;