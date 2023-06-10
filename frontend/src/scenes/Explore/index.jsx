import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
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

    // redux
    const currPage = useSelector(state => state.explore.currPage);
    const sorter = useSelector(state => state.explore.sorter);
    const pageLimit = useSelector(state => state.explore.pageLimit);
    const dispatch = useDispatch();

    // fetching
    const { data, isLoading, isError, refetch } = useQuery(['fetch--all-products', currPage, sorter, pageLimit], async () => {
        return await axios.get('http://127.0.0.1:3002/api/v1/products', {
            params: {
                sort: sorter,
                page: currPage,
                limit: pageLimit
            }
        }
        );
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
            <ShrinkedExplore
                data={ data }
                refetch={ refetch } />
        ) : (
            <ExpandedExplore
                data={ data }
                refetch={ refetch } />)
    );
}

export default Explore;
