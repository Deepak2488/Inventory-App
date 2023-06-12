import React, { useState } from 'react';

const FlowChart = () => {
  const [isOpen, setOpen] = useState(false); //set isOpen to false

  //handle the click event
  const handleClick = () => {
    setOpen(!isOpen); //toggle the open state of the FlowChart
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isOpen ? 'Close FlowChart' : 'Open FlowChart'}
      </button>
      {isOpen && (
        <div className="flow-chart">
          // flow chart will go here
        </div>
      )}
    </div>
  );
};

export default FlowChart;