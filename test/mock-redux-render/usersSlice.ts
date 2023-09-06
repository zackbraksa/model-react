import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// mswjs.io -  Mock Service Worker
import { userAPI } from './userAPI'
import type { RootState } from './store'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await userAPI.fetchUser()
  return response.data
})

interface UserState {
  name: string
  status: 'idle' | 'loading' | 'complete'
}

const initialState: UserState = {
  name: 'No user',
  status: 'idle',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete'
      state.name = action.payload
    })
  },
})

export const selectUserName = (state: RootState) => state.user.name
export const selectUserFetchStatus = (state: RootState) => state.user.status

export default userSlice.reducer
