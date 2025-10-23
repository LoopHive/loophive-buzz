const beeFrames = require("./animations/beeFrames");
const sleep = require("./utils/sleep");

async function animateBee() {
  console.clear();
  console.log("🐝 Welcome to LoopHive Bee Animation! 🐝\n");

  for (let i = 0; i < 10; i++) {
    for (const frame of beeFrames) {
      console.clear();
      console.log("🐝 LoopHive Bee Animation 🐝\n");
      console.log(frame);
      await sleep(300);
    }
  }

  console.log("\nThanks for watching!");
}

animateBee();
