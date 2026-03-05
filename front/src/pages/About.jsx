import { useState } from 'react';

const faqs = [
    { q: "Do you offer warranties on repairs?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { q: "How long does a diagnostic take?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { q: "Can you build custom liquid-cooled systems?", a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

export default function About() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="max-w-4xl mx-auto chrome-panel p-6 md:p-10 relative z-10">
            <div className="mb-10 flex flex-col gap-2 border-b border-[var(--color-chrome-border)] pb-6">
                <h1 className="text-3xl font-display font-bold tracking-widest text-white">ABOUT <span className="text-[var(--color-chrome-light)]">LABS</span></h1>
                <p className="text-sm text-[var(--color-text-muted)]">Dedicated to precision and technology.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-2/3 space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed bg-black/40 p-6 rounded-lg border border-[var(--color-chrome-border)] shadow-inner">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="md:w-1/3 flex items-center justify-center p-6 bg-black/20 rounded-lg border border-[var(--color-chrome-border)] group">
                    <img src="https://win98icons.alexmeub.com/icons/png/modem-0.png" alt="hardware" className="w-32 group-hover:scale-105 transition-transform duration-500 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" />
                </div>
            </div>

            <div className="border-t border-[var(--color-chrome-border)] pt-8">
                <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-3 text-white tracking-widest">
                    <span className="text-[var(--color-accent-orange)]">FAQ</span> DATABASE
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-black/20 rounded-lg overflow-hidden border border-[var(--color-chrome-border)]">
                            <button
                                className="w-full text-left font-display font-bold text-[11px] uppercase tracking-wider p-4 hover:bg-black/40 transition-colors flex justify-between items-center text-white"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span>{faq.q}</span>
                                <span className="text-[var(--color-accent-orange)] text-lg leading-none">{openFaq === index ? '-' : '+'}</span>
                            </button>
                            {openFaq === index && (
                                <div className="p-4 pt-0 text-sm text-[var(--color-text-muted)] bg-black/40 border-t border-[var(--color-chrome-border)] leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
