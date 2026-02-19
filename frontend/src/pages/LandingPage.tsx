
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';

const LandingPage = () => {
    return (
        <div className="relative bg-dark-100 min-h-screen text-white font-body selection:bg-primary-500/30 overflow-hidden">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
