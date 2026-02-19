
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Lock } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-dark-100 flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20 opacity-60" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-black/50 group"
                >
                    {/* Animated Border */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-primary-500/50 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-secondary-500/50 transition-colors duration-500" />



                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-white">
                        Ready to Secure <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow-lg">Your Legacy?</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Join thousands of creators, enterprises, and AI models who trust IpVaultX with their most valuable intellectual assets.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-white text-black rounded-xl font-mono text-sm font-bold uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-5px_rgba(0,209,255,0.6)] hover:-translate-y-1 group flex items-center gap-3">
                            Start Protection Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>


                    </div>

                    <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                        {['Bank-Grade Security', 'Zero-Knowledge Proofs', 'Global Compliance', '24/7 Support'].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center gap-2 group-hover:text-primary-300 transition-colors duration-500">
                                <Lock className="w-4 h-4" />
                                <span className="font-mono text-xs uppercase tracking-wider">{item}</span>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
