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
function index() {
  return (
    <Box sx={ ContainerStyle }>
      <FilterSearchField />
      <FilterSelectField />
      <FilterCategoriesLabel />
    </Box>
  );
}

export default index;
