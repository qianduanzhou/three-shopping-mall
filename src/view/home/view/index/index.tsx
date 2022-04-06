import styles from './index.module.scss';
import Swiper from 'components/swiper';//轮播图
import Search from 'components/search';//搜索框
import ShopList from 'components/shopList';//商品列表

export default function Index() {
  function handleShopListJumpDetail(id: string) {//处理跳转详情
    
  }

  return (
    <div className={styles.index}>
      <Search />
			<div className={styles.shopContainer}>
				<Swiper />
				<ShopList onJumpDetail={handleShopListJumpDetail}/>
			</div>
    </div>
  )
}