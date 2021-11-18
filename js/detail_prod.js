document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// show room people

$("html").click(function () {
  $(".booking-box-guests-number").removeClass("active");
});

$("#booking-box-guests").click(function (e) {
  e.stopPropagation();
});

$("#booking-box-guests").click(function (e) {
  $(".booking-box-guests-number").addClass("active");
});

// btn add sub
$(".booking-box-guests__btn-adult-add").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--adult").innerHTML
  );
  var quantity = parseInt(
    document.getElementById("booking-box-guests--input").value
  );

  if (temp < 5) {
    temp += 1;
    quantity += 1;
    document.getElementById("booking-box-guests__count--adult").innerHTML =
      temp;
    document.getElementById("booking-box-guests--input").value =
      quantity + " Khách";
  }
});
$(".booking-box-guests__btn-adult-sub").click(function (e) {
  var quantity = parseInt(
    document.getElementById("booking-box-guests--input").value
  );
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--adult").innerHTML
  );
  if (temp > 1) {
    temp -= 1;
    quantity -= 1;
    document.getElementById("booking-box-guests__count--adult").innerHTML =
      temp;
    document.getElementById("booking-box-guests--input").value =
      quantity + " Khách";
  }
});
$(".booking-box-guests__btn-child-add").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--child").innerHTML
  );
  var quantity = parseInt(
    document.getElementById("booking-box-guests--input").value
  );
  if (temp < 5) {
    temp += 1;
    quantity += 1;
    document.getElementById("booking-box-guests__count--child").innerHTML =
      temp;
    document.querySelector(".booking-box-guests-number-warning").className +=
      " active";
    document.querySelector(".booking-box-guests-age-child").className +=
      " active";
    document.getElementById("booking-box-guests--input").value =
      quantity + " Khách";
  }
});
$(".booking-box-guests__btn-child-sub").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--child").innerHTML
  );
  var quantity = parseInt(
    document.getElementById("booking-box-guests--input").value
  );
  if (temp > 0) {
    temp -= 1;
    quantity -= 1;
    document.getElementById("booking-box-guests__count--child").innerHTML =
      temp;
    document.querySelector(".booking-box-guests-number-warning").className =
      document
        .querySelector(".booking-box-guests-number-warning")
        .className.replace(" active", "");
    document.querySelector(".booking-box-guests-age-child").className = document
      .querySelector(".booking-box-guests-age-child")
      .className.replace(" active", "");
    document.getElementById("booking-box-guests--input").value =
      quantity + " Khách";
  }
});

// end

// total price
var room_price = parseFloat(
  document.querySelector(".booking-box-heading__price h3").innerHTML
);
console.log(room_price);

var y = 1000;
y = y.toLocaleString("vi", {style: "currency", currency: "VND"});
console.log(y);
