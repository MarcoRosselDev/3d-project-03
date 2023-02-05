const myInput = document.querySelector(".myInput");
const pushButton = document.querySelector(".pushButton");
const container = document.querySelector(".container");

pushButton.addEventListener("click", function () {
  container.innerHTML = myInput.value;
});
