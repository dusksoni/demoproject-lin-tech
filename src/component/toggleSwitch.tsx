// ToggleSwitch.tsx
import React, { useState } from 'react';
import "../assets/css/toggle.css"

interface ToggleSwitchProps {
  handleToggle: () => void;
  toggle: boolean
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({handleToggle, toggle}) => {
 

 

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="hidden"
        checked={toggle}
        onChange={handleToggle}
      />
      <div
        className={`slider ${toggle ? 'toggled' : ''}`}
        onClick={handleToggle}
      />
    </div>
  );
};

export default ToggleSwitch;
