import React from "react";
import './Home.css'
import Footer from "../Footer/Footer";

function Home() {
    return (
      <main>
        <section className="welcome">
          <h2>Welcome to ArcadeMax!</h2>
          <p>Explore the best arcade games, share your experiences, and connect with others!</p>
        </section>
        <section className="featured-games">
          <h3>Featured Games</h3>
          <div className="game">
            <img src="game1.png" alt="Game 1" />
            <h4>Pump It Up</h4>
            <p>Description of the game goes here...</p>
          </div>
          <div className="game">
            <img src="game2.png" alt="Game 2" />
            <h4>Dance Dance Revolution</h4>
            <p>Description of the game goes here...</p>
          </div>
        </section>

        <Footer/>
      </main>
    );
}
export default Home;