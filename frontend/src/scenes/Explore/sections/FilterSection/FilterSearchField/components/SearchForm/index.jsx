// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
// from file
import InputFieldReuse from '../../../../../../../components/Formik/InputFieldReuse';
import { searchProductsInitialValues, validationSchema } from './components/FormikInitiatives';
import { setSearch, setCurrPage, setSorter, setPageLimit } from './../../../../../../../../redux/reducers/exploreSlice';


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

function index() {

  // redux
  const dispatch = useDispatch();

  // render
  return (
    <Formik
      initialValues={ searchProductsInitialValues }
      validationSchema={ validationSchema }
      onSubmit={ async (values) => {
        dispatch(setSorter("-createdAt"));
        dispatch(setCurrPage(1));
        dispatch(setPageLimit(12));
        dispatch(setSearch(values.searchItem));
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
