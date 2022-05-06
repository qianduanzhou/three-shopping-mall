import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {//state，通过reducer修改
    token: ''
  },
  reducers: {//reducer写在下面
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
})

export const { setToken } = counterSlice.actions//导出相关actions（counter/increment...）

export const selectToken = (state: any) => state.user.token//获取state对应的值

export default counterSlice.reducer