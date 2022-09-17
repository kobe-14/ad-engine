import "../styles/main.css";

(function () {
  const backgroundColors = ["#2a9d8f", "#e9c46a", "#e76f51", "#264653"];
  let index = 0;
  let interval;

  const outerContainer = document.createElement("div");
  outerContainer.classList.add("outer-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner-container");

  outerContainer.appendChild(innerContainer);

  document.body.appendChild(outerContainer);

  function changeBackgroundColor() {
    innerContainer.style.backgroundColor = backgroundColors[index];
    if (index === backgroundColors.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
  }

  interval = setInterval(changeBackgroundColor, 30000);

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      clearInterval(interval);
    } else {
      interval = setInterval(changeBackgroundColor, 30000);
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);
})();
