import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../../App';
import ContainedCategoryLabel from '../../../../../components/Button/ContainedCategoryLabel';
import LabelContainer from './components/LabelContainer';
import TitleSection from './components/TitleSection';
import LabelBoxContainer from './components/LabelBoxContainer';
import ButtonSection from './components/ButtonSection';


// rendering
function index({ filterHidden, setFilterHidden }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <LabelContainer filterHidden={ filterHidden }>
            <TitleSection />

            {/* labels */ }
            <LabelBoxContainer>
                <ContainedCategoryLabel category='Kaorisabo' />
                <ContainedCategoryLabel category='Muji' />
                <ContainedCategoryLabel category='Aeon' />
                <ContainedCategoryLabel category='Kitchenware' />
                <ContainedCategoryLabel category='Furniture' />
            </LabelBoxContainer>

            {/* cancel button */ }
            { screenWidth <= 768 && <ButtonSection setFilterHidden={ setFilterHidden } /> }

        </LabelContainer>
    );
}

export default index;
