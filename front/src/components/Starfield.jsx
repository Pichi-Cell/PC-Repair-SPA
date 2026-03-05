import { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.getContext) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Particle properties
        const numStars = 600; // Less dense for a cleaner look
        const stars = [];
        const speed = 0.2; // Slower, more atmospheric

        for (let i = 0; i < numStars; i++) {
            // Emulate glowing dust/embers
            const isOrange = Math.random() > 0.7;
            const opacity = Math.random() * 0.8 + 0.1;

            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                size: Math.random() * 2.5 + 0.5,
                color: isOrange
                    ? `rgba(255, 85, 0, ${opacity})` // Accent orange
                    : `rgba(160, 160, 160, ${opacity * 0.5})`, // Subtle grey
                speedModifier: Math.random() * 0.5 + 0.5
            });
        }

        const animate = () => {
            // Fill background with semi-transparent black for motion trails
            ctx.fillStyle = 'rgba(5, 5, 5, 0.4)'; // var(--color-dark-base) essentially
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Move and draw stars
            for (let i = 0; i < numStars; i++) {
                let star = stars[i];
                // Move slowly towards the viewer and slightly up
                star.z -= speed * star.speedModifier;
                star.y -= speed * 0.5;

                if (star.z <= 0 || star.y < 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width;
                    star.y = canvas.height + Math.random() * 100; // Reset below screen
                }

                const px = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
                const py = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;

                // Only draw if within bounds
                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    const mappedSize = star.size * (canvas.width / star.z) * 0.8;
                    ctx.fillStyle = star.color;

                    // Draw circles instead of squares for better ember look
                    ctx.beginPath();
                    ctx.arc(px, py, mappedSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 block w-full h-full -z-10 pointer-events-none"
        />
    );
}
