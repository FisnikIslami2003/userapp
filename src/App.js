import './App.css';
import { Header } from './components/header';
import { Userlist } from './components/userlist';
import { Adduser } from './components/adduser';
import { Userdetails } from './components/userdetails';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
           <Route
            path='/'
            element={
              <>
              <Userlist/>
              <Adduser/>
              </>
            }
           
           
           />
          <Route
           path='/details'
           element={
            <>
            <Userdetails/>
            
            </>
           }

          />

        </Routes>
          
    </div>
  );
}

export default App;
