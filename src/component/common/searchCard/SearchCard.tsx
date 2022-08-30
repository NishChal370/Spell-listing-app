import { WordDetail } from '../../index';
import { DownArrowIcon, TickIcon } from '../../../assets';

interface SearchCardProps{
      index: string
      title: String
      showDetail: boolean
      isInFavourite: boolean
      setDetailShow: (index: string) => void
      modifyLocalStore: (word: string) => void
}

function SearchCard({ index, title, showDetail, setDetailShow, modifyLocalStore, isInFavourite }: SearchCardProps) {
      
      return (
            <div className="flex flex-col gap-2 justify-center bg-[#ffffff] drop-shadow-md px-4 py-3  rounded-lg" >
                  <header className="w-full flex flex-col justify-between gap-3
                              sm:gap-10"
                  >
                        <h1 className="text-xl text-[#383737] font-bold self-start">{title}</h1>
                                                                  
                        <aside className="flex gap-2 self-end justify-end">
                              <button role='favourite-button' className='bg-[#f4b6b662]  text-[#ff0000] rounded-lg px-4 p-1 flex gap-1'
                                    onClick={()=>modifyLocalStore(index)}
                              >
                                    Favourite
                                    <img role='favourite-img' className={`w-6 self-center ${(isInFavourite ?'hidden': '')}`}
                                          src={TickIcon} alt="tick-icon" 
                                    />
                              </button>
                              
                              <button role='showDetail-button' className='bg-[#ff0000] text-white rounded-lg px-4 p-1 flex gap-2'
                                    onClick={()=>setDetailShow(index)}
                              >
                                    Detail
                                    <img className={`w-4 self-center white--image ${(showDetail)  ?'rotate-180' : ''}`}
                                          src={DownArrowIcon} alt="down-icon" 
                                    />
                              </button>
                        </aside>
                  </header>

                  <WordDetail
                        toShow={showDetail}
                        index={index}
                  />
            </div>
      )
}

export default SearchCard