import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './shop/shopSlice'

export default configureStore({//创建仓库
  reducer: {//模块化
    shop: shopReducer
  }
})