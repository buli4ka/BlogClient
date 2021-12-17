import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';


const NavButton = ({ title, renderIcon, to, className }) => {
  const icon = useMemo(() => renderIcon(), [renderIcon]);


  return (
    <NavLink className={className} to={to}>
      {renderIcon()}
      <span>{title}</span>
    </NavLink>
  );
};

export default NavButton;
