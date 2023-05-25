// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


// styles

const ContainerStyle = {
    height: '390px',
    m: '5px 15px',
    boxShadow: 2,
    overflow: 'hidden',
    backgroundColor: '#f1f3f5',
    transition: 'transform 1.2s',
    ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.02)',
        transition: 'transform 1.2s'
    }
};

const PhotoSectionStyle = {
    width: '440px',
    height: '230px',
    overflow: 'hidden',
    boxShadow: 1
};

const TextboxStyle = {
    width: '430px',
    height: '110px',
    m: '0px 5px 0px 5px',
    p: '15px 20px 0px 20px',
    overflow: 'hidden'
};

const ContainerLinkStyle = {
    textDecoration: 'none',
    color: '#111111'
};

const PhotoSectionimgStyle = {
    width: '100%',
    height: '100%'
};

const TextboxSectionCategoryStyle = {
    fontSize: '16px',
    textAlign: 'left',
    color: '#868e96'
};

const TextboxSectionTitleStyle = {
    fontSize: '18px',
    textAlign: 'left',
};



// rendering

function ArticleCardModel(props) {

    // components
    const CardContainer = ({ children }) => {
        return (
            <Link
                to='/testingAnnouncement'
                style={ ContainerLinkStyle }>
                <Box sx={ ContainerStyle }>
                    { children }
                </Box >
            </Link>
        );
    };

    const PhotoSection = () => {
        return (
            <Box sx={ PhotoSectionStyle }>
                <img
                    src={ `/images/news/${props.coverImage}` }
                    style={ PhotoSectionimgStyle } />
            </Box >
        );
    };

    const TextboxSection = () => {
        return (
            <Box sx={ TextboxStyle }>
                <Typography sx={ TextboxSectionCategoryStyle }>
                    Article
                </Typography>
                <Typography sx={ TextboxSectionTitleStyle }>
                    { props.title }
                </Typography>
            </Box >
        );
    };


    // render
    return (
        <CardContainer>
            <PhotoSection />
            <TextboxSection />
            <Typography sx={ { color: 'red', fontSize: '12px', textAlign: 'left', p: '0 20px' } }>
                ***  Attention: News is not available.
                <br />
                ***  Redirect to the declaimer page by clicking.
            </Typography>
        </CardContainer >
    );
}

export default ArticleCardModel;
