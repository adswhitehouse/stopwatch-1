// Variables
let hours = document.querySelector(".jsHours");
let minutes = document.querySelector(".jsMinutes");
let seconds = document.querySelector(".jsSeconds");
let stop = document.querySelector(".jsStop");
let start = document.querySelector(".jsStart");
let reset = document.querySelector(".jsReset");

// Initialize counts as 0
let [secondsCount, minutesCount, hoursCount] = [0, 0, 0];

let isCounting = false;
let interval;
start.addEventListener("click", () => {
  runTimer();
  stopTimer();
  resetTimer();
});

// Runs timer and displays time
function runTimer() {
  if (!isCounting) {
    isCounting = true;
    interval = setInterval(() => {
      secondsCount++;
      if (secondsCount == 60) {
        secondsCount = 0;
        minutesCount++;
      }
      if (minutesCount == 60) {
        minutesCount = 0;
        hoursCount++;
      }
      singleDigitDisplay(secondsCount, seconds);
      singleDigitDisplay(minutesCount, minutes);
      singleDigitDisplay(hoursCount, hours);
    }, 1);
  }
}

// Pauses timer by stopping interval and returning isCounting to false
function stopTimer() {
  stop.addEventListener("click", () => {
    clearInterval(interval);
    isCounting = false;
  });
}

// Resets timer to initial state
function resetTimer() {
  reset.addEventListener("click", () => {
    clearInterval(interval);
    isCounting = false;
    secondsCount = minutesCount = hoursCount = 0;
    seconds.textContent = minutes.textContent = hours.textContent = "00";
  });
}

// Prepends a zero if the count is less than 10
function singleDigitDisplay(unitCount, unit) {
  unitCount < 10
    ? (unit.textContent = `0${unitCount}`)
    : (unit.textContent = unitCount);
}
