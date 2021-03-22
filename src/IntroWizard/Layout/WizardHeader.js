import React from 'react';

const WizardHeader = props => {
    return <h3>Step {props.currentStep}: {props.title}</h3>
}

export default WizardHeader;