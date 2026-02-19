
import { motion } from 'framer-motion';
import { Globe, Activity } from 'lucide-react';

const chains = [
    { name: 'Ethereum', status: 'Live', color: '#627EEA', abbr: 'ETH' },
    { name: 'Polygon', status: 'Live', color: '#8247E5', abbr: 'MATIC' },
    { name: 'Arbitrum', status: 'Beta', color: '#28A0F0', abbr: 'ARB' },
    { name: 'Optimism', status: 'Soon', color: '#FF0420', abbr: 'OP' },
    { name: 'Solana', status: 'Soon', color: '#9945FF', abbr: 'SOL' },
    { name: 'Base', status: 'Soon', color: '#0052FF', abbr: 'BASE' },
];

const networkStats = [
    { label: 'Assets Protected', value: '12,400+' },
    { label: 'Verified Transactions', value: '98,200+' },
    { label: 'Countries Served', value: '42' },
    { label: 'Uptime', value: '99.98%' },
];

const Network = () => {
    return (
        <section id="network" className="py-32 bg-dark-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-secondary-500" />
                        <span className="text-secondary-400 font-mono text-xs tracking-[0.2em] uppercase">Global Infrastructure</span>
                        <div className="h-px w-8 bg-secondary-500" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
                    >
                        Multi-Chain <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">Network</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        IpVaultX is chain-agnostic. Protect your IP across any major blockchain network.
                    </motion.p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                    {networkStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
                        >
                            <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Chain Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {chains.map((chain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/15 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                                    style={{ backgroundColor: chain.color + '33', border: `1px solid ${chain.color}55` }}
                                >
                                    <Globe className="w-4 h-4" style={{ color: chain.color }} />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm">{chain.name}</div>
                                    <div className="font-mono text-xs text-gray-500">{chain.abbr}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Activity className={`w-3 h-3 ${chain.status === 'Live' ? 'text-green-500' : chain.status === 'Beta' ? 'text-amber-400' : 'text-gray-500'}`} />
                                <span className={`text-[10px] font-mono font-bold uppercase ${chain.status === 'Live' ? 'text-green-500' : chain.status === 'Beta' ? 'text-amber-400' : 'text-gray-500'}`}>
                                    {chain.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Network;
