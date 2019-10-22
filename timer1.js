const timers = process.argv.slice(2);
for (let i = 0; i < timers.length; i++) {
  if (timers.length > 0 && timers[i] > 0) {
    if (!isNaN(timers[i])) {
      setTimeout(() => {
        console.log(`Beep at ${timers[i]} seconds`);
      }, timers[i] * 1000);
    }
  }
}
