import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './component';
import { Home, Favourite } from './pages';

function App() {
      
      return (
            <div className="App w-full">
                  <NavBar/>

                  <main  className="main-body__container flex justify-center mb-[10rem]"
                  >
                        <Routes>
                              <Route path="/favorite" element={<Favourite/>} />
                              <Route path="/" element={<Home/>}/>
                              <Route path="*" element={<Navigate to="/" replace /> }/>
                        </Routes>
                        
                  </main>
            </div>
      );
}

export default App;
