const exploreBtn = document.getElementById("exploreBtn");
const backBtn = document.getElementById("backBtn");

const homePage = document.getElementById("homePage");
const dashboardPage = document.getElementById("dashboardPage");

/* Page Switch */

exploreBtn.addEventListener("click", () => {
  homePage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  dashboardPage.classList.add("hidden");
  homePage.classList.remove("hidden");
});

/* Animated Counters */

function animateValue(id, end, duration) {
  let start = 0;
  let increment = end / (duration / 16);

  const obj = document.getElementById(id);

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      start = end;
      clearInterval(timer);
    }

    obj.innerText = Math.floor(start);
  }, 16);
}

animateValue("users", 24000, 2000);
animateValue("speed", 98, 2000);
animateValue("rating", 5, 2000);