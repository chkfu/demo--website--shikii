import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../App';


function FilterSelectField({ sorter, setSorter }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <Box sx={ {
            width: screenWidth <= 1024 ? '25%' : '100%',
            height: screenWidth <= 1024 ? '50px' : '120px',
            textAlign: screenWidth <= 1024 ? 'center' : 'left',
            p: screenWidth <= 1024 ? '0' : '0 15px',
        } }>
            { screenWidth <= 1024 ? null : (
                <Box sx={ { textAlign: 'left' } }>
                    <label style={ { fontSize: '16px' } }>Sorted by:</label>
                </Box>
            ) }
            <select
                value={ sorter }
                onChange={ (e) => { setSorter(e.target.value); } }
                style={ { height: '46px', fontSize: '16px', width: screenWidth <= 1024 ? '100%' : '180px' } }>
                <option value='default'>Please Select</option>
                <option value='createdAt'>Latest</option>
                <option value='-createdAt'>Oldest</option>
                <option value='-price'>Price (Highest)</option>
                <option value='price'>Price (Lowest)</option>
                <option value='-averageRating'>Rating (Highest)</option>
                <option value='averageRating'>Rating (Lowest)</option>
            </select>
        </Box >
    );
}

export default FilterSelectField;
