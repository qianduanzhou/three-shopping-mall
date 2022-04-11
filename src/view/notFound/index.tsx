import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 0.05;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};
function NotFoundCom() {
  let font = useLoader(FontLoader, 'fonts/helvetiker_bold.typeface.json')
  return <primitive object={font} />
}
export default function NotFound() {

  return (
    <Suspense fallback={<div>没有相关页面!</div>}>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <CameraController />
        <ambientLight intensity={1} />
        <spotLight intensity={1} angle={10} penumbra={10} position={[1, 1, 1]} castShadow />
        <axesHelper></axesHelper>
        <NotFoundCom/>
      </Canvas>
    </Suspense>
  )
}