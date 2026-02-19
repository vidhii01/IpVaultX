
import { motion } from 'framer-motion';
import { Wallet, Database, Code2, Globe, Layers, Share2 } from 'lucide-react';

const integrations = [
    { icon: <Wallet className="w-7 h-7" />, name: 'MetaMask', category: 'Wallet', color: '#F6851B', description: 'Primary wallet integration for secure transaction signing and identity.' },
    { icon: <Globe className="w-7 h-7" />, name: 'WalletConnect', category: 'Wallet', color: '#3B99FC', description: 'Connect any mobile or desktop wallet via QR code or deep link.' },
    { icon: <Database className="w-7 h-7" />, name: 'IPFS', category: 'Storage', color: '#65C2CB', description: 'Decentralized file storage for immutable, censorship-resistant IP assets.' },
    { icon: <Code2 className="w-7 h-7" />, name: 'Solidity', category: 'Smart Contracts', color: '#627EEA', description: 'Audited EVM-compatible contracts for on-chain IP registration and rights management.' },
    { icon: <Layers className="w-7 h-7" />, name: 'The Graph', category: 'Indexing', color: '#6747ED', description: 'GraphQL-powered on-chain data indexing for real-time queries and analytics.' },
    { icon: <Share2 className="w-7 h-7" />, name: 'Chainlink', category: 'Oracles', color: '#375BD2', description: 'Decentralized oracle network for tamper-proof real-world data feeds.' },
];

const Integrations = () => {
    return (
        <section className="py-32 bg-dark-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute right-0 top-[30%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-primary-500" />
                        <span className="text-primary-400 font-mono text-xs tracking-[0.2em] uppercase">Ecosystem</span>
                        <div className="h-px w-8 bg-primary-500" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
                    >
                        Trusted <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">Integrations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Built on battle-tested Web3 infrastructure you already know and trust.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {integrations.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white/[0.03] border border-white/5 hover:border-white/15 rounded-2xl transition-all group hover:bg-white/[0.05]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: item.color + '20', border: `1px solid ${item.color}40`, color: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.name}</div>
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{item.category}</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
