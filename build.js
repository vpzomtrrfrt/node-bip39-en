const fs = require('fs');

const words = fs.readFileSync('words.txt')
.toString()
.split("\n")
.map(x => x.trim())
.filter(x => x.length > 0);

const json = JSON.stringify(words);
fs.writeFileSync("words.json", json);
fs.writeFileSync("words.js", "module.exports="+json);
