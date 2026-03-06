/**
 * Fetches repair services from the backend API.
 */
export const fetchServices = async () => {
    try {
        const response = await fetch('/api/services');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.ok ? await response.json() : [];
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};
