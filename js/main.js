const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");
const candle = document.getElementById("candle");
const surpriseBtn = document.getElementById("surpriseBtn");
const secretMsg = document.getElementById("secretMsg");

let isBlown = false;

// پرتاب کاغذ رنگی (کنفتی)
function shootConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
    });
  }
}

// فوت کردن شمع
candle.addEventListener("click", () => {
  if (!isBlown) {
    flame.classList.add("blown-out");
    smoke.classList.add("active");
    isBlown = true;
    shootConfetti();
  } else {
    // روشن کردن دوباره شمع برای تست و تفریح
    flame.classList.remove("blown-out");
    smoke.classList.remove("active");
    isBlown = false;
  }
});

// باز کردن پیام تبریک سوپرایز
surpriseBtn.addEventListener("click", () => {
  secretMsg.classList.toggle("show");
  shootConfetti();

  // اگر روی گوشی باز شد و خواست کمی جشن بیشتر شه
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 120,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }
});
