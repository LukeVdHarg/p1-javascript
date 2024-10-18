totalClicks = 0

function buttonClick() {
  totalClicks = totalClicks + 1
  if (totalClicks >= 10) {
    document.getElementById("numberDisplay").innerText = "10 keer geklikt! Terug naar 0"
    totalClicks = 0
  }
  else if (totalClicks < 10) {
    document.getElementById("numberDisplay").innerText = totalClicks
  }
}