import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import BarLeftItemLink from '../../ReusableItems/BarLeftItemLink';


// styles

const SubtitleStyle = {
  p: '5px'
};

const ListStyle = {
  p: '5px 20px'
};

// components

const Subtitle = () => {
  return (
    <Typography
      variant='h6'
      sx={ SubtitleStyle }>
      Links
    </Typography>
  );
};

const HomeBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/'
        title='Home' />
    </ListItem>
  );
};

const FeaturesBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/features'
        title='Features' />
    </ListItem>
  );
};

const ExploreBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/explore'
        title='Explore' />
    </ListItem>
  );
};

const NewsBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/testingAnnouncement'
        title='News' />
    </ListItem>
  );
};


// rendering

function LinksSection() {
  return (
    <>
      <Subtitle />

      <List sx={ ListStyle }>
        <HomeBtn />
        <FeaturesBtn />
        <ExploreBtn />
        <NewsBtn />
      </List>
    </>
  );
}

export default LinksSection;
