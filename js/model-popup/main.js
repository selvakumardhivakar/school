const modalOpenBtn = document.getElementById("open_modal_button");
const modalCloseBtn = document.getElementById("close_modal_button");

const modalContainer = document.querySelector(".modal_container");

modalOpenBtn.addEventListener("click", () => {
  modalContainer.classList.add("blur");
  modalContainer.style.display = "flex";
});
modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("blur");
  modalContainer.style.display = "none";
});
