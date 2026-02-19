
import { motion } from 'framer-motion';
import { Download, FileText, ArrowLeft, ChevronDown } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

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
                                    href="/Research paper - final.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 bg-white text-black font-mono font-bold py-4 rounded-sm hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-lg hover:shadow-neon group mb-8"
                                >
                                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                    Download PDF (375kb)
                                </a>

                                {/* Table of Contents Preview */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                    <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                        <FileText className="w-3 h-3" />
                                        Contents
                                    </h3>
                                    <ul className="space-y-4 text-sm text-gray-300 font-mono">
                                        <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
                                            <span>01. Introduction</span>
                                            <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90" />
                                        </li>
                                        <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
                                            <span>02. Technical Architecture</span>
                                            <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90" />
                                        </li>
                                        <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
                                            <span>03. Cryptographic Proofs</span>
                                            <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90" />
                                        </li>
                                        <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
                                            <span>04. Tokenomics</span>
                                            <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90" />
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Main Content Area - PDF Viewer */}
                    <div className="lg:col-span-8">
                        <motion.div
                            className="aspect-[3/4] md:aspect-[16/9] lg:aspect-[3/4] xl:aspect-[1/1.4] w-full bg-dark-200 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
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

                            {/* Fallback / Embed */}
                            <iframe
                                src="/Research paper - final.pdf"
                                className="w-full h-full pt-10 bg-white"
                                title="IpVaultX Whitepaper"
                            />
                        </motion.div>

                        <div className="mt-12 grid md:grid-cols-2 gap-8">
                            <div className="p-6 border border-white/10 rounded-xl hover:border-primary-500/50 transition-colors bg-white/[0.02]">
                                <h3 className="font-display font-bold text-xl mb-3">Community Discussion</h3>
                                <p className="text-gray-400 text-sm mb-4">Join 15,000+ researchers discussing this protocol on our governance forum.</p>
                                <a href="#" className="text-primary-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">View Forum &rarr;</a>
                            </div>
                            <div className="p-6 border border-white/10 rounded-xl hover:border-primary-500/50 transition-colors bg-white/[0.02]">
                                <h3 className="font-display font-bold text-xl mb-3">GitHub Repository</h3>
                                <p className="text-gray-400 text-sm mb-4">Review the open-source implementation of the architecture described.</p>
                                <a href="#" className="text-primary-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">View Code &rarr;</a>
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
