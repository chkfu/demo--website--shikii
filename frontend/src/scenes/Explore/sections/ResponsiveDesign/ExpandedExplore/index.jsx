// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import SceneContainer from '../../../../../components/Container/SceneContainer';
import AdvertisementSection from './../../AdvertisementSection';
import FilterSection from './../../FilterSection';
import DisplaySection from './../../DisplaySection';


// styles

const FormatContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  minHeight: '700px'
};

const FilterContainerStyle = {
  width: '250px',
  backgroundColor: '#fff4e6'
};

const DisplayContainerStyle = {
  width: '80%',
  backgroundColor: '#f8f9fa'
};


// rendering

function index({ data, refetch }) {
  return (
    <SceneContainer>

      <AdvertisementSection />

      <Box sx={ FormatContainerStyle }>

        <Box sx={ FilterContainerStyle }>
          <FilterSection />
        </Box>

        <Box sx={ DisplayContainerStyle }>
          <DisplaySection
            data={ data }
            refetch={ refetch } />
        </Box>

      </Box >

    </SceneContainer >
  );
}

export default index;
