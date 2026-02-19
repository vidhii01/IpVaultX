
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send this to a backend or email service
        setSubmitted(true);
    };

    return (
        <div className="bg-dark min-h-screen text-white font-body">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <div className="h-px w-8 bg-primary-500" />
                            <span className="text-primary-400 font-mono text-xs tracking-[0.2em] uppercase">Get In Touch</span>
                            <div className="h-px w-8 bg-primary-500" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
                        >
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5DD3]">IpVaultX</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-xl mx-auto"
                        >
                            For partnerships, press inquiries, or technical questions — reach out anytime.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-10">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@ipvaultx.io', href: 'mailto:hello@ipvaultx.io' },
                                { icon: MessageSquare, label: 'Discord', value: 'discord.gg/ipvaultx', href: '#' },
                                { icon: Twitter, label: 'Twitter/X', value: '@IpVaultX', href: '#' },
                                { icon: Github, label: 'GitHub', value: 'github.com/ipvaultx', href: '#' },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-4 p-5 bg-white/[0.03] border border-white/5 hover:border-primary-500/30 rounded-2xl transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-primary-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{item.label}</div>
                                        <div className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-3"
                        >
                            {submitted ? (
                                <div className="h-full flex items-center justify-center p-12 bg-green-500/10 border border-green-500/20 rounded-2xl text-center">
                                    <div>
                                        <div className="text-5xl mb-4">✅</div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 p-8 bg-white/[0.03] border border-white/5 rounded-2xl">
                                    <div>
                                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                                            placeholder="Tell us about your project, question, or partnership idea..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
