// Set graduation date
const gradDate = new Date("December 16, 2025 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = gradDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = " It's Graduation Day! ";
  }
}

setInterval(updateCountdown, 1000);
