const SampQuery = require('node-samp-query');
const query = new SampQuery({ ip: '37.187.77.206', port: 7777 });

console.log('Querying SAMP server with node-samp-query...');
query.getServerInfo()
    .then((response) => {
        console.log('Query Response:', JSON.stringify(response, null, 2));
    })
    .catch((error) => {
        console.error('Query Error:', error);
    })
    .finally(() => {
        process.exit();
    });
