const fs = require('fs');
const code = fs.readFileSync('turf.js', 'utf8');
const urls = code.match(/https?:\/\/[^\s"']+/g) || [];
const paths = code.match(/['"\/](?:api|turf|data)[^'"\\]*['"]/gi) || [];
console.log('URLs:', urls);
console.log('Paths:', paths);
