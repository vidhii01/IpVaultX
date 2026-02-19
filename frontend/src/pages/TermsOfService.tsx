
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FileText, AlertTriangle, Scale, Globe, Shield, Key, ArrowRight } from 'lucide-react';

const sections = [
    {
        icon: FileText,
        title: '1. Acceptance of Terms',
        content: [
            'By accessing or using IpVaultX ("the Platform"), you agree to be bound by these Terms of Service and all applicable laws and regulations.',
            'If you do not agree with any of these terms, you are prohibited from using the Platform.',
            'These terms apply to all users, including visitors, registered users, and contributors.',
            'IpVaultX reserves the right to update or modify these terms at any time without prior notice. Continued use of the Platform constitutes acceptance of the revised terms.',
        ],
    },
    {
        icon: Key,
        title: '2. Wallet Connection & User Responsibility',
        content: [
            'You are solely responsible for the security of your cryptocurrency wallet and private keys.',
            'IpVaultX never has access to, stores, or transmits your private keys or seed phrases.',
            'Actions taken with your connected wallet — including IP registrations and blockchain transactions — are irreversible.',
            'You accept full responsibility for all activities that occur under your connected wallet address.',
            'You must ensure your wallet is compatible with Ethereum and EVM-compatible networks.',
        ],
    },
    {
        icon: Shield,
        title: '3. Content & Intellectual Property Registration',
        content: [
            'You may only register intellectual property that you own or have full legal rights to register.',
            'You represent and warrant that your submitted content does not infringe upon any third-party intellectual property rights, trademarks, copyrights, or trade secrets.',
            'Registering content you do not own is prohibited and may constitute fraud.',
            'IpVaultX does not verify ownership claims — the Platform provides a cryptographic proof of submission, not a legal determination of ownership.',
            'Blockchain registration does not replace formal copyright registration in your jurisdiction.',
        ],
    },
    {
        icon: AlertTriangle,
        title: '4. Prohibited Uses',
        content: [
            'You may not use the Platform to register stolen, plagiarized, or unauthorized intellectual property.',
            'You may not use the Platform to submit illegal content including material that is defamatory, obscene, or violates any applicable law.',
            'You may not attempt to interfere with, hack, or compromise the Platform\'s infrastructure or smart contracts.',
            'You may not use automated scripts or bots to interact with the Platform without prior written consent.',
            'Violation of these prohibitions may result in permanent account suspension and legal action.',
        ],
    },
    {
        icon: Globe,
        title: '5. Blockchain Transactions & Fees',
        content: [
            'All on-chain registrations require gas fees paid in ETH. These fees are paid to the Ethereum network, not to IpVaultX.',
            'Gas fees are non-refundable, even if a transaction fails.',
            'IpVaultX is not responsible for failed transactions due to network congestion or insufficient gas.',
            'Cryptocurrency values are volatile. IpVaultX makes no guarantees regarding the value of any tokens or gas costs.',
        ],
    },
    {
        icon: Scale,
        title: '6. Disclaimer of Warranties & Limitation of Liability',
        content: [
            'THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.',
            'IPVAULTX DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.',
            'In no event shall IpVaultX be liable for any indirect, incidental, special, or consequential damages arising from use of the Platform.',
            'Our total liability to you shall not exceed the amount you have paid to IpVaultX in the preceding twelve months.',
            'Smart contracts, once deployed, are immutable. IpVaultX cannot reverse or modify blockchain-recorded data.',
        ],
    },
    {
        icon: FileText,
        title: '7. Governing Law & Disputes',
        content: [
            'These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.',
            'Any disputes arising from these Terms or your use of the Platform shall first be attempted to be resolved through good-faith negotiation.',
            'Unresolved disputes shall be submitted to binding arbitration in accordance with applicable Indian arbitration laws.',
            'For questions regarding these Terms, contact us at: team@ipvaultx.io',
        ],
    },
];

const TermsOfService = () => {
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
                            <Scale className="w-3 h-3" /> Legal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5DD3]">Service</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Please read these terms carefully before using the IpVaultX platform. By connecting your wallet, you agree to be bound by these terms.
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

                    {/* Bottom Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            to="/privacy"
                            className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white font-mono text-sm rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            Read Privacy Policy
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-black font-mono font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-center">
                        <p className="text-amber-400 font-mono text-xs leading-relaxed">
                            ⚠️ IpVaultX is a research/demo project by ABES Institute of Technology, Ghaziabad. These terms apply to the demo platform. For production use, consult a qualified legal professional.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
