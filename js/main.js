const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbyzEpIzZxOqX_L96sBM7xjEUj4ZYs5yAVI2aHKv2-Vaw8ZxSOCFRK4SO3rEsuakWM/exec";

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("✅ Booking confirmed!");
    this.reset();
  })
  .catch(() => {
    alert("❌ Network error. Please try again.");
  });
});
document.querySelectorAll('.card').forEach(card=>{
  const imgs=card.dataset.images.split(',');
  const img=card.querySelector('img');
  let i=Math.floor(Math.random()*imgs.length);

  function fit(){
    const r=img.naturalWidth/img.naturalHeight;
    img.style.objectFit=(r>.8&&r<1.35)?'cover':'contain';
  }

  function change(){
    img.classList.add('fade-out');
    setTimeout(()=>{
      i=(i+1)%imgs.length;
      img.src=imgs[i];
    },300);
  }

  img.onload=()=>{
    fit();
    img.classList.remove('fade-out');
    img.classList.add('fade-in');
  };

  img.src=imgs[i];
  setInterval(change,3000+Math.random()*2000);
});
