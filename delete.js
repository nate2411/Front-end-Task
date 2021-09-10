let deleteBtn = document.querySelector(".")

function deleteProduct(index) {
    console.log(index);
    let delConfirm = confirm("Are you sure you want to delete this product?");
    if (delConfirm) {
      let token = localStorage.getItem("jwt_token");
  
      console.log(token);
      fetch(`https://end-of-term.herokuapp.com/delete-product/${index}/`, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
  
      getProduct();
    }
  }