import { List } from 'reselect/es/types';
import { nanoid } from 'nanoid';
import Star from './Star';


interface WordDetailProps{
      toShow: boolean,
      level: number,
      description: List,
}

function WordDetail({toShow, level, description}: WordDetailProps) {
      
      return (
            <main className={`flex flex-col gap-2 ${!toShow && 'hidden'}`}>
                  <div className="star__container flex gap-1">
                        <h3 className="font-semibold text-md text-[#383737de]">Level: </h3>
                        
                        {[...Array(level)].map(()=> <Star key={nanoid()}/>)}
                  </div>

                  <article className="w-[96%]bg-[#ffffff] rounded-b-lg self-center text-justify ">
                        <h3>
                             {description.map(word=> <span key={nanoid()}>{word}</span>)}
                        </h3>
                  </article>
            </main>
      )
}

export default WordDetail