import { createSlice, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

export const wantToReadSlice = createSlice({
  name: 'wantToRead',
  initialState: {
    items: [],
  },
  reducers: {
    addToWantToRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      if (state.items.find((item) => item.id === id)) return state;
      state.items.push({ id, authors, smallThumbnail, title });
    },
    removeFromWantToRead: (state, action) => {
      const { id } = action.payload;
      state.items.splice(state.items.indexOf(id), 1);
    },
  },
});

export const {
  addToWantToRead,
  removeFromWantToRead,
} = wantToReadSlice.actions;

export const didReadSlice = createSlice({
  name: 'didRead',
  initialState: {
    items: [],
  },
  reducers: {
    addToDidRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      if (state.items.find((item) => item.id === id)) return state;
      state.items.push({ id, authors, smallThumbnail, title });
    },
    removeFromDidRead: (state, action) => {
      const { id } = action.payload;
      state.items.splice(state.items.indexOf(id), 1);
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
