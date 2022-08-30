import { useNavigate } from "react-router-dom";
import { FavoriteIcon, LogoIcon } from "../../assets";

function NavBar() {
      const navigate = useNavigate();

      return (
            <nav className="nav-bar__container w-[100%]  bg-white--color border border-b-2 border-[#dee4e7a1] px-10 py-2 flex justify-between fixed z-10
                        md:px-12"
            >
                  <div className="flex flex-row gap-2">
                        <div role='logo-button'  className="logo w-8 h-8 self-center cursor-pointer
                                    md:w-10 md:h-10" 
                              onClick={()=>navigate('/')}
                        >
                              <img className="w-full h-full"
                                    src={LogoIcon} alt="app-logo" 
                              />
                        </div>
            
                        <h1 className="text-2xl font-bold self-center
                                    md:text-3xl"
                        >
                              <span className="text-[#0369a1]">Spell </span>
                              <span className="text-[#be123c]">Listing</span>
                        </h1>
                  </div>

                  <aside role='favourite-button' className="w-9 h-9 p-1 self-center border-2 rounded-[50%] border-[#0369a1] cursor-pointer hover:drop-shadow-xl
                                    md:w-12 md:h-12" 
                        onClick={()=>navigate('/favorite')}
                  >
                        <img className="w-full h-full self-center"
                              src={FavoriteIcon} alt="favorite-icon" 
                        />
                  </aside>
            </nav>
      )
}

export default NavBar