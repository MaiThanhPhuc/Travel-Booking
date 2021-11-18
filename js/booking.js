document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// payment btn
$("#booking-payment-transfer").click(function (e) {
  e.stopPropagation();
});

$("#booking-payment-transfer").click(function (e) {
  $(".booking-payment-transfer").addClass("active");
  $(".booking-payment-paypal").removeClass("active");
  $(".booking-transfer-container").addClass("active");
  $(".booking-paypal-container").removeClass("active");
});

$("#booking-payment-paypal").click(function (e) {
  e.stopPropagation();
});

$("#booking-payment-paypal").click(function (e) {
  $(".booking-payment-paypal").addClass("active");
  $(".booking-payment-transfer").removeClass("active");
  $(".booking-paypal-container").addClass("active");
  $(".booking-transfer-container").removeClass("active");
});

// edit btn

//date
$(".booking-content-edit-date").click(function (e) {
  e.stopPropagation();
});

$(".booking-content-edit-date").click(function (e) {
  $(".booking-box-date-container").addClass("active");
});

//guess

$(".booking-content-edit-guess").click(function (e) {
  e.stopPropagation();
});

$(".booking-content-edit-guess").click(function (e) {
  $(".booking-box-guests-number").addClass("active");
});

// btn add sub
$(".booking-box-guests__btn-adult-add").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--adult").innerHTML
  );
  var quantity = parseInt(document.getElementById("booking-guess").value);

  if (temp < 5) {
    temp += 1;
    quantity += 1;
    document.getElementById("booking-box-guests__count--adult").innerHTML =
      temp;
    document.getElementById("booking-guess").value = quantity + " Khách";
  }
});
$(".booking-box-guests__btn-adult-sub").click(function (e) {
  var quantity = parseInt(document.getElementById("booking-guess").value);
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--adult").innerHTML
  );
  if (temp > 1) {
    temp -= 1;
    quantity -= 1;
    document.getElementById("booking-box-guests__count--adult").innerHTML =
      temp;
    document.getElementById("booking-guess").value = quantity + " Khách";
  }
});
$(".booking-box-guests__btn-child-add").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--child").innerHTML
  );
  var quantity = parseInt(document.getElementById("booking-guess").value);
  if (temp < 5) {
    temp += 1;
    quantity += 1;
    document.getElementById("booking-box-guests__count--child").innerHTML =
      temp;
    document.querySelector(".booking-box-guests-number-warning").className +=
      " active";
    document.querySelector(".booking-box-guests-age-child").className +=
      " active";
    document.getElementById("booking-guess").value = quantity + " Khách";
  }
});
$(".booking-box-guests__btn-child-sub").click(function (e) {
  var temp = parseInt(
    document.getElementById("booking-box-guests__count--child").innerHTML
  );
  var quantity = parseInt(document.getElementById("booking-guess").value);
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
    document.getElementById("booking-guess").value = quantity + " Khách";
  }
});
// total money



