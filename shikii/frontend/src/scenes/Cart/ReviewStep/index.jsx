import React from 'react';
import { Box } from '@mui/material';
import CartProductCardModel from '../../../components/Cards/CartProductCardModel';

// components
const ButtonColumn = ({ setCurrStep }) => {
    <Box sx={{ border: '1px solid red', width: '500px', height: '40px' }}></Box>;
};


// rendering

function ReviewStep({ setCurrStep }) {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center',
            width: '100%', height: '450px', m: '20px 0'
        }}>
            <Box sx={{ width: '100%', maxWidth: '500px', overflow: 'scroll', boxShadow: '2' }}>
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
                <CartProductCardModel />
            </Box>
        </Box>
    );
}

export default ReviewStep;
