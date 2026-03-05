export const getHealth = (req, res) => {
    res.json({
        status: 'online',
        timestamp: new Date().toISOString(),
        service: 'PC Repair Shop API'
    });
};
