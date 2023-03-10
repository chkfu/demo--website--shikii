// from package
import React from 'react';
import { Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import '../css/newsSection.css';
import HomeContainer from '../ReusableItems/HomeContainer';
import HomeHeading from '../ReusableItems/HomeHeading';
import HomeSubheading from '../ReusableItems/HomeSubheading';
import HomeCatalogueRedirect from '../ReusableItems/HomeCatalogueRedirect';
import HomeDisplayTextBox from '../reusableItems/HomeDisplayTextBox';

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

        <Box
          className='display--outer--container'
          sx={{ display: 'flex', justifyContent: 'center', mt: '30px', m: '20px 15vw 0 15vw', width: '70vw', height: '450px' }}>

          <div className="display--inner--left">
            <Link to='/news' style={{ textDecoration: 'none' }}> <HomeDisplayTextBox title='Products' /></Link>
          </div>

          <div className="display--inner--right">
            <Link to='/news' style={{ textDecoration: 'none' }}>
              <HomeDisplayTextBox title='Services' />
            </Link>
          </div>
        </Box>

      </HomeContainer>

      <Divider style={{ width: '100%' }} />
    </section>
  );
}

export default ExploreSection;