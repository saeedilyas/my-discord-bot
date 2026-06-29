const query = require('samp-query');
const options = { host: '37.187.77.206', port: 7777 };

console.log('Querying SAMP server...');
query(options, (err, response) => {
    if (err) {
        console.error('Query Error:', err);
    } else {
        console.log('Query Response:', response);
    }
    process.exit();
});
