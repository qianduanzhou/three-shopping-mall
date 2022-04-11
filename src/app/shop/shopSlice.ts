import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shop',
  initialState: {//state，通过reducer修改
    collectionList: <any>[]
  },
  reducers: {//reducer写在下面
    initCollectionList: state => {
      let list = localStorage.getItem('collectionList')
      state.collectionList = list ? JSON.parse(list) : [];
    },
    addCollection: (state, action) => {//添加收藏
      state.collectionList.push(action.payload);
      localStorage.setItem('collectionList', JSON.stringify(state.collectionList));
    },
    removeCollection: (state, action) => {//删除收藏
      let index = state.collectionList.findIndex((v: {id: number}) => v.id === action.payload);
      state.collectionList.splice(index, 1)
      localStorage.setItem('collectionList', JSON.stringify(state.collectionList));
    },
  }
})

export const { initCollectionList, addCollection, removeCollection } = counterSlice.actions//导出相关actions（counter/increment...）

export const selectCollectionList = (state: any) => state.shop.collectionList//获取state对应的值

export default counterSlice.reducer