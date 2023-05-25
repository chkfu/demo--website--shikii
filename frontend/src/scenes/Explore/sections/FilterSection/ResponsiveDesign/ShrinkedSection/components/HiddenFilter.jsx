// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import FilterCategoriesLabel from './../../../FilterCategoriesLabel';


// rendering

function HiddenFilter({ filterHidden, setFilterHidden }) {
  return (
    <Box>
      <FilterCategoriesLabel
        filterHidden={ filterHidden }
        setFilterHidden={ setFilterHidden } />
    </Box>
  );
}

export default HiddenFilter;
