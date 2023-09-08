import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

/* TODO: state object for selector to query
state = {
  main: {
    auth: {
      user: {},
    },
    vxg: {
      cmp: {},
    },
  },
}
*/

export const fetchMain = createAsyncThunk('main/fetchMain', async () => {
  const response = { data: {} }
  return response.data
})

interface MainState {
  name: string
  status: 'idle' | 'loading' | 'complete'
}

const initialState: MainState = {
  name: 'main',
  status: 'idle',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMain.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.status = 'complete'
      // Type '{}' is not assignable to type 'string'
      // state.name = action.payload
    })
  },
})

export const selectMain = (state: RootState) => state.main
// Property 'vxg' does not exist on type 'MainState'
// export const selectVxg = (state: RootState) => state.main.vxg

export default mainSlice.reducer
