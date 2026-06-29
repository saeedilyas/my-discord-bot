const { GameDig } = require('gamedig');

console.log('Querying SAMP server with GameDig...');
GameDig.query({
    type: 'samp',
    host: 'play.ls-rcr.com',
    port: 7777
}).then((state) => {
    console.log('Query Response:', state);
}).catch((error) => {
    console.error('Query Error:', error);
}).finally(() => {
    process.exit();
});
