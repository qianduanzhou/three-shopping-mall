import request from '../request';
import { shopDetail, List } from 'assets/interface/shop'

async function getDetail({id}: {id: number}): Promise<shopDetail> {//商品详情
  let res: any = await request('shopDetail');
  return res.find((v: shopDetail) => v.id === id);
}

async function getSwiperList(num: number = 3): Promise<List[]> {//商品轮播图列表
  let res: any = await request('shopList');
  let {records} = res;
  let list: List[] = [];
  let copyRecords = JSON.parse(JSON.stringify(records));
  let count = records.length;
  for(let i = 0; i < num; i ++) {
    let index = Math.floor(Math.random() * count);
    list.push(copyRecords[index]);
    copyRecords.splice(index, 1);
    count --;
    if(count < num) {
      break;
    }
  }
  return list;
}

const shop = {
  getDetail,
  getSwiperList
} 
export default shop;