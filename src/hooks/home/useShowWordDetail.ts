import { useState } from "react";
import { useAppDispatch } from './../../app/hooks';
import { clearWordDetail, fetchWordDetail } from './../../feature/wordDetailSlice';



function useShowWordDetail() {
      const dispatch = useAppDispatch();
      const [showDetail, setShowDetail] = useState<{index: string}>({index:''});

      const setDetailShow = (index: string): void=>{

            setShowDetail(prevState=>{

                  if(prevState.index === index){
                        dispatch(clearWordDetail());

                        return { index: '' }
                  }

                  dispatch(fetchWordDetail(index));

                  return{ index: index }
            })

      }

      return [showDetail, setDetailShow] as const
}

export default useShowWordDetail