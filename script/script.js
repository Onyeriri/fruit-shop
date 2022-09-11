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
  check();
  createElement(src, element);

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
    check();
  });

  addButton.addEventListener("click", (event) => {
    createElement(srcAttr, elementId);
    let id = event.path[2].children[0].id;
    basket[id].push(id);
    console.log(basket);
  });

  li.appendChild(image);
  li.appendChild(divElement);
  li.classList.add("li-class");
  ul.appendChild(li);
};

// check for fruit in the basket and display appropriate heading
const check = () => {
  const h2 = document.getElementById("text");
  const w2 = document.getElementById("second-text");

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
  } else {
    h2.classList.remove("show");
    h2.classList.add("block");
    w2.classList.remove("block");
    w2.classList.add("show");
  }
};
