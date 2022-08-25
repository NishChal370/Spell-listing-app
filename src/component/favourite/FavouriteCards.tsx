import { nanoid } from "nanoid";
import { EmptyGif } from "../../assets";
import { useAppSelector } from "../../app/hooks";
import { useLocalStore, useShowWordDetail } from "../../hooks";
import { SearchCard, ErrorMessage, LoadingMessage, EmptyMessage } from "../index";

function FavouriteCards() {
      const [showDetail, setDetailShow] = useShowWordDetail();
      const [localStorage, modifyLocalStore] = useLocalStore();
      const { loading, error, favouriteWordsList } = useAppSelector(state => state.favouriteWordsDetail);

      
      if ( loading ) return <LoadingMessage/>

      if ( !loading && error ) return <ErrorMessage error={error}/>


      if (!loading && Object.keys(favouriteWordsList).length) return (
            <>
            { favouriteWordsList.map( ({index, name})=>{return(

                  <SearchCard key={nanoid()}
                        index = {index}
                        title={name}
                        showDetail={(showDetail.index === index)}
                        setDetailShow={setDetailShow}
                        modifyLocalStore={modifyLocalStore}
                        isInFavourite={!localStorage.includes(index)}
                  />
            )} )}
            </>
            
      )

      return <EmptyMessage error="Favourite List is Empty" imageLink={EmptyGif} />
}

export default FavouriteCards