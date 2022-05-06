import { useState, useEffect } from 'react';
import { shopDetailMin } from 'assets/interface/shop';
import styles from './index.module.scss';
import Swiper from 'components/swiper';//轮播图
import Search from 'components/search';//搜索框
import ShopList from 'components/shopList';//物品列表
import { request, shop as shopApi } from 'request/mock';

export default function Index() {
  let [list, setList] = useState<shopDetailMin[]>([]);
  let [swiperList, setSwiperList] = useState<shopDetailMin[]>([]);

  function handleShopListJumpDetail(id: string) {//处理跳转详情

  }

  async function getList() {//获取物品列表
    try {
      let res: any = await request('shopList');
      setList(res.records);
    } catch (error) {
      console.log('[error]: ', error);
    }
  }

  async function getSwiperList() {//获取轮播图列表
    try {
      let res: any = await shopApi.getSwiperList();
      setSwiperList(res);
    } catch (error) {
      console.log('[error]: ', error);
    }
  }

  async function searchChange(e: string) {//输入框改变
    try {
      let res: any = await shopApi.searchShopList({name: e});
      setList(res);
    } catch (error) {
      console.log('[error]: ', error);
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
      <Search searchChange={searchChange}/>
      <div className={styles.shopContainer}>
        <Swiper list={swiperList} onJumpDetail={handleShopListJumpDetail} />
        <ShopList list={list} onJumpDetail={handleShopListJumpDetail} />
      </div>
    </div>
  )
}