// from package;
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
// from file
import SubSectionContainer from '../reusable/SubSectionContainer';

// components

const DataRow = ({ title, info }) => {
  return (
    <Box sx={ { display: 'grid', gridTemplateColumns: '1fr 3fr', textTransform: 'capitalize', p: '0 40px' } }>
      <Grid sx={ { p: '5px 0' } }>
        <Typography sx={ { width: '100px', color: '#666666', fontSize: '18px', textTransform: 'capitalize', textAlign: 'left', p: '0 10px' } }>
          { title }:
        </Typography>
      </Grid>

      <Grid sx={ { p: '5px 0' } }>
        <Typography sx={ { ml: '20px', color: '#666666', fontSize: '18px', textAlign: 'left' } }>
          { info }
        </Typography>
      </Grid>

    </Box>
  );
};


// rendering

function InfoBox({ data }) {
  return (
    <SubSectionContainer title='Information'>
      <Box sx={ { p: '10px 0px' } }>

        <DataRow title='brand' info={ data.data.data.product.brand } />
        <DataRow title='name' info={ data.data.data.product.name } />
        <DataRow title='series' info={ data.data.data.product.series } />

        <Box sx={ { p: '10px 50px', mt: '20px' } }>
          <Typography sx={ { color: '#666666', fontSize: '18px', textTransform: 'capitalize', textAlign: 'left' } }>
            Description:
          </Typography>

          <Typography sx={ { mt: '10px', color: '#666666', fontSize: '18px', textAlign: 'justify' } } >
            { data.data.data.product.description }
          </Typography>
        </Box>

      </Box>
    </SubSectionContainer >
  );
}

export default InfoBox;
