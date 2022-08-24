import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"


type FavouriteWord = {
      name: string,
      index: string,
}

type InitialState ={
      loading: boolean,
      error: string,
      favouriteWordsList: FavouriteWord[]
}

export const fetchFavouriteWord = createAsyncThunk(
      '/fetchFavouriteWord',
      (favouriteWord: string)=>{

            return axios
                  .get(`https://www.dnd5eapi.co/api/spells/${favouriteWord}`)
                  .then( ({data})=>{return {name: data['name'], index: data['index']}} )
      }
)


const initialState: InitialState = {
      loading: false,
      error: '',
      favouriteWordsList: [] 
}

const FavouriteWordDetailSlice = createSlice({
      name: 'searchWord',
      initialState,
      reducers: {
            removeFavouriteWord: (state, action: PayloadAction<string>)=>{
                  
                  state.favouriteWordsList = state.favouriteWordsList.filter(presentWord=> presentWord.index !== action.payload)
            },

            clearFavourite: (state)=>{
                  state.favouriteWordsList = [];
            }
      },
      extraReducers: builder=> {
            builder.addCase(fetchFavouriteWord.pending, (state)=>{
                  state.loading = true
            })

            builder.addCase(fetchFavouriteWord.fulfilled, (state, action: PayloadAction<FavouriteWord>)=>{
                  state.error = '';
                  state.loading = false;
                  state.favouriteWordsList.push(action.payload)
            })

            builder.addCase(fetchFavouriteWord.rejected, (state, action)=>{
                  state.loading = false;
                  state.favouriteWordsList = [];
                  state.error = action.error.message || 'Something went wrong';
            })
      }
});

export default FavouriteWordDetailSlice.reducer;
export const { removeFavouriteWord, clearFavourite } = FavouriteWordDetailSlice.actions;
