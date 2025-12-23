// src/components/App.js
import React, { useState } from 'react';
import './App.css';
import ColourSelector from './components/ColourSelector';
import Selection from './components/Selection';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)',
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)',
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)',
  },
];

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id='master'>
      <h5 className='heading'>{title}</h5>

      <div className='holder'>
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>

      <div
        className='holder'
        id='children-wrapper'
      >
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;
