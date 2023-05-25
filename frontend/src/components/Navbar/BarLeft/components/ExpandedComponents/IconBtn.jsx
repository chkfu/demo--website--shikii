// from package
import React from 'react';
import { Link } from 'react-router-dom';
// from file
import './../../../css/navbar.css';


// styles
const LinkStyle = {
  color: '#908B84',
  fontSize: '28px',
  textDecoration: 'none'
};


// rendering
function IconBtn() {
  return (
    <Link
      to='/'
      className='logo-text'
      style={ LinkStyle }>
      Shikii</Link>
  );
}

export default IconBtn;
