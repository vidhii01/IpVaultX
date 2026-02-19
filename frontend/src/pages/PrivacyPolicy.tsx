
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Shield, Eye, Lock, Server, Database, UserCheck, Mail } from 'lucide-react';

const sections = [
    {
        icon: Eye,
        title: '1. Information We Collect',
        content: [
            'When you connect your wallet, we receive your public wallet address only — never your private keys or seed phrase.',
            'Metadata you voluntarily submit during IP registration: title, description, asset type, and tags.',
            'SHA-256 cryptographic hash of your uploaded file — computed locally in your browser. The file itself is never transmitted to our servers.',
            'Standard server logs including IP addresses, browser type, and access timestamps for security and performance monitoring.',
        ],
    },
    {
        icon: Lock,
        title: '2. How We Use Your Information',
        content: [
            'To issue and record your intellectual property certificate on the Ethereum blockchain.',
            'To generate your IPFS content identifier (CID) for decentralized storage references.',
            'To maintain the integrity and verifiability of registered IP assets.',
            'To respond to support inquiries submitted through our contact form.',
            'We do not sell, rent, or trade your personal information to any third party.',
        ],
    },
    {
        icon: Server,
        title: '3. Blockchain & On-Chain Data',
        content: [
            'All IP certificates are recorded on a public blockchain. Once written, this data is immutable and permanently visible to anyone.',
            'Your wallet address is permanently associated with registered IP assets on-chain.',
            'We have no ability to delete or alter data that has been committed to the blockchain.',
            'IPFS content identifiers (CIDs) are public by nature. Do not register content you wish to keep entirely private.',
        ],
    },
    {
        icon: Database,
        title: '4. Data Storage & Security',
        content: [
            'File hashing is performed entirely in your browser using the Web Crypto API — your files never leave your device.',
            'Certificate metadata is stored using industry-standard encryption at rest.',
            'We use HTTPS/TLS for all data in transit.',
            'Access to backend systems is restricted to authorized personnel with multi-factor authentication.',
        ],
    },
    {
        icon: UserCheck,
        title: '5. Your Rights',
        content: [
            'You may request a copy of any off-chain data we hold associated with your email address.',
            'You may request deletion of off-chain account data at any time — note that on-chain records cannot be deleted.',
            'You may opt out of any non-essential communications by contacting us directly.',
            'For users in the EU/EEA, you have rights under GDPR including access, rectification, erasure, and data portability for off-chain data.',
        ],
    },
    {
        icon: Shield,
        title: '6. Cookies & Tracking',
        content: [
            'IpVaultX uses minimal cookies strictly necessary for application functionality.',
            'We do not use advertising cookies or cross-site tracking technologies.',
            'Session data is stored locally in your browser and is cleared when you close your session.',
            'We use privacy-respecting, self-hosted analytics that do not share data with third parties.',
        ],
    },
    {
        icon: Mail,
        title: '7. Contact & Updates',
        content: [
            'For privacy inquiries, contact us at: team@ipvaultx.io',
            'This policy was last updated: February 2026.',
            'We may update this Privacy Policy periodically. Significant changes will be communicated via our website.',
            'Continued use of the IpVaultX platform after updates constitutes acceptance of the revised policy.',
        ],
    },
];

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-body">
            <Navbar />
            <main className="pt-32 pb-24">
                {/* Header */}
                <div className="container mx-auto px-6 max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono tracking-widest uppercase mb-6">
                            <Shield className="w-3 h-3" /> Legal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5DD3]">Policy</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Your privacy is foundational to IpVaultX. This document explains exactly what we collect, why, and how we protect it.
                        </p>
                        <div className="mt-4 text-gray-600 font-mono text-xs">Last updated: February 2026 · Effective immediately</div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 max-w-3xl space-y-6">
                    {sections.map((section, i) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <h2 className="text-lg font-display font-bold text-white">{section.title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.content.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                            <div className="w-1 h-1 bg-primary-500 rounded-full mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}

                    {/* Bottom notice */}
                    <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-center">
                        <p className="text-amber-400 font-mono text-xs leading-relaxed">
                            ⚠️ IpVaultX is a research/demo project by ABES Institute of Technology, Ghaziabad. This policy applies to the demo platform. For production use, consult a qualified legal professional.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
