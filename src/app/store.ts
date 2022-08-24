import { configureStore } from "@reduxjs/toolkit";
import WordDetailSlice from "../feature/wordDetailSlice";
import SearchWordReducer from '../feature/searchWordSlice';
import FavouriteWordDetailSlice from "../feature/FavouriteWordDetailSlice";

const store = configureStore({
      reducer: {
            searchedWords: SearchWordReducer,
            wordDetail: WordDetailSlice,
            favouriteWordsDetail: FavouriteWordDetailSlice,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch