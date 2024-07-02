import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Dodecahedron({ rotationSpeed }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += rotationSpeed;
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={[6, 0, 0]}>
      <dodecahedronGeometry args={[1,0]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Dodecahedron;
