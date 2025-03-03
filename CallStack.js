function first() {
  console.log("First func"); //Execute hota hai
}
function second() {
  console.log("second func"); //Execute hota hai
}
function third() {
  console.log("thiird func"); //Execute hota hai
}

// first(); // call hota hai => Stack:[first]
// second(); // call hota hai => Stack:[first,second]
// third(); // call hota hai => Stack:[first,second,third]

third(); // camplete hota hai => Stack:[first,second,]
second(); // camplete hota hai => Stack:[first]
first(); // camplete hota hai => Stack empty ho jata hai.

// ? stack overflow error aa sakta hai.

function overflow() {
  overflow(); // infinite recursion
}

overflow();
// stack overflow error
//  Maximum call stack size exceeded
