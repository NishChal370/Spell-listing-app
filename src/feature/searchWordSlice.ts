import { List } from 'reselect/es/types';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface SearchWord{
      index: string,
      name: String,
      url: string,
}

type InitialState = {
      loading: boolean,
      searchedWords: SearchWord[],
      error: string,
      isEmptySearch: boolean,
} 

const initialState: InitialState = {
      loading: false,
      searchedWords: [],
      error: 'Search for the required word.',
      isEmptySearch: true,
}

const SEARCHED_EMPTY:List = [{}]

export const fetchSearchedWord = createAsyncThunk(
      '/fetchSearchedWord',
      (searchedWord: string)=>{
            if(searchedWord === '') return SEARCHED_EMPTY

            return axios
                  .get(`https://www.dnd5eapi.co/api/spells/?name=${searchedWord}`)
                  .then( ({data})=>data.results )
      }
)


const SearchWordSlice = createSlice({
      name: 'searchWord',
      initialState,
      reducers: {},
      extraReducers: builder=> {
            builder.addCase(fetchSearchedWord.pending, (state)=>{
                  state.loading = true
                  state.isEmptySearch = false;
            })
            builder.addCase(fetchSearchedWord.fulfilled, (state, action: PayloadAction<SearchWord[]>)=>{
                  state.error = '';
                  state.loading = false;

                  if(!action.payload.length){
                        state.error = 'Searched term not found.';
                  }
                  else if(!Object.keys(action.payload[0]).length){
                        state.isEmptySearch = true;
                        state.error = 'Search for the required word.';
                  }
                  else{

                        state.searchedWords = action.payload;
                  }
                  
            })
            builder.addCase(fetchSearchedWord.rejected, (state, action)=>{
                  state.loading = false;
                  state.searchedWords = [];
                  state.isEmptySearch = false;
                  state.error = action.error.message || 'Something went wrong';
            })
      }
});


export default SearchWordSlice.reducer;