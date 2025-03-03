// JavaScript में Higher-Order Functions वे functions होते हैं जो या तो किसी दूसरे
// function को as an argument लेते हैं या खुद एक function को return करते हैं।
// मतलब, function के अंदर function काम करता है।

function great(name) {
  return "hello," + name;
}

function disPlayMessage(func, name) {
  console.log(func(name));
}

disPlayMessage(great, "mujahid");
