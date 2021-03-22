import React from 'react'
import StepWizard from 'react-step-wizard';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const IntroWizard = props => {
    return <>
        <p>Hello Wizard</p>
        <StepWizard>
              <Step1 />
              <Step2 />
        </StepWizard>
    </>
}

export default IntroWizard;