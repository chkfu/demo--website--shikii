// from package
import React from 'react';
// from file
import PaginationSection from '../PaginationSection';
import FilteringDisplay from './components/FilteringDisplay';
import NonFilteringDisplay from './components/NonFilteringDisplay';

// rendering
function DisplaySection({ data, search, currPage, pageSize, setCurrPage, setPageSize }) {
    return (
        <>
            { search === "" ?
                <NonFilteringDisplay
                    data={ data } />
                : <FilteringDisplay
                    data={ data }
                    search={ search } />
            }

            { search === "" &&
                <PaginationSection
                    currPage={ currPage }
                    setCurrPage={ setCurrPage }
                    pageSize={ pageSize }
                    setPageSize={ setPageSize } /> }
        </>
    );
}

export default DisplaySection;
