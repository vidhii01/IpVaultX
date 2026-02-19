
import { motion } from 'framer-motion';
import { GitBranch, Lock, Cpu, Zap } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: <Cpu className="w-6 h-6 text-primary-400" />,
        title: 'IP Submission',
        description: 'Creator uploads their asset. The protocol generates a cryptographic fingerprint (SHA-256 hash) of the content without storing the raw file on-chain.',
    },
    {
        step: '02',
        icon: <GitBranch className="w-6 h-6 text-secondary-400" />,
        title: 'On-Chain Anchoring',
        description: 'The hash is committed to the Ethereum blockchain via a Solidity smart contract, creating an immutable, timestamped proof of existence.',
    },
    {
        step: '03',
        icon: <Lock className="w-6 h-6 text-accent-500" />,
        title: 'Decentralized Storage',
        description: 'The original asset is encrypted with AES-256 and distributed across the IPFS network. Only the owner holds the decryption key.',
    },
    {
        step: '04',
        icon: <Zap className="w-6 h-6 text-emerald-400" />,
        title: 'Zero-Knowledge Verification',
        description: 'Any party can verify ownership against the on-chain record via ZK-proofs — without revealing the underlying content or private keys.',
    },
];

const Protocol = () => {
    return (
        <section id="protocol" className="py-32 bg-dark-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute left-0 top-[30%] w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-secondary-500" />
                        <span className="text-secondary-400 font-mono text-xs tracking-[0.2em] uppercase">How It Works</span>
                        <div className="h-px w-8 bg-secondary-500" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
                    >
                        The IpVaultX <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">Protocol Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        A four-layer architecture built for provenance, privacy, and permanence.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative p-8 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-primary-500/20 hover:bg-white/[0.06] transition-all duration-500 group overflow-hidden"
                        >
                            {/* Step Number */}
                            <div className="absolute top-6 right-6 font-mono text-6xl font-bold text-white/[0.04] group-hover:text-white/[0.07] transition-colors select-none">
                                {step.step}
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-dark-100 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Protocol;
