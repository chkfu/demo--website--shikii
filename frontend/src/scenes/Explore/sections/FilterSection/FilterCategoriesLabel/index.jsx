import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
// from file
import { ResponsiveContext } from '../../../../../App';
import ContainedCategoryLabel from '../../../../../components/Button/ContainedCategoryLabel';
import LabelContainer from './components/LabelContainer';
import TitleSection from './components/TitleSection';
import LabelBoxContainer from './components/LabelBoxContainer';
import ButtonSection from './components/ButtonSection';
import { setSearch } from './../../../../../../redux/reducers/exploreSlice';


// rendering
function index() {

    // declaration
    const designatedList = ['Kaorisabo', 'Muji', 'Aeon', 'Wood', 'Plastic', 'Steel', 'Metal'];

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // redux
    const dispatch = useDispatch();

    // rendering
    return (
        <LabelContainer>
            <TitleSection />

            {/* label */ }
            <LabelBoxContainer>
                {
                    designatedList.map(label => {
                        return (
                            <div
                                key={ label }
                                onClick={ () => dispatch(setSearch(label)) }>
                                <ContainedCategoryLabel category={ label } />
                            </div>
                        );
                    })
                }
            </LabelBoxContainer>

            {/* cancel button */ }
            { screenWidth <= 768 && <ButtonSection /> }

        </LabelContainer>
    );
}

export default index;
