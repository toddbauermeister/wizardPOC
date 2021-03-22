import React from 'react';

const WizardFooter = props => {
    return <div>
        {props.parentProps.currentStep !== 1 && <div>
            <button onClick={props.parentProps.previousStep}>
                Back
            </button>
        </div>}
        {props.parentProps.currentStep !== props.parentProps.totalSteps && <div>
            <button onClick={props.parentProps.nextStep}>
                Next
            </button>
        </div>}
    </div>
}

export default WizardFooter;