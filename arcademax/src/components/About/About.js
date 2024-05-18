import React from 'react';
import './About.css';

function AboutPage() {
    return (
        <main>
            <section className="content-section">
                <h2>About ArcadeMax</h2>
                <p>Welcome to ArcadeMax, your premier source for all things arcade. Here, you can find out more about our services and community.</p>
            </section>
            <section className="content-section">
                <h3>Help Page</h3>
                <p>If you need assistance with any of our services, please visit our <a href="#help">help section</a>.</p>
            </section>
            <section className="content-section" id="faqs">
                <h3>Frequently Asked Questions (FAQs)</h3>
                <p>Have questions? Check out our <a href="#faqs">FAQs</a> for more information.</p>
            </section>
            <section className="content-section" id="terms">
                <h3>Terms and Conditions</h3>
                <p>Please read our <a href="#terms">Terms and Conditions</a> to understand the rules and regulations that govern the use of our services.</p>
            </section>
        </main>
    );
}

export default AboutPage;
