// from package
import React from 'react';
import { Box, Pagination } from '@mui/material';


// styles
const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
};

// rendering
function PaginationSection({ currPage, setCurrPage }) {
    return (
        <Box sx={ ContainerStyle }>
            <Pagination
                count={ 3 }
                page={ Number(currPage) }
                onChange={ async (value) => {
                    setCurrPage(value);
                } }
            />
        </Box>
    );
}

export default PaginationSection;
