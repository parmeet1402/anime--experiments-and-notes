/* document.querySelector("#animateBtn").addEventListener("click",()=>anime({
  targets: "h1",
  translateX: 580,
  rotate: "1turn",
  duration: 5000
})
) */
/* 
document.querySelector("#animateBtn").addEventListener("click",()=>anime({
  targets: ".rectangle",
  translateX: 580,
  rotate: "5turn",
  borderRadius: ['0%','50%'],
  duration: 2000,
  easing: 'easeInOutQuad'
})
) */

anime({
  targets: ".circle",
  translateX: (el) => el.getAttribute('data-x'),
  translateY: (el, i) => 50+(-50*i),
  scale: (el, i, l) => (l-i) * .7,
  rotate: () => anime.random(-360,360),
  borderRadius: () => anime.random(1200,1800),
  duration: () => anime.random(1500,3000),
  delay: () => anime.random(0,600),
  direction: 'alternate',
  loop: true
})