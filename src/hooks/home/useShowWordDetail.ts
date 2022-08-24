import { clearWordDetail, fetchWordDetail } from './../../feature/wordDetailSlice';
import { useAppDispatch } from './../../app/hooks';
import { useState } from "react";




function useShowWordDetail(toShow: boolean) {
      const dispatch = useAppDispatch();
      const [showDetail, setShowDetail] = useState<boolean>(toShow);

      const setDetailShow = (index: string): void=>{
            setShowDetail(prevState=> !prevState)
            
            if(!showDetail){
                  dispatch(fetchWordDetail(index));
            }
            
            if(showDetail){
                  dispatch(clearWordDetail())
            }
      }

      return [showDetail, setDetailShow] as const
}

export default useShowWordDetail