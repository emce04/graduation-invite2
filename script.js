// Close button: hides window and shows goodbye screen
document.getElementById("close-btn").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="font-family:Tahoma,Verdana,sans-serif;
                text-align:center;margin-top:40vh;color:#000;">
      <h2>Mail Closed</h2>
      <p>Thanks for reading Matts Graduation Invitation.</p>
      <button onclick="location.reload()" style="
        background:linear-gradient(to bottom,#e1e9f8,#c5d5ef);
        border:1px solid #7089b3;border-radius:3px;
        padding:5px 12px;cursor:pointer;">Reopen</button>
    </div>`;
});

// Countdown
const eventDate = new Date("Dec 15, 2025 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const dist = eventDate - now;

  if (dist < 0) {
    document.getElementById("countdown-section").innerHTML = "<p>Event has started!</p>";
    return;
  }

  const days = Math.floor(dist / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dist % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
