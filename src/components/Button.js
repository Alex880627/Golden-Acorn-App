import React from 'react';

const Button = ({input, callback}) => {
  return (
    <button onClick={callback}>{input}</button>
  );
};

export default Button;