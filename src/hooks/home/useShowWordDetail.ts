import { useState } from "react";
import { useAppDispatch } from './../../app/hooks';
import { clearWordDetail, fetchWordDetail } from './../../feature/wordDetailSlice';



function useShowWordDetail() {
      const dispatch = useAppDispatch();
      const [showDetail, setShowDetail] = useState<{index: string}>({index:''});

      const setDetailShow = (index: string): void=>{

            (showDetail.index === index)
                  ? dispatch(clearWordDetail())
                  : dispatch(fetchWordDetail(index));

            setShowDetail(prevState=>{

                  if(prevState.index === index){

                        return { index: '' }
                  }

                  return{ index: index }
            })

      }

      return [showDetail, setDetailShow] as const
}

export default useShowWordDetail