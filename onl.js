
const lamp = document.getElementById("lamp");
let isOn = false;
lamp.addEventListener("click", function () {
  if (isOn) {
    lamp.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
  } else {
    lamp.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
  }
  isOn = !isOn;
});
