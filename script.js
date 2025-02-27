// Variables
let hours = document.querySelector(".jsHours");
let minutes = document.querySelector(".jsMinutes");
let seconds = document.querySelector(".jsSeconds");
let stop = document.querySelector(".jsStop");
let start = document.querySelector(".jsStart");
let reset = document.querySelector(".jsReset");

// Initialize counts as 0
let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

let isCounting = false;
let interval;
start.addEventListener("click", () => {
  if (!isCounting) {
    isCounting = true;
    interval = setInterval(() => {
      secondsCount++;
      if (secondsCount < 60) {
        singleDigitDisplay(secondsCount, seconds);
      } else {
        secondsCount = 0;
        singleDigitDisplay(secondsCount, seconds);
        minutesCount++;
        singleDigitDisplay(minutesCount, minutes);
      }
      if (minutesCount === 60) {
        minutesCount = 0;
        singleDigitDisplay(minutesCount, minutes);
        hoursCount++;
        singleDigitDisplay(hoursCount, hours);
      }
    }, 1000);
  }
});

// Prepends a zero if the count is less than 10
function singleDigitDisplay(unitCount, unit) {
  unitCount < 10
    ? (unit.textContent = `0${unitCount}`)
    : (unit.textContent = unitCount);
}
