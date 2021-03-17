import { createSlice, configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from '../utils/localStorage'

export const didReadSlice = createSlice({
  name: 'didRead',
  initialState: [],
  reducers: {
    addToDidRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload
      if (state.find((item) => item.id === id)) return state
      state.push({ id, authors, smallThumbnail, title })
    },
    removeFromDidRead: (state, action) => {
      const id = action.payload
      return state.filter((item) => item.id !== id)
    },
  },
})

export const { addToDidRead, removeFromDidRead } = didReadSlice.actions

const persistedState = loadState()

const store = configureStore({
  reducer: {
    didRead: didReadSlice.reducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    didRead: store.getState().didRead,
  })
})

export default store
