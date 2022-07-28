import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Contact from './components/Contact'
import Cybersecurity from './components/Cybersecurity';
import Developpement from './components/Developpement';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/service" element={<Service />}>
            <Route path='/service/developpement' element={<Developpement />}/>
            <Route path='/service/cybersecurity' element={<Cybersecurity />}/>

          </Route>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>

      </React.StrictMode>

      
    </div>
  );
}

export default App;
