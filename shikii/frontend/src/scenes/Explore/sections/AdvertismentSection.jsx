import React from 'react';
import { Box, Typography, Divider } from "@mui/material";


// rendering

function AdvertisementSection() {
    return (
        <>
            <Box
                className='explore--advertisement--container'
                sx={ {
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden'
                } }>

                <Typography
                    sx={ {
                        position: 'absolute',
                        color: 'white',
                        fontSize: '32px',
                        textTransform: 'capitalize',
                        zIndex: '2',
                        p: '50px'
                    } }>Shopping Online</Typography>

                <Typography sx={ {
                    position: 'absolute',
                    color: 'white',
                    fontSize: '24px',
                    textAlign: 'left',
                    zIndex: '2',
                    p: '100px 50px'
                } }>Sign up for 10% off your first order</Typography>

                <Box className='explore--advertisement--container'
                    sx={ { width: '100%', height: '100%', zIndex: '1' } } />

            </Box>
            <Divider sx={ { mt: '20px' } } />
        </>
    );
}

export default AdvertisementSection;
