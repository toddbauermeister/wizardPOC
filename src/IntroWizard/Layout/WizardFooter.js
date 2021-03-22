import React from 'react';

const WizardFooter = props => {
    const {parentProps} = props;
    const notFirstStep = () => parentProps.currentStep !== 1;
    const notlastStep = () => parentProps.currentStep !== parentProps.totalSteps;
    return <div>
        {notFirstStep() && <div>
            <button onClick={parentProps.previousStep}>
                Back
            </button>
        </div>}
        {notlastStep() && <div>
            <button onClick={parentProps.nextStep}>
                Next
            </button>
        </div>}
    </div>
}

export default WizardFooter;