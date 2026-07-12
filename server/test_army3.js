const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    const isArmy = true;
    const url = isArmy ? 'https://ls-rcr.com/army/' : 'https://ls-rcr.com/swat/';
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 });
    const $ = cheerio.load(res.data);
    const membersList = [];
    $('.card').each((i, card) => {
        const titleEl = $(card).find('.card-title').clone();
        titleEl.find('span').remove();
        const rank = titleEl.text().trim();

        $(card).find('.list-group-item').each((j, item) => {
            const name = $(item).text().trim();
            if (name && rank) {
                membersList.push({
                    originalName: name,
                    rank: rank,
                    core: name.toLowerCase().replace(/\[.*?\]/g, '').replace(/^(lsrcr_|lsrcr\.)/, '')
                });
            }
        });
    });

    const playersRes = await axios.get('http://sam.markski.ar/api/GetServerPlayers?ip_addr=37.187.77.206:7777', { timeout: 8000 });
    const players = playersRes.data || [];

    const onlineMembers = [];
    for (const p of players) {
        const pNameLower = p.name.toLowerCase();
        const pCore = pNameLower.replace(/\[.*?\]/g, '').replace(/^(lsrcr_|lsrcr\.)/, '');

        const match = membersList.find(a =>
            a.originalName.toLowerCase() === pNameLower ||
            a.core === pCore ||
            (a.core.length >= 3 && pNameLower.includes(a.core))
        );

        if (match) {
            onlineMembers.push({ name: p.name, rank: match.rank });
        }
    }
    console.log("Found:", onlineMembers);
}
test().catch(e => console.error(e));
