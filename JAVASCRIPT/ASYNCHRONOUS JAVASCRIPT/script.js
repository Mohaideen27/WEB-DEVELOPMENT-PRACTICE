// CALL BACK
setTimeout(() => {
  console.log("Waited 1 second");
}, 1000);

// NESTED SETTIMEOUT OR CALLBACK HELL

setTimeout(() => {
  console.log("3");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("1");
    }, 1000);
  }, 1000);
}, 10000);

// BUTTON EVENT HANDLER IN BROWSER JAVASCRIPT
// const btn;
// btn.addEventListener('click',()=>{

// })

// ERROR FIRST CALLBACK

// PROMISES

const myprom = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  console.log(rand);

  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

myprom
  .then(() => console.log("Success"))
  .catch(() => console.error("something went wrong"));

//  FETCH API
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
