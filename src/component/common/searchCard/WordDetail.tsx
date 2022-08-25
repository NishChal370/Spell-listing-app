import { nanoid } from 'nanoid';
import Star from './Star';
import { useAppSelector } from '../../../app/hooks';
import { LoadingMessage, ErrorMessage } from '../../index';

interface WordDetailProps{
      toShow: boolean,
      index: string,
}

function WordDetail({ toShow, index}: WordDetailProps) {
      const { loading, error, wordDetail } = useAppSelector(state => state.wordDetail);
      
      if( toShow && loading) return <LoadingMessage/>
      
      if (!(wordDetail['index'] === index)) return null;


      if ( !loading && error ) return <ErrorMessage error={error}/>
      
      if (!loading && Object.keys(wordDetail).length)return (
            <main className="flex flex-col gap-2">
                  <div className="star__container flex gap-1">
                        <h3 className="font-semibold text-md text-[#383737de]">Level: </h3>
                        
                        {[...Array(wordDetail['level'])].map(()=> <Star key={nanoid()}/>)}
                  </div>

                  <article className="w-[96%] bg-[#ffffff] rounded-b-lg self-center text-justify">
                        <h3>
                              {wordDetail['desc'].map((word: any)=> <span key={nanoid()}>{word}</span>)}
                        </h3>
                  </article>
            </main>
      )

      return null
}

export default WordDetail