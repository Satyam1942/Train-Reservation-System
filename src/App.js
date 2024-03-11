import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home'
import Traindata from './components/Traindata';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BackgroundSlideshow from './components/BackgroundSlideshow';

// const express = require("express");
// const app=express()
// app.use(express.json())
// app.listen(3001,()=>{
//   console.log("Server running")
// })

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <BackgroundSlideshow/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/traindata' element={<Traindata/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
