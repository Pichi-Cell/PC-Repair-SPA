import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="max-w-4xl mx-auto chrome-panel p-6 md:p-10 relative z-10">
            <div className="mb-10 flex flex-col gap-2 border-b border-[var(--color-chrome-border)] pb-6">
                <h1 className="text-3xl font-display font-bold tracking-widest text-white">SYSTEM <span className="text-[var(--color-chrome-light)]">COMMUNICATIONS</span></h1>
                <p className="text-sm text-[var(--color-text-muted)]">Establish a direct connection with our technicians.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Form Side */}
                <div className="md:w-2/3">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Client Designation</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Return Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-orange)] transition-colors">Diagnostic Query</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors resize-none"
                                placeholder="Describe the hardware or system fault..."
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="p-3 bg-green-900/40 border border-green-500 rounded text-green-400 text-xs font-display tracking-widest uppercase animate-pulse">
                                Packet Transmitted Successfully. Awaiting Response.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-3 bg-red-900/40 border border-red-500 rounded text-red-400 text-xs font-display tracking-widest uppercase">
                                Transmission Failure. Check Network Protocol.
                            </div>
                        )}

                        <div className="flex justify-end gap-4 pt-4 border-t border-[var(--color-chrome-border)]">
                            <button
                                type="reset"
                                onClick={() => setFormData({ name: '', email: '', message: '' })}
                                className="chrome-btn bg-black/20 hover:bg-black/40 transition-all text-xs"
                                disabled={status === 'submitting'}
                            >
                                clear cache
                            </button>
                            <button
                                type="submit"
                                className={`chrome-btn-primary min-w-[160px] ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT PACKET'}
                            </button>
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
