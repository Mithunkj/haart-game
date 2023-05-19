const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  console.log(event.offsetX);
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.backgroundImage =
    "url('https://img.icons8.com/emoji/256/heart-suit.png')";
  spanEl.style.left = xPos + "px"; /* span heart distance from left px  */
  spanEl.style.top = yPos + "px"; /* span heart distance from right px  */
  bodyEl.appendChild(spanEl); /* add span for body */
  const size = Math.random() * 100;
  spanEl.style.width = size + "px"; /* size of heart change random */
  spanEl.style.height = size + "px";

  setTimeout(() => {
    /* spanEl is remove every 3 seconds */
    spanEl.remove();
  }, 3000);
});
