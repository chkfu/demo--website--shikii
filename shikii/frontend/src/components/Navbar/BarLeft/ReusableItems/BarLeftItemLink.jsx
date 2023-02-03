import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ResponsiveContext } from '../../../../App';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Home from '../../../../scenes/Home';





function BarLeftItemLink({ to, title }) {

  const screenWidth = useContext(ResponsiveContext);
  return (screenWidth >= 768 ?
    (
      <NavLink
        className='navbar--itemLink'
        to={to}
        style={{ color: '#908B84', fontSize: '18px', textDecoration: 'none' }}>
        {title}
      </NavLink>
    )
    :
    (
      <NavLink
        className='navbar--itemLink'
        to={to}
        style={{ color: '#343a40', fontSize: '18px', textDecoration: 'none' }}>
        {title}
      </NavLink>
    )
  );
}

export default BarLeftItemLink;