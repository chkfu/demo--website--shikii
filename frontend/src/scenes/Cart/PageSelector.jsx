// from package
import React from 'react';
// from file
import SectionScrollingIn from '../../components/Animation/SectionScrollingIn';
import ContactStep from './ContactStep';
import ReviewStep from './ReviewStep';
import PaymentStep from './PaymentStep';

function PageSelector({ currStep }) {

  if (currStep === '1')
    return (
      <SectionScrollingIn>
        <ReviewStep />
      </SectionScrollingIn>
    );

  if (currStep === '2')
    return (
      <SectionScrollingIn>
        <ContactStep />
      </SectionScrollingIn>
    );

  if (currStep === '3')
    return (
      <SectionScrollingIn>
        <PaymentStep />
      </SectionScrollingIn>
    );
}

export default PageSelector;