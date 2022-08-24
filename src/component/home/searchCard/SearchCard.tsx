import { DownArrowIcon } from '../../../assets';
import WordDetail from './WordDetail';

interface SearchCardProps{
      index: string
      title: String
      setDetailShow: (index: string) => void
      showDetail: {index: string}
}

function SearchCard({ index, title, showDetail, setDetailShow }: SearchCardProps) {
      
      return (
            <div className="flex flex-col gap-2 justify-center bg-[#ffffff] drop-shadow-md px-4 py-3  rounded-lg" >
                  <header className="w-full flex flex-col justify-between gap-3
                              sm:gap-10"
                  >
                        <h1 className="text-xl text-[#383737] font-bold self-start">{title}</h1>
                                                                  
                        <aside className="flex gap-2 self-end justify-end">
                              <button className='bg-[#f4cfb662]  text-[#ff6600] rounded-lg px-4 p-1'>Favourite</button>
                              
                              <button className='bg-[#ff6600] text-white rounded-lg px-4 p-1 flex gap-2'
                                    onClick={()=>setDetailShow(index)}
                              >
                                    Detail
                                    <img className={`w-4 self-center white--image ${(showDetail.index === index)  ? 'rotate-180' : ''}`}
                                          src={DownArrowIcon} alt="down-icon" 
                                    />
                              </button>
                        </aside>
                  </header>

                  <WordDetail
                        toShow={(showDetail.index === index)}
                        index={index}
                  />
            </div>
      )
}

export default SearchCard