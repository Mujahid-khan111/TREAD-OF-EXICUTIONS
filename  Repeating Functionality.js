// Recursion (Simple Definition)
// Recursion एक ऐसा तरीका है जिसमें कोई function खुद को ही call करता है जब तक कोई condition पूरी ना हो जाए।
// Repeating Functionality

for (let m = 1; m <= 3; m++) {
  console.log("hello", "mujahid");
}

function repiting(mess, times) {
  if (times <= 0) return;
  console.log(mess);
  repiting(mess, times - 1);
}

repiting("good,morning", 2);

function reuse(name, count) {
  for (let i = 0; i < count; i++) {
    console.log(`hello, ${name}`);
  }
}

reuse("mujahid", 3);

function repeat(msg, times) {
  if (times <= 0) return;
  console.log(msg);
  repeat(msg, times - 1);
}

// repeat("hi", 3)
