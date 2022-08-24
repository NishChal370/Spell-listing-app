import './App.css';
import { Home, NavBar } from './component';

function App() {
      
      return (
            <div className="App w-full">
                  <NavBar/>

                  <main  className="main-body__container flex justify-center mb-[10rem]"
                  >
                        <Home/>
                  </main>
            </div>
      );
}

export default App;
