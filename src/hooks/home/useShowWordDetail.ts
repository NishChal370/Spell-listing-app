import { useState } from "react";


function useShowWordDetail(toShow : boolean) {
      const [showDetail, setShowDetail] = useState<boolean>(toShow);

      const setDetailShow = (): void=>{
            setShowDetail(prevState => !prevState);
      }

      return [showDetail, setDetailShow] as const
}

export default useShowWordDetail