import { StarIcon } from '../../../assets'

function Star() {
      return (
            <div className=" star__img w-5 h-5 ">
                  <img className="w-full h-full cover"
                        src={StarIcon} alt="star-icon" 
                  />
            </div> 
      )
}

export default Star