// let viewAll = false;

let viewAll = document.getElementsByClassName("viewAllButton");
let viewLess = document.getElementsByClassName("viewLessButton");

viewLessProducts();

function viewAllProducts() {
  let productsDiv = document.querySelectorAll(".BestSeller > .productItems");
  for (let i = 0; i < productsDiv.length; i++) {
    productsDiv[i].style.display = "none";
  }

  for (let i = 0; i < productsDiv.length; i++) {
    productsDiv[i].style.display = "grid";
  }

  document.getElementById("all").style.display = "none";
  document.getElementById("less").style.display = "block";
}

function viewLessProducts() {
  let productsDiv = document.querySelectorAll(".BestSeller > .productItems");
  for (let i = 0; i < productsDiv.length; i++) {
    productsDiv[i].style.display = "none";
  }

  for (let i = 0; i < productsDiv.length - 2; i++) {
    productsDiv[i].style.display = "grid";
  }
  document.getElementById("less").style.display = "none";
  document.getElementById("all").style.display = "block";
}
