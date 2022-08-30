import '@testing-library/jest-dom';
import { renderHook } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { useSearchInput } from '../../../hooks';


const initialState = {
      loading: false,
      searchedWords: [],
      error: 'Search for the required word.',
      isEmptySearch: true,
}

const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation( () => (initialState) );

jest.mock( 'react-redux', () => ({
      useDispatch: () => mockDispatch,
      useSelector: () => mockSelector(),
}) );


describe('useSearchInput custom hook', ()=>{

      let useSearchInputHook = renderHook(() => useSearchInput(''));

      beforeEach(()=>{

            useSearchInputHook = renderHook( ()=> useSearchInput(''));
      })

      test('input value should be empty by default', () => {
            const [inputValue, changeInputHandler, submitInputHandler] = useSearchInputHook.result.current;
            
            expect(inputValue).toBe('');
            expect(changeInputHandler).toBeInstanceOf(Function);
            expect(submitInputHandler).toBeInstanceOf(Function);
      })

      test('input value should be changed to "hi" ', () => {
            const { result } = useSearchInputHook;

            expect(result.current[0]).toBe('');

            act(() => {
                  const event: any = { target: {value: 'hi'} };

                  result.current[1]( event );
            })

            expect(result.current[0]).toEqual('hi');
      })


      test('should call dispatch function at once when submit input value', () => {
            const { result } = useSearchInputHook;

            act(() => {
                  const event: any = { preventDefault: ()=>{} };
                  
                  result.current[2]( event );
            });

            expect(mockDispatch).toHaveBeenCalledTimes(1);
      })
})