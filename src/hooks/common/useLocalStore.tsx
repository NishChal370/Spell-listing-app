import { useState } from "react";
import { List } from "reselect/es/types";
import { useAppDispatch } from "../../app/hooks";
import { removeFavouriteWord } from "../../feature/FavouriteWordDetailSlice";


const getLocalStore = ()=>{
      let localStorePresent = localStorage.getItem('favouriteWords');
      
      if(localStorePresent == null) return []

      return JSON.parse(localStorePresent); 
}


function useLocalStore() {
      const dispatch = useAppDispatch();
      const [localStore, setLocalStore] = useState<List>(getLocalStore());

      const modifyLocalStore = (word: string)=>{
            let localStorePresent =  getLocalStore();

            localStorePresent = (!localStorePresent.includes(word))
                        ? addLocalStore(word)
                        : removeLocalStore(word)
            
            setLocalStore(localStorePresent);

            localStorage.setItem('favouriteWords', JSON.stringify(localStorePresent));
      }

      const addLocalStore = (word: string): void=>{
            let localStorePresent =  getLocalStore();

            localStorePresent.push(word);

            return localStorePresent;
      }


      const removeLocalStore = (word: string): void=>{
            let localStorePresent =  getLocalStore();

            dispatch(removeFavouriteWord(word));
            
            return localStorePresent.filter((presentWord: string) => presentWord !== word);
      }

      return [localStore, modifyLocalStore] as const
}

export default useLocalStore