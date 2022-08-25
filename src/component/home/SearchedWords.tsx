import { nanoid } from "nanoid";
import { NoSearchGif } from "../../assets";
import { useAppSelector } from "../../app/hooks";
import { useLocalStore, useShowWordDetail } from "../../hooks";
import { SearchCard, ErrorMessage, LoadingMessage, EmptyMessage } from "../index";


function SearchedWords() {
      const [showDetail, setDetailShow] = useShowWordDetail();
      const [localStorage, modifyLocalStore] = useLocalStore();
      const { loading, error, searchedWords, isEmptySearch } = useAppSelector(state => state.searchedWords);


      if(isEmptySearch) return <EmptyMessage error={error}  imageLink={NoSearchGif}/>

      if ( loading ) return <LoadingMessage/>

      if ( !loading && error ) return <ErrorMessage error={error}/>


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