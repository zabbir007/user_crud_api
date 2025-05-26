const wrapper = document.getElementById("wrapper");

for (let i = 1; i < 51; i++) {
  let div = document.createElement("div");
  animeCircle = wrapper.appendChild(div);
  animeCircle.classList.add("anime-circle");
}

let circles = document.querySelectorAll(".anime-circle");

let randomAnimation = anime({
  targets: circles,
  background: () => {
    let hue = anime.random(0, 360);
    let saturation = 60;
    let lumonisity = 70;
    let hslValue = "hsl(" + hue + "," + saturation + "%," + lumonisity + "%)";
    return hslValue;
  },
  borderRadius: ()=> {
    return anime.random(25,50);
  },
  translateX: ()=> {
    return anime.random(-80,80) + "vh";
  },
  translateY: ()=> {
    return anime.random(-80,80) + "vh" 
  },
  scale: ()=> {
    return anime.random(0.45,1.75);
  },
  duration: ()=> {
    return anime.random(250,1500);
  },
  delay: ()=> {
    return anime.random(500,1000);
  },
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo"
});
