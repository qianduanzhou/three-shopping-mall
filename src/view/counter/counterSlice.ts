import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {//state，通过reducer修改
    value: 0
  },
  reducers: {//reducer写在下面
    increment: state => {//会生成一个action {type: counter/increment, payload: ''},通过useDispatch()返回的函数触发reducer(increment)
      // 只有在toolkit工具下的reducers里面才能这样写，普通的redux还是得用increment: state => {return {...state, value: state.value + 1}}
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions//导出相关actions（counter/increment...）

/**
 * reducer无法处理异步，可以通过thunk处理
 * thunk包含两个内外函数
 * 一个内部的thunk函数，它获取dispatch和getState作为参数
 * 外部的函数，它创建并返回thunk函数，可通过dispatch触发生成的action(counter/incrementAsync)执行reducer(incrementByAmount)
 */
export const incrementAsync = (amount: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
export const selectCount = (state: any) => state.counter.value//获取state对应的值
export default counterSlice.reducer