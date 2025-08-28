// SYNCHRONOUSLY (ONE BY ONE)

const fs = require('fs');
const data1 = fs.readFileSync('a.txt','utf8');
console.log(data1);

const data2 = fs.readFileSync('b.txt','utf8');
console.log(data2);

const data3 = fs.readFileSync('c.txt','utf8');
console.log(data3);
