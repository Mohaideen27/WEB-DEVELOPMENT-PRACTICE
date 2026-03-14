let a = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}
a.forEach((arr) => {
  console.log(arr);
});

let obj = {
  1: "science",
  2: "social",
  3: "polity",
};
for (const key in obj) {
  if (!Object.hasOwn(obj, key)) continue;

  const element = obj[key];
  console.log(key, element);
}

for (const element of a) {
  console.log(element);
}
