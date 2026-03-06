import { useState, useEffect } from 'react';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
            fetchInquiries(token);
        }
    }, [token]);

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                setToken(data.token);
                setIsAuthenticated(true);
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Connection failed. Is the server running?');
        } finally {
            setLoading(false);
        }
    };

    const fetchInquiries = async (authToken) => {
        setLoading(true);
        try {
            const response = await fetch('/api/inquiries', {
                headers: { 'Authorization': `Bearer ${authToken}` },
            });
            const data = await response.json();
            if (response.ok) {
                setInquiries(data);
            } else {
                if (response.status === 401) handleLogout();
                setError('Failed to fetch inquiries');
            }
        } catch (err) {
            setError('Failed to load inquiries.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken('');
        setIsAuthenticated(false);
        setInquiries([]);
    };

    if (!isAuthenticated) {
        return (
            <div className="max-w-md mx-auto chrome-panel p-8 relative z-10 animate-fade-in">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-display font-bold tracking-[0.2em] text-white underline decoration-[var(--color-accent-orange)] underline-offset-8">ACCESS CONTROL</h2>
                    <p className="text-[10px] text-[var(--color-text-muted)] mt-4 uppercase tracking-widest">Authorized Personnel Only</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)]">User ID</label>
                        <input
                            name="username"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            type="text"
                            className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-display font-bold tracking-widest text-[var(--color-text-muted)]">Security Key</label>
                        <input
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            type="password"
                            className="w-full bg-black/40 border border-[var(--color-chrome-border)] rounded p-3 text-white text-sm focus:outline-none focus:border-[var(--color-accent-orange)]"
                        />
                    </div>

                    {error && <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest border-l-2 border-red-500 pl-2">{error}</div>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="chrome-btn-primary w-full"
                    >
                        {loading ? 'AUTHENTICATING...' : 'INITIATE LOGIN'}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto chrome-panel p-6 relative z-10 animate-fade-in">
            <div className="flex justify-between items-center border-b border-[var(--color-chrome-border)] pb-6 mb-8">
                <div>
                    <h1 className="text-2xl font-display font-bold tracking-widest text-white">ADMIN <span className="text-[var(--color-chrome-light)]">DASHBOARD</span></h1>
                    <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-tighter mt-1">System Node: Inbound Communications</p>
                </div>
                <button onClick={handleLogout} className="text-[10px] font-bold tracking-widest text-red-500 hover:text-red-400 border border-red-900 px-4 py-2 rounded uppercase transition-colors">
                    Disconnect
                </button>
            </div>

            {loading && <div className="text-center py-20 text-[var(--color-accent-orange)] font-display tracking-[0.3em] animate-pulse">RETRIVING DATA PACKETS...</div>}

            <div className="grid gap-4">
                {inquiries.length === 0 && !loading && (
                    <div className="text-center py-20 text-[var(--color-text-muted)] text-sm uppercase tracking-widest">No active inquiries detected.</div>
                )}
                {inquiries.map((iq) => (
                    <div key={iq.id} className="p-5 bg-black/30 border border-[var(--color-chrome-border)] rounded hover:border-[var(--color-accent-orange)] transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-wide">{iq.name}</h3>
                                <p className="text-[var(--color-accent-orange)] text-[10px] font-mono">{iq.email}</p>
                            </div>
                            <span className={`text-[9px] px-2 py-1 rounded border font-bold uppercase tracking-tighter ${iq.status === 'new' ? 'border-yellow-900 text-yellow-500 bg-yellow-900/10' :
                                    'border-green-900 text-green-500 bg-green-900/10'
                                }`}>
                                {iq.status}
                            </span>
                        </div>
                        <p className="text-xs text-[var(--color-chrome-light)] leading-relaxed bg-black/20 p-3 rounded">{iq.message}</p>
                        <div className="mt-4 pt-4 border-t border-[var(--color-chrome-border)] flex justify-between items-center">
                            <span className="text-[9px] text-[var(--color-text-muted)] uppercase font-mono">{new Date(iq.createdAt).toLocaleString()}</span>
                            <div className="flex gap-2">
                                <button className="text-[9px] uppercase font-bold text-[var(--color-text-muted)] hover:text-white transition-colors">Archive</button>
                                <button className="text-[9px] uppercase font-bold text-[var(--color-accent-orange)] hover:underline">Mark Active</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
