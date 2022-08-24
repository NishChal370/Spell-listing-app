import { nanoid } from "nanoid";
import { useAppSelector } from "../../app/hooks";
import SearchCard from "../common/searchCard/SearchCard";
import { useLocalStore, useShowWordDetail } from "../../hooks";

function FavouriteCards() {
      const [showDetail, setDetailShow] = useShowWordDetail();
      const [localStorage, modifyLocalStore] = useLocalStore();
      const { loading, error, favouriteWordsList } = useAppSelector(state => state.favouriteWordsDetail);

      
      if ( loading ) return <h1>Loading...</h1>

      if ( !loading && error ) return <h1>{"Error: "+ error}</h1>


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

      return <h3>Favourite List is Empty</h3>
}

export default FavouriteCards