import React from 'react';

const Wrapper = ({children}) => {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  );
};

export default Wrapper;