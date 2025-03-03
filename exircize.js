function Higher(name, callbcak) {
  /// Paramtor
  console.log("hello" + " " + name);
  callbcak();
}

function second() {
  // yaha pr second ek call back function he jo higher fun ke andr as a argument ke roop me
  // pass kiya gya he oru baad me call kiya gya he
  console.log("best of luck");
}

Higher("mujahid", second); // higher order functon

// why Use Callbacks?
//  Asynchronous Execution (API calls, setTimeout, event handling)
//  Code Reusability
//  Functional Programming
