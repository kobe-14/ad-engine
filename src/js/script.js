import "../styles/main.css";

(function () {
  const outerContainer = document.createElement("div");
  outerContainer.classList.add("outer-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner-container");

  outerContainer.appendChild(innerContainer);

  document.body.appendChild(outerContainer);

  function toggleAnimation({ animate }) {
    if (animate) {
      innerContainer.classList.add("inner-container");
    } else {
      innerContainer.classList.remove("inner-container");
    }
  }

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      toggleAnimation({ animate: false });
    } else {
      toggleAnimation({ animate: true });
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);
})();
