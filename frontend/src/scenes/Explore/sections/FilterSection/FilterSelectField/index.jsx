// from package
import React, { useContext } from 'react';
// from file
import { ResponsiveContext } from '../../../../../App';
import FormContainer from './components/FormContainer';
import LabelBox from './components/LabelBox';


// style


const ShrinkedSelectFromStyle = {
    height: '46px',
    fontSize: '16px',
    width: '100%'
};

const ExpandedSelectFromStyle = {
    height: '46px',
    fontSize: '16px',
    width: '180px'
};


function index({ sorter, setSorter }) {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // rendering
    return (
        <FormContainer>

            { screenWidth > 1024 && <LabelBox /> }

            <select
                value={ sorter }
                onChange={ (e) => { setSorter(e.target.value); } }
                style={ screenWidth <= 1024 ? ShrinkedSelectFromStyle : ExpandedSelectFromStyle }>
                <option value='default'>Please Select</option>
                <option value='createdAt'>Latest</option>
                <option value='-createdAt'>Oldest</option>
                <option value='-price'>Price (Highest)</option>
                <option value='price'>Price (Lowest)</option>
                <option value='-averageRating'>Rating (Highest)</option>
                <option value='averageRating'>Rating (Lowest)</option>
            </select>

        </FormContainer>
    );
}

export default index;
