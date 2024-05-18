import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/Header/HeaderComponent';
import Profile from './components/Profile/ProfilePage'
import ArcadeInputForm from './components/ArcadeInput/ArcadeInput';
import ReportIssue from './components/UserReport/UserReport';
import AboutPage from './components/About/About';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <ArcadeInputForm/>
      <ReportIssue/>
      <AboutPage/>
    </div>
        
  );
}

export default App;
