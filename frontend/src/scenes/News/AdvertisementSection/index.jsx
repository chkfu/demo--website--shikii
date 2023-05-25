import React from 'react';
import { Box, Typography, Divider } from "@mui/material";


// rendering

function AdvertisementSection() {
  return (
    <>
      <Box
        className='features--advertisement--container'
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
            textTransform: 'uppercase',
            zIndex: '2',
            p: '50px'
          } }>**** Title ****</Typography>

        <Typography sx={ {
          position: 'absolute',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
          zIndex: '2',
          p: '100px 50px'
        } }>********** SubTitle Text ***********</Typography>

        <Box className='features--advertisement--container'
          sx={ { width: '100%', height: '100%', zIndex: '1' } } />

      </Box>

    </>
  );
}

export default AdvertisementSection;
