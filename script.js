const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

const audio = document.getElementById("ourSong");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.innerHTML = "Ⅱ <span>our song</span>";
    } else {
      audio.pause();
      musicBtn.innerHTML = "♪ <span>our song</span>";
    }
  } catch {
    musicBtn.innerHTML = "♪ <span>add our-song.mp3</span>";
  }
});

document.getElementById("replayBtn").addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
