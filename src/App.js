import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home'
import Traindata from './components/Traindata';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import TrainDetails from './components/TrainDetails';



function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <BackgroundSlideshow/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/traindata' element={<Traindata/>} />
          <Route path='/traindetails' element={<TrainDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
