import './App.css';
import Games from './components/Videogames/Games/Games';
import { Route, Routes } from 'react-router-dom';
import GameDetail from './components/Videogames/GameDetail/GameDetail';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import GamesByName from './components/Videogames/GamesByName/GamesByName';
import CreateGame from './components/CreateGames/CreateGames';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  return (
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/games' element={<Games/>}/>
          <Route path='/games/:idCiudad' element={<GameDetail/>}/>
          <Route path='/search/:name' element={<GamesByName/>}/> 
          <Route path='/create' element={<CreateGame/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route index element={<LandingPage/>}/>
      </Routes>
  );
};

export default App;
