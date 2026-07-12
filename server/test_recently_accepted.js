const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://ls-rcr.com/community/?p=recently_accepted', { headers: { 'User-Agent': 'Mozilla/5.0' } })
    .then(res => {
        const $ = cheerio.load(res.data);
        const players = [];
        $('table tr').each((i, row) => {
            if (i === 0) return; // skip header
            const cols = $(row).find('td');
            if (cols.length >= 2) {
                players.push({
                    name: $(cols[0]).text().trim(),
                    tag: $(cols[1]).text().trim()
                });
            }
        });
        console.log(players.map(p => p.tag).join(', '));
    })
    .catch(err => console.error(err));
