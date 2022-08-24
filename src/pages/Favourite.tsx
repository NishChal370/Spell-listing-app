import { useEffect } from "react"
import { useLocalStore } from "../hooks";
import { useAppDispatch } from "../app/hooks";
import { FavouriteCards } from "../component"
import { clearFavourite, fetchFavouriteWord } from "../feature/FavouriteWordDetailSlice";

function Favourite() {
      const dispatch = useAppDispatch();
      const [ localStore ] = useLocalStore();

      useEffect(()=>{
            localStore.forEach((word)=>{
                  dispatch(fetchFavouriteWord(word.toString()))
            });

            return()=>{
                  dispatch(clearFavourite());
            }
      },[]);

      return (
            <div className="favourite__container flex flex-col gap-14 justify-center mt-[8rem]
                  sm:w-[46rem]
                  md:w-[50rem]"
            > 
                  <header className="flex flex-col gap-8 justify-center align-middle">
                        <h1 className="font-bold text-center text-4xl text-[#3d3d3d]">
                              Yours Favourite word
                        </h1>
                  </header>

                  <main className="w-[90%] flex flex-col gap-6 justify-center align-middle self-center">

                        <FavouriteCards/>
                  </main>
            </div>
      )
}

export default Favourite