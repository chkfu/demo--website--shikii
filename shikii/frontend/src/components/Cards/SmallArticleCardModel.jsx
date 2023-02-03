// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// from file

function ArticleCardModel(props) {
    return (
        <Box
            className='article--card--container'
            sx={{
                height: '390px',
                m: '5px 15px',
                boxShadow: 2,
                backgroundColor: '#f1f3f5',
                transition: 'transform 1.2s',
                ':hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.05)',
                    transition: 'transform 1.2s'

                }
            }}>

            {/* Photo Section */}
            <Box
                className='article--card--photo'
                sx={{
                    width: '440px',
                    height: '230px',
                    boxShadow: 1
                }}>
                <img
                    src={`/images/news/${props.coverImage}`}
                    style={{ width: '100%', height: '100%' }} />
            </Box>

            {/* Text Box Section */}
            <Box
                className='article--card--text--box'
                sx={{
                    width: '430px',
                    height: '120px',
                    m: '5px',
                    p: '15px 20px',
                }}>

                <Typography
                    sx={{
                        fontSize: '16px',
                        textAlign: 'left',
                        color: '#868e96'
                    }}>
                    Article
                </Typography>

                <Typography
                    sx={{
                        fontSize: '20px',
                        textAlign: 'left',

                    }}>
                    {props.title}
                </Typography>

                <Box
                    sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p: '10px' }}>
                    <RemoveRedEyeOutlinedIcon sx={{ color: '#5f3dc4', p: '0 2px' }} />
                    <Typography
                        sx={{
                            fontSize: '16px',
                            textAlign: 'left',
                            color: '#868e96'
                        }}>
                        ({props.numOfRead})
                    </Typography>
                </Box>

            </Box>

        </Box >
    );
}

export default ArticleCardModel;
