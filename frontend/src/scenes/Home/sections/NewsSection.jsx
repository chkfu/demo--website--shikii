// from package
import React from 'react';
import { Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import '../css/newsSection.css';
import HomeContainer from '../reusanleItems/HomeContainer';
import HomeHeading from '../reusanleItems/HomeHeading';
import HomeSubheading from '../reusanleItems/HomeSubheading';
import HomeCatalogueRedirect from '../reusanleItems/HomeCatalogueRedirect';
import HomeDisplayTextBox from '../reusanleItems/HomeDisplayTextBox';


// styles

const OuterContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  mt: '30px',
  m: '20px 15vw 0 15vw',
  width: '70vw',
  height: '450px'
};

const InnerBoxStyle = {
  textDecoration: 'none'
};

const DividerStyle = {
  width: '100%'
};

// rendering
function ExploreSection() {
  return (
    <section>
      <HomeContainer>
        <Box>
          <HomeHeading title='Shikii News' />
          <HomeSubheading subtitle='Find our ideas with modern Asian designs' />
          <HomeCatalogueRedirect linkTo='/news' />
        </Box>

        <Box sx={ OuterContainerStyle }>
          <div className='display--inner--left'>
            <Link to='/testingAnnouncement' style={ InnerBoxStyle }>
              <HomeDisplayTextBox title='Products' />
            </Link>
          </div>
          <div className='display--inner--right'>
            <Link to='/testingAnnouncement' style={ InnerBoxStyle }>
              <HomeDisplayTextBox title='Services' />
            </Link>
          </div>
        </Box>
      </HomeContainer>

      <Divider style={ DividerStyle } />
    </section>
  );
}

export default ExploreSection;