import './App.css';
import Games from './components/Videogames/Games/Games';
import { Route, Routes } from 'react-router-dom';
import GameDetail from './components/Videogames/GameDetail/GameDetail';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import GamesByName from './components/Videogames/GamesByName/GamesByName';

function App() {
  return (
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/games' element={<Games/>}/>
          <Route path='/games/:idCiudad' element={<GameDetail/>}/>
          <Route path='/search/:name' element={<GamesByName/>}/>
        </Route>
        <Route index element={<LandingPage/>}/>
      </Routes>
  );
};

export default App;
