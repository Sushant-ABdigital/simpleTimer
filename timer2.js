const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

let switcher = false;
//Event handling with user input
stdin.on("data", key => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") {
    console.log("b pressed");
    switcher = true;
    return;
  }
  if (switcher) {
    console.log(`setting timer for ${key} seconds\n`);
    setTimeout(() => {
      process.stdout.write(`Beeping after ${key} seconds \n`);
    }, key * 1000);
  }
});
