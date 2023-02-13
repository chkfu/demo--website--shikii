import React from 'react';
import { Box, Pagination } from '@mui/material';


function PaginationSection({ currPage, setCurrPage, pageSize, setPageSize }) {

    return (

        <Box sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' } }>

            <Box>
                <Pagination
                    count={ 3 }
                    page={ Number(currPage) }
                    onChange={ async (event, value) => {
                        setCurrPage(value);
                    } }
                />
            </Box>


        </Box>

    );
}

export default PaginationSection;
