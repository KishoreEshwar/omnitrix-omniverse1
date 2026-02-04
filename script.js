/* CURSOR (DESKTOP) */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ELEMENTS */
const omnitrix = document.getElementById("omnitrix");
const dial = document.querySelector(".dial");
const core = document.getElementById("core");
const alienName = document.getElementById("alienName");
const alienIcon = document.getElementById("alienIcon");
const flash = document.querySelector(".flash");
const clickSound = document.getElementById("clickSound");
const transformSound = document.getElementById("transformSound");

/* OMNIVERSE ALIENS */
const aliens = [
  { name: "HEATBLAST", color: "#ff6a00", icon: "https://i.imgur.com/QZ6G6mA.png" },
  { name: "XLR8", color: "#00cfff", icon: "https://i.imgur.com/B9Z0KqU.png" },
  { name: "FOUR ARMS", color: "#ff0000", icon: "https://i.imgur.com/N6hYq5Y.png" },
  { name: "DIAMONDHEAD", color: "#00ff88", icon: "https://i.imgur.com/URcYkYw.png" },
  { name: "CANNONBOLT", color: "#ffcc00", icon: "https://i.imgur.com/XeV2zJH.png" },
  { name: "WILDMUTT", color: "#ff8844", icon: "https://i.imgur.com/vh3iHSt.png" }
];

let index = 0;

/* ACTIVATE */
function transform() {
  clickSound.currentTime = 0;
  transformSound.currentTime = 0;
  clickSound.play();
  transformSound.play();

  if (navigator.vibrate) navigator.vibrate(120);

  flash.style.opacity = 1;
  setTimeout(() => flash.style.opacity = 0, 120);

  index = (index + 1) % aliens.length;
  const a = aliens[index];

  dial.style.transform = `rotate(${index * 60}deg)`;
  core.style.background = a.color;
  core.style.boxShadow = `0 0 45px ${a.color}`;
  alienName.textContent = a.name;
  alienIcon.src = a.icon;
  document.body.style.color = a.color;
  document.body.style.background =
    `radial-gradient(circle, ${a.color} 0%, #000 65%)`;
}

/* CLICK + TOUCH */
omnitrix.addEventListener("click", transform);
omnitrix.addEventListener("touchstart", transform);
