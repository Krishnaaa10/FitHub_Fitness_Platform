const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "WHEY PROTEIN",
    price: 2500,
    img: "/static/images/wp.png",
  },
  {
    id: 2,
    title: "CREATINE",
    price: 1000,
    img: "/static/images/creat.png",
  },
  {
    id: 3,
    title: "BCAA SUPPLEMENTS",
    price: 1200,
    img: "/static/images/bsss.png",
  },
  {
    id: 4,
    title: "PRE-WORKOUT SUPPLEMENTS",
    price: 1500,
    img: "/static/images/pre.png",
  },
  {
    id: 5,
    title: "MULTIVITAMINS",
    price: 900,
    img: "/static/images/vittt.png",
  },
];



let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
