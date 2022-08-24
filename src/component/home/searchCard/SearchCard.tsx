import { DownArrowIcon } from '../../../assets';
import { useShowWordDetail } from '../../../hooks';
import WordDetail from './WordDetail';

interface SearchCardProps{
      title: string
}

function SearchCard({title}: SearchCardProps) {
      const [showDetail, setDetailShow] = useShowWordDetail(false);

      return (
            <div className="flex flex-col gap-2 justify-center bg-[#ffffff] drop-shadow-md px-4 py-3  rounded-lg" >
                  <header className="w-full flex flex-col justify-between gap-3
                              sm:gap-10"
                  >
                        <h1 className="text-xl text-[#383737] font-bold self-start">{title}</h1>
                                                                  
                        <aside className="flex gap-2 self-end justify-end">
                              <button className='bg-[#f4cfb662]  text-[#ff6600] rounded-lg px-4 p-1'>Favourite</button>
                              
                              <button className='bg-[#ff6600] text-white rounded-lg px-4 p-1 flex gap-2'
                                    onClick={setDetailShow}
                              >
                                    Detail
                                    <img className={`w-4 self-center white--image ${showDetail && 'rotate-180'}`}
                                          src={DownArrowIcon} alt="down-icon" 
                                    />
                              </button>
                        </aside>
                  </header>

                  <WordDetail
                        toShow={showDetail}
                        level={2}
                        description= {[
                              "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.",
                              "The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.",
                              "If you move so that an affected creature is forced to pass through the barrier, the spell ends."
                        ]}
                  />
            </div>
      )
}

export default SearchCard