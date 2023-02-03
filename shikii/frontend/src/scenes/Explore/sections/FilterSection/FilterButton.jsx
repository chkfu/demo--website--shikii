// from package
import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

function FilterButton({ setFilterHidden }) {

    return (
        <Box
            className='filter--button--container'>
            <Button
                variant='outlined'
                sx={{
                    border: '0.5px solid #295252',
                    color: '#295252',
                    borderRadius: '0',
                    ':hover': {
                        border: 'none',
                        backgroundColor: '#295252',
                        color: 'white',
                    }
                }}
                onClick={async () => setFilterHidden(false)}>
                <FilterListOutlinedIcon sx={{ fontSize: '100%' }} />
                <Typography sx={{ p: '5px 3px', textTransform: 'capitalize', fontSize: '16px' }}>Filter</Typography>
            </Button>

        </Box >
    );
}

export default FilterButton;
