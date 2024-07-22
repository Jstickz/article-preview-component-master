const boxThree = document.getElementById("boxThree");
const shareIcon = document.querySelector(".share-btn");
const hideSocials = document.getElementById("hideSocials");

shareIcon.addEventListener("click", function () {
  if (boxThree.style.display === "none") {
    boxThree.style.display = "block";
  } else{
    boxThree.style.display = "none";
  }
});

hideSocials.addEventListener("click", () => {
  boxThree.style.display = "none";
});
