import request from '../request';
import { shopDetail, shopDetailMin } from 'assets/interface/shop'

async function getDetail({id}: {id: number}): Promise<shopDetail> {//物品详情
  let res: any = await request('shopDetail');
  return res.find((v: shopDetail) => v.id === id);
}

async function getSwiperList(num: number = 3): Promise<shopDetailMin[]> {//物品轮播图列表
  let res: any = await request('shopList');
  let {records} = res;
  let list: shopDetailMin[] = [];
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

async function getCollectList(lstId: number[]): Promise<shopDetailMin[]> {//物品轮播图列表
  let res: any = await request('shopList');
  let {records} = res;
  let copyRecords = JSON.parse(JSON.stringify(records));
  let list: shopDetailMin[] = copyRecords.filter((v: shopDetail)  => lstId.includes(v.id))
  return list;
}

async function searchShopList({name}: {name: string}): Promise<shopDetailMin[]> {//物品轮播图列表
  let res: any = await request('shopList');
  let {records} = res;
  let copyRecords = JSON.parse(JSON.stringify(records));
  let list: shopDetailMin[] = copyRecords.filter((v: shopDetail) => v.name.includes(name));
  
  return list;
}

const shop = {
  getDetail,
  getSwiperList,
  getCollectList,
  searchShopList
} 
export default shop;