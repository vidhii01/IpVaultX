
import { motion } from 'framer-motion';
import { Wallet, Code2, Database, Atom } from 'lucide-react';

const technologies = [
    {
        icon: <Wallet className="w-8 h-8 text-[#F6851B]" />, // MetaMask Orange
        name: "MetaMask",
        role: "Secure Connection",
        description: "Non-custodial wallet integration for seamless and secure transaction signing."
    },
    {
        icon: <Code2 className="w-8 h-8 text-[#627EEA]" />, // Ethereum/Solidity Blue
        name: "Solidity",
        role: "Smart Contracts",
        description: "Military-grade smart contracts audited for maximum security and efficiency."
    },
    {
        icon: <Database className="w-8 h-8 text-[#65C2CB]" />, // IPFS Teal
        name: "IPFS",
        role: "Decentralized Storage",
        description: "Immutable file storage ensures your assets are permanently distributed and censorship-resistant."
    },
    {
        icon: <Atom className="w-8 h-8 text-[#61DAFB]" />, // React Blue
        name: "React + Vite",
        role: "High-Performance UI",
        description: "Lightning fast interface built with modern architecture for zero-latency interactions."
    }
];

const TechStack = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-secondary-900/10 opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Powered By Top Tier Tech</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="flex flex-col items-center text-center relative z-10">
                                {/* Glowing Icon Background */}
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-white/20 shadow-lg group-hover:shadow-primary-500/20">
                                    {tech.icon}
                                </div>

                                <h4 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                    {tech.name}
                                </h4>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                    {tech.role}
                                </span>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
