import React from 'react';
import WizardFooter from '../Layout/WizardFooter';
import WizardHeader from '../Layout/WizardHeader';

const Step2 = props => {
    return <div>
        <WizardHeader currentStep={props.currentStep} title={"Explore page"}/>
        <p>Step 2 specific content is in here</p>
        <WizardFooter parentProps={props}
        />
    </div>
}

export default Step2;