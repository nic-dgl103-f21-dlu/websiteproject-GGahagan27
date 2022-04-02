const headerEl = document.querySelector(".headerintro3");
const skateShopNavEl = document.querySelector(".nav");


const darkLayerEl = document.querySelector(".dark-layer");

headerEl.addEventListener("mouseover", () => {
  darkLayerEl.classList.add("active");
});
skateShopNavEl.addEventListener("mouseover", () => {
  darkLayerEl.classList.add("active");
});

skateShopNavEl.addEventListener("mouseout", () => {
  darkLayerEl.classList.remove("active");
});

headerEl.addEventListener("mouseout", () => {
  darkLayerEl.classList.remove("active");
});
