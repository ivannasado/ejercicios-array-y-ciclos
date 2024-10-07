const nums = [1, 2, 3, 4];
console.log(nums);

const sum = nums.reduce((accumulator, valueNow) => accumulator + valueNow);
const product = nums.reduce((accumulator, valueNow) => accumulator * valueNow);

console.log(`The sum of ${nums} is ` + sum);
console.log(`The product of ${nums} is ` + product);