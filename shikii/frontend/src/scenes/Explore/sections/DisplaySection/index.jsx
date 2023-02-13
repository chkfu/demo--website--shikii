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
                justifyItems: 'center',
                gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr',
            } }>

                {
                    data.data.data.products.map((product) => {
                        const refinedSearch = search.trim().toLowerCase();

                        if (
                            product.brand.trim().toLowerCase().includes(refinedSearch) ||
                            product.name.trim().toLowerCase().includes(refinedSearch) ||
                            product.series.trim().toLowerCase().includes(refinedSearch)
                        )
                            return (
                                <div key={ product._id }>
                                    <ProductCardModel
                                        id={ product._id }
                                        brand={ product.brand }
                                        name={ product.name }
                                        price={ parseInt(product.price, 10).toFixed(2) }
                                        coverImage={ product.coverImage }
                                        keywords={ product.keywords }
                                        averageRating={ parseInt(product.averageRating, 10) }
                                        numOfRating={ parseInt(product.numOfRating, 10) }
                                        callback={ () => console.log('add to cart') } />
                                </div>);
                    }
                    )
                }
            </Box >
        );
    };

    const NonFilteringDisplay = () => {
        return (
            <Box sx={ {
                justifyItems: 'center',
                display: 'grid',
                gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr',
            } }>
                {
                    data.data.data.products.map((product) => {
                        return (
                            <div key={ product._id }>
                                <ProductCardModel
                                    id={ product._id }
                                    brand={ product.brand }
                                    name={ product.name }
                                    price={ product.price }
                                    coverImage={ product.coverImage }
                                    keywords={ product.keywords }
                                    averageRating={ product.averageRating }
                                    numOfRating={ product.numOfRating }
                                    callbackFn={ () => console.log('add to cart') } />
                            </div>
                        );
                    })
                }
            </Box >
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
