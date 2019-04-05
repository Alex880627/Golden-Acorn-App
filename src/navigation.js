import React from "react";
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
        <div>
         <NavLink to="/SimpleApp"> SimpleApp </NavLink>
         <NavLink to="/Redux"> SimpleRedux </NavLink>
         <NavLink to="/"> Home </NavLink>
        </div>
    );
  }
}

export default Navigation;

