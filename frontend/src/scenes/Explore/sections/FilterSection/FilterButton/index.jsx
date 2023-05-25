// from package
import React from 'react';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
// from file
import ButtonItem from './components/ButtonItem';
import WrapText from './components/WrapText';


// styles
const IconStyle = {
    fontSize: '100%'
};


// rendering
function index({ setFilterHidden }) {
    return (
        <ButtonItem setFilterHidden={ setFilterHidden }>
            <FilterListOutlinedIcon sx={ IconStyle } />
            <WrapText text='Filter' />
        </ButtonItem>
    );
}

export default index;
