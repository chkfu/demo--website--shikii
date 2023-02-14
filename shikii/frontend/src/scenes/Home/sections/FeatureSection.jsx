// from package
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// from files
import '../css/featureSection.css';
import OutlinedButton from '../../../components/Button/OutlinedButton';



// components

const Messages = () => {
  return (
    <motion.div
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { type: 'spring', stiffness: '100', delay: 1, duration: 2 } }>
      <Typography
        sx={ {
          p: '40px 0',
          fontSize: '40px',
          color: 'white',
          filter: 'brightness(0.8)',
          textAlign: 'left',
          opacity: '0.8'
        } }>
        New Arrival
      </Typography>
      <Typography
        sx={ {
          fontSize: '28px',
          color: 'white',
          filter: 'brightness(0.8)',
          textAlign: 'left',
          opacity: '0.8',
        } }>
        Decorate your new home with lastest fashion.
      </Typography>
    </motion.div >
  );
};

const Button = () => {
  return (
    <Box className='format--container'>

      {/* Button */ }
      <motion.div
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { type: 'spring', stiffness: '100', delay: 3, duration: 2 } }>
        <Link to='/features' style={ { textDecoration: 'none' } }>
          <OutlinedButton flexDirection='flex-start' text='Learn More' />
        </Link>
      </motion.div>

      {/* Icon */ }

      <motion.div
        animate={ { opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0] } }
        transition={ { type: 'spring', stiffness: '100', delay: 5, duration: 20 } }>

        <Box sx={ { position: 'absolute', top: '76%', ml: '70px', p: '10px' } }>
          <PanToolAltOutlinedIcon sx={ { fontSize: '300%', color: 'white' } } />
          <Typography
            sx={ { width: '80%', position: 'absolute', top: '70%', color: 'white', fontSize: '24px' } }>
            Click
          </Typography>
        </Box>
      </motion.div>

    </Box>
  );
};



// rendering

function FeatureSection() {
  return (
    <section>

      <Box
        className='section--features--textbox'
        sx={ {
          position: 'absolute',
          m: '100px 0 0 10vw',
          p: '80px 0',
          width: '80vw',
          height: 'auto',
          zIndex: '1'
        } }>

        <Messages />
        <Button />

      </Box>
      <Box className='section--features--background' />

      <Divider style={ { width: '100%' } } />

    </section>
  );
}

export default FeatureSection;;;;