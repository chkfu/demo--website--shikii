import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ResponsiveContext } from '../../../../App';
// from file
import FilterButton from './FilterButton';
import FilterSearchField from './FilterSearchField';
import FilterSelectField from './FilterSelectField';
import FilterCategoriesLabel from './FilterCategoriesLabel';

function FilterSection({ sorter, setSorter, search, setSearch, setCurrPage, setPageSize }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // state management
    const [filterHidden, setFilterHidden] = useState(true);

    // components
    const ShrinkedSection = ({ setSearch, setCurrPage, setPageSize, sorter, setSorter, filterHidden, setFilterHidden }) => {
        return (
            <>
                <Box>
                    <Box
                        className='filter--section--container'
                        sx={ {
                            border: '2px solid blue',
                            p: '0 40px 0 0',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            height: '80px',
                        } }>
                        <FilterButton setFilterHidden={ setFilterHidden } />
                        <FilterSearchField setSearch={ setSearch } setSorter={ setSorter } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />
                        <FilterSelectField sorter={ sorter } setSorter={ setSorter } />
                    </Box>
                </Box>

                <Box className='hidden--filter'>
                    <FilterCategoriesLabel filterHidden={ filterHidden } setFilterHidden={ setFilterHidden } />
                </Box>
            </>
        );
    };

    const ExpandedSection = ({ sorter, setSorter, setSearch, setCurrPage, setPageSize }) => {
        return (
            <Box
                sx={ { p: '60px 10px' } }>
                <FilterSearchField setSearch={ setSearch } setSorter={ setSorter } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />
                <FilterSelectField sorter={ sorter } setSorter={ setSorter } />
                <FilterCategoriesLabel />
            </Box>
        );
    };

    // rendering
    return (
        screenWidth <= 1024 ? (
            <ShrinkedSection filterHidden={ filterHidden } setFilterHidden={ setFilterHidden } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />
        ) : (
            <ExpandedSection sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />
        )
    );
}

export default FilterSection;
