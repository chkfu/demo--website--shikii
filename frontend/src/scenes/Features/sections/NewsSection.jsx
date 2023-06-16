import React from 'react';
import { Box, Typography, CircularProgress, Divider } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import SmallArticleCardModel from '../../../components/Cards/SmallArticleCardModel';


// styles

const TitleStyle = {
    mt: '40px',
    p: '20px',
    fontSize: '30px',
    textAlign: 'center',
};

const ProductContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px',
};

const DividerStyle = {
    mt: '20px'
};


// rendering

function NewsSection() {
    // database fetching
    const { data, error, isLoading, isFetching, isError } = useQuery('FetchArticles', () => {
        return axios.get('http://localhost:3002/api/v1/articles');
    });
    if (isLoading, isFetching) {
        return <CircularProgress color="inherit" />;
    }
    if (isError) {
        console.log(error);
    }

    // rendering
    return (

        <>
            <Typography sx={ TitleStyle }>
                Ideas for your Life
            </Typography>

            <Box sx={ ProductContainerStyle }>
                {
                    data.data.data.articles.map((article, index) => {
                        return index < 2 ? (
                            <div key={ article._id }>
                                <SmallArticleCardModel
                                    title={ article.title }
                                    coverImage={ article.coverImage }
                                    numOfRead={ article.numOfRead } />
                            </div>
                        ) : null;
                    })
                }
            </Box>

            <Divider sx={ DividerStyle } />
        </>
    );
}

export default NewsSection;
