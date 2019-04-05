import React from 'react';

const Button = ({input, callback}) => {
  return (
    <button onClick={callback}>{input}</button>
  );
};

const Counter = ({count}) => {
  return (
    <div className="display">
      {count}
    </div>
  );
};

const Wrapper = ({children}) => {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  );
};

export default { Counter,Button,Wrapper };