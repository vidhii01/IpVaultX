
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import {
    Database, Lock, Share2, Fingerprint, Shield, Hash,
    Globe, Zap, Key, FileCheck, Layers, Award, ArrowRight
} from 'lucide-react';

const coreFeatures = [
    {
        icon: Hash,
        title: 'SHA-256 File Fingerprinting',
        description: 'Every file is cryptographically fingerprinted in your browser using SHA-256. The hash is a unique, tamper-proof digital fingerprint — if even one byte changes, the hash changes.',
        tag: 'Core Security',
        gradient: 'from-[#00D1FF] to-[#6C5DD3]',
    },
    {
        icon: Database,
        title: 'IPFS Decentralized Storage',
        description: 'Your file metadata is pinned to the InterPlanetary File System — a distributed, censorship-resistant network. No single point of failure, no takedowns.',
        tag: 'Storage',
        gradient: 'from-violet-500 to-[#00D1FF]',
    },
    {
        icon: Lock,
        title: 'AES-256 Encryption',
        description: 'Before anything leaves your device, your metadata is encrypted with AES-256, the same standard used by banks and governments. Only you hold the key.',
        tag: 'Encryption',
        gradient: 'from-emerald-400 to-[#6C5DD3]',
    },
    {
        icon: FileCheck,
        title: 'On-Chain IP Certificate',
        description: 'A unique NFT certificate is minted on the Ethereum blockchain, permanently recording your ownership with a timestamp, hash, and IPFS CID.',
        tag: 'Blockchain',
        gradient: 'from-amber-400 to-orange-500',
    },
    {
        icon: Globe,
        title: 'Globally Verifiable Proof',
        description: 'Anyone, anywhere can verify your IP ownership by checking the blockchain. No court, no bureaucracy — just cryptographic truth.',
        tag: 'Verification',
        gradient: 'from-pink-500 to-[#6C5DD3]',
    },
    {
        icon: Key,
        title: 'Non-Custodial Ownership',
        description: 'IpVaultX never holds your private keys. Your wallet = your identity. You retain 100% sovereignty over your IP assets at all times.',
        tag: 'Sovereignty',
        gradient: 'from-[#00D1FF] to-emerald-400',
    },
    {
        icon: Share2,
        title: 'Granular Access Control',
        description: 'Grant or revoke access to your IP assets on-chain. Time-locked, permission-scoped sharing — built into the smart contract layer.',
        tag: 'Access Control',
        gradient: 'from-[#6C5DD3] to-pink-500',
    },
    {
        icon: Fingerprint,
        title: 'Multi-Factor Authentication',
        description: 'Wallet-based authentication is augmented with optional hardware security keys. Your assets are protected by the same cryptography securing billions in DeFi.',
        tag: 'Authentication',
        gradient: 'from-emerald-400 to-amber-400',
    },
    {
        icon: Layers,
        title: 'Multi-Chain Support',
        description: 'Designed to extend beyond Ethereum — Polygon, Arbitrum, and other EVM-compatible chains are on the roadmap, keeping gas fees minimal.',
        tag: 'Scalability',
        gradient: 'from-violet-500 to-pink-500',
    },
    {
        icon: Zap,
        title: 'Instant IP Status Lookup',
        description: 'Search any file hash to instantly check if it\'s already been registered on-chain. Detect plagiarism and prior art in seconds.',
        tag: 'Lookup',
        gradient: 'from-amber-400 to-[#00D1FF]',
    },
    {
        icon: Award,
        title: 'Downloadable Certificate',
        description: 'After registration, download a verifiable IP certificate containing your hash, IPFS CID, transaction hash, and timestamp — ready for legal use.',
        tag: 'Certification',
        gradient: 'from-pink-500 to-amber-400',
    },
    {
        icon: Shield,
        title: 'Immutable Audit Trail',
        description: 'Every action — registration, transfer, access grant — is permanently recorded on-chain. An unalterable history of your IP, forever.',
        tag: 'Audit',
        gradient: 'from-[#6C5DD3] to-[#00D1FF]',
    },
];

const stats = [
    { value: 'SHA-256', label: 'Hash Algorithm' },
    { value: 'AES-256', label: 'Encryption Standard' },
    { value: 'IPFS', label: 'Storage Network' },
    { value: 'EVM', label: 'Chain Compatible' },
];

const FeaturesPage = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-body">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-36 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-[140px] -top-32 -right-32 pointer-events-none" />

                    <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono tracking-widest uppercase mb-6"
                        >
                            <Zap className="w-3 h-3" /> Platform Capabilities
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Fort Knox for your<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">
                                Digital Assets
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
                        >
                            Every feature in IpVaultX is built on cryptographic truth — not trust. Here's exactly how we protect your intellectual property.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                to="/register"
                                className="px-8 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] transition-all flex items-center gap-3 group"
                            >
                                Protect Your IP
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/whitepaper"
                                className="px-8 py-4 border border-white/20 text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-white/5 transition-all"
                            >
                                Read the Research
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Stats bar */}
                <section className="py-10 border-y border-white/5 bg-white/[0.02]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
                            {stats.map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-display font-black text-white mb-1">{s.value}</div>
                                    <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            12 production-grade features engineered to give your intellectual property the strongest possible on-chain protection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {coreFeatures.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group p-7 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-white/15 hover:bg-white/[0.05] transition-all duration-400 relative overflow-hidden"
                                >
                                    {/* Top gradient accent */}
                                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                    {/* Tag */}
                                    <div className="mb-4">
                                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-10 text-white/60`}>
                                            {feature.tag}
                                        </span>
                                    </div>

                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 group-hover:scale-105 transition-all duration-300">
                                        <Icon className="w-5 h-5 text-primary-400" />
                                    </div>

                                    <h3 className="text-lg font-display font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 border-t border-white/5 bg-white/[0.02]">
                    <div className="container mx-auto px-6 text-center max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Protect Your Work?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Connect your wallet and register your first IP asset in under 2 minutes.
                        </p>
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] transition-all group"
                        >
                            🔐 Start Protecting
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
