// from package
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { ResponsiveContext } from '../../../../../App';
import FormContainer from './components/FormContainer';
import LabelBox from './components/LabelBox';
import { setSorter } from './../../../../../../redux/reducers/exploreSlice';


// styles

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


function index() {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // redux
    const sorter = useSelector(state => state.explore.sorter);
    const dispatch = useDispatch();

    // rendering
    return (
        <FormContainer>

            { screenWidth > 1024 && <LabelBox /> }

            <select
                value={ sorter }
                onChange={ (event) => dispatch(setSorter(event.target.value)) }
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
