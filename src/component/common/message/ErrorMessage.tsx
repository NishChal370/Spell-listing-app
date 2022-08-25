import { NotFoundIcon } from "../../../assets";


function ErrorMessage({error}:{error: string}) {

      return (
            <div  className="flex flex-col justify-center text-center gap-2">
                  <img className="w-[10rem] self-center"  src={NotFoundIcon} alt="error-icon" />
                  <h1 className='text-2xl text-[#be123c]'><strong>Error: </strong> {error}</h1>
            </div>
      )
}

export default ErrorMessage