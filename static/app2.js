const memButton = document.querySelector(".membership__btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
memButton.addEventListener("click", () => {
    payment.style.display = "flex";
});
  
close.addEventListener("click", () => {
    payment.style.display = "none";
});