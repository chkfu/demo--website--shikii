// from package
import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import ContainedButton from '../Button/ContainedButton';

function ProductCardModel(props) {
  const stringify = JSON.stringify(props);
  const parse = JSON.parse(stringify);
  return (

    <Box
      key={ props.key }
      className='product--card--container'
      sx={ {
        m: '10px 10px',
        boxShadow: 2,
        width: '220px',
        height: '480px',
        backgroundColor: '#f1f3f5',
        transition: 'transform 1.2s',
        ':hover': {
          transform: 'scale(1.05)',
          transition: 'transform 1.2s'
        }
      } }>

      {/* image container */ }
      <Box
        className='product--image--container'
        sx={ {
          boxShadow: 1,
          width: '220px',
          height: '220px',
          overflow: 'hidden',
          ':hover': {
            cursor: 'pointer'
          }
        } }>
        <Link to={ `/explore/${props.id}` }
          style={ { display: 'flex', justifyContent: 'center', textDecoration: 'none', color: ' black' } }>
          <img
            src={ `/images/products/${props.coverImage}` }
            style={ { width: '224px', height: '224px', transform: 'translateX(-2px)', overflow: 'hidden' } } />
        </Link>
      </Box>

      {/* info container */ }
      <Box
        className='product--info--container'
        sx={ { height: '100px', p: '20px 20px 10px 20px', overflow: 'hidden' } }
      >
        <Typography
          className='product--brand'
          sx={ { fontSize: '14px', textAlign: 'left', fontWeight: 'bold' } }>
          { props.brand }
        </Typography>
        <Typography
          className='product--name' sx={ { fontSize: '14px', textAlign: 'left', spcing: '0.5' } }>
          { props.name }
        </Typography>
      </Box>

      <Box sx={ { height: '25px', display: 'flex', justifyContent: 'left', p: '2px 15px' } }>
        <Rating
          value={ props.averageRating }
          sx={ { textAlign: 'left' } }
          size="large"
          readOnly />
        <Typography sx={ { p: '0 5px', fontSize: '14px', color: '#adb5bd' } }>
          ({ props.numOfRating })
        </Typography>
      </Box>

      <Box sx={ { height: '40px', display: 'flex', justifyContent: 'flex-end', p: '5px 30px' } }>
        <Typography
          className='product--price' sx={ { fontSize: '20px', textAlign: 'right' } }>
          £ { props.price }
        </Typography>
      </Box>

      <Box
        className='product--button'
        sx={ { height: '80px', display: 'flex', justifyContent: 'center' } }>
        <ContainedButton flexDirection='center' size='small' text='Add to Cart' callbackFn={ props.callbackFn } />
      </Box>

    </Box >
  );
}

export default ProductCardModel;