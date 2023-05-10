const brand = document.querySelector(".navbar-brand");
anime({
  targets: brand,
  keyframes: [
    {translateY: -20},
    {translateX: 75},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
});