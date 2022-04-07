import request from '../request';
import { shopDetail } from 'assets/interface/shop'

async function getDetail({id}: {id: number}): Promise<shopDetail> {
  let res: any = await request('shopDetail');
  return res.find((v: shopDetail) => v.id === id);
}

async function getSwiperList(num: number = 3): Promise<shopDetail[]> {
  let res: any = await request('shopList');
  let {records, total} = res;
  let list: shopDetail[] = [];
  for(let i = 0; i < num; i ++) {
    let index = Math.floor(Math.random() * total);
    list.push(records[index]);
    // records.splice(index, 1);
  }
  return list;
}

const shop = {
  getDetail,
  getSwiperList
} 
export default shop;