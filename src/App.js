  import React, { useState } from 'react';
  import { Canvas } from '@react-three/fiber';
  import { OrbitControls } from '@react-three/drei';
  import Box from './components/Box';
  import Torus from './components/Torus';
  import Dodecahedron from './components/Dodecahedron';
  import './App.css';

  function App() {
    const [showBox, setShowBox] = useState(true);
    const [showTorus, setShowTorus] = useState(true);
    const [showDodecahedron, setShowDodecahedron] = useState(true);

    const [boxSpeed, setBoxSpeed] = useState(0.01);
    const [torusSpeed, setTorusSpeed] = useState(0.01);
    const [dodecahedronSpeed, setDodecahedronSpeed] = useState(0.01);

    const handleSpeedChange = (setter) => (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) {
        setter(value);
      }
    };

    return (
      <div className="App">
        <div className="controls">
          <div className="control">
            <button onClick={() => setShowBox(!showBox)}>Toggle Box</button>
            <label>Rotation Speed:</label>
            <div className="range-number-container">
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.01"
              value={boxSpeed}
              onChange={handleSpeedChange(setBoxSpeed)}
            />
            <input
              type="number"
              min="0"
              max="0.1"
              step="0.01"
              value={boxSpeed}
              onChange={handleSpeedChange(setBoxSpeed)}
            />
            </div>
          </div>
          <div className="control">
            <button onClick={() => setShowTorus(!showTorus)}>Toggle Torus</button>
            <label>Rotation Speed:</label>
            <div className="range-number-container">
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.01"
              value={torusSpeed}
              onChange={handleSpeedChange(setTorusSpeed)}
            />
            <input
              type="number"
              min="0"
              max="0.1"
              step="0.01"
              value={torusSpeed}
              onChange={handleSpeedChange(setTorusSpeed)}
            />
            </div>
          </div>
          <div className="control">
            <button onClick={() => setShowDodecahedron(!showDodecahedron)}>Toggle Dodecahedron</button>
            <label>Rotation Speed:</label>
            <div className="range-number-container">
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.01"
              value={dodecahedronSpeed}
              onChange={handleSpeedChange(setDodecahedronSpeed)}
            />
            <input
              type="number"
              min="0"
              max="0.1"
              step="0.01"
              value={dodecahedronSpeed}
              onChange={handleSpeedChange(setDodecahedronSpeed)}
            />
            </div>
          </div>
        </div>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {showBox && <Box rotationSpeed={boxSpeed} />}
          {showTorus && <Torus rotationSpeed={torusSpeed} />}
          {showDodecahedron && <Dodecahedron rotationSpeed={dodecahedronSpeed} />}
        </Canvas>
      </div>
    );
  }

  export default App;
