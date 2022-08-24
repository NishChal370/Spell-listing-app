import { nanoid } from 'nanoid';
import Star from './Star';
import { useAppSelector } from '../../../app/hooks';

interface WordDetailProps{
      toShow: boolean,
      index: string,
}

function WordDetail({ toShow, index}: WordDetailProps) {
      const { loading, error, wordDetail} = useAppSelector(state => state.wordDetail);

      if((wordDetail['index'] === index || toShow) && loading) return <h1>Loading..</h1>
      
      if (!(wordDetail['index'] === index)) return null;


      if ( !loading && error ) return <h1>{"Error: "+ error}</h1>
      
      if (!loading && Object.keys(wordDetail).length)return (
            <main className={`flex flex-col gap-2 ${!(wordDetail['index'] === index) && 'hidden'}`}>
                  <div className="star__container flex gap-1">
                        <h3 className="font-semibold text-md text-[#383737de]">Level: </h3>
                        
                        {[...Array(wordDetail['level'])].map(()=> <Star key={nanoid()}/>)}
                  </div>

                  <article className="w-[96%] bg-[#ffffff] rounded-b-lg self-center text-justify ">
                        <h3>
                              {wordDetail['name']}
                             {wordDetail['desc'].map((word: any)=> <span key={nanoid()}>{word}</span>)}
                        </h3>
                  </article>
            </main>
      )

      return null
}

export default WordDetail