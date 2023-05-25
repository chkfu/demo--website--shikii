// from package
import React from 'react';
import { Box, Divider } from "@mui/material";
// from file
import AdvertisementContainer from './components/AdvertisementContainer';
import AdvertisementTitle from './components/AdvertisementTitle';
import AdvertisementSubtitle from './components/AdvertisementSubtitle';


// rendering
function index() {
    return (
        <>
            <AdvertisementContainer>
                <AdvertisementTitle text='Shopping Online' />
                <AdvertisementSubtitle text='Sign up for 10% off your first order' />
                <Box sx={ { width: '100%', height: '100%', zIndex: '1' } } />
            </AdvertisementContainer>

            <Divider sx={ { mt: '20px' } } />
        </>
    );
}

export default index;
