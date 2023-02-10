// from package
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';


function ProductPurchaseColumn({ data }) {

  const [numOfPurchase, setNumOfPurchase] = useState('1');

  return (
    <Box sx={ { p: '20px 40px' } }>

      <Box sx={ { display: 'flex', alignItems: 'center' } }>
        <Typography sx={ { fontSize: '20px' } }>Price:</Typography>
        <Typography sx={ { ml: '20px', fontSize: '24px' } }>£{ data.data.data.product.price }</Typography>
      </Box>

      {/* ********** TO BE SOLVED *********** */ }
      {/* ********** 1. how to fetching different routes at the same time *********** */ }
      {/* ********** 2. how to push new item to user wishlist *********** */ }

      <Formik>
        { ({ formik, values }) => (
          <Form>
            <Box sx={ { display: 'flex', p: '10px 0' } }>

              <Field type='number' min='1' max='20' value={ numOfPurchase }
                style={ { width: '100px', height: '50px' } } />

              <Button type='submit' variant='contained'
                sx={ {
                  ml: '20px', borderRadius: '0', backgroundColor: '#295252',
                  color: 'white',
                  ':hover': { backgroundColor: '#1F3D3D' }
                } }>Add to cart</Button>

            </Box>
          </Form>
        ) }
      </Formik>

    </Box >
  );
}

export default ProductPurchaseColumn;
