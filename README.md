# Welcome to the react wizard POC 👾

The purpose of this project is to fiddle around and understand/get a react wizard going.

Here's some useful props that all steps have access to:
<div>
  <!-- Variables -->
  <h2>Step {this.props.currentStep}</h2>
  <p>Total Steps: {this.props.totalSteps}</p>
  <p>Is Active: {this.props.isActive}</p>
  <!-- Functions -->
  <p><button onClick={this.props.previousStep}>Previous Step</button></p>
  <p><button onClick={this.props.nextStep}>Next Step</button></p>
  <p><button onClick={()=>this.props.goToStep(2)}>Step 2</button></p>
  <p><button onClick={this.props.firstStep}>First Step</button></p>
  <p><button onClick={this.props.lastStep}>Last Step</button></p>
</div>

NB you will need to pass these down to child components of the steps, or figure out a more intelligent way to do this 😁

- IntroWizard.js is the main wizard component

- StepWizard.js is the react-step-wizard library component
https://www.npmjs.com/package/react-step-wizard

- Steps then sit within the StepWizard component

- I have built an extremely simple header (knows step number, displays title) and a footer (contains buttons for next and previous step, back doesn't display on first step and next doesn't display on last step) 

