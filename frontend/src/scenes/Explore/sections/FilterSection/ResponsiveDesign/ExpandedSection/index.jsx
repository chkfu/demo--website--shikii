// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import FilterSearchField from './../../FilterSearchField';
import FilterSelectField from './../../FilterSelectField';
import FilterCategoriesLabel from './../../FilterCategoriesLabel';


// styles
const ContainerStyle = {
  p: '60px 10px'
};

// rendering
function index({ sorter, setSorter, setSearch, setCurrPage, setPageSize }) {
  return (
    <Box sx={ ContainerStyle }>
      <FilterSearchField setSearch={ setSearch } setSorter={ setSorter } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />
      <FilterSelectField sorter={ sorter } setSorter={ setSorter } />
      <FilterCategoriesLabel />
    </Box>
  );
}

export default index;
