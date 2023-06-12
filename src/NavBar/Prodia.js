import React from 'react'; 

const App = () => {
    return (
      <>
        <div className="process-diagram-container">
          <ProcessDiagram />
        </div>
      </>
    );
  };
  
  const ProcessDiagram = () => {
    return (
      <div className="process-diagram">
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    );
  };
  
  const Step1 = () => {
    return (
      <div className="step-1">
        <h3>Step 1</h3>
        <p>Understand the feature & Check the required stack</p>
      </div>
    );
  };
  
  const Step2 = () => {
    return (
      <div className="step-2">
        <h3>Step 2</h3>
        <p>Write the efficient code</p>
      </div>
    );
  };
  
  const Step3 = () => {
    return (
      <div className="step-3">
        <h3>Step 3</h3>
        <p>Review the PR & Deploy the code</p>
      </div>
    );
  };
  
  export default App;