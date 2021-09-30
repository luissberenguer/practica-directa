const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./movies.csv');
  src.pipe(res);
});

server.listen(8000);