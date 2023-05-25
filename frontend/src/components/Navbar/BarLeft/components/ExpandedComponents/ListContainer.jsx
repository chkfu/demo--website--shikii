// from package
import React from 'react';
import { List } from '@mui/material';
// from file
import BarLeftItemContainer from '../../ReusableItems/BarLeftItemContainer';
import BarLeftItemLink from '../../ReusableItems/BarLeftItemLink';


// styles

const ListStyle = {
  display: 'flex',
  width: '300px',
  ml: '20px'
};

// components

const FeatureBtn = () => {
  return (
    <BarLeftItemContainer>
      <BarLeftItemLink to='/features' title='Features' />
    </BarLeftItemContainer>
  );
};

const ExploreBtn = () => {
  return (
    <BarLeftItemContainer>
      <BarLeftItemLink to='/explore' title='Explore' />
    </BarLeftItemContainer>
  );
};

const NewsBtn = () => {
  return (
    <BarLeftItemContainer>
      <BarLeftItemLink to='/testingAnnouncement' title='News' />
    </BarLeftItemContainer>
  );
};


// rendering

function ListContainer() {
  return (
    <List sx={ ListStyle }>
      <FeatureBtn />
      <ExploreBtn />
      <NewsBtn />
    </List>
  );
}

export default ListContainer;
