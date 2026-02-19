

import { motion } from 'framer-motion';

export const Logo = () => {
    return (
        <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter cursor-pointer group">
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full group-hover:bg-primary-500/40 transition-colors duration-500" />

                {/* Geometric Shape Composition */}
                <motion.div
                    className="absolute inset-0 border border-white/10 rotate-45 rounded-lg backdrop-blur-sm"
                    animate={{ rotate: [45, 225] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10 w-8 h-8 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                    {/* Abstract 'X' or Vault icon */}
                    <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                        <div className="absolute w-[2px] h-full bg-white rotate-45 transform origin-center" />
                        <div className="absolute w-[2px] h-full bg-white -rotate-45 transform origin-center" />
                        <div className="absolute w-2 h-2 border border-white rounded-sm" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-white text-lg tracking-wide uppercase font-accent font-black">
                    Ip<span className="text-primary-500">Vault</span>
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-mono group-hover:text-primary-400 transition-colors">
                    Protocol
                </span>
            </div>
        </div>
    );
};

export default Logo;
