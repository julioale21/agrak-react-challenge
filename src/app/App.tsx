import * as React from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectMessage } from '../redux/slices/basicSlice'
import './App.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const message = useAppSelector(selectMessage)
  const dispatch = useAppDispatch()
  console.log(dispatch)

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default App
