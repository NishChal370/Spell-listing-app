import { SearchIcon, } from "../assets";
import { useSearchInput } from "../hooks";
import { SearchedWords } from "../component";

function Home() {
      const [inputValue, changeInputHandler, submitInputHandler] = useSearchInput('');

      return (
            <div className="home__container flex flex-col gap-14 justify-center mt-[8rem]
                        sm:w-[46rem]
                        md:w-[50rem]"
            >
                  
                  <header className="flex flex-col gap-8 justify-center align-middle">
                        <h1 className="header__title font-bold text-center text-4xl text-[#3d3d3d]">
                              Search for the desired word
                        </h1>
                        
                        <form className="flex justify-center drop-shadow-md h-[2.22rem]
                                    sm:h-[2.66rem]"
                                    onSubmit={submitInputHandler}
                        >
                              <input role='searchInput' className="search__input w-[80%] h-full px-4  py-1 self-center text-lg bg-white rounded-l-lg focus:outline-none focus:shadow-outline focus:border-y-[#036aa19d] focus:border-l-[#036aa19d] focus:border-l-2 focus:border-y-2" 
                                    type="text" placeholder="Search words... [suggested word: h]"
                                    value={inputValue} onChange={changeInputHandler}
                              />

                              <button name="search" className="w-[12%] h-full pl-3 pr-2 py-2 bg-[#036aa1f1] border-1 flex justify-center hover:border-[#0369a1]  drop-shadow-2xl rounded-r-lg"
                                    type="submit"
                              >
                                    <img className="w-[70%] h-full white--image object-contains self-center
                                                md:w-[2rem]" 
                                          src={SearchIcon} alt="search-icon"
                                    />
                              </button>
                        </form>
                  </header>


                  <main className="w-[90%] flex flex-col gap-6 justify-center align-middle self-center">

                        <SearchedWords/>
                  </main>

            </div>
      )
}

export default Home