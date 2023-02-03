import React, { useContext } from 'react';
import { Box } from '@mui/material';
import ProductCardModel from '../../../../components/Cards/ProductCardModel';
import { ResponsiveContext } from '../../../../App';
import PaginationSection from '../PaginationSection';

function DisplaySection({ data, search, currPage, pageSize, setCurrPage, setPageSize }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // components

    const FilteringDisplay = ({ search }) => {

        return (
            <Box sx={ {
                display: 'grid',
                gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr',
                alignItems: "center",
                justify: "center",
            } }>

                { data.data.data.products.map((product) => {

                    const refinedSearch = search.trim().toLowerCase();

                    if (
                        product.brand.trim().toLowerCase().includes(refinedSearch) ||
                        product.name.trim().toLowerCase().includes(refinedSearch) ||
                        product.series.trim().toLowerCase().includes(refinedSearch)
                    )
                        return (
                            <div
                                style={ { display: 'flex', justifyContent: 'center' } } key={ product._id }>
                                <ProductCardModel
                                    brand={ product.brand }
                                    name={ product.name }
                                    price={ Number(product.price).toFixed(2) }
                                    coverImage={ product.coverImage }
                                    keywords={ product.keywords }
                                    averageRating={ product.averageRating }
                                    numOfRating={ product.numOfRating }
                                />
                            </div>
                        );
                }
                ) }
            </Box>
        );
    };

    const NonFilteringDisplay = () => {
        return (
            <Box sx={ {
                display: 'grid',
                gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr',
                alignItems: "center",
                justify: "center",
            } }>
                { data.data.data.products.map((product) => {
                    return (
                        <div
                            style={ { display: 'flex', justifyContent: 'center' } } key={ product._id }>
                            <ProductCardModel
                                brand={ product.brand }
                                name={ product.name }
                                price={ Number(product.price).toFixed(2) }
                                coverImage={ product.coverImage }
                                keywords={ product.keywords }
                                averageRating={ product.averageRating }
                                numOfRating={ product.numOfRating }
                            />
                        </div>
                    );
                }) }
            </Box>
        );
    };

    // rendering
    return (
        <>
            { search === "" ? (<NonFilteringDisplay />) : <FilteringDisplay search={ search } /> }
            { search === "" ? (<PaginationSection currPage={ currPage } setCurrPage={ setCurrPage } pageSize={ pageSize } setPageSize={ setPageSize } />) : <></> }

        </>

    );
}

export default DisplaySection;
