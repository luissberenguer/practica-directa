const fs = require('fs');
const { Transform } = require('stream');

const readable = fs.createReadStream('./football.csv');
const writable = fs.createWriteStream('./transformed-regex.txt');

const myRegex = /^(\d{4})-\d{2}-\d{2},([\w \.-ç]+),([\w \.-ç]+),(\d{1,2})+,(\d{1,2})+.*$/
const replace = 'INSERT INTO partidos (año, local, visitante, golesL, golesV) VALUES ($1, $2, $3, $4, $5);'

const regex = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().replace(myRegex, replace));
    callback();
  }
});

readable.pipe(regex).pipe(writable);