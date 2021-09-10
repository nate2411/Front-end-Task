function addToCart(id) {
    fetch("https://end-of-term.herokuapp.com/view-products/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        let products = data.data;
  
        let product = products.filter((product) => product[0] == id);
        let cart_items = JSON.parse(localStorage.getItem(".product"));
        console.log(product);
  
        if (cart_items == null) {
          cart_items = [];
        }
  
        cart_items.push(product);
        localStorage.setItem(".product", JSON.stringify(cart_items));
      });
}

function getCart() {
    let cart = JSON.parse(localStorage.getItem(".product")) || [];
    let container = document.querySelector(".container");
  
    console.log(cart);
  
    container.innerHTML = "";
  
    cart.forEach((item) => {
      console.log(item);
      let card = item[0]
    //   let detail = item[0];
  
      container.innerHTML += `
      <div class="product">
            <img src="${card[2]}" alt="" />
            <div class="product-info">
              <h3 class="product-name">${card[1]}</h3>
              <h2 class="product-price">${card[4]}</h2>
              <p class="product-quantity">Qnt:<input value="1" name="" /></p>
              <p class="product-remove" onclick="removeFromCart(${card[0]})">
                <i class="far fa-trash-alt"></i>
                <span>Remove</span>
              </p>
            </div>
      </div>
      `;
    });
}

// let removeBtn = document.querySelector(".remove-button").addEventListener("click",
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem(".product")) || [];
  let update = cart.filter((item) => item[0][0] != id); 

  localStorage.setItem(".product", JSON.stringify(update));

  getCart(); 
  getTotal();
}

 
  getCart();
  
function getTotal() {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem(".product"));
  
    cart.forEach(
      // (item) => console.log(item[0].price))
      (item) => (total += parseInt(item[0].price)))
    
  
    document.querySelector(".total").innerHTML = "Your total is: R" + total;
}


// function addToCart(book_id) {
//     fetch("")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.data);
//         let books = data.data;
  
//         let book = books.filter((book) => book.book_id == book_id);
//         let cart_items = JSON.parse(localStorage.getItem(".product"));
//         console.log(book);
  
//         if (cart_items == null) {
//           cart_items = [];
//         }
  
//         cart_items.push(book);
//         localStorage.setItem(".product", JSON.stringify(cart_items));
//       });
//   }
 