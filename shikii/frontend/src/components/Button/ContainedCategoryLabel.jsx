import React from 'react';
import { Button } from '@mui/material';

function ContainedCategoryLabel({ category }) {
    return (
        <Button
            sx={{
                m: '5px',
                height: '30px',
                textTransform: 'capitalize',
                fontSize: '14px',
                borderRadius: '20px',
                backgroundColor: '#49453F',
                ':hover': {
                    backgroundColor: '#49453F',
                    filter: ' brightness(0.9)'
                },
                ':active': {
                    transform: 'scale(0.95)'
                }
            }}
            variant='contained'>
            {category}
        </Button>
    );
}

export default ContainedCategoryLabel;
