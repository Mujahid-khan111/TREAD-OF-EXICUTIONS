// setInterval(() => {
//   console.log("mujahid 2 second me print hoga");
// }, 2000);

// // setTimeout() with Recursion
// // setTimeout() ko recursion ke saath use karke ek repeating functionality banayi ja sakti hai.

function Count(n) {
  if (n <= 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  Count(n - 1);
}

Count(5);
// Repeating functionality ka use JavaScript me automation, animations, timers,
// aur loops ke liye kiya jata hai. Har method apne use-case ke according best hota hai.
