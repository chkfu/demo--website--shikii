import React, { useContext } from 'react';
import { ResponsiveContext } from '../../../../App';
// from file
import ShrinkedSection from './ResponsiveDesign/ShrinkedSection';
import ExpandedSection from './ResponsiveDesign/ExpandedSection';


// rendering

function FilterSection() {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // render
    return (
        screenWidth < 1024 ? <ShrinkedSection /> : <ExpandedSection />
    );
}

export default FilterSection;
