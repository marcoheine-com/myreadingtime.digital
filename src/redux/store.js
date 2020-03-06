import { createSlice, configureStore } from '@reduxjs/toolkit';

export const wantToReadSlice = createSlice({
  name: 'wantToRead',
  initialState: {
    items: []
  },
  reducers: {
    addToWantToRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      state.items.push({ id, authors, smallThumbnail, title });
    },
    removeFromWantToRead: (state, action) => {
      const { id } = action.payload;
      state.items.splice(
        state.items.find(item => item.id === id),
        1
      );
    }
  }
});

export const {
  addToWantToRead,
  removeFromWantToRead
} = wantToReadSlice.actions;

export const didReadSlice = createSlice({
  name: 'didRead',
  initialState: {
    items: []
  },
  reducers: {
    addToDidRead: (state, action) => {
      const { id, authors, smallThumbnail, title } = action.payload;
      state.items.push({ id, authors, smallThumbnail, title });
    },
    removeFromDidRead: (state, action) => {
      const { id } = action.payload;
      state.items.splice(
        state.items.find(item => item.id === id),
        1
      );
    }
  }
});

export const { addToDidRead, removeFromDidRead } = didReadSlice.actions;

const store = configureStore({
  reducer: {
    wantToRead: wantToReadSlice.reducer,
    didRead: didReadSlice.reducer
  }
});

export default store;
