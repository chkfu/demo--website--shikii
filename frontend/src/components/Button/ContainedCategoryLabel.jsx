// from package
import React from 'react';
import { Button } from '@mui/material';


// styles

const ButtonStyle = {
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
};


function ContainedCategoryLabel({ category }) {

    // render
    return (
        <Button
            sx={ ButtonStyle }
            variant='contained'>
            { category }
        </Button >
    );
}

export default ContainedCategoryLabel;
