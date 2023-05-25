// from package
import React from 'react';
// from file
import OuterContainer from './components/OuterContainer';
import InnerContainer from './components/InnerContainer';
import ProgressStepSection from './components/ProgressStepSection';
import Progressing from './components/Progressing';
import StepItem from './components/StepItem';


// rendering
function ProgressionBar({ totalPage, currStep, setCurrStep }) {
    return (
        <OuterContainer>
            <InnerContainer>
                <Progressing
                    currStep={ currStep }
                    totalPage={ totalPage } />
                <ProgressStepSection>
                    <StepItem
                        step='1'
                        title='Review'
                        currStep={ currStep }
                        setCurrStep={ setCurrStep } />
                    <StepItem
                        step='2'
                        title='Contact'
                        currStep={ currStep }
                        setCurrStep={ setCurrStep } />
                    <StepItem
                        step='3'
                        title='Pay'
                        currStep={ currStep }
                        setCurrStep={ setCurrStep } />
                </ProgressStepSection>
            </InnerContainer>
        </OuterContainer >
    );
}

export default ProgressionBar;
