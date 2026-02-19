
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Database, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-200">
            {/* Dynamic Backgrounds */}
            <div className="absolute top-0 inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
                {/* Text Content */}
                <motion.div
                    className="flex flex-col gap-6 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-white mb-2">
                        IMMUTABLE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">INTELLECT</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-xl border-l-2 border-primary-500 pl-6">
                        The decentralized standard for intellectual property provenance.
                        <span className="text-gray-200 font-medium"> Zero-knowledge verification</span> for creators, enterprises, and AI models.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                        <button
                            onClick={() => navigate('/connect')}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,209,255,0.6)] flex items-center justify-center gap-3 group rounded-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Connect Wallet
                        </button>

                        <Link
                            to="/whitepaper"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-mono font-bold text-sm tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-3 group rounded-sm"
                        >
                            <FileText className="w-4 h-4" />
                            Read Whitepaper
                        </Link>
                    </div>


                </motion.div>

                {/* Visual Content - 3D Abstract Representation */}
                <motion.div
                    className="relative w-full aspect-square md:aspect-[4/5] flex items-center justify-center perspective-1000"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Central Cube / Vault Graphic */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 border border-primary-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-12 border border-secondary-500/30 rounded-full animate-[spin_8s_linear_infinite]" />

                        {/* Holographic Card Stack */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl transform rotate-[-6deg] shadow-2xl flex flex-col p-6 overflow-hidden group hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
                                <div className="flex justify-between items-start mb-8">
                                    <Shield className="w-8 h-8 text-primary-400" />
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <Database className="w-5 h-5 text-secondary-400" />
                                    </div>
                                </div>
                                <div className="mt-auto space-y-3">
                                    <div className="h-2 w-12 bg-white/20 rounded-full" />
                                    <div className="h-6 w-3/4 bg-white/10 rounded-md" />
                                    <div className="h-4 w-full bg-white/5 rounded-md" />
                                </div>
                                <div className="absolute bottom-6 right-6 font-mono text-xs text-primary-400 animate-pulse">
                                    VERIFIED
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute right-0 md:-right-12 top-16 md:top-20 bg-dark-300 px-3 py-2 md:p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-2 md:gap-3 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] shrink-0" />
                                <span className="font-mono text-[10px] md:text-xs text-white whitespace-nowrap">Hash #8X92-A Match</span>
                            </motion.div>

                            <motion.div
                                className="absolute left-0 md:-left-8 bottom-24 md:bottom-32 bg-dark-300 px-3 py-2 md:p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-2 md:gap-3 z-20"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary-500 shrink-0" />
                                <span className="font-mono text-[10px] md:text-xs text-white whitespace-nowrap">Ownership Confirmed</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
