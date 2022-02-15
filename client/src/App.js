import './App.css';
import Games from './components/Videogames/Games';
import { Route, Routes } from 'react-router-dom';
import GameDetail from './components/Videogames/GameDetail';

function App() {
  return (
      <Routes>
        <Route path='/games' element={<Games/>} />
        <Route path='/games/:idCiudad' element={<GameDetail/>}/>
      </Routes>
  );
}

export default App;
