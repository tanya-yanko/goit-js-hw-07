function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }

  boxesContainer.append(...boxes); 
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = ""; 
}

function onCreateClick() {
  const amount = Number(document.querySelector("#controls input").value);
  if (amount > 0) {
    createBoxes(amount);
  }
}

function onDestroyClick() {
  destroyBoxes();
}

document.querySelector("[data-create]").addEventListener("click", onCreateClick);
document.querySelector("[data-destroy]").addEventListener("click", onDestroyClick);
