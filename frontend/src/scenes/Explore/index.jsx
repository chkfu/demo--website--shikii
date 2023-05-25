import React, { useState, useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import './css/explore.css';
import { ResponsiveContext } from '../../App';
import ShrinkedExplore from './sections/ResponsiveDesign/ShrinkedExplore';
import ExpandedExplore from './sections/ResponsiveDesign/ExpandedExplore';
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
        return await axios.get('http://127.0.0.1:3002/api/v1/products', {
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


    // render

    return (
        screenWidth <= 1024 ? (
            <ShrinkedExplore data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />) : (
            <ExpandedExplore data={ data } sorter={ sorter } setSorter={ setSorter } search={ search } setSearch={ setSearch } currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />)
    );
}

export default Explore;
