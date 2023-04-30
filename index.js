const IMGES = document.querySelectorAll("img");
const PRODUCTS_TEXT = document.querySelectorAll(".text");
const PRODUCTS = document.querySelectorAll(".product");
const BLUR = document.querySelector(".blur");
const POPUP = document.querySelector(".popup");
const IMG_POPUP = document.querySelector(".img-popup");

function ShowPopup() {
  BLUR.classList.remove("hid");
  POPUP.classList.remove("hid");
}
function HidPopup() {
  BLUR.classList.add("hid");
  POPUP.classList.add("hid");
}

PRODUCTS.forEach((product, index) => {
  product.addEventListener("click", function (e) {
    POPUP.innerHTML = `
    <img src="${IMGES[index].src}" alt="" class="img-popup" /><ul class="popup-list"><li class="text p-text">${PRODUCTS_TEXT[index].innerText}</li><li class="text p-text">${PRODUCTS_TEXT[index].innerText}</li><li class="text p-text">${PRODUCTS_TEXT[index].innerText}</li></ul>`;
    ShowPopup();
  });
});

BLUR.addEventListener("click", function (e) {
  if (e.target == BLUR) {
    HidPopup();
  }
});
