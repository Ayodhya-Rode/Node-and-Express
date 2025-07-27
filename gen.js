const fs = require('fs');

const writeStream = fs.createWriteStream('bigfile.txt');

for (let i = 0; i < 1_000_000; i++) {
  writeStream.write(`This is line number ${i}\n`);
}

writeStream.end(() => {
  console.log('✅ Big file created: bigfile.txt');
});
