import React from 'react';
import WizardFooter from '../Layout/WizardFooter';
import WizardHeader from '../Layout/WizardHeader';

const Step1 = props => {
    return <div>
        <WizardHeader currentStep={props.currentStep} title={"Choose your experience"}/>
        <p>Step 1 specific content is in here</p>
        <WizardFooter parentProps={props}
        />
    </div>
}

export default Step1;