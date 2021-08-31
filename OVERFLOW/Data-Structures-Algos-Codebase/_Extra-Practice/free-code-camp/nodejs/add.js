const numbers = process.argv.slice(2);

const total = numbers.reduce((done, curr) => Number(done) + Number(curr));

console.log(total);
