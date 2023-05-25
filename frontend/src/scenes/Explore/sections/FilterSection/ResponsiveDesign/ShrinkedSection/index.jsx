import React from 'react';
import HiddenFilter from './components/HiddenFilter';
import SectionContainer from './components/SectionContainer';
import FilterButton from './../../FilterButton';
import FilterSearchField from './../../FilterSearchField';
import FilterSelectField from './../../FilterSelectField';
import FilterHidden from './components/HiddenFilter';

function index({ setFilterHidden, setSearch, setSorter, sorter, setCurrPage, setPageSize }) {
  return (
    <>
      <SectionContainer>

        <FilterButton setFilterHidden={ setFilterHidden } />

        <FilterSearchField
          setSearch={ setSearch }
          setSorter={ setSorter }
          setCurrPage={ setCurrPage }
          setPageSize={ setPageSize }
        />

        <FilterSelectField
          sorter={ sorter }
          setSorter={ setSorter }
        />

      </SectionContainer>

      <HiddenFilter />
    </>
  );
}

export default index;
