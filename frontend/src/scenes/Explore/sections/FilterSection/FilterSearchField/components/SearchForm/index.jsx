// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Formik, Form } from 'formik';
// from file
import InputFieldReuse from '../../../../../../../components/Formik/InputFieldReuse';
import { searchProductsInitialValues, validationSchema } from './components/FormikInitiatives';


// styles
const FormatContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start'
};

const IconButtonStyle = {
  backgroundColor: '#dee2e6',
  m: '5px 0',
  ':hover': {
    backgroundColor: '#dee2e6',
    filter: 'brightness(0.9)'
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};


// rendering

function index({ setSorter, setCurrPage, setPageSize, setSearch }) {
  return (
    <Formik
      initialValues={ searchProductsInitialValues }
      validationSchema={ validationSchema }
      onSubmit={ async (values) => {
        setSorter("-createdAt");
        setCurrPage("1");
        setPageSize("99999");
        setSearch(values.searchItem);
      } }>

      { ({ formik, values }) => (
        <Form>
          <Box sx={ FormatContainerStyle }>

            <InputFieldReuse
              id='search--item'
              name='searchItem'
              type='text'
              placeholder='Search...' />

            <IconButton
              type='submit'
              sx={ IconButtonStyle }>
              <SearchIcon />
            </IconButton>

          </Box>
        </Form>
      ) }

    </Formik >
  );
}

export default index;
