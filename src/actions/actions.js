function buyOne (buy) {
  return {
    type: 'BUY',
    payload: buy,
    
  };       
};

function eatOne (eat) {
  return {
    type: 'EAT',
    payload: eat,
  };
};

export { buyOne, eatOne };