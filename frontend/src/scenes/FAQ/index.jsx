import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import FullFAQMenu from './components/FullFAQMenu';
import FullFAQItem from './components/FullFAQItem';
import FullFAQContent from './components/FullFAQContent';
import AdvertisementSection from './components/AdvertismentSection';
import { BACKEND_ROUTE } from '../../theme/api-links';



// declaration
const categories = [
  'Ordering and Products',
  'Shipping and Delivery',
  'Returns and Refunds',
  'Account and Security',
  'Payments and Billing'
];


// styles

const OuterContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 40px',
  minHeight: '100vh'
};



// components

const OuterContainer = ({ children }) => {
  return (
    <Box style={ OuterContentStyle }>
      { children }
    </Box>
  );
};


// rendering

function FAQ() {

  // data-fetching
  const { data, isLoading, isError } = useQuery('fetchingFAQ', async () => {
    return await axios.get(`${BACKEND_ROUTE}/api/v1/faq`);
  });
  if (isLoading) return <></>;
  if (isError) return <></>;
  if (!data) return <></>;

  // render
  return (
    <>
      <AdvertisementSection />

      <OuterContainer>
        <FullFAQMenu>
          {
            categories.map((item, i) => {
              return (
                <FullFAQItem key={ `faq-category-${i}` } title={ item } />
              );
            })
          }
        </FullFAQMenu>

        <FullFAQContent data={ data } />

      </OuterContainer >
    </>
  );
}

export default FAQ;