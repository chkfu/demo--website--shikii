// from package
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// from file
import { ResponsiveContext } from '../../../../App';




// styles
const NavLinkStyle = {
  color: '#908B84',
  fontSize: '18px',
  textDecoration: 'none'
};


// rendering
function BarLeftItemLink({ to, title }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // render
  return (screenWidth >= 768 ?
    <NavLink
      to={ to }
      style={ NavLinkStyle }>
      { title }
    </NavLink>
    :
    <NavLink
      to={ to }
      style={ NavLinkStyle }>
      { title }
    </NavLink>
  );
}

export default BarLeftItemLink;