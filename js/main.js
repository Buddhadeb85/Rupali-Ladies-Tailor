
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfjaWOpdzoAejEev_s8QE21rvmJnDUxJKMlGcytbHSJHRaIFEF39DGbdR_ChqkhsW6/exec";

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch(https://script.google.com/macros/s/AKfycbzfjaWOpdzoAejEev_s8QE21rvmJnDUxJKMlGcytbHSJHRaIFEF39DGbdR_ChqkhsW6/exec, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      alert("✅ Booking confirmed!");
      this.reset();
    } else {
      alert("❌ Error: " + res.message);
    }
  })
  .catch(() => alert("Network error"));
});