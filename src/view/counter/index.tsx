import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'

export default function Counter() {
  const count = useSelector(selectCount)//useSelector传入selector可以获取state对应的值
  const dispatch = useDispatch()//dispatch传入action可以触发对应的reducer
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
        <span>{count}</span><br/>
        <Button type="primary" onClick={() => dispatch(increment())}>+1</Button><br/>
        <Button type="primary" onClick={() => dispatch(decrement())}>-1</Button><br/>
        <Button type="primary" onClick={() => dispatch(incrementByAmount(3))}>同步加3</Button><br/>
        <Button type="primary" onClick={() => dispatch(incrementAsync(5))}>异步加5</Button>
    </div>
  )
}