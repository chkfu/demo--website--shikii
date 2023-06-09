// from package
import React from 'react';
import { useSelector } from 'react-redux';
// from file
import PaginationSection from '../PaginationSection';
import FilteringDisplay from './components/FilteringDisplay';
import NonFilteringDisplay from './components/NonFilteringDisplay';

// rendering
function DisplaySection({ data, refetch }) {

    // redux
    const search = useSelector(state => state.explore.search);

    // render
    return (
        <>
            { search === "" ?
                <NonFilteringDisplay
                    data={ data }
                    refetch={ refetch } />
                : <FilteringDisplay
                    data={ data }
                    refetch={ refetch } />
            }

            { search === "" &&
                <PaginationSection /> }
        </>
    );
}

export default DisplaySection;
