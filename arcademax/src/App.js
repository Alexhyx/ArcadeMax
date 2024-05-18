import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Search from './components/Search/search';
import NavBar from './components/Header/NavBar';
import Profile from './components/Profile/ProfilePage';
import Forum from './components/Forum/Forum';
import AboutPage from './components/About/About';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/search" element={<Search />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/ProfilePage" element={<Profile/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        

      </Routes>
    </BrowserRouter>
    

      
        
  );
  
}

export default App;
