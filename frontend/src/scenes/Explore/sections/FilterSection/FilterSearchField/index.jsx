import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../../App';
import SearchLabel from './components/SearchLabel';
import SearchForm from './components/SearchForm';


// styles

const ShrinkedContainerStyle = {
    p: '0 5px',
    display: 'flex',
    justifyContext: 'center',
    alignItems: 'center',
    width: '50%',
    height: '70px'
};

const ExpandedContainerStyle = {
    p: '20px 10px',
    justifyContext: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '120px'
};


// rendering

function index({ setSorter, setCurrPage, setPageSize, setSearch }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <Box sx={ screenWidth <= 1024 ? ShrinkedContainerStyle : ExpandedContainerStyle }>
            <SearchLabel screenWidth={ screenWidth } />
            <SearchForm
                setSearch={ setSearch }
                setSorter={ setSorter }
                setCurrPage={ setCurrPage }
                setPageSize={ setPageSize } />
        </Box>
    );
}

export default index;
