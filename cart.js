function addToCart(id) {
    fetch("https://end-of-term.herokuapp.com/show-products/view-product/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        let products = data.data;
  
        let product = products.filter((product) => product[0] == id);
        let cart_items = JSON.parse(localStorage.getItem("cart"));
        console.log(product);
  
        if (cart_items == null) {
          cart_items = [];
        }
  
        cart_items.push(product);
        localStorage.setItem("cart", JSON.stringify(cart_items));
      });
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.querySelector(".book-container");
  
    console.log(cart);
  
    container.innerHTML = "";
  
    cart.forEach((item) => {
      console.log(item[0]);
      let book = item[0]
    //   let detail = item[0];
  
      container.innerHTML += `
        <div class="book-container">
        <div class="images"> <img class="image" src="./images/horror.jpg" alt="horror">
        <h4 class="name">${book.name}</h4>
        <h4 class="price">${book.price}</h4>
        <h4 class="format">${book.format}</h4>
        <button onclick="removeFromCart(${book.book_id})" class="icons"><i class="far fa-trash-alt">remove</i></button>

        </div>
      `;
    });
  }
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let update = cart.filter((item) => item[0].book_id != id);

    localStorage.setItem("cart", JSON.stringify(update));
  
    getCart();
    getTotal();
  }
  
  getCart();
  
  function getTotal() {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    cart.forEach(
      // (item) => console.log(item[0].price))
      (item) => (total += parseInt(item[0].price)))
    
  
    document.querySelector(".total").innerHTML = "Your total is: R" + total;
  }


function addToCart(book_id) {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        let books = data.data;
  
        let book = books.filter((book) => book.book_id == book_id);
        let cart_items = JSON.parse(localStorage.getItem("cart"));
        console.log(book);
  
        if (cart_items == null) {
          cart_items = [];
        }
  
        cart_items.push(book);
        localStorage.setItem("cart", JSON.stringify(cart_items));
      });
  }
 