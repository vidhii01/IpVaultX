
import { motion } from 'framer-motion';

const distribution = [
    { label: 'Community & Ecosystem', pct: 35, color: '#00D1FF' },
    { label: 'Team & Advisors', pct: 20, color: '#6C5DD3' },
    { label: 'Public Sale', pct: 15, color: '#FF2E63' },
    { label: 'Treasury Reserve', pct: 20, color: '#22C55E' },
    { label: 'Protocol Rewards', pct: 10, color: '#F59E0B' },
];

const stats = [
    { label: 'Total Supply', value: '1,000,000,000', unit: 'IPX' },
    { label: 'Initial Circulating', value: '150,000,000', unit: 'IPX' },
    { label: 'Vesting Period', value: '36', unit: 'Months' },
    { label: 'Utility', value: 'Governance + Fees', unit: '' },
];

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="py-32 bg-dark-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute right-0 bottom-[20%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-primary-500" />
                        <span className="text-primary-400 font-mono text-xs tracking-[0.2em] uppercase">Token Economics</span>
                        <div className="h-px w-8 bg-primary-500" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
                    >
                        $IPX Token <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">Distribution</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        A fixed supply, community-first model designed for long-term protocol sustainability.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    {/* Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5 p-8 bg-white/[0.03] border border-white/5 rounded-2xl"
                    >
                        {distribution.map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-mono text-gray-300">{item.label}</span>
                                    <span className="text-sm font-mono font-bold text-white">{item.pct}%</span>
                                </div>
                                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-primary-500/20 transition-all"
                            >
                                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                                {stat.unit && <div className="text-xs font-mono text-primary-400 mb-2">{stat.unit}</div>}
                                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}

                        {/* Utility Pills */}
                        <div className="col-span-2 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-4">Token Utility</div>
                            <div className="flex flex-wrap gap-2">
                                {['Governance Voting', 'Staking Rewards', 'Protocol Fees', 'Access Gating', 'Creator Royalties'].map((u) => (
                                    <span key={u} className="px-3 py-1 text-xs font-mono bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-full">{u}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
