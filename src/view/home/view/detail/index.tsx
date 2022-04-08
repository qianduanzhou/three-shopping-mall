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
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3311976_j9x681cjwa.js',
});

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
export default function Detail() {
  let params = useParams();
  let [detail, setDetail] = useState<shopDetail>(null!)
  let [isCollection, setIsCollection] = useState(false)

  async function getDetail() {//获取商品详情
    let { id } = params;
    try {
      let res = await shopApi.getDetail({ id: Number(id) });
      console.log('detail', res)
      setDetail(res)
    } catch (error) {
      console.log('error:', error)
    }
  }
  function checkCollectionion() {//判断是否已收藏
    let collectionList = localStorage.getItem("collectionList"),
      list = collectionList ? JSON.parse(collectionList) : [];
    if (list.includes(detail.id)) {
      setIsCollection(true);
    } else {
      setIsCollection(false);
    }
  }

  function collect() {//收藏/取消收藏
    let collectionList = localStorage.getItem("collectionList"),
      list = collectionList ? JSON.parse(collectionList) : [];
    if (!list.includes(detail.id)) {
      list.push(detail.id);
      setIsCollection(true);
    } else {
      let index = list.findIndex((v: number) => v === detail.id);
      list.splice(index, 1)
      setIsCollection(false);
    }
    localStorage.setItem("collectionList", JSON.stringify(list));
  }

  useEffect(() => {
    getDetail();
  }, [])
  useEffect(() => {
    detail !== null && checkCollectionion()
  }, [detail])

  // function Box() {
  //   let mtl = new MTLLoader();
  //   const result = useLoader(OBJLoader, '/models/chair.obj', (loader: any) => {
  //     mtl.load('/models/chair.mtl', (data: any) => {
  //       loader.setMaterials(data);
  //     })
  //   })
  //   return <primitive object={result} />
  // }

  function Model() {//模型
    let glft = useGLTF(`/models/${detail.type}/${detail.fileName}.glb`, true);
    return <primitive object={glft.scene} position={[0, -0.1, 0]} />
  }

  return (
    <div className={styles.detail}>
      <header>
        <p className={styles.title}>{detail?.name}</p>
        <IconFont className={styles.icon} type={isCollection ? 'icon-heart-actived-copy' : 'icon-heart-fill'}
          onClick={collect}></IconFont>
      </header>
      <main>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0.3, 0, 0.3] }}>
            <CameraController />
            <ambientLight intensity={1} />
            <spotLight intensity={1} angle={10} penumbra={10} position={[5, 5, 5]} castShadow />
            <axesHelper></axesHelper>
            {detail !== null && <Model />}
          </Canvas>
        </Suspense>
      </main>
    </div>
  )
}