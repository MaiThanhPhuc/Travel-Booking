var btnContainer = document.getElementById("nav-mode");
console.log(btnContainer);

var btns = btnContainer.getElementsByClassName("nav-mode__btn-hotel");
console.log(btns);

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("nav-mode__btn-hotel active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelector("#location-search").onclick = () => {
  document
    .querySelector(".location-search-select-list")
    .classList.add("active");
};
