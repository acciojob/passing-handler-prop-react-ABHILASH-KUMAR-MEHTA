import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({ selectedColor }) => {
  const [style, setStyle] = useState({});

  const handleClick = () => {
    if (!selectedColor) return; // 🔴 THIS FIX IS REQUIRED
    setStyle({ background: selectedColor });
  };

  return (
    <div
      className='fix-box'
      style={style}
      onClick={handleClick}
    ></div>
  );
};

export default Selection;
