import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

const handleTabChange = (index) => {
  setActiveTab(index);
}

  return (
    <div>
      <div className="tabs">
        <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabChange(0)}>
          First Tab
        </div>
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>
          Second Tab
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabChange(2)}>
          Third Tab
        </div>
      </div>
      {activeTab === 0 && <div>Moved to First Tab</div>}
      {activeTab === 1 && <div>Now on Second Tab</div>}
      {activeTab === 2 && <div>Content for Third Tab</div>}
      </div>
  );
}
  export default Tabs;