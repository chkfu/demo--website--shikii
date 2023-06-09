import React from 'react';
import HiddenFilter from './components/HiddenFilter';
import SectionContainer from './components/SectionContainer';
import FilterButton from './../../FilterButton';
import FilterSearchField from './../../FilterSearchField';
import FilterSelectField from './../../FilterSelectField';

function index() {
  return (
    <>
      <SectionContainer>
        <FilterButton />
        <FilterSearchField />
        <FilterSelectField />
      </SectionContainer>

      <HiddenFilter />
    </>
  );
}

export default index;
