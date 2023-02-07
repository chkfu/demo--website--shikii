import React, { useState, useContext } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import './css/explore.css';
import { ResponsiveContext } from '../../App';
import { fetchAllProducts } from '../../theme/APILinks';
import SceneContainer from './../../components/Container/SceneContainer';
import AdvertisementSection from './sections/AdvertismentSection';
import FilterSection from './sections/FilterSection';
import DisplaySection from './sections/DisplaySection';
import ErrorPage from '../ErrorPage';


function Explore() {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // state managements
    const [search, setSearch] = useState('');
    const [sorter, setSorter] = useState('-createdat');
    const [currPage, setCurrPage] = useState('1');
    const [pageSize, setPageSize] = useState('12');

    // fetching

    const { data, isLoading, isError } = useQuery(['fetch--all-products', currPage, sorter, pageSize], async () => {
        return await axios.get(fetchAllProducts, {
            params: {
                sort: sorter,
                page: currPage,
                limit: pageSize
            }
        });
    });
    if (isLoading) {
        return <CircularProgress color="inherit" />;
    }
    if (isError) {
        return <ErrorPage />;
    }


    // components
    const ShrinkedExplore = ({ data, sorter, setSorter, search, setSearch, currPage, setCurrPage, pageSize, setPageSize }) => {
        return (
            <SceneContainer>
                <AdvertisementSection />
                <Box sx={ { backgroundColor: '#fff4e6' } }>
                    <FilterSection sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } urrPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />
                </Box>
                <Box
                    sx={ { mt: '10px', minHeight: '600px', backgroundColor: '#f8f9fa' } }>
                    <DisplaySection data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />
                </Box>
            </SceneContainer >
        );
    };

    const ExpandedExplore = ({ data, sorter, setSorter, search, setSearch, page, setCurrPage, pageSize, setPageSize }) => {
        return (
            <SceneContainer>
                <AdvertisementSection />
                <Box
                    className='outer--format--container'
                    sx={ { display: 'flex', justifyContent: 'center', minHeight: '700px' } }>

                    <Box className='inner--format--left' sx={ { width: '250px', backgroundColor: '#fff4e6' } }>
                        <FilterSection sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } page={ page } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />
                    </Box>

                    <Box className='inner--format--right'
                        sx={ { width: '80%', backgroundColor: '#f8f9fa' } }>
                        <DisplaySection data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />
                    </Box>
                </Box >
            </SceneContainer >
        );
    };

    return (
        screenWidth <= 768 ? (
            <ShrinkedExplore data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />) : (
            <ExpandedExplore data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />)
    );
}

export default Explore;
