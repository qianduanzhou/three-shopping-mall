import { useParams, /*useSearchParams, useLocation*/ } from 'react-router-dom';
import Loading from 'components/loading';

import styles from './index.module.scss';
import { useState, useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCollection, removeCollection, selectCollectionList } from 'app/shop/shopSlice'
import { Canvas, useThree, /*useFrame, useLoader*/ } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shop as shopApi } from 'request/mock';
import { shopDetail } from 'assets/interface/shop';
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
  let dispatch = useDispatch();
  let collectionList = useSelector(selectCollectionList);
  async function getDetail() {//获取商品详情
    let { id } = params;
    try {
      let res = await shopApi.getDetail({ id: Number(id) });
      setDetail(res)
      checkCollectionion(res)
    } catch (error) {
      console.log('error:', error)
    }
  }
  function checkCollectionion(detail: shopDetail) {//判断是否已收藏
    if (collectionList.includes(detail.id)) {
      setIsCollection(true);
    } else {
      setIsCollection(false);
    }
  }

  function collect() {//收藏/取消收藏
    if (!collectionList.includes(detail.id)) {
      dispatch(addCollection(detail.id))
      setIsCollection(true);
    } else {
      dispatch(removeCollection(detail.id))
      setIsCollection(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, [])

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
    return <primitive object={glft.scene} position={detail.modelPosition} />
  }

  return (
    <div className={styles.detail}>
      <header>
        <p className={styles.title}>{detail?.name}</p>
        <IconFont className={styles.icon} type={isCollection ? 'icon-heart-actived-copy' : 'icon-heart-fill'}
          onClick={collect}></IconFont>
      </header>
      <main>
        {detail !== null && 
        <Suspense fallback={<Loading width={"100%"} height={"100%"}></Loading>}>
          <Canvas camera={{ position: detail.cameraPosition }}>
            <CameraController />
            <ambientLight intensity={1} />
            <spotLight intensity={1} angle={10} penumbra={10} position={ detail.cameraPosition } castShadow />
            <axesHelper></axesHelper>
            <Model />
          </Canvas>
        </Suspense>}
      </main>
    </div>
  )
}