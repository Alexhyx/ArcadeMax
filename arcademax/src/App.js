import './App.css';
import NavBar from './components/Header/NavBar';
import PostBoard from './components/Forum/PostBoard/PostBoard';
import Map from './components/Search/Map';
import HeaderComp from './components/Header/HeaderComponent';
import Profile from './components/Profile/ProfilePage'
import { ArcadeInfoProvider } from './stubData/ArcadeInfoHandler';
import GameLocationDropdowns from './components/Search/GameLocationDropdowns';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <PostBoard/>

      <ArcadeInfoProvider>
      <Map/>
      <GameLocationDropdowns/>
      </ArcadeInfoProvider>
      
      <HeaderComp/>

      <ArcadeInfoProvider>
      <Profile/>
      </ArcadeInfoProvider>
    </div>
        
  );
}

export default App;
