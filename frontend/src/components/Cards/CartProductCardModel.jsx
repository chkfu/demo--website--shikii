// from package
import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';


// styles

const CardContainerStyle = {
    boxShadow: '3',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 0.5fr',
    m: '5px 0',
    p: '5px',
    height: '100px',
    transition: 'transform 1s',
    ':hover': {
        transform: 'scale(1.05)', transition: 'transform 1s', cursor: 'pointer'
    }
};

const LinkRemovedStyle = {
    textDecoration: 'none',
    color: '#49453F'
};

const TitleSectionGridStyle = {
    p: '12px 10px'
};

const TitleSectionBrandStyle = {
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 'bold'
};

const TitleSectionNameStyle = {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '14px'
};

const PriceSectionGridStyle = {
    p: '20px 10px'
};

const PriceSectionTextStyle = {
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '14px',
    textAlign: 'center',
    color: '#49453F'
};

const PriceSectionFormLabelStyle = {
    fontSize: '12px',
    color: '#49453F'
};


const IconSectionGridStyle = {
    p: '30px 10px'
};

const DeleteIconStyle = {
    fontSize: '20px',
    ':hover': {
        color: 'red'
    },
    ':active':
    {
        transform: 'scale(0.95)'
    }
};




// components

const CardContainer = ({ children }) => {
    return (
        <Box sx={ CardContainerStyle } >
            { children }
        </Box>
    );
};

const ImageSection = ({ image }) => {

    // styles
    const ImageSectionStyle = {
        boxShadow: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url('/images/products/${image}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'center',
        ':hover': {
            cursor: 'pointer'
        }
    };

    return (
        <Link to='/explore' style={ LinkRemovedStyle }>
            <Grid sx={ ImageSectionStyle }>

            </Grid>
        </Link>
    );
};

const TitleSection = ({ id, brand, name }) => {
    return (
        <Link to='/explore' style={ LinkRemovedStyle }>
            <Grid sx={ TitleSectionGridStyle }>
                <Typography sx={ TitleSectionBrandStyle }>
                    { brand }
                </Typography>
                <Typography sx={ TitleSectionNameStyle }>
                    { name }
                </Typography>
            </Grid>
        </Link>
    );
};

const PriceSection = ({ price, quantity }) => {
    return (
        <Grid sx={ PriceSectionGridStyle }>
            <Typography sx={ PriceSectionTextStyle }>
                £ { price }
            </Typography>
            <form>
                <label
                    htmlFor='quantity'
                    style={ PriceSectionFormLabelStyle }>
                    Qty: { quantity }
                </label>
            </form>
        </Grid>
    );
};

const IconSection = ({ id, refetch }) => {

    // data-fetching
    const fetchingWishlist = async () => {
        await axios.patch('http://127.0.0.1:3002/api/v1/users/wishlist/removeItem',
            {
                input: id
            },
            {
                withCredentials: true,
                credentials: "include"
            }).then(() => refetch());
    };


    return (
        <Grid sx={ IconSectionGridStyle }>
            <IconButton onClick={ fetchingWishlist }>
                <DeleteOutlineOutlinedIcon
                    sx={ DeleteIconStyle }
                />
            </IconButton>
        </Grid>
    );
};


// rendering

function SmallCartProductCardModel({ id, brand, name, price, image, quantity, refetch }) {

    // render
    return (
        <CardContainer key={ id }>
            <ImageSection
                id={ id } image={ image } />
            <TitleSection
                id={ id } brand={ brand } name={ name } />
            <PriceSection
                price={ price } quantity={ quantity } />
            <IconSection
                id={ id } refetch={ refetch } />
        </CardContainer >
    );
}

export default SmallCartProductCardModel;
