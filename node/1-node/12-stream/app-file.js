const fs = require('fs');

// π©
//νμΌμ λ€ μ½μ λ€μμ μ€ννλ€
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
