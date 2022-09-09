import "../styles/main.css";

(function () {
  const outerContainer = document.createElement("div");
  outerContainer.classList.add("outer-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner-container");

  outerContainer.appendChild(innerContainer);

  document.body.appendChild(outerContainer);

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      innerContainer.classList.remove("inner-container");
    } else {
      innerContainer.classList.add("inner-container");
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);
})();
