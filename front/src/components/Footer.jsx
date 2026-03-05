export default function Footer() {
    return (
        <footer className="mt-auto relative z-10 w-full max-w-5xl mx-auto px-4 pb-8">
            <div className="chrome-panel p-6 md:p-10 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-2xl font-display font-bold tracking-widest text-white">TECH<span className="text-[var(--color-chrome-light)]">REPAIR</span></h3>
                        </div>
                        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed bg-black/40 p-4 rounded border border-[var(--color-chrome-border)] shadow-inner">
                            Empowering your tech with premium repair services.<br />
                            From customized builds to data recovery, we provide fast, reliable, and solid solutions in a state-of-the-art environment.
                        </div>
                    </div>
                    <div>
                        <h4 className="font-display font-bold border-b border-[var(--color-chrome-border)] pb-2 mb-4 uppercase text-[10px] tracking-widest text-[var(--color-accent-orange)]">Contact Protocol</h4>
                        <ul className="text-sm space-y-3 text-[var(--color-text-muted)]">
                            <li className="flex gap-3 items-center hover:text-white transition-colors"><span className="text-[var(--color-accent-red)] text-lg">📍</span> 123 Cyber Ln</li>
                            <li className="flex gap-3 items-center hover:text-white transition-colors"><span className="text-[var(--color-accent-red)] text-lg">📞</span> (555) 019-8273</li>
                            <li className="flex gap-3 items-center hover:text-white transition-colors"><span className="text-[var(--color-accent-red)] text-lg">✉️</span> supp@tech.rep</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display font-bold border-b border-[var(--color-chrome-border)] pb-2 mb-4 uppercase text-[10px] tracking-widest text-[var(--color-accent-orange)]">Active Hours</h4>
                        <ul className="text-sm space-y-3 text-[var(--color-text-muted)]">
                            <li>Mon-Fri: <span className="text-white">0900 - 1900</span></li>
                            <li>Sat: <span className="text-white">1000 - 1600</span></li>
                            <li className="opacity-50 line-through">Sun: Offline</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-[10px] text-[var(--color-chrome-light)] font-display tracking-widest">
                &copy; {new Date().getFullYear()} TECHREPAIR LABS. ALL SYSTEMS OPERATIONAL.
            </div>
        </footer>
    );
}
