// from package
import React from 'react';
// from file
import OuterContainer from './components/OuterContainer';
import InnerContainer from './components/InnerContainer';
import ProgressStepSection from './components/ProgressStepSection';
import Progressing from './components/Progressing';
import StepItem from './components/StepItem';


// rendering
function ProgressionBar() {
    return (
        <OuterContainer>
            <InnerContainer>

                <Progressing />

                <ProgressStepSection>
                    <StepItem step='1' title='Review' />
                    <StepItem step='2' title='Contact' />
                    <StepItem step='3' title='Pay' />
                </ProgressStepSection>

            </InnerContainer>
        </OuterContainer >
    );
}

export default ProgressionBar;
