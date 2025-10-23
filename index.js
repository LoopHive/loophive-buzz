const beeFrames = require("./animations/beeFrames");
const sleep = require("./utils/sleep");
const chalk = require('chalk');

async function animateBee() {
  console.clear();
  console.log(chalk.bold.yellow("🐝 Welcome to LoopHive Bee Animation! 🐝\n"));

  const text = "LoopHive 🐝 Buzzing...";
  const textLength = text.length;

  for (let i = 0; i < 10; i++) {
    for (const frame of beeFrames) {
      console.clear();
      console.log(chalk.bold.yellow("🐝 LoopHive Bee Animation 🐝\n"));
      console.log(frame);

      // متن متحرک پایین صفحه
      const position = i % (textLength + 10);
      const padding = ' '.repeat(position > textLength ? (2*textLength + 10 - position) : position);
      console.log(chalk.cyan(padding + text));

      // Beep sound (اگه ترمینال پشتیبانی کنه)
      process.stdout.write('\x07');

      await sleep(250);
    }
  }

  console.log(chalk.bold.green("\nThanks for watching!"));
}

animateBee();
