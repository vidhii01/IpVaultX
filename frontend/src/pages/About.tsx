
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, GraduationCap, Building2, Star, ArrowRight } from 'lucide-react';

const mentor = {
    name: 'Reshu Tyagi',
    role: 'Project Mentor & Faculty Guide',
    dept: 'Department of Data Science',
    institute: 'ABES Institute of Technology, Ghaziabad',
    email: 'reshu.tyagi0907@gmail.com',
    bio: 'Faculty mentor guiding the IpVaultX team with expertise in data science, research methodology, and emerging technologies.',
};

const team = [
    {
        name: 'Siddharth Sharma',
        role: 'Backend Developer',
        speciality: 'Smart Contracts & Server Architecture',
        dept: 'Department of Data Science',
        institute: 'ABES Institute of Technology, Ghaziabad',
        email: 'sharma.ssiddharth17@gmail.com',
        rollNo: '2202901540166',
        initials: 'SS',
        bio: 'Responsible for the entire backend infrastructure — from server-side API development to Solidity smart contract deployment on the Ethereum blockchain.',
        gradient: 'from-[#00D1FF] to-[#6C5DD3]',
        tags: ['Node.js', 'Solidity', 'Ethereum', 'REST APIs'],
    },
    {
        name: 'Vidhi Singh',
        role: 'Frontend Developer',
        speciality: 'UI/UX & Web3 Interface',
        dept: 'Department of Data Science',
        institute: 'ABES Institute of Technology, Ghaziabad',
        email: 'vidhisingh0005@gmail.com',
        rollNo: '2202901540190',
        initials: 'VS',
        bio: 'Designed and built the entire user interface for IpVaultX — from the landing page to the wallet connection flow — ensuring a premium Web3 user experience.',
        gradient: 'from-pink-500 to-[#6C5DD3]',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    },
    {
        name: 'Viraj Marwaha',
        role: 'Project Lead & Research Head',
        speciality: 'System Architecture & Documentation',
        dept: 'Department of Data Science',
        institute: 'ABES Institute of Technology, Ghaziabad',
        email: 'virajmarwaha@gmail.com',
        rollNo: '2202901540194',
        initials: 'VM',
        bio: 'Spearheaded the research paper, presentations, and overall project coordination. Responsible for system design decisions and ensuring coherence across all project deliverables.',
        gradient: 'from-emerald-400 to-[#00D1FF]',
        tags: ['System Design', 'Research', 'Documentation', 'Leadership'],
    },
    {
        name: 'Shibani Suman',
        role: 'Research Analyst',
        speciality: 'Literature Review & Data Analysis',
        dept: 'Department of Data Science',
        institute: 'ABES Institute of Technology, Ghaziabad',
        email: 'sumanshibani92@gmail.com',
        rollNo: '2202901540152',
        initials: 'SbS',
        bio: 'Conducted in-depth literature review and comparative analysis of existing IP protection mechanisms, contributing key findings to the research foundation of IpVaultX.',
        gradient: 'from-violet-500 to-pink-500',
        tags: ['Research', 'Data Analysis', 'Literature Review', 'Web3'],
    },
    {
        name: 'Vedangi Thakur',
        role: 'Blockchain Researcher',
        speciality: 'Tokenomics & Protocol Design',
        dept: 'Department of Data Science',
        institute: 'ABES Institute of Technology, Ghaziabad',
        email: 'vedangithakur81@gmail.com',
        rollNo: '2302901549001',
        initials: 'VT',
        bio: 'Researched blockchain protocols, tokenomics models, and decentralized storage solutions, contributing to the core design of the IpVaultX protocol stack.',
        gradient: 'from-amber-400 to-emerald-400',
        tags: ['Blockchain', 'Tokenomics', 'IPFS', 'Protocol Design'],
    },
];

