import React, { useState, useContext } from 'react';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// from files
import '../css/navbar.css';
// from file
import { ResponsiveContext } from '../../../App';
// shrinked components
import DrawerContainer from './components/ShrinkedComponents/DrawerContainer';
import DrawerTrigger from './components/ShrinkedComponents/DrawerTrigger';
import CloseBtnBox from './components/ShrinkedComponents/CloseBtnBox';
import UserSection from './components/ShrinkedComponents/UserSection';
import LinksSection from './components/ShrinkedComponents/LinksSection';
// expanded components
import ExpandedBox from './components/ExpandedComponents/ExpandedBox';
import IconBtn from './components/ExpandedComponents/IconBtn';
import ListContainer from './components/ExpandedComponents/ListContainer';



// styles
const DividerStyle = {
  m: '20px'
};

// components

const ShrinkedContainer = () => {
  // state management
  const [menuOpen, setMenuOpen] = useState(false);
  // rendering
  return (
    <>
      <DrawerTrigger setMenuOpen={ setMenuOpen } />
      <DrawerContainer menuOpen={ menuOpen } setMenuOpen={ setMenuOpen }>
        <CloseBtnBox setMenuOpen={ setMenuOpen } />
        <LinksSection />
        <Divider sx={ DividerStyle } />
        <UserSection />
      </DrawerContainer>
    </>
  );
};

const ExpandedContainer = () => {
  return (
    <ExpandedBox>
      <IconBtn />
      <ListContainer>
        <LinksSection />
        <UserSection />
      </ListContainer>
    </ExpandedBox>
  );
};

// rendering
function BarLeft() {
  const screenWidth = useContext(ResponsiveContext);
  return (
    screenWidth >= 768 ? <ExpandedContainer /> : <ShrinkedContainer />
  );
}

export default BarLeft;