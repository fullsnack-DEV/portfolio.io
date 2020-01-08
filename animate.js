const svg = document.querySelector(".header__svg");
const circle = document.querySelector(".header__circle");

const tl = new TimelineMax();
t1.fromTo(svg, 1.2, { width: "100%" }, { width: "0%", ease: Power2.easeInOut });
