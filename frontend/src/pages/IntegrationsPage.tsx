
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import IntegrationsSection from '../components/sections/Integrations';

const IntegrationsPage = () => (
    <div className="bg-dark min-h-screen text-white font-body">
        <Navbar />
        <main className="pt-24">
            <IntegrationsSection />
        </main>
        <Footer />
    </div>
);

export default IntegrationsPage;
