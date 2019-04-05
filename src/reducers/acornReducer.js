const initialState = {
  count: 0,
  buy: 'Buy acorn',
  eat: 'Eat acorn'
}

function acornReducer(state = initialState, action){
  if (action.type === "BUY") {
    return Object.assign({}, state, {
      count: state.count+action.payload
    });
  }else if(action.type === "EAT" && state.count > 0){
      return Object.assign({}, state, {
        count: state.count-action.payload
      });
  }
  return state;
}

export default acornReducer;