
import { ArrowRight, Twitter, Github, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-300 border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
            {/* Neon Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-24">

                    {/* Brand Section */}
                    <div className="md:col-span-5 flex flex-col items-start gap-8">
                        <Logo />
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Securing the future of intellectual property with decentralized, immutable, and encrypted technology.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-mono font-bold text-white uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary-500 rounded-full" />
                                Product
                            </h4>
                            <ul className="space-y-4 font-body text-gray-400">
                                {[
                                    { label: 'Features', href: '/#features' },
                                    { label: 'Integrations', href: '/integrations' },
                                    { label: 'Whitepaper', href: '/whitepaper' },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                                            {item.label}
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-mono font-bold text-white uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                                <div className="w-1 h-1 bg-secondary-500 rounded-full" />
                                Company
                            </h4>
                            <ul className="space-y-4 font-body text-gray-400">
                                {[
                                    { label: 'About Us', href: '/about' },
                                    { label: 'Contact', href: '/contact' },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="hover:text-secondary-400 transition-colors flex items-center gap-2 group">
                                            {item.label}
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-mono font-bold text-white uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                                <div className="w-1 h-1 bg-white rounded-full" />
                                Stay Updated
                            </h4>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                Subscribe to our newsletter for the latest security updates.
                            </p>
                            <form className="flex flex-col gap-3 relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-600 mb-3"
                                />
                                <button className="w-full bg-white text-black font-bold py-3 rounded-lg text-sm hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Subscribe
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs font-mono tracking-wide">
                        © 2026 IpVaultX Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
