const SCRIPT_URL="https://script.google.com/macros/s/AKfycbxbyzEpIzZxOqX_L96sBM7xjEUj4ZYs5yAVI2aHKv2-Vaw8ZxSOCFRK4SO3rEsuakWM/exec";

/* FORM SUBMIT */
document.getElementById("bookingForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  fetch(SCRIPT_URL,{method:"POST",body:new FormData(e.target)})
    .then(()=>{alert("✅ Booking confirmed!");e.target.reset()})
    .catch(()=>alert("❌ Network error"));
});

/* AUTO IMAGE CARDS */
document.querySelectorAll(".card[data-images]").forEach(card=>{
  const imgs=card.dataset.images.split(",");
  const img=card.querySelector(".media img");
  let i=Math.floor(Math.random()*imgs.length);

  const fit=()=>{
    if(!img.naturalWidth) return;
    const r=img.naturalWidth/img.naturalHeight;
    img.style.objectFit=r>.8&&r<1.35?"cover":"contain";
  };

  const change=()=>{
    img.classList.add("fade-out");
    setTimeout(()=>{
      i=(i+1)%imgs.length;
      img.src=imgs[i];
    },300);
  };

  img.onload=()=>{
    fit();
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
  };

  img.src=imgs[i];
  setInterval(change,3000+Math.random()*2000);
});
