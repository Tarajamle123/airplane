document.querySelector("#Content button").addEventListener("click", function () {
  document.getElementById("myModal").classList.add("show");
  document.getElementById("modalOverlay").classList.add("show");
});

function closeModal() {
  document.getElementById("myModal").classList.remove("show");
  document.getElementById("modalOverlay").classList.remove("show");
}