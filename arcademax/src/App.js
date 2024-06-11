import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';

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

  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const userState = auth.onAuthStateChanged(user => {
      setSignedIn(!!user);
    });

    return () => userState();
  }, []);

  return (
    <BrowserRouter>
      <NavBar signedIn={signedIn} />
      <Routes>
        
        <Route path="/" element={<Search/>} />
        {signedIn && <Route path="/Forum" element={<Forum signedIn={signedIn} />} />}
        {signedIn && <Route path="/ProfilePage" element={<Profile userId={userId} />} />}
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;