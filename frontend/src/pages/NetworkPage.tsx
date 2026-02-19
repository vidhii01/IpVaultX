
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NetworkSection from '../components/sections/Network';

const NetworkPage = () => (
    <div className="bg-dark min-h-screen text-white font-body">
        <Navbar />
        <main className="pt-24">
            <NetworkSection />
        </main>
        <Footer />
    </div>
);

export default NetworkPage;
