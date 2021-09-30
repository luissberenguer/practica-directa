const fs = require('fs');
const writable = fs.createWriteStream('./bigFile.txt');

for (let i=0; i<10000; i++){
    writable.write('Esta es una línea más, una lína más \n')
}

writable.end();