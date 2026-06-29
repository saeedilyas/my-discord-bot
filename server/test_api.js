const axios = require('axios');

const API_URL = 'http://sam.markski.ar/api/GetServerByIP?ip_addr=37.187.77.206:7777';

console.log('Querying SAMP server via SAMonitor API...');
axios.get(API_URL)
    .then((res) => {
        console.log('API Response:', res.data);
    })
    .catch((err) => {
        console.error('API Error:', err.message);
    })
    .finally(() => {
        process.exit();
    });
