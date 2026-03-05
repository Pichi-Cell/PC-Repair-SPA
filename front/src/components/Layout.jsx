import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Starfield from './Starfield';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-[var(--color-accent-orange)] selection:text-white">
            <Starfield />
            <Navbar />
            <main className="flex-grow z-10 w-full max-w-5xl mx-auto px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
