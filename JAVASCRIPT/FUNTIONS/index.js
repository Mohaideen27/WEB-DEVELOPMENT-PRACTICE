// function nice(name) {
//   console.log("hi " + name + ", Welcome");
//   console.log("How is your day" + name);
//   console.log("Is everthing ok" + name);
//   console.log("Have you talk with your parents" + name);
//   //   console.log("How is your day" + name);
// }
// nice("sameer");

function sum(a, b) {
  console.log(a + b);
}

sum(5, 6);

function mul(a, b) {
  return a * b;
}

ans = mul(2, 3);
console.log("answer is " + ans);

function mul2(a, b, c = 2) {
  return a * b * c;
}

ans1 = mul2(2, 3);
console.log("answer is " + ans1);

function mul4(a, b, c = 2) {
  return a * b * c;
}

ans1 = mul4(2, 3, 1);
console.log("answer is " + ans1);

function mul3(a, b, c = 2) {
  console.log(a, b, c);
  return a * b * c;
}

ans2 = mul3(3);
console.log("answer is " + ans1);

const func = (x) => {
  console.log("I am an arrow function ", x);
};

func(34);
func(33);
func(44);
