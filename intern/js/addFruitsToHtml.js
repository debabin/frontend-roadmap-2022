const fruitsForHtml = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍"];

const fruitsContainer = document.querySelector("#fruits");

const basket = document.createElement("div");
basket.style.display = "flex";

const basketTitle = document.createElement("h1");
basketTitle.innerHTML = "Fruits basket";

for (let i = 0; i < fruitsForHtml.length; i++) {
  const fruit = document.createElement("div");
  fruit.innerHTML = fruitsForHtml[i];
  basket.appendChild(fruit);
}

fruitsContainer.appendChild(basketTitle);
fruitsContainer.appendChild(basket);
