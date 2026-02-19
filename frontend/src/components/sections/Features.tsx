
import { motion } from 'framer-motion';
import {
    Database,
    Lock,
    Share2,
    Fingerprint,
    Cpu,
    Globe
} from 'lucide-react';

const features = [
    {
        icon: <Database className="w-6 h-6 text-primary-400" />,
        title: "Decentralized Storage",
        description: "Your IP is fragmented and stored across a global network of nodes, ensuring zero downtime and censorship resistance.",
        colSpan: "md:col-span-2",
        delay: 0.1
    },
    {
        icon: <Lock className="w-6 h-6 text-secondary-400" />,
        title: "Military-Grade Encryption",
        description: "AES-256 encryption protects your assets before they even leave your device.",
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        icon: <Share2 className="w-6 h-6 text-accent-500" />,
        title: "Secure Sharing",
        description: "Grant temporary access with self-destructing links and granular permissions.",
        colSpan: "md:col-span-1",
        delay: 0.3
    },
    {
        icon: <Fingerprint className="w-6 h-6 text-emerald-400" />,
        title: "Biometric Authentication",
        description: "Hardware-level security integration with FaceID and TouchID support.",
        colSpan: "md:col-span-2",
        delay: 0.4
    }
];

const Features = () => {
    return (
        <section id="features" className="py-32 bg-dark-200 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-primary-500" />
                        <span className="text-primary-400 font-mono text-xs tracking-[0.2em] uppercase">
                            Why Choose IpVaultX
                        </span>
                        <div className="h-px w-8 bg-primary-500" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
                    >
                        Fort Knox for your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">Digital Assets</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed font-light"
                    >
                        We've reimagined security from the ground up to provide a seamless, uncrackable vault for your most valuable creations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className={`p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary-500/30 transition-all duration-500 hover:bg-white/[0.05] group hover:shadow-2xl hover:shadow-primary-500/10 ${feature.colSpan} relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <Cpu className="w-24 h-24 text-white" />
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-dark-100 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-500 shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary-100 transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-body text-base group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
