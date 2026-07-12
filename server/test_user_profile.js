const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://ls-rcr.com/user/[Lsrcr]Awdallah', { headers: { 'User-Agent': 'Mozilla/5.0' } })
    .then(res => {
        const $ = cheerio.load(res.data);
        console.log("Full text:\n", $('body').text().replace(/\s+/g, ' '));
    })
    .catch(err => console.error(err.message));
