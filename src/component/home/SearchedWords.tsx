import { nanoid } from "nanoid";
import { useAppSelector } from "../../app/hooks";
import SearchCard from "./searchCard/SearchCard";

function SearchedWords() {
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
                  />
            )} ) }
            </>
            
      )

      return null
}

export default SearchedWords