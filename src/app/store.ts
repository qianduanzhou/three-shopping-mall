import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'view/counter/counterSlice'

export default configureStore({//创建仓库
  reducer: {//模块化
    counter: counterReducer
  }
})