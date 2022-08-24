import { nanoid } from "nanoid";
import { useAppSelector } from "../../app/hooks";
import { useLocalStore, useShowWordDetail } from "../../hooks";
import SearchCard from "../common/searchCard/SearchCard";

function SearchedWords() {
      const [showDetail, setDetailShow] = useShowWordDetail();
      const [localStorage, modifyLocalStore] = useLocalStore();
      const { loading, error, searchedWords, isEmptySearch } = useAppSelector(state => state.searchedWords);
      
      if(isEmptySearch) return <h1>{error}</h1>

      if ( loading ) return <h1>Loading...</h1>

      if ( !loading && error ) return <h1>{"Error: "+ error}</h1>


      if (!loading && Object.keys(searchedWords).length) return (
            <>
            { searchedWords.map( ({index, name})=>{return(

                  <SearchCard key={nanoid()}
                        index = {index}
                        title={name}
                        showDetail={showDetail.index === index}
                        setDetailShow={setDetailShow}
                        modifyLocalStore={modifyLocalStore}
                        isInFavourite={!localStorage.includes(index)}
                  />
            )} ) }
            </>
            
      )

      return null
}

export default SearchedWords