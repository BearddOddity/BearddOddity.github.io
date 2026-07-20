// Mobile nav toggle for BearddOddity's Compendium site — shared across pages.
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".bd-header-burger");
  const panel = document.querySelector(".bd-header-mobile-panel");
  if (!burger || !panel) return;
  burger.addEventListener("click", () => {
    const open = panel.style.display === "flex";
    panel.style.display = open ? "none" : "flex";
    burger.setAttribute("aria-expanded", String(!open));
  });
});
