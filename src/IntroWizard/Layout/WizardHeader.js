import React from 'react';

const WizardHeader = props => {
    return <h1>Step {props.currentStep} {props.title}</h1>
}

export default WizardHeader;