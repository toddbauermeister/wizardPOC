import React from 'react'
import StepWizard from 'react-step-wizard';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

// Master wizard component 
const IntroWizard = props => {
    return <>
        <p>Hello Wizard</p>

        {/* react-step-wizard component */}
        {/* https://www.npmjs.com/package/react-step-wizard */}
        <StepWizard>
              <Step1 />
              <Step2 />
        </StepWizard>
    </>
}

export default IntroWizard;