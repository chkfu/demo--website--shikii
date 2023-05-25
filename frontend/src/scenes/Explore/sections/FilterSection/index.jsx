import React, { useState, useContext } from 'react';
import { Box } from '@mui/material';
import { ResponsiveContext } from '../../../../App';
// from file
import ShrinkedSection from './ResponsiveDesign/ShrinkedSection';
import ExpandedSection from './ResponsiveDesign/ExpandedSection';

function FilterSection({ sorter, setSorter, search, setSearch, setCurrPage, setPageSize }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // state management
    const [filterHidden, setFilterHidden] = useState(true);

    // rendering
    return (
        screenWidth <= 1024 ?
            <ShrinkedSection
                filterHidden={ filterHidden }
                setFilterHidden={ setFilterHidden }
                sorter={ sorter }
                setSorter={ setSorter }
                search={ search }
                setSearch={ setSearch }
                setCurrPage={ setCurrPage }
                setPageSize={ setPageSize } />
            :
            <ExpandedSection
                filterHidden={ filterHidden }
                setFilterHidden={ setFilterHidden }
                sorter={ sorter }
                setSorter={ setSorter }
                search={ search }
                setSearch={ setSearch }
                setCurrPage={ setCurrPage }
                setPageSize={ setPageSize } />

    );
}

export default FilterSection;
