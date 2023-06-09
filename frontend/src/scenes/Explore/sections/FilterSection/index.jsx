import React, { useContext } from 'react';
import { ResponsiveContext } from '../../../../App';
// from file
import ShrinkedSection from './ResponsiveDesign/ShrinkedSection';
import ExpandedSection from './ResponsiveDesign/ExpandedSection';

function FilterSection() {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        screenWidth < 1024 ? <ShrinkedSection /> : <ExpandedSection />
    );
}

export default FilterSection;
