
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Key, Lock, ChevronRight, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

declare global {
    interface Window {
        ethereum?: {
            request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
            isMetaMask?: boolean;
        };
    }
}

const ConnectWallet = () => {
    const navigate = useNavigate();
    const [connecting, setConnecting] = useState(false);
    const [account, setAccount] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [network, setNetwork] = useState<'ethereum' | 'polygon' | 'testnet'>('ethereum');
    const [showFAQ, setShowFAQ] = useState(false);

    // Mock connection function for non-web3 browsers or for testing UI states
    const handleConnect = async (_walletType: string) => {
        setConnecting(true);
        setError(null);

        try {
            if (typeof window.ethereum !== 'undefined') {
                // Request account access
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);

                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    // Simulate network check (mocked)
                    // In a real app, you'd check provider.getNetwork()
                } else {
                    setError('No accounts found.');
                }
            } else {
                // Fallback for UI demo if metamask not installed
                setTimeout(() => {
                    // Randomly simulate success or failure for demo purposes if no provider
                    // For production, this would strictly use the provider
                    setAccount('0x71C...9A23');
                }, 1500);
            }
        } catch (err: any) {
            console.error(err);
            setError('Connection rejected. Please try again.');
        } finally {
            setConnecting(false);
        }
    };

    const handleDisconnect = () => {
        setAccount(null);
        setError(null);
    }

    return (
        <div className="min-h-screen bg-dark-100 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-[80px] bottom-0 right-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-dark-200 border border-white/10 rounded-3xl p-8 relative shadow-2xl z-10"
            >
                {/* Close Button */}
                <button onClick={() => navigate('/')} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center mb-8">
                    <div className="scale-75 mb-2 origin-center">
                        <Logo />
                    </div>
                    <h1 className="text-2xl font-display font-bold text-white mb-2">Connect Your Wallet</h1>
                    <p className="text-gray-400 text-sm text-center">Securely connect to access the IpVaultX Protocol</p>
                </div>

                {/* Trust Bar */}
                <div className="flex justify-center gap-6 mb-8 py-3 px-4 bg-white/5 rounded-lg border border-white/5">
                    {[
                        { icon: Shield, text: "Secured" },
                        { icon: Key, text: "SIWE Auth" },
                        { icon: Lock, text: "No Keys Stored" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-gray-400">
                            <item.icon className="w-3 h-3 text-primary-500" />
                            {item.text}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {!account ? (
                        <motion.div
                            key="wallet-select"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                        >
                            {/* Network Selector */}
                            <div className="flex p-1 bg-black/40 rounded-xl border border-white/5">
                                {['ethereum', 'polygon', 'testnet'].map((net) => (
                                    <button
                                        key={net}
                                        onClick={() => setNetwork(net as any)}
                                        className={`flex-1 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all ${network === net
                                            ? 'bg-white/10 text-white shadow-sm'
                                            : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {net}
                                    </button>
                                ))}
                            </div>

                            {/* Wallet Options */}
                            <div className="space-y-3">
                                {[
                                    { name: 'MetaMask', color: '#F6851B' },
                                    { name: 'WalletConnect', color: '#3B99FC' },
                                    { name: 'Coinbase Wallet', color: '#0052FF' },
                                    { name: 'Phantom', color: '#AB9FF2' }
                                ].map((wallet) => (
                                    <button
                                        key={wallet.name}
                                        onClick={() => handleConnect(wallet.name)}
                                        disabled={connecting}
                                        className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 rounded-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" style={{ color: wallet.color }}>
                                                {/* Placeholder for actual logos, using first letter for now */}
                                                <span className="font-bold">{wallet.name[0]}</span>
                                            </div>
                                            <span className="font-bold text-sm text-white">{wallet.name}</span>
                                        </div>
                                        {connecting ? (
                                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-200 text-xs">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                    {error}
                                </div>
                            )}

                        </motion.div>
                    ) : (
                        <motion.div
                            key="connected"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center"
                        >
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Wallet Connected</h3>
                            <p className="font-mono text-xs text-green-400 bg-green-500/10 py-1 px-3 rounded-full inline-block mb-6">
                                {account}
                            </p>

                            <div className="space-y-3">
                                <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                    Continue to Dashboard
                                </button>
                                <button
                                    onClick={handleDisconnect}
                                    className="w-full py-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Disconnect Wallet
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FAQ */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <button
                        onClick={() => setShowFAQ(!showFAQ)}
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors w-full justify-center group"
                    >
                        <Info className="w-3 h-3" />
                        What is a wallet?
                        <ChevronRight className={`w-3 h-3 transition-transform ${showFAQ ? 'rotate-90' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {showFAQ && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <p className="text-[11px] text-gray-500 mt-3 text-center leading-relaxed px-4">
                                    A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital assets.
                                    <a href="#" className="text-primary-500 hover:underline ml-1">Learn more</a>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </motion.div>
        </div>
    );
};

export default ConnectWallet;
