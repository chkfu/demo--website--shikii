// from package
import React from 'react';
// from file
import { ListItem } from '@mui/material';


// styles
const ListItemStyle = {
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px'
};


// rendering
function BarLeftItemContainer({ children }) {
  return (
    <ListItem sx={ ListItemStyle }>
      { children }
    </ListItem>
  );
}

export default BarLeftItemContainer;