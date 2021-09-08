
// const dropArea = document.querySelector(".drag-area"),
// dragText = dropArea.querySelector(".header"),
// button = dropArea.querySelector(".add-btn"),
// input = dropArea.querySelector("input");
// let file; 
// button.onclick() = () =>{
//   input.click(); 
// }
// input.addEventListener("change", function(){
 
//   file = this.files[0];
//   dropArea.classList.add("active");
//   showFile(); 
// });

// dropArea.addEventListener("dragover", (event)=>{
//   event.preventDefault(); 
//   dropArea.classList.add("active");
//   dragText.textContent = "Release to Upload File";
// });

// dropArea.addEventListener("dragleave", ()=>{
//   dropArea.classList.remove("active");
//   dragText.textContent = "Drag & Drop to Upload File";
// });

// dropArea.addEventListener("drop", (event)=>{
//   event.preventDefault(); 
 
//   file = event.dataTransfer.files[0];
//   showFile(); 
// });
// function showFile(){
//   let fileType = file.type; 
//   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
//   if(validExtensions.includes(fileType)){ 
//     let fileReader = new FileReader(); 
//     fileReader.onload = ()=>{
//       let fileURL = fileReader.result; 
//       dropArea.innerHTML = fileURL;
//     }
//     fileReader.readAsDataURL(file);
//   }else{
//     alert("This is not an Image File!");
//     dropArea.classList.remove("active");
//     dragText.textContent = "Drag & Drop to Upload File";
//   }
// }

// CREATES A PRODUCT
function addProduct() {
  const img_url = document.querySelector(".img_url").value;
  const name = document.querySelector(".name").value;
  const description = document.querySelector(".description").value;
  const price = document.querySelector(".price").value;
  const category = document.querySelector(".category").value;
  const review = document.querySelector(".review").value;
 
 
  // let token = JSON.parse(localStorage.getItem("jwt_token"));
  // console.log(`jwt ${token}`);

  fetch("https://end-of-term.herokuapp.com/add-product/", {
    method: "POST",
    body: JSON.stringify({
      img_url,
      name,
      description,
      price,
      category,
      review,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // "Authorisation": `jwt ${token}`
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      if (res.status_code == 201) {
        window.location.reload();
      }
    });
}

let addForm = document.querySelector(".add-product")
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

});

