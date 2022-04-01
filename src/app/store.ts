import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'view/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})