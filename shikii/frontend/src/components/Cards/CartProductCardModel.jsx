import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

function SmallCartProductCardModel() {
    return (
        <Box
            className='small--cart--product--card--container'
            sx={ {
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
            }
            } >

            <Link to='/explore' style={ { textDecoration: 'none' } }>
                <Grid sx={ { boxShadow: '1', width: '97%', height: '97%' } }>

                </Grid>
            </Link>

            <Link to='/explore' style={ { textDecoration: 'none', color: '#49453F' } }>
                <Grid sx={ { p: '12px 10px' } }>
                    <Typography sx={ { textAlign: 'left', fontSize: '14px', fontWeight: 'bold' } }>Brand A</Typography>
                    <Typography sx={ { textAlign: 'left', fontSize: '14px', lineHeight: '14px' } }>Product Name Name Name Name Name Name Name</Typography>
                </Grid>
            </Link>


            <Grid sx={ { p: '20px 10px' } }>
                <Typography
                    sx={ {
                        textAlign: 'left', fontSize: '14px', fontWeight: 'bold', fontSize: '16px',
                        lineHeight: '14px', textAlign: 'center', color: '#49453F'
                    } }>
                    £ 0.00
                </Typography>
                <form>
                    <label htmlFor='quantity' style={ { fontSize: '12px', color: '#49453F' } }>Qty: </label>
                    <input
                        name='quantity' style={ { fontSize: '12px', width: '40px', color: '#49453F' } }
                        type='number' />
                </form>
            </Grid>

            <Grid sx={ { p: '30px 10px' } }>
                <IconButton>
                    <DeleteOutlineOutlinedIcon sx={ { fontSize: '20px', ':hover': { color: 'red' }, ':active': { transform: 'scale(0.95)' } } } />
                </IconButton>
            </Grid>

        </Box>
    );
}

export default SmallCartProductCardModel;
