const axios = require('axios');
axios.get('https://ls-rcr.com/swat/', { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 })
    .then(res => console.log('SWAT OK', res.data.length))
    .catch(err => console.error('SWAT ERROR', err.message));
