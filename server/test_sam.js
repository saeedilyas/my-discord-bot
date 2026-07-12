const axios = require('axios');
axios.get('http://sam.markski.ar/api/GetServerPlayers?ip_addr=37.187.77.206:7777', { timeout: 8000 })
    .then(res => console.log(res.data.slice(0, 2)))
    .catch(err => console.error(err.message));
