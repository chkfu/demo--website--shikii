// from package
import React from 'react';
import { Box, Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setCurrPage } from './../../../../../redux/reducers/exploreSlice';


// styles
const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
};

// rendering
function PaginationSection() {

    // redux
    const currPage = useSelector(state => state.explore.currPage);
    const dispatch = useDispatch();

    // render
    return (
        <Box sx={ ContainerStyle }>
            <Pagination
                count={ 3 }
                page={ currPage }
                onChange={ (event) => dispatch(setCurrPage(Number((event.target.textContent)))) }
            />
        </Box>
    );
}

export default PaginationSection;
