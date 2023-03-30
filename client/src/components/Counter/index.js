import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../reducers/counter'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <button
          onClick={() =>{debugger; dispatch(increment())}}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button onClick={() => console.log("Hola")}>
        hola
      </button>
    </div>
  )
}