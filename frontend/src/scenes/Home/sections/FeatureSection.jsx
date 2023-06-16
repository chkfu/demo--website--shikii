// from package
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// from files
import '../css/featureSection.css';
import OutlinedButton from '../../../components/Button/OutlinedButton';



// styles

const MsgText01_Style = {
  p: '40px 0',
  fontSize: '40px',
  color: 'white',
  filter: 'brightness(0.8)',
  textAlign: 'left',
  opacity: '0.8'
};

const MsgText02_Style = {
  fontSize: '28px',
  color: 'white',
  filter: 'brightness(0.8)',
  textAlign: 'left',
  opacity: '0.8',
};

const LinkStyle = {
  textDecoration: 'none'
};

const IconBoxStyle = {
  position: 'absolute',
  top: '76%',
  ml: '70px',
  p: '10px'
};

const IconStyle = {
  fontSize: '300%',
  color: 'white'
};

const IntevaltextStyle = {
  width: '80%',
  position: 'absolute',
  top: '70%',
  color: 'white',
  fontSize: '24px'
};

const FeatureSectionStyle = {
  position: 'absolute',
  m: '100px 0 0 10vw',
  p: '80px 0',
  width: '80vw',
  height: 'auto',
  zIndex: '1'
};

const DividerStyle = {
  width: '100%'
};


// components

const Messages = () => {
  return (
    <motion.div
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { type: 'spring', stiffness: '100', delay: 1, duration: 2 } }>

      <Typography sx={ MsgText01_Style }>
        New Arrival
      </Typography>

      <Typography sx={ MsgText02_Style }>
        Decorate your new home with lastest fashion.
      </Typography>

    </motion.div >
  );
};

const Button = () => {
  return (
    <Box>

      {/* Button */ }
      <motion.div
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { type: 'spring', stiffness: '100', delay: 3, duration: 2 } }>

        <Link to='/features' style={ LinkStyle }>
          <OutlinedButton flexDirection='flex-start' text='Learn More' />
        </Link>
      </motion.div>

      {/* Icon */ }
      <motion.div
        animate={ { opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0] } }
        transition={ { type: 'spring', stiffness: '100', delay: 5, duration: 20 } }>

        <Box sx={ IconBoxStyle }>
          <PanToolAltOutlinedIcon sx={ IconStyle } />
          <Typography sx={ IntevaltextStyle }>
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

      <Box sx={ FeatureSectionStyle }>
        <Messages />
        <Button />
      </Box>
      <Box className='section--features--background' />

      <Divider style={ DividerStyle } />
    </section>
  );
}

export default FeatureSection;;;;