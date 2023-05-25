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

function index({ data, sorter, setSorter, search, setSearch, currPage, setCurrPage, pageSize, setPageSize }) {
  return (
    <SceneContainer>

      <AdvertisementSection />

      <Box sx={ FilterContainerStyle }>
        <FilterSection
          sorter={ sorter }
          setSorter={ setSorter }
          search={ search }
          setSearch={ setSearch }
          currPage={ currPage }
          setCurrPage={ setCurrPage }
          pageSize={ pageSize }
          setPageSize={ setPageSize } />
      </Box>

      <Box
        sx={ DisplayContainerStyle }>
        <DisplaySection data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />
      </Box>

    </SceneContainer >
  );
}

export default index;
