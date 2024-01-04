// const name = "hello world..!!";
// console.log(name);

let iconCart = document.querySelector(".icon-cart");
let closeCard = document.querySelector(".close");
let body = document.querySelector("body");

let listProductHtml = document.querySelector("list-product");

let listProducts = [];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCard.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
// const jsonData = fs.readFileSync("products.json");
// const fetchData = JSON.parse(jsonData);
const fetchData = "https://jsonplaceholder.typicode.com/users";

console.log(fetchData);
function initApp() {
  fetch(fetchData)
    .then((response) => response.json())
    .then(
      (data) => console.log(data)
      //   listProducts = data;
    );
}

initApp();
// console.log(iconCart);
