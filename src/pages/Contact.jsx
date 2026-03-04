export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto chrome-panel p-6 md:p-10 relative z-10">
            <div className="mb-10 flex flex-col gap-2 border-b border-[var(--color-chrome-border)] pb-6">
                <h1 className="text-3xl font-display font-bold tracking-widest text-white">SYSTEM <span className="text-[var(--color-chrome-light)]">COMMUNICATIONS</span></h1>
                <p className="text-sm text-[var(--color-text-muted)]">Establish a direct connection with our technicians.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Form Side */}
                <div className="md:w-2/3">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Client Designation</label>
                            <input type="text" className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Return Address</label>
                            <input type="email" className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Diagnostic Query</label>
                            <textarea rows="5" className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors resize-none" placeholder="Describe the hardware or system fault..."></textarea>
                        </div>
                        <div className="flex justify-end gap-4 pt-4 border-t border-[var(--color-chrome-border)]">
                            <button type="reset" className="chrome-btn bg-black/20 hover:bg-black/40">clear cache</button>
                            <button type="submit" className="chrome-btn-primary">TRANSMIT PACKET</button>
                        </div>
                    </form>
                </div>

                {/* Info Side */}
                <div className="md:w-1/3 space-y-6">
                    <div className="p-5 bg-black/20 rounded-lg border border-[var(--color-chrome-border)] flex items-start gap-4 group hover:border-[var(--color-accent-orange)] transition-colors">
                        <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-accent-orange)] transition-colors">📍</span>
                        <div>
                            <h3 className="font-display font-bold text-[10px] tracking-widest uppercase text-white mb-1">Physical Location</h3>
                            <p className="text-xs text-[var(--color-text-muted)]">123 Cyber Lane<br />Tech City, TX 75001</p>
                        </div>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border border-[var(--color-chrome-border)] flex items-start gap-4 group hover:border-[var(--color-accent-orange)] transition-colors">
                        <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-accent-orange)] transition-colors">📞</span>
                        <div>
                            <h3 className="font-display font-bold text-[10px] tracking-widest uppercase text-white mb-1">Voice Protocol</h3>
                            <p className="text-xs text-[var(--color-text-muted)]">(555) 019-8273</p>
                        </div>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border border-[var(--color-chrome-border)] flex items-start gap-4 group hover:border-[var(--color-accent-orange)] transition-colors">
                        <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-accent-orange)] transition-colors">✉️</span>
                        <div>
                            <h3 className="font-display font-bold text-[10px] tracking-widest uppercase text-white mb-1">Direct Ping</h3>
                            <p className="text-xs font-semibold text-[var(--color-accent-orange)] cursor-pointer hover:text-white transition-colors">supp@tech.rep</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
