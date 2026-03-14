console.log("ready");
let a = [4, 2, 6, 7, 9];
let b = [];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  b.push(element ** 2);
  console.log(b[index]);
}
console.log(b);

console.log("Method 2");
let c = a.map((e) => {
  return e ** 2;
});
console.log(c);

const greaterthanseven = (e) => {
  if (e > 7) {
    return true;
    // console.log(true);
  }
  return false;
};
console.log(a.filter(greaterthanseven));

let arr2 = [1, 3, 4, 6, 3, 1];

const red = (a, b) => {
  return a * b;
};
console.log(arr2.reduce(red));
d = Array.from("JAVASCRIPT");
console.log(d);
