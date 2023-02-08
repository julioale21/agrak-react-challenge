import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'

export const basicSlice = createSlice({
  name: 'basic',
  initialState: {
    message: 'Happy Coding! 😋'
  },
  reducers: {
    changeMessage: (state, payload: PayloadAction<{ message: string }>) => {
      state.message = payload.payload.message
    }
  }
})

export const { changeMessage } = basicSlice.actions

export const selectMessage = (state: RootState): string => state.basic.message
export default basicSlice.reducer
