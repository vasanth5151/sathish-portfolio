import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import VideoEdits from './components/VideoEdits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <Navbar />
            <Hero />
            <ClientMarquee />
            <Services />
            <About />
            <Projects />
            <VideoEdits />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
