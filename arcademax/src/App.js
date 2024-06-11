import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Search from './components/Search/search';
import NavBar from './components/Header/NavBar';
import Profile from './components/Profile/ProfilePage';
import Forum from './components/Forum/Forum';
import AboutPage from './components/About/About';
import LoginForm from './components/LoginPage/LoginForm';
import { UserContext } from './contexts/UserContext';


function App() {
  // const userId = 1 //regular ID
  const userId = 3; //arcade Owner ID
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={<Search/>} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/ProfilePage" element={<Profile userId={userId} />}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        

      </Routes>
    </BrowserRouter>
    
    

      
        
  );
  
}

export default App;
