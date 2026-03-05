import { useState, useEffect } from 'react';
import { FaLaptopMedical, FaServer, FaHdd, FaMicrochip, FaNetworkWired, FaTools, FaSpinner } from 'react-icons/fa';
import { fetchServices } from '../api/servicesApi';

const iconMap = {
    LaptopMedical: <FaLaptopMedical />,
    Microchip: <FaMicrochip />,
    Hdd: <FaHdd />,
    NetworkWired: <FaNetworkWired />,
    Server: <FaServer />,
    Tools: <FaTools />
};

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
            } catch (err) {
                setError('SYSTEM ERROR: UNABLE TO RETRIEVE SERVICES');
            } finally {
                setLoading(false);
            }
        };
        loadServices();
    }, []);

    if (loading) {
        return (
            <div className="chrome-panel flex items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center gap-4 text-[var(--color-chrome-light)]">
                    <FaSpinner className="animate-spin text-4xl" />
                    <p className="font-display font-bold tracking-widest animate-pulse uppercase">Connecting to central server...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="chrome-panel flex items-center justify-center min-h-[400px]">
                <div className="text-red-500 font-display font-bold tracking-widest uppercase">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="chrome-panel">
            <div className="p-6 md:p-10 relative z-10">
                <div className="mb-10 flex flex-col gap-2 border-b border-[var(--color-chrome-border)] pb-6">
                    <h1 className="text-3xl font-display font-bold tracking-widest text-white">SERVICE <span className="text-[var(--color-chrome-light)]">DIRECTORY</span></h1>
                    <p className="text-sm text-[var(--color-text-muted)]">Select a category to initialize repair diagnostics.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div key={s.id} className="chrome-btn !flex-col !items-start !text-left !p-6 group hover:border-[var(--color-accent-orange)] cursor-pointer bg-black/20">
                            <div className="flex items-center gap-4 mb-4 w-full">
                                <div className="text-3xl text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors duration-300">
                                    {iconMap[s.icon] || <FaTools />}
                                </div>
                                <h3 className="text-[14px] font-display font-bold tracking-wider text-white flex-grow uppercase border-b border-[var(--color-chrome-light)] group-hover:border-[var(--color-accent-orange)] transition-colors pb-1">{s.title}</h3>
                            </div>
                            <p className="text-xs mt-2 text-[var(--color-text-muted)] leading-relaxed group-hover:text-white transition-colors lowercase font-medium">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
