import React from 'react';
import { Box } from '@mui/material';
// from file
import SceneContainer from '../../../../../components/Container/SceneContainer';
import AdvertisementSection from './../../AdvertisementSection';
import FilterSection from './../../FilterSection';
import DisplaySection from './../../DisplaySection';


// styles

const FilterContainerStyle = {
  backgroundColor: '#fff4e6'
};

const DisplayContainerStyle = {
  mt: '10px',
  minHeight: '600px',
  backgroundColor: '#f8f9fa'
};


// rendering

function index({ data, refetch }) {
  return (
    <SceneContainer>

      <AdvertisementSection />

      <Box sx={ FilterContainerStyle }>
        <FilterSection />
      </Box>

      <Box
        sx={ DisplayContainerStyle }>
        <DisplaySection
          data={ data }
          refetch={ refetch } />
      </Box>

    </SceneContainer >
  );
}

export default index;
