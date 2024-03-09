import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BackgroundSlideshow from './components/BackgroundSlideshow';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <BackgroundSlideshow/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
