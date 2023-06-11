// from package
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import SecurityIcon from '@mui/icons-material/Security';
import PaidIcon from '@mui/icons-material/Paid';


// style
const IconStyle = {
  fontSize: '350%',
  color: '#333333',
  cursor: 'pointer'
};

const NarrowedIconStyle = {
  fontSize: '130%',
};


// rendering

function IconDectector({ title }) {

  // redux
  const dispatch = useDispatch();
  const categorySelected = useSelector(state => state.faq.categorySelected);

  // render
  if (title === 'Ordering and Products')
    return <GradingIcon sx={ categorySelected === 'none' ? IconStyle : NarrowedIconStyle }
    />;
  if (title === 'Shipping and Delivery')
    return <LocalShippingIcon
      sx={ categorySelected === 'none' ? IconStyle : NarrowedIconStyle }
    />;
  if (title === 'Returns and Refunds')
    return <AssignmentReturnIcon
      sx={ categorySelected === 'none' ? IconStyle : NarrowedIconStyle }
    />;
  if (title === 'Account and Security')
    return <SecurityIcon
      sx={ categorySelected === 'none' ? IconStyle : NarrowedIconStyle }
    />;
  if (title === 'Payments and Billing')
    return <PaidIcon
      sx={ categorySelected === 'none' ? IconStyle : NarrowedIconStyle }
    />;
}

export default IconDectector;
