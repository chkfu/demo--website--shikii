// from package
import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import ContainedButton from '../Button/ContainedButton';



// styles

const ContainerStyle = {
  m: '10px 10px',
  boxShadow: 2,
  width: '220px',
  height: '480px',
  backgroundColor: '#f1f3f5',
  transition: 'transform 1.2s',
  overflow: 'hidden',
  ':hover': {
    transform: 'scale(1.03)',
    transition: 'transform 1.2s'
  }
};

const ImageSectionStyle = {
  boxShadow: 1,
  width: '220px',
  height: '220px',
  overflow: 'hidden',
  ':hover': {
    cursor: 'pointer'
  }
};

const InfoSectionStyle = {
  height: '90px',
  p: '20px 20px 10px 20px',
  overflow: 'hidden'
};

const RatingSectionStyle = {
  height: '30px',
  display: 'flex',
  justifyContent: 'left',
  p: '2px 15px'
};

const PriceSectionStyle = {
  height: '40px',
  display: 'flex',
  justifyContent: 'flex-end',
  p: '5px 30px',
  overflow: 'hidden'
};

const ButtonSectionStyle = {
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden'
};

const ImageSectionLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  color: ' black'
};

const ImageSectionImgStyle = {
  width: '224px',
  height: '224px',
  transform: 'translateX(-2px)',
  overflow: 'hidden'
};

const InfoSectionBrandStyle = {
  fontSize: '14px',
  textAlign: 'left',
  fontWeight: 'bold'
};

const InfoSectionNameStyle = {
  fontSize: '14px',
  textAlign: 'left',
  spcing: '0.5'
};

const RatingSectionTextStyle = {
  p: '0 5px',
  fontSize: '14px',
  color: '#adb5bd'
};

const PriceSectionTextStyle = {
  fontSize: '20px',
  textAlign: 'right'
};


// rendering

function ProductCardModel(props) {

  // components

  const ImageSection = () => {
    return (
      <Box sx={ ImageSectionStyle }>
        <Link
          to={ `/explore/${props.id}` }
          style={ ImageSectionLinkStyle }>
          <img
            src={ `/images/products/${props.coverImage}` }
            style={ ImageSectionImgStyle } />
        </Link>
      </Box>
    );
  };

  const InfoSection = () => {
    return (
      <Box sx={ InfoSectionStyle }>
        <Typography sx={ InfoSectionBrandStyle }>
          { props.brand }
        </Typography>
        <Typography sx={ InfoSectionNameStyle }>
          { props.name }
        </Typography>
      </Box>
    );
  };

  const RatingSection = () => {
    return (
      <Box sx={ RatingSectionStyle }>
        <Rating
          value={ parseInt(props.averageRating, 10) }
          size="large"
          readOnly />
        <Typography sx={ RatingSectionTextStyle }>
          ({ parseInt(props.numOfRating, 10) })
        </Typography>
      </Box>
    );
  };

  const PriceSection = () => {
    return (
      <Box sx={ PriceSectionStyle }>
        <Typography sx={ PriceSectionTextStyle }>
          £ { parseInt(props.price, 10).toFixed(2) }
        </Typography>
      </Box>
    );
  };

  const ButtonSection = () => {
    return (
      <Box sx={ ButtonSectionStyle }>
        <ContainedButton
          flexDirection='center'
          size='small'
          text='Add to Cart'
          callbackFn={ props.callback } />
      </Box>
    );
  };


  // render

  return (
    <Box
      key={ props.id }
      sx={ ContainerStyle }>
      <ImageSection />
      <InfoSection />
      <RatingSection />
      <PriceSection />
      <ButtonSection />
    </Box >
  );
}

export default ProductCardModel;