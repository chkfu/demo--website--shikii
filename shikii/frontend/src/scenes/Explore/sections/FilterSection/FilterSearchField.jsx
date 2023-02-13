import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// from file
import SearchIcon from '@mui/icons-material/Search';
import { ResponsiveContext } from '../../../../App';
import InputFieldReuse from '../../../../components/Formik/InputFieldReuse';


// formik and yup settings

const searchProductsInitialValues = {
    searchItem: ""
};

const validationSchema = Yup.object().shape({
    searchItem: Yup.string()
});


// components 

const SearchLabel = ({ screenWidth }) => {
    return (
        screenWidth <= 1024 ?
            (<></>) :
            (
                <Box sx={ { p: '0 5px', textAlign: 'left' } }>
                    <label style={ { fontSize: '16px' } }>
                        Filtered by:
                    </label>
                </Box>)
    );
};

const SearchForm = ({ setSorter, setCurrPage, setPageSize, setSearch }) => {
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
                    <Box className='format--container'
                        sx={ {
                            display: 'flex',
                            justifyContent: 'flex-start'
                        } }>

                        <InputFieldReuse id='search--item' name='searchItem' type='text' placeholder='Search...' />

                        <IconButton
                            type='submit'
                            sx={ {
                                backgroundColor: '#dee2e6', m: '5px 0',
                                ':hover': { backgroundColor: '#dee2e6', filter: 'brightness(0.9)' },
                                ':active': { transform: 'scale(0.95)' }
                            } }>
                            <SearchIcon />
                        </IconButton>

                    </Box>
                </Form>
            ) }
        </Formik >
    );
};


// rendering

function FilterSearchField({ setSorter, setCurrPage, setPageSize, setSearch }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <Box
            className='search--field--container'
            sx={ {
                p: screenWidth <= 1024 ? '0 5px' : '20px 10px',
                display: screenWidth <= 1024 ? 'flex' : null,
                justifyContext: screenWidth <= 1024 ? 'center' : 'flex-start',
                alignItems: 'center',
                width: screenWidth <= 1024 ? '50%' : '100%',
                height: screenWidth <= 1024 ? '70px' : '120px'
            } }>

            <SearchLabel screenWidth={ screenWidth } />
            <SearchForm setSearch={ setSearch } setSorter={ setSorter } setCurrPage={ setCurrPage } setPageSize={ setPageSize } />

        </Box>
    );
}

export default FilterSearchField;
