import { FaLaptopMedical, FaServer, FaHdd, FaMicrochip, FaNetworkWired, FaTools } from 'react-icons/fa';

const services = [
    { id: 1, title: 'Laptop Repair', desc: 'Screen replacements, battery issues, and motherboard diagnostics.', icon: <FaLaptopMedical /> },
    { id: 2, title: 'Custom Builds', desc: 'High-performance gaming rigs and workstations.', icon: <FaMicrochip /> },
    { id: 3, title: 'Data Recovery', desc: 'Recovering lost files from corrupted drives.', icon: <FaHdd /> },
    { id: 4, title: 'Network Setup', desc: 'Home and office networking, routers, and firewalls.', icon: <FaNetworkWired /> },
    { id: 5, title: 'Server Maintenance', desc: 'Enterprise server setup and routine health checks.', icon: <FaServer /> },
    { id: 6, title: 'General Diagnostics', desc: 'Not sure what is wrong? We will find the issue.', icon: <FaTools /> },
];

export default function Services() {
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
                                    {s.icon}
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
