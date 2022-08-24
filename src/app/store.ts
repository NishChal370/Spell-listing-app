import { configureStore } from "@reduxjs/toolkit";
import wordDetailSlice from "../feature/wordDetailSlice";
import SearchWordReducer from '../feature/searchWordSlice';

const store = configureStore({
      reducer: {
            searchedWords: SearchWordReducer,
            wordDetail: wordDetailSlice,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch