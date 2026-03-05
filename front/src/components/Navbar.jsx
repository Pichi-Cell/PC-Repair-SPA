import { Link } from 'react-router-dom';
import { FaMemory } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 chrome-panel rounded-none border-x-0 border-t-0 px-4 py-3 flex justify-between items-center bg-opacity-90 backdrop-blur-md">
            <div className="flex items-center gap-6">
                <Link to="/" className="flex items-center gap-3 group">
                    <span className="font-display font-bold text-xl md:text-4xl tracking-widest text-white group-hover:text-[var(--color-accent-orange)] transition-colors">TECH<span className="text-[var(--color-chrome-light)]">REPAIR</span></span>
                </Link>
                <div className="hidden md:block h-6 w-[1px] bg-[var(--color-chrome-light)] mx-2"></div>
                <div className="hidden md:flex gap-6 items-center text-s font-bold tracking-widest">
                    <Link to="/" className="hover:text-[var(--color-accent-orange)] transition-colors">HOME</Link>
                    <Link to="/services" className="hover:text-[var(--color-accent-orange)] transition-colors">SERVICES</Link>
                    <Link to="/about" className="hover:text-[var(--color-accent-orange)] transition-colors">ABOUT</Link>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center gap-2 text-[10px] text-[var(--color-text-muted)] font-display tracking-widest bg-black px-3 py-1 rounded-full border border-[var(--color-chrome-border)] shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-red)] animate-pulse"></div>
                    <span>SYS_ONLINE</span>
                </div>
                <Link to="/contact" className="chrome-btn-primary">
                    Get Quote
                </Link>
            </div>
        </nav>
    );
}
