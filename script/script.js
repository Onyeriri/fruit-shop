const basket = {
  apricot: [],
  mango: [],
  "sweet-melon": [],
  kiwi: [],
  coconut: [],
  "crown-fruit": [],
};

// function for adding different fruit to basket
const addFruit = (e) => {
  // getting an id of a particular fruit added to the basket
  const element = e.path[2].childNodes[1].id;

  // creating src attribute of the newly added fruit in the basket
  let src = document.createAttribute("src");
  src.value = e.path[2].childNodes[1].src;

  basket[element].push(element);
  check((initial = 0));
  createElement(src, element);
  totalNumberOfFruits(basket);
  console.log(basket);
};

// function for creating an element
const createElement = (srcAttr, elementId) => {
  const ul = document.getElementById("add-element");
  let li = document.createElement("li");
  let image = document.createElement("img");
  let src = document.createAttribute("src");
  let id = document.createAttribute("id");
  id.value = elementId;
  src.value = srcAttr.value;
  let addButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  const divElement = document.createElement("div");
  const btnId = document.createAttribute("id");
  btnId.value = "delete-btn";

  // creating text for both button
  const addText = document.createTextNode("Add");
  const deleteText = document.createTextNode("Delete");

  addButton.appendChild(addText);
  deleteButton.appendChild(deleteText);
  addButton.classList.add("btn-class");
  deleteButton.classList.add("btn-class");
  deleteButton.setAttributeNode(btnId);
  image.setAttributeNode(src);
  image.setAttributeNode(id);

  image.classList.add("img-class");
  divElement.appendChild(addButton);
  divElement.appendChild(deleteButton);

  divElement.classList.add("btnContainer");

  deleteButton.addEventListener("click", (event) => {
    event.path[2].remove();
    let id = event.path[2].children[0].id;
    basket[id].pop(id);
    check((initial = 0));
    totalNumberOfFruits(basket);
  });

  addButton.addEventListener("click", (event) => {
    createElement(srcAttr, elementId);
    let id = event.path[2].children[0].id;
    basket[id].push(id);
    console.log(basket);
    totalNumberOfFruits(basket);
  });

  li.appendChild(image);
  li.appendChild(divElement);
  li.classList.add("li-class");
  ul.appendChild(li);
};

// checking for the numbers of fruit in the basket
const totalNumberOfFruits = (basket) => {
  let results = Object.values(basket);
  let total = 0;

  for (item of results) {
    total += item.length;
  }

  check(total);
};

// check for fruit in the basket and display appropriate heading
const check = (initial) => {
  const h2 = document.getElementById("text");
  const w2 = document.getElementById("second-text");

  const summaryLetter = document.getElementById("summary-letter");

  const summaryDigit = document.getElementById("summary-digit");

  summaryDigit.innerHTML = initial;

  if (
    basket["apricot"].length ||
    basket["mango"].length ||
    basket["sweet-melon"].length ||
    basket["kiwi"].length ||
    basket["coconut"].length ||
    basket["crown-fruit"].length !== 0
  ) {
    h2.classList.add("show");
    w2.classList.remove("show");
    w2.classList.add("block");
    summaryLetter.classList.remove("show");
    summaryLetter.classList.add("block");
    summaryDigit.classList.remove("show");
    summaryDigit.classList.add("block");
  } else {
    h2.classList.remove("show");
    h2.classList.add("block");
    w2.classList.remove("block");
    w2.classList.add("show");
    summaryLetter.classList.add("show");
    summaryLetter.classList.remove("block");
    summaryDigit.classList.add("show");
    summaryDigit.classList.remove("block");
  }
};

// delete all functionality
// const deleteAll = (e) => {
// const ul = document.getElementById("add-element");

// let child = ul.lastElementChild;

// console.log(e.path[2].children[2].children[2]);

// while (child) {
//   ul.removeChild(child);
//   child = ul.lastElementChild;
// }

// Object.values(basket).map((value) => {
//   console.log(value.pop());
// });

// for (let i = 0; i < basket.length; i++) {
//   basket[i].pop();
// }

//   console.log(basket);
// };
