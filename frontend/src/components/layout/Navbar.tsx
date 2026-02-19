
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'glass-nav py-3 border-white/5' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="no-underline">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { label: 'Features', to: '/#features' },
                        { label: 'Protocol', to: '/protocol' },
                        { label: 'Tokenomics', to: '/tokenomics' },
                        { label: 'Network', to: '/network' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.to}
                            className="text-xs font-mono font-medium tracking-widest uppercase text-gray-400 hover:text-primary-400 transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-500 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/whitepaper"
                        className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-white hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg hover:border-primary-500 hover:bg-primary-500/10"
                    >
                        <FileText className="w-4 h-4" />
                        Paper
                    </Link>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-xs font-bold font-mono tracking-widest uppercase hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-neon flex items-center gap-2 group">
                        Launch App
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary-500 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-white/10 overflow-hidden absolute w-full top-full left-0 bg-dark-100"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {[
                                { label: 'Features', to: '/#features' },
                                { label: 'Protocol', to: '/protocol' },
                                { label: 'Tokenomics', to: '/tokenomics' },
                                { label: 'Network', to: '/network' },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="text-lg font-accent font-bold text-white/80 hover:text-primary-500 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="h-[1px] bg-white/10 w-full" />
                            <div className="flex flex-col gap-4">
                                <Link
                                    to="/whitepaper"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 text-white font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <FileText className="w-4 h-4" />
                                    Read Whitepaper
                                </Link>
                                <button className="w-full py-3 rounded-lg bg-primary-500 text-black font-mono font-bold text-sm tracking-widest uppercase shadow-neon hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Launch App
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
