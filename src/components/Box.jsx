import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box({ rotationSpeed }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += rotationSpeed;
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={[-6, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Box;
