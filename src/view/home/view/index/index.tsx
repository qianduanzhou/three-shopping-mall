import { useState, useEffect } from 'react';
import { List } from 'assets/interface/shop';
import styles from './index.module.scss';
import Swiper from 'components/swiper';//轮播图
import Search from 'components/search';//搜索框
import ShopList from 'components/shopList';//商品列表
import { request, shop as shopApi } from 'request/mock';

export default function Index() {
  let [list, setList] = useState<List[]>([]);
  let [swiperList, setSwiperList] = useState<List[]>([]);

  function handleShopListJumpDetail(id: string) {//处理跳转详情

  }

  async function getList() {//获取商品列表
    try {
      let res: any = await request('shopList');
      setList(res.records);
      console.log('getList', res.records)
    } catch (error) {
      console.log('[error]:', error);
    }
  }

  async function getSwiperList() {//获取轮播图列表
    try {
      let res: any = await shopApi.getSwiperList();
      setSwiperList(res);
      console.log('swiperList', res)
    } catch (error) {
      console.log('[error]:', error);
    }
  }

  useEffect(() => {
    getList();
  }, [])
  useEffect(() => {
    getSwiperList();
  }, [])
 
  return (
    <div className={styles.index}>
      <Search />
      <div className={styles.shopContainer}>
        <Swiper list={swiperList} onJumpDetail={handleShopListJumpDetail} />
        <ShopList list={list} onJumpDetail={handleShopListJumpDetail} />
      </div>
    </div>
  )
}