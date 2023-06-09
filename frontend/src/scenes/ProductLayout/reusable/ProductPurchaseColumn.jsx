// from package
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';


function ProductPurchaseColumn({ data }) {

  const [numOfPurchase, setNumOfPurchase] = useState(1);

  const initialValues = {
    input: "",
    quantity: ""
  };

  return (
    <Box sx={ { p: '20px 40px' } }>

      <Box sx={ { display: 'flex', alignItems: 'center' } }>
        <Typography sx={ { fontSize: '20px' } }>Price:</Typography>
        <Typography sx={ { ml: '20px', fontSize: '24px' } }>£{ data.data.data.product.price }</Typography>
      </Box>

      <Formik
        initialValues={ initialValues }
        onSubmit={ async () => {
          await axios.patch("http://127.0.0.1:3002/api/v1/users/wishlist",
            {
              input: data.data.data.product._id,
              quantity: numOfPurchase
            },
            { withCredentials: true, credentials: 'include' });
        } }>
        { ({ formik, values }) => (
          <Form>
            <Box sx={ { display: 'flex', p: '10px 0' } }>

              <Field
                name='input'
                type='number'
                min='1'
                max='100'
                value={ numOfPurchase }
                onChange={ (event) => setNumOfPurchase(event.target.value) }
                style={ { width: '100px', height: '50px' } } />

              <Button
                type='submit'
                variant='contained'
                sx={ {
                  ml: '20px', borderRadius: '0', backgroundColor: '#295252',
                  color: 'white',
                  ':hover': { backgroundColor: '#1F3D3D' }
                } }
              >
                Add to cart
              </Button>

            </Box>
          </Form>
        ) }
      </Formik>

    </Box >
  );
}

export default ProductPurchaseColumn;
