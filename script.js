 document.body.addEventListener('click', () => {
      document.getElementById('bg-music').play();
      document.getElementById('overlay').style.display = 'none';
    }, { once: true });

// Open button animation
document.getElementById("openBtn").addEventListener("click", () => {
  const container = document.getElementById("cardContainer");
  container.classList.add("opened");
});



// Floating hearts animation
const heartsContainer = document.getElementById("hearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 400);
// Initial hearts
for (let i = 0; i < 10; i++) {
  createHeart();
}   

const slider = document.getElementById('groomSlider');
const slides = slider.querySelectorAll('.groom-slide-img');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 4000); // Auto-slide every 4 seconds
