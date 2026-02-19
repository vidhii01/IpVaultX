
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TokenomicsSection from '../components/sections/Tokenomics';

const TokenomicsPage = () => (
    <div className="bg-dark min-h-screen text-white font-body">
        <Navbar />
        <main className="pt-24">
            <TokenomicsSection />
        </main>
        <Footer />
    </div>
);

export default TokenomicsPage;
