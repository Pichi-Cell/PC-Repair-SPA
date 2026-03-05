import servicesData from '../data/services.json';

/**
 * Simulates a network request to fetch repair services.
 * Adds a delay to demonstrate loading states in the UI.
 */
export const fetchServices = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly simulate an error for robustness (optional, but good for testing)
            // if (Math.random() > 0.95) reject(new Error("FAILED TO CONNECT TO SERVER"));
            resolve(servicesData);
        }, 800);
    });
};
