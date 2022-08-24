import { useState } from 'react';
import { useAppDispatch } from './../../app/hooks';
import { fetchSearchedWord } from '../../feature/searchWordSlice';


function useSearchInput(initialState: string) {
      const dispatch = useAppDispatch();
      const [inputValue, setInputValue] = useState<string>(initialState);

      const changeInputHandler = ({target}:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
            
            setInputValue(target.value);
      }

      const submitInputHandler = (event: React.FormEvent<HTMLFormElement>) =>{
            event.preventDefault();

            dispatch(fetchSearchedWord(inputValue));
      }   

      return [inputValue, changeInputHandler, submitInputHandler] as const;
}

export default useSearchInput