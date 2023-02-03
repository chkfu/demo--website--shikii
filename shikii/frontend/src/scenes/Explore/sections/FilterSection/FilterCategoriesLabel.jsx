import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../App';
import ContainedCategoryLabel from './../../../../components/Button/ContainedCategoryLabel';

function FilterCategoriesLabel({ filterHidden, setFilterHidden }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <Box
            className='categories--label--container'
            sx={{
                display: filterHidden ? 'none' : 'static',
                boxShadow: screenWidth <= 768 ? '1' : '0',
                mr: '5px',
                p: screenWidth < 768 ? '10px' : '5px'
            }}>

            {/* title */}
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ p: '0 5px', fontSize: '16px', textAlign: 'left' }}>Series:</Typography>
            </Box>

            {/* labels */}
            <Box sx={{
                p: '10px 0',
                display: 'flex',
                justifyContext: 'left',
                flexWrap: 'wrap'
            }}>
                <ContainedCategoryLabel category='Kaorisabo' />
                <ContainedCategoryLabel category='Muji' />
                <ContainedCategoryLabel category='Aeon' />
                <ContainedCategoryLabel category='Kitchenware' />
                <ContainedCategoryLabel category='Furniture' />
            </Box>

            {/* cancel button */}
            {screenWidth <= 768 &&
                (<Box sx={{ m: '5px' }}>
                    <Button
                        variant='outlined'
                        sx={{
                            textTransform: 'capitalize',
                            border: '1px solid #c92a2a',
                            color: '#c92a2a',
                            ':hover': {
                                border: '1px solid #c92a2a',
                                backgroundColor: '#c92a2a',
                                color: 'white'
                            },
                            ':active': {
                                transform: 'scale(0.95)'
                            }
                        }}
                        onClick={async () => setFilterHidden(true)}>
                        Cancel
                    </Button>
                </Box>)}

        </Box>
    );
}

export default FilterCategoriesLabel;