const values = [
    {
        emoji: '🔐',
        title: 'Decentralization First',
        description: 'No single point of failure, control, or censorship. Ownership lives on-chain — forever.',
    },
    {
        emoji: '🎨',
        title: 'Creator Sovereignty',
        description: 'Creators own their keys, assets, and identity. IpVaultX never holds what belongs to you.',
    },
    {
        emoji: '📖',
        title: 'Radical Transparency',
        description: 'Open-source contracts, public audits, and on-chain governance. Nothing hidden.',
    },
    {
        emoji: '🚀',
        title: 'Built for Scale',
        description: 'Multi-chain architecture designed to grow from a student project to global infrastructure.',
    },
];

const About = () => {
    return (
        <div className="bg-dark min-h-screen text-white font-body">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative pt-40 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[120px] -top-20 -right-20 pointer-events-none" />

                    <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <GraduationCap className="w-4 h-4 text-primary-400" />
                            <span className="text-primary-400 font-mono text-xs tracking-[0.2em] uppercase">ABES Institute of Technology, Ghaziabad</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Built by Students,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]">
                                Backed by Research
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
                        >
                            IpVaultX is a final-year research project from the Department of Data Science — a fully working blockchain-based intellectual property protection system.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                to="/whitepaper"
                                className="px-8 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all flex items-center gap-3 group"
                            >
                                Read Research Paper
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/connect"
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-white/5 transition-all"
                            >
                                Connect Wallet
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                { icon: Building2, label: 'Institution', value: 'ABES Institute of Technology' },
                                { icon: GraduationCap, label: 'Department', value: 'Data Science' },
                                { icon: Star, label: 'Project Type', value: 'Final Year Research Project' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 justify-center sm:justify-start">
                                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-primary-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{item.label}</div>
                                        <div className="font-bold text-white">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Four core principles that guide every decision we make.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-primary-500/20 hover:bg-white/[0.06] transition-all"
                            >
                                <div className="text-4xl mb-4">{v.emoji}</div>
                                <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Mentor */}
                <section className="py-10 bg-dark-100 border-y border-white/5">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Project Mentor</h2>
                            <p className="text-gray-500 text-sm font-mono">Faculty guidance and academic supervision</p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-3xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Star className="w-5 h-5 text-amber-400" />
                                <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Mentor</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-1">{mentor.name}</h3>
                            <div className="text-amber-400 font-mono text-sm font-bold uppercase tracking-wider mb-1">{mentor.role}</div>
                            <div className="text-gray-500 text-xs mb-5">{mentor.dept} · {mentor.institute}</div>
                            <div className="h-px w-full bg-amber-500/10 mb-5" />
                            <p className="text-gray-300 text-sm leading-relaxed mb-5">{mentor.bio}</p>
                            <a href={`mailto:${mentor.email}`} className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-white transition-colors">
                                <Mail className="w-3 h-3" />
                                {mentor.email}
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            The Team
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Five Data Science students from ABES Institute of Technology, Ghaziabad who built IpVaultX from scratch as a research-backed system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-7 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-white/15 hover:bg-white/[0.05] transition-all duration-500 flex flex-col overflow-hidden relative"
                            >
                                {/* Top gradient accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${member.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                                {/* Name & Role */}
                                <div className="mb-4">
                                    <h3 className="font-display font-bold text-white text-xl leading-tight mb-1">{member.name}</h3>
                                    <div className="text-xs font-mono font-bold uppercase tracking-widest" style={{ background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`, WebkitBackgroundClip: 'text' }}>
                                        <span className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>{member.role}</span>
                                    </div>
                                    <div className="text-[10px] text-gray-600 font-mono mt-1">{member.speciality}</div>
                                </div>

                                <div className="h-px w-full bg-white/5 mb-4" />

                                {/* Bio */}
                                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{member.bio}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Contact */}
                                <div className="space-y-1 pt-4 border-t border-white/5">
                                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-400 transition-colors font-mono">
                                        <Mail className="w-3 h-3" />
                                        {member.email}
                                    </a>
                                    <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
                                        <GraduationCap className="w-3 h-3" />
                                        Roll No: {member.rollNo}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    );
};

export default About;
