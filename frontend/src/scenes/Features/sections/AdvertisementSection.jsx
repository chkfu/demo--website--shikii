// package
import React from 'react';
import { Box, Typography, Divider } from "@mui/material";


// styles

const SectionContainerStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
};

const MainTitleStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: '32px',
    textTransform: 'uppercase',
    zIndex: '2',
    p: '50px'
};

const SubTitleStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: '24px',
    textAlign: 'left',
    zIndex: '2',
    p: '100px 50px'
};

const AdvertContainerStyle = {
    width: '100%',
    height: '100%',
    zIndex: '1'
};

const DividerStyle = {
    mt: '20px'
};

// rendering

function AdvertisementSection() {
    return (
        <>
            <Box sx={ SectionContainerStyle }>

                <Typography sx={ MainTitleStyle }>
                    Wabisabi
                </Typography>

                <Typography sx={ SubTitleStyle }>
                    Imperfect design, the style of Perfection.
                </Typography>

                <Box className='features--advertisement--container'
                    sx={ AdvertContainerStyle } />

            </Box>
            <Divider sx={ DividerStyle } />
        </>
    );
}

export default AdvertisementSection;
