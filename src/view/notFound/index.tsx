import { useRef, useState, useEffect, Suspense, Fragment } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


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
  const font = useLoader(FontLoader, '/fonts/Zhi Mang Xing_Regular.json');//加载外部文字
  const texture = useLoader(TextureLoader, '/imgs/rain.png');//加载雨滴贴图
  const mesh: any = useRef();
  const group: any = useRef();
  const text = '没有相关页面!';
  const textOptions = {
    font: font,
    size: 0.1,
    height: 0.05
  }
  const geometry = new TextGeometry(text, textOptions);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 //移动文字
    group.current.children.forEach((sprite: any) => {
      // 雨滴的y坐标每次减1
      sprite.position.y -= 0.001;
      if (sprite.position.y < -0.5) {
          // 如果雨滴落到地面，重置y，从新下落
          sprite.position.y = 0.5;
      }
  });
  })
  function renderSprite() {

    let list = [];
    for (let i = 0; i < 400; i++) {
      let k1 = Math.random() - 0.5;
      let k2 = Math.random() - 0.5;
      let k3 = Math.random() - 0.5;
      list.push({
        id: i,
        k1,
        k2,
        k3
      })
    }
    return (
      <group scale={[1.7,1.7,1.7]} ref={group}>
        {
          list.map(v =>
            <sprite scale={[0.02, 0.025, 0.025]} position={[1 * v.k1, 1 * v.k2, 1 * v.k3]} key={v.id}>
              <spriteMaterial map={texture}></spriteMaterial>
            </sprite>
          )}
      </group>
    )
  }

  return (
    <Fragment>
      <group ref={mesh} position={[0, 0, 0]}>
        <mesh geometry={geometry} position={[-0.4, 0, 0]}>
          <meshBasicMaterial color={0x000000}></meshBasicMaterial>
        </mesh>
      </group>
      {renderSprite()}
    </Fragment>

  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>没有相关页面!</div>}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <CameraController />
        <ambientLight intensity={1} />
        <spotLight intensity={1} angle={10} penumbra={10} position={[1, 1, 1]} castShadow />
        <NotFoundCom />
        <axesHelper></axesHelper>

      </Canvas>
    </Suspense>
  )
}