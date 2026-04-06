// console.log('sameer');
// console.log('sameer rockz');
// console.log('sameer samee');
console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Sameer");
    }, 3000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Sameer 2");
    }, 3000);
  }
});
let prom3 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Sameer 3");
    }, 3000);
  }
});

// prom1
//   .all((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
let p4 = Promise.allSettled([prom1, prom2]);
p4.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
