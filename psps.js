const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerText = "Loading...";

  setTimeout(() => {
    btn.innerText = "Welcome 🚀";
  }, 1500);
});