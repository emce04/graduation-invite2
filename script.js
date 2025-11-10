// Close button functionality
document.getElementById('close-btn').addEventListener('click', () => {
  document.body.innerHTML = `
    <div style="text-align:center; font-family:'Fira Code',monospace; margin-top:40vh; color:#99ccff;">
      <h2>Mail Closed</h2>
      <p>Thanks for reading Matt's Graduation Invitation.</p>
      <button onclick="location.reload()" style="
        background:#1a2233; color:#99ccff; border:1px solid #334;
        border-radius:6px; padding:6px 14px; cursor:pointer;">Reopen</button>
    </div>`;
});

// Countdown to event
const eventDate = new Date("Dec 15, 2025 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown-section").innerHTML = "<p>Event has started!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
