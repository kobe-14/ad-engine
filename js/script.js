(function () {
  function toggleAnimation({ animate }) {
    const animationContainer = document.getElementById("animationContainer");
    if (animate) {
      animationContainer.classList.add("inner-container");
    } else {
      animationContainer.classList.remove("inner-container");
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
