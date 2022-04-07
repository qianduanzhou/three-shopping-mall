import { useParams, /*useSearchParams, useLocation*/ } from 'react-router-dom';
import styles from './index.module.scss';
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shop as shopApi } from 'request/mock';
import { shopDetail } from 'assets/interface/shop'

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 0.5;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};
export default function Detail() {
  let params = useParams();
  let [detail, setDetail] = useState<shopDetail>(null!)
  async function getDetail() {//获取商品详情
    let { id } = params;
    try {
      let res = await shopApi.getDetail({id: Number(id)});
      setDetail(res)
    } catch (error) {
      
    }
  }
  // function Box() {
  //   let mtl = new MTLLoader();
  //   const result = useLoader(OBJLoader, '/models/chair.obj', (loader: any) => {
  //     mtl.load('/models/chair.mtl', (data: any) => {
  //       loader.setMaterials(data);
  //     })
  //   })
  //   return <primitive object={result} />
  // }

  function Model() {
    let glft = useGLTF(`/models/${detail.type}/${detail.fileName}.glb`, true);
    return <primitive object={glft.scene} />
  }

  useEffect(() => {
    getDetail()
  })

  return (
    <div className={styles.detail}>
      <Canvas camera={{ position: [0.4, 0.4, 0.4] }}>
        <CameraController />
        <ambientLight intensity={1}/>
        <spotLight intensity={10} angle={10} penumbra={10} position={[5, 5, 5]} castShadow />
        <Model/>
      </Canvas>
    </div>
  )
}