import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Torus({ rotationSpeed }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += rotationSpeed;
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Torus;
