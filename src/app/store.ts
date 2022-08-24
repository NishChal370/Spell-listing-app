import { configureStore } from "@reduxjs/toolkit";
import SearchWordReducer from '../feature/searchWordSlice';

const store = configureStore({
      reducer: {
            searchedWords: SearchWordReducer,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch