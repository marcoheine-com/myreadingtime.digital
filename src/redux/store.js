import { createSlice, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

export const wantToReadSlice = createSlice({
  name: 'wantToRead',
  initialState: [],
  reducers: {
    addToWantToRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      if (state.find((item) => item.id === id)) return state;
      state.push({ id, authors, smallThumbnail, title });
    },
    removeFromWantToRead: (state, action) => {
      const id = action.payload;

      return state.filter((item) => item.id !== id);
    },
  },
});

export const {
  addToWantToRead,
  removeFromWantToRead,
} = wantToReadSlice.actions;

export const didReadSlice = createSlice({
  name: 'didRead',
  initialState: [],
  reducers: {
    addToDidRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      if (state.find((item) => item.id === id)) return state;
      state.push({ id, authors, smallThumbnail, title });
    },
    removeFromDidRead: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToDidRead, removeFromDidRead } = didReadSlice.actions;

const persistedState = loadState();

const store = configureStore({
  reducer: {
    wantToRead: wantToReadSlice.reducer,
    didRead: didReadSlice.reducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    wantToRead: store.getState().wantToRead,
    didRead: store.getState().didRead,
  });
});

export default store;
