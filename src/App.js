import './App.css';
import { Header } from './components/header';
import { Userlist } from './components/userlist';
import { Adduser } from './components/adduser';
import { Userdetails } from './components/userdetails';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { visibleComponent } = useContext(AppContext);

  return (
    <div className="App">
      {visibleComponent === "default" && <>
        <Header />
        <Userlist />
        <Adduser />
      </>}
      {visibleComponent === "details" && <Userdetails />}
    </div>
  );
}

export default App;
