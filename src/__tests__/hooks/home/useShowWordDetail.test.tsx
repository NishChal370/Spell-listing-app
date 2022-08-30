import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { renderHook } from "@testing-library/react";
import { useShowWordDetail } from '../../../hooks';


const mockDispatch = jest.fn();

jest.mock( 'react-redux', () => ({
      useDispatch: () => mockDispatch,
}) );


describe('useShowWordDetail custom hook', ()=>{

      let useShowWordDetailHook = renderHook(() => useShowWordDetail());

      beforeEach(()=>{

            useShowWordDetailHook = renderHook(() => useShowWordDetail());
      })

      test('showDetail index value should be empty by default', () => {
            const [showDetail, setDetailShow] = useShowWordDetailHook.result.current;
            
            expect(showDetail.index).toBe('');
            expect(setDetailShow).toBeInstanceOf(Function);
      })

      test('search index detail should be changed to "abc", also dispatch should be called once.', () => {
            const { result } = useShowWordDetailHook;

            expect(result.current[0].index).toBe('');

            act(() => {

                  result.current[1]('abc');
            })

            expect(result.current[0].index).toBe('abc');
            expect(mockDispatch).toHaveBeenCalledTimes(1);
      })
})