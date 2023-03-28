// food items
const items = [
  {
    name: "Rice",
    category: "grains",
    price: 9.97,
    weight: 8,
    Color: "#F6F2C5",
    C02: 15,
    Calories: 4.71,
    imgurl: "./img/Grain/rice.png",
    quantity: 0,
  },
  {
    name: "Cabbage",
    category: "vegetables",
    price: 3.0,
    Weight: 10,
    Color: "#3D4935",
    C02: 10,
    Calories: 5,
    imgurl: "./img/Vegetables/cabbage.png",
    quantity: 0,
  },
  {
    name: "Organic Quinoa",
    category: "grains",
    price: 8.99,
    Weight: 2,
    Color: "#F5DEB3",
    C02: 2,
    Calories: 120,
    imgurl: "./img/Grain/Organic Quinoa.png",
    quantity: 0,
  },
  {
    name: "Brown Rice",
    category: "grains",
    price: 4.99,
    Weight: 5,
    Color: "#8B4513",
    C02: 5,
    Calories: 216,
    imgurl: "./img/Grain/Brown Rice.png",
    quantity: 0,
  },
  {
    name: "Barley",
    category: "grains",
    price: 3.49,
    Weight: 3,
    Color: "#CD853F",
    C02: 3,
    Calories: 123,
    imgurl: "./img/Grain/barley.png",
    quantity: 0,
  },
  {
    name: "Steel-Cut Oats",
    category: "grains",
    price: 6.99,
    Weight: 4,
    Color: "#E6E6FA",
    C02: 4,
    Calories: 170,
    imgurl: "./img/Grain/oats.png",
    quantity: 0,
  },
  {
    name: "Buckwheat",
    category: "grains",
    price: 2.99,
    Weight: 2.5,
    Color: "#FFE4C4",
    C02: 2,
    Calories: 155,
    imgurl: "./img/Grain/wheat.png",
    quantity: 0,
  },
  {
    name: "Organic Blueberries",
    category: "fruits",
    price: 5.99,
    Weight: 1,
    Color: "#4169E1",
    C02: 1,
    Calories: 84,
    imgurl: "./img/Fruits/Organic Blueberries.png",
    quantity: 0,
  },
  {
    name: "Red Grapes",
    category: "fruits",
    price: 3.49,
    Weight: 1.5,
    Color: "#8B0000",
    C02: 2,
    Calories: 90,
    imgurl: "./img/Fruits/red grapes.png",
    quantity: 0,
  },
  {
    name: "Honeycrisp Apples",
    category: "fruits",
    price: 1.99,
    Weight: 0.75,
    Color: "#FFA07A",
    C02: 1,
    Calories: 95,
    imgurl: "./img/Fruits/Honeycrisp Apples.png",
    quantity: 0,
  },
  {
    name: "Bananas",
    category: "fruits",
    price: 0.79,
    Weight: 0.25,
    Color: "#FFD700",
    C02: 1,
    Calories: 105,
    imgurl: "./img/Fruits/Bananas.png",
    quantity: 0,
  },
  {
    name: "Mangoes",
    category: "fruits",
    price: 2.99,
    Weight: 0.5,
    Color: "#FF8C00",
    C02: 2,
    Calories: 135,
    imgurl: "./img/Fruits/Mangoes.png",
    quantity: 0,
  },
  {
    name: "Organic Baby Spinach",
    category: "vegetables",
    price: 3.99,
    Weight: 0.5,
    Color: "#228B22",
    C02: 0.5,
    Calories: 10,
    imgurl: "./img/Vegetables/Organic Baby Spinach.png",
    quantity: 0,
  },
  {
    name: "Carrots",
    category: "vegetables",
    price: 1.49,
    Weight: 1,
    Color: "#FFA500",
    C02: 1,
    Calories: 52,
    imgurl: "./img/Vegetables/Carrots.png",
    quantity: 0,
  },
  {
    name: "Sweet Potatoes",
    category: "vegetables",
    price: 2.99,
    Weight: 2,
    Color: "#FFDAB9",
    C02: 2,
    Calories: 180,
    imgurl: "./img/Vegetables/Sweet Potatoes.png",
    quantity: 0,
  },
  {
    name: "Broccoli",
    category: "vegetables",
    price: 2.29,
    Weight: 0.75,
    Color: "#00FF7F",
    C02: 1,
    Calories: 50,
    imgurl: "./img/Vegetables/Broccoli.png",
    quantity: 0,
  },
  {
    name: "Bell Peppers",
    category: "vegetables",
    price: 1.99,
    Weight: 0.5,
    Color: "#FF69B4",
    C02: 1,
    Calories: 15,
    imgurl: "./img/Vegetables/Bell Peppers.png",
    quantity: 0,
  },
  {
    name: "Organic Tofu",
    category: "protein",
    price: 2.99,
    Weight: 1,
    Color: "#FFC0CB",
    C02: 0.5,
    Calories: 94,
    imgurl: "./img/Protein/Organic Tofu.png",
    quantity: 0,
  },
  {
    name: "Chicken Breast",
    category: "protein",
    price: 4.99,
    Weight: 1.5,
    Color: "#FF4500",
    C02: 3,
    Calories: 150,
    imgurl: "./img/Protein/Chicken Breast.png",
    quantity: 0,
  },
  {
    name: "Salmon Fillets",
    category: "protein",
    price: 10.99,
    Weight: 0.75,
    Color: "#ADD8E6",
    C02: 2,
    Calories: 200,
    imgurl: "./img/Protein/Salmon Fillets.png",
    quantity: 0,
  },
  {
    name: "Black Beans",
    category: "protein",
    price: 1.99,
    Weight: 1,
    Color: "#000000",
    C02: 0.5,
    Calories: 227,
    imgurl: "./img/Protein/Black Beans.png",
    quantity: 0,
  },
  {
    name: "Extra Firm Tempeh",
    category: "protein",
    price: 3.49,
    Weight: 0.5,
    Color: "#8B008B",
    C02: 1,
    Calories: 160,
    imgurl: "./img/Protein/Firm Tempeh.png",
    quantity: 0,
  },
  {
    name: "Organic Whole Milk",
    category: "dairy",
    price: 4.99,
    Weight: 1,
    Color: "#FFFFFF",
    C02: 2,
    Calories: 150,
    imgurl: "./img/Dairy/Whole Milk.png",
    quantity: 0,
  },
  {
    name: "Cheddar Cheese",
    category: "dairy",
    price: 3.99,
    Weight: 0.5,
    Color: "#FFD700",
    C02: 1,
    Calories: 228,
    imgurl: "./img/Dairy/Cheddar Cheese.png",
    quantity: 0,
  },
  {
    name: "Plain Greek Yogurt",
    category: "dairy",
    price: 2.99,
    Weight: 0.75,
    Color: "#87CEFA",
    C02: 0.5,
    Calories: 100,
    imgurl: "./img/Dairy/Greek Yogurt.png",
    quantity: 0,
  },
  {
    name: "Unsalted Butter",
    category: "dairy",
    price: 3.49,
    Weight: 1,
    Color: "#FFE4B5",
    C02: 1,
    Calories: 102,
    imgurl: "./img/Dairy/Unsalted Butter.png",
    quantity: 0,
  },
  {
    name: "Whipping Cream",
    category: "dairy",
    price: 2.49,
    Weight: 0.5,
    Color: "#FF69B4",
    C02: 2,
    Calories: 200,
    imgurl: "./img/Dairy/Whipping Cream.png",
    quantity: 0,
  },
  {
    name: "Milk Powder",
    category: "dairy",
    price: 4.49,
    Weight: 4.5,
    Color: "#FF69B4",
    C02: 5,
    Calories: 240,
    imgurl: "./img/Dairy/Milk Powder.png",
    quantity: 0,
  },
];

