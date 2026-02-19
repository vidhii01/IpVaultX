
import { motion } from 'framer-motion';
import { Download, FileText, ArrowLeft, ChevronDown } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

// Detect mobile browsers
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : ''
);

const PDF_PATH = '/Research paper - final.pdf';

// Google Docs viewer renders PDFs on all devices including mobile
const GOOGLE_VIEWER_URL = `https://docs.google.com/viewer?url=${encodeURIComponent(
    typeof window !== 'undefined'
        ? `${window.location.origin}${PDF_PATH}`
        : PDF_PATH
)}&embedded=true`;

const Whitepaper = () => {
    return (
        <div className="bg-dark min-h-screen text-white font-body selection:bg-primary-500/30">
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-6 relative">

                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Protocol</span>
                </Link>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Sidebar / Metadata */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-[1.1]">
                                    IpVault<span className="text-primary-500">X</span> <br />
                                    Whitepaper
                                </h1>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-primary-500/50 pl-4">
                                    A decentralized protocol for the immutable verification, encryption, and monetization of intellectual property assets on the blockchain.
                                </p>

                                <a
                                    href={PDF_PATH}
                                    download
                                    className="w-full flex items-center justify-center gap-3 bg-white text-black font-mono font-bold py-4 rounded-sm hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-lg hover:shadow-neon group mb-8"
                                >
                                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                    Download PDF (375kb)
                                </a>

                                {/* Table of Contents */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                    <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                        <FileText className="w-3 h-3" />
                                        Contents
                                    </h3>
                                    <ul className="space-y-4 text-sm text-gray-300 font-mono">
                                        {['Introduction', 'Technical Architecture', 'Cryptographic Proofs', 'Tokenomics'].map((item, i) => (
                                            <li key={i} className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
                                                <span>{String(i + 1).padStart(2, '0')}. {item}</span>
                                                <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Main Content Area - PDF Viewer */}
                    <div className="lg:col-span-8">
                        <motion.div
                            className="w-full bg-dark-200 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl"
                            style={{ height: isMobile ? '75vh' : '85vh' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Browser bar decoration */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-dark-300 border-b border-white/10 flex items-center px-4 gap-2 z-10">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="mx-auto font-mono text-[10px] text-gray-500 bg-black/50 px-3 py-0.5 rounded-full">
                                    research-paper-final.pdf
                                </div>
                            </div>

                            {/*
                                Mobile: Google Docs viewer (renders PDF on all mobile browsers)
                                Desktop: Native iframe PDF (works in all desktop browsers)
                            */}
                            <iframe
                                src={isMobile ? GOOGLE_VIEWER_URL : PDF_PATH}
                                className="w-full bg-white"
                                style={{ height: '100%', paddingTop: '40px', border: 'none' }}
                                title="IpVaultX Research Paper"
                                allow="fullscreen"
                            />
                        </motion.div>

                        {/* Mobile fallback buttons */}
                        {isMobile && (
                            <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl text-center">
                                <p className="text-sm text-gray-400 mb-3">
                                    Having trouble viewing? Try one of these:
                                </p>
                                <div className="flex gap-3 justify-center flex-wrap">
                                    <a
                                        href={PDF_PATH}
                                        download
                                        className="px-5 py-2.5 bg-white text-black font-mono font-bold text-xs rounded-lg"
                                    >
                                        Download PDF
                                    </a>
                                    <a
                                        href={PDF_PATH}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 border border-white/20 text-white font-mono font-bold text-xs rounded-lg"
                                    >
                                        Open in Browser
                                    </a>
                                </div>
                            </div>
                        )}

                        <div className="mt-12 grid md:grid-cols-2 gap-8">
                            <div className="p-6 border border-white/10 rounded-xl hover:border-primary-500/50 transition-colors bg-white/[0.02]">
                                <h3 className="font-display font-bold text-xl mb-3">Community Discussion</h3>
                                <p className="text-gray-400 text-sm mb-4">Join researchers discussing this protocol on our governance forum.</p>
                                <a href="#" className="text-primary-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">View Forum &rarr;</a>
                            </div>
                            <div className="p-6 border border-white/10 rounded-xl hover:border-primary-500/50 transition-colors bg-white/[0.02]">
                                <h3 className="font-display font-bold text-xl mb-3">GitHub Repository</h3>
                                <p className="text-gray-400 text-sm mb-4">Review the open-source implementation of the architecture described.</p>
                                <a href="https://github.com/vidhii01/IpVaultX" target="_blank" rel="noopener noreferrer" className="text-primary-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">View Code &rarr;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Whitepaper;
