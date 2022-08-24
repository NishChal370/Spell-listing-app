import { useState } from "react";
import { clearWordDetail, fetchWordDetail } from './../../feature/wordDetailSlice';
import { useAppDispatch } from './../../app/hooks';



function useShowWordDetail() {
      const dispatch = useAppDispatch();
      const [showDetail, setShowDetail] = useState({index:''});

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