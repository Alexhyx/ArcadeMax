import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import LoginForm from './components/LoginForm';

function App() {
  const handleLogin = (username, password) => {
    // Implement your login logic here, such as an API call
    console.log('Logging in', username, password);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
