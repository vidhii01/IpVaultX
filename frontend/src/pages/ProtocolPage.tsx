
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProtocolSection from '../components/sections/Protocol';

const ProtocolPage = () => (
    <div className="bg-dark min-h-screen text-white font-body">
        <Navbar />
        <main className="pt-24">
            <ProtocolSection />
        </main>
        <Footer />
    </div>
);

export default ProtocolPage;
