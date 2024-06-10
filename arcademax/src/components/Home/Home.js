import React from "react";
import './Home.css'
import Footer from "../Footer/Footer";
import { useAuth } from '../../contexts/AuthContext';


function Home() {
  const { currentUser, userLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>Home Page</h1>
        {userLoggedIn ? (
          <div>
            <p>Welcome, {currentUser.email}</p>
          </div>
        ) : (
          <p>No user is signed in</p>
        )}
    </div>
  );
}
export default Home;