sortBy("name");

// hide items on first load
const hideItems = document.querySelector(".items");
const itemList = document.getElementById("item-list");
hideItems.classList.add("hidden");
// create an empty array to store items in the cart
let cartItems = [];

// category buttons
function handleButtonClick(category, button) {
  // Get the item container element
  const itemList = document.getElementById("item-list");

  // Clear the content of the item container
  itemList.innerHTML = "";

  //unhide the list
  hideItems.classList.remove("hidden");

  // un-select every button
  const buttons = document.querySelectorAll(".category-button");
  buttons.forEach((button) => button.classList.remove("selected"));

  const landing = document.querySelector(".landing");
  landing.classList.add("hidden");

  // select the current button
  button.classList.add("selected");

  items.forEach((item) => {
    if (item.category === category) {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("grid-item");

      const img = document.createElement("img");
      img.src = item.imgurl;
      img.alt = item.name;
      img.style.width = "200px";
      img.style.height = "200px";

      const itemName = document.createElement("div");
      const itemPrice = document.createElement("span");
      const plusButton = document.createElement("button");
      const minusButton = document.createElement("button");
      const quantityText = document.createElement("span");
      const categoryText = document.createElement("span");

      itemName.innerText = item.name;
      itemPrice.innerText = "$" + item.price.toFixed(2);
      plusButton.innerText = "+";
      minusButton.innerText = "-";
      quantityText.textContent = item.quantity;
      quantityText.style.padding = "10px";
      // categoryText.textContent = item.category; // set category text

      const quantityContainer = document.createElement("div");
      quantityContainer.appendChild(minusButton);
      quantityContainer.appendChild(quantityText);
      quantityContainer.appendChild(plusButton);

      itemContainer.appendChild(img);
      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemPrice);
      itemContainer.appendChild(quantityContainer);
      itemContainer.appendChild(categoryText); // add category element to item container

      itemList.appendChild(itemContainer);

      // Add the category as a data attribute to the item container
      itemContainer.dataset.category = item.category;

      let quantity = item.quantity;
      plusButton.addEventListener("click", () => {
        quantity++;
        quantityText.textContent = quantity.toString();
        item.quantity++;

        // create an object representing the item that was just added to the cart
        const cartItem = {
          name: item.name,
          price: item.price,
        };
        cartItems.push(cartItem);
        // update the cart div to display the name and price of the item
        const cartDiv = document.querySelector(".cart");
        const cartText = cartDiv.querySelector(".cart-text");
        const totalCost = document.querySelector(".total-cost");
        cartText.textContent = `Cart (${cartItems.length})`;
        const totalPrice = cartItems.reduce(
          (total, item) => total + item.price,
          0
        );

        console.log(`item price: ${item.price}`);
        console.log(`item quantity: ${item.quantity}`);
        console.log(`subtotal: ${item.price * item.quantity}`);

        totalCost.textContent = `Total: $${totalPrice.toFixed(2)}`;
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 0) {
          quantity--;
          quantityText.textContent = quantity.toString();
          item.quantity--;

          // find the index of the item in the cart array
          const index = cartItems.findIndex(
            (cartItem) => cartItem.name === item.name
          );

          // remove the item from the cart array if its quantity is reduced to 0
          if (index !== -1) {
            cartItems.splice(index, 1);
          }

          // update the cart div to reflect the updated cart
          const cartDiv = document.querySelector(".cart");
          const cartText = cartDiv.querySelector(".cart-text");
          const totalCost = document.querySelector(".total-cost");
          cartText.textContent = `Cart (${cartItems.length})`;
          const totalPrice = cartItems.reduce(
            (total, item) => total + item.price,
            0
          );

          console.log(`item price: ${item.price}`);
          console.log(`item quantity: ${item.quantity}`);
          console.log(`subtotal: ${item.price * item.quantity}`);

          totalCost.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
      });
    }
  });
} // button click ending

// sort by x
function sortBy(attribute) {
  items.sort((a, b) => {
    if (a[attribute] < b[attribute]) {
      return -1;
    } else if (a[attribute] > b[attribute]) {
      return 1;
    } else {
      return 0;
    }
  });
}
