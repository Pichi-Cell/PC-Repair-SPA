import { Link } from 'react-router-dom';
import { FaWrench, FaShieldAlt, FaDesktop } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="space-y-12 animate-none">
            {/* Hero Section */}
            <section className="chrome-panel !bg-black/30 backdrop-blur-xl border-white/5 shadow-2xl">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center relative z-10">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black/50 border border-[var(--color-chrome-light)] shadow-[0_0_30px_rgba(255,85,0,0.15)] flex justify-center items-center shrink-0 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-red)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <FaDesktop className="text-5xl md:text-7xl text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors duration-500 relative z-10" />
                    </div>
                    <div className="text-left flex-grow">
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight drop-shadow-sm">
                            SYSTEM <span className="text-accent-gradient">RESTORED</span>
                        </h1>
                        <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-2xl mb-8 leading-relaxed font-medium">
                            Premium hardware architecture, bespoke custom builds, and secure data recovery.<br />
                            We engineer precision into every component.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link to="/services" className="chrome-btn-primary">
                                EXPLORE SERVICES
                            </Link>
                            <Link to="/contact" className="chrome-btn">
                                INITIALIZE CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="grid md:grid-cols-3 gap-6">
                <div className="chrome-panel group hover:border-[var(--color-accent-orange)] transition-colors duration-300 cursor-pointer">
                    <div className="p-8 text-center flex-grow flex flex-col items-center relative z-10">
                        <div className="w-16 h-16 rounded-full bg-black/40 border border-[var(--color-chrome-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent-orange)] transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                            <FaWrench className="text-2xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 tracking-wide">HARDWARE</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Precision diagnostics, liquid-damage repair, and enterprise-grade component upgrades.</p>
                    </div>
                </div>

                <div className="chrome-panel group hover:border-[var(--color-accent-orange)] transition-colors duration-300 cursor-pointer">
                    <div className="p-8 text-center flex-grow flex flex-col items-center relative z-10">
                        <div className="w-16 h-16 rounded-full bg-black/40 border border-[var(--color-chrome-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent-orange)] transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                            <FaDesktop className="text-2xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 tracking-wide">ARCHITECTURE</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Bespoke rig fabrication for enthusiasts, creative professionals, and intense computing.</p>
                    </div>
                </div>

                <div className="chrome-panel group hover:border-[var(--color-accent-orange)] transition-colors duration-300 cursor-pointer">
                    <div className="p-8 text-center flex-grow flex flex-col items-center relative z-10">
                        <div className="w-16 h-16 rounded-full bg-black/40 border border-[var(--color-chrome-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent-orange)] transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                            <FaShieldAlt className="text-2xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-orange)] transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 tracking-wide">RECOVERY</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Secure forensic data extraction, drive rebuilding, and threat neutralization protocols.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
