const axios = require('axios');
const fs = require('fs');

async function test() {
    const res = await axios.get('https://ls-rcr.com/army/', { headers: { 'User-Agent': 'Mozilla/5.0' } });
    fs.writeFileSync('army_out.html', res.data);
    console.log('done');
}
test();
