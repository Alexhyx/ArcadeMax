import './App.css';
import NavBar from './components/Header/NavBar';
import PostBoard from './components/Forum/PostBoard/PostBoard';
import Map from './components/Search/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <PostBoard/>
      <Map/>
    </div>
        
  );
}

export default App;
