var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');


var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});



closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});


function getProduct() {
  let container = document.querySelector(".container");
  fetch("https://end-of-term.herokuapp.com/show-products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let products = data.data;

      container.innerHTML = "";
      products.forEach((product) => {
        container.innerHTML += createCards(product);
      });
    });
}

getProduct();

function createCards(card) {
  console.log(card);
  return`<div class="product">
  <div class="product-card">
    <h2 class="name">${card[1]}</h2>
    <span class="price">${card[4]}</span>
    <a class="popup-btn" onclick="get1Product(${card[0]})">Quick View</a>
    <img src="${card[2]}" class="product-img" alt="product-img">
  </div>
</div>`}

function get1Product(cardId) {
  console.log(cardId);

  var popupContinee = document.querySelector('.popup-container');
  popupContinee.classList.add("active")

fetch("https://end-of-term.herokuapp.com/view-product/" + cardId + "/")
.then((response) => response.json())
.then((data) => {
  console.log(data);

  let product = data.data;

  console.log(product);

  popupContinee.innerHTML = "";
  popupContinee.innerHTML = createPopupView(product);
});

}

function closeModal () {
  var popupContinee = document.querySelector('.popup-container');
  popupContinee.classList.remove("active")
}

function createPopupView(card) {
  return  `
  <div class="popup-view">
  <div class="popup-card">
    <a><i onclick="closeModal()" class="fas fa-times close-btn"></i></a>
    <div class="info">
    <img class="product-img" src="${card[2]}" alt="product-img">
      <h2>${card[1]}<br><span>${card[4]}</span></h2>
      <p>${card[5]}.</p>
      <span class="price">${card[4]}</span>
      <a href="#" class="add-cart-btn">Add to Cart</a>
    
    </div>
  </div>
</div> 
  `
}