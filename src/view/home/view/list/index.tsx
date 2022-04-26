import styles from './index.module.scss';
import { useState, useEffect } from 'react';

import Search from 'components/search';//搜索框
import ShopList from 'components/shopList';//物品列表
import { request, shop as shopApi } from 'request/mock';
import { shopDetailMin } from 'assets/interface/shop';

function List() {
	let [list, setList] = useState<shopDetailMin[]>([]);
	useEffect(() => {
		getList();
	}, [])
	async function getList() {//获取物品列表
		try {
			let res: any = await request('shopList');
			setList(res.records);
			console.log('getList', res.records)
		} catch (error) {
			console.log('[error]:', error);
		}
	}

	async function searchChange(e: string) {//输入框改变
		try {
		  let res: any = await shopApi.searchShopList({name: e});
		  setList(res);
		} catch (error) {
		  console.log('[error]:', error);
		}
	  }
	return (
		<div className={styles.list}>
			<Search searchChange={searchChange}/>
			<div className={styles.shopContainer}>
				<ShopList list={list} />
			</div>
		</div>
	)
}
export default List;