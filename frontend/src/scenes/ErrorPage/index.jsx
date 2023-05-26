// from package
import React from 'react';
// from file
import OuterContainer from './components/OuterContainer';
import InnerContainer from './components/InnerContainer';
import ImageSection from './components/ImageSection';
import ErrorMessageSection from './components/ErrorMessageSection';
import ButtonSection from './components/ButtonSection';

// rendering
function ErrorPage() {
  return (
    <OuterContainer>
      <InnerContainer>
        <ImageSection />
        <ErrorMessageSection />
        <ButtonSection />
      </InnerContainer>
    </OuterContainer >
  );
}

export default ErrorPage;