import { nanoid } from "nanoid";
import SearchCard from "./searchCard/SearchCard";

function SearchedWords() {
      
      return (
            <>
            { [...Array(10)].map( ()=>{return(

                  <SearchCard key={nanoid()}
                        title="Antilife Shell"
                  />
            )} ) }
            </>
            
      )
}

export default SearchedWords