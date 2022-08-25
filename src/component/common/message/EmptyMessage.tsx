
interface EmptySearchMessageProps{
      error: string
      imageLink: string
}

function EmptyMessage({error, imageLink}: EmptySearchMessageProps) {

      return (
            <div className="text-center text-2xl font-bold text-red-400 flex flex-col justify-center">
                  <img className="self-center" src={imageLink} alt="no-search-icon" />      
                  <h1>{error}</h1>
            </div>
      )
}

export default EmptyMessage