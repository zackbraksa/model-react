import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

let mainData = {
  main: {
    auth: {
      user: 'user',
    },
    vxg: {
      cmp: 'cmp',
    },
  },
}

export const fetchMain = createAsyncThunk('main/fetchMain', async () => {
  const response = { data: mainData }
  return response.data
})

const initialState = {
  auth: { user: 'user' },
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
})

export const selectMain = (state: RootState) => state.main

export default mainSlice.reducer
