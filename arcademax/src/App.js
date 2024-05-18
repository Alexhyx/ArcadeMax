import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Search from './components/Search/search';
import NavBar from './components/Header/NavBar';


function App() {
  /*<header className="App-header">
        <NavBar/>
      </header>
      <PostBoard/>

      <Search/>
      
      <HeaderComp/>

      <ArcadeInfoProvider>
      <Profile/>
      </ArcadeInfoProvider>
    </div>*/

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/search" element={<Search />} />
        

      </Routes>
    </BrowserRouter>
    

      
        
  );
  
}

export default App;
