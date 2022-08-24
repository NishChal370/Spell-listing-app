import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
      loading: boolean,
      wordDetail: {[key: string]: any},
      error: string,
}


export const fetchWordDetail = createAsyncThunk(
      '/fetchWordDetail',
      (word: string)=>{
            return axios
                  .get(`https://www.dnd5eapi.co/api/spells/${word}`)
                  .then( ({data})=>data )
      }
)

const initialState: InitialState = {
      loading: false,
      wordDetail: {},
      error: 'Search for the required word.',
}

const WordDetailSlice = createSlice({
      name: 'wordDetail',
      initialState,
      reducers: {
            clearWordDetail: (state)=>{
                  state.loading = false;
                  state.error = '';
                  state.wordDetail = {}
            },
      },
      extraReducers: builder=> {
            builder.addCase(fetchWordDetail.pending, (state)=>{
                  state.loading = true;
                  state.error = '';
            })

            builder.addCase(fetchWordDetail.fulfilled, (state, action: PayloadAction<object>)=>{
                  state.error = '';
                  state.loading = false;
                  state.wordDetail = action.payload;                  
            })

            builder.addCase(fetchWordDetail.rejected, (state, action)=>{
                  state.loading = false;
                  state.wordDetail = [];
                  state.error = action.error.message || 'Something went wrong';
            })
      }
});


export default WordDetailSlice.reducer;
export const { clearWordDetail } = WordDetailSlice.actions;