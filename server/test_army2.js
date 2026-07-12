const axios = require('axios');
axios.get('https://ls-rcr.com/army/', { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 })
    .then(res => console.log('Status:', res.status, 'Length:', res.data.length))
    .catch(err => console.error(err.message));
