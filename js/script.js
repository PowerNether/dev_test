$(".qustion-slider").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  appendArrows: $(".navigation"),
  appendDots: $(".question-text"),
  prevArrow: '<button class="nav__btn prev">Назад</button>',
  nextArrow: '<button class="nav__btn next">Далее</button>',
  draggable: false,
});
$(".open-answer").on("change", function () {
  if (this.checked) {
    $(".more-answer").slideToggle();
  } else if (!this.checked) {
    $(".more-answer").slideToggle();
  }
});
$(".close-answer").on("change", function () {
  $(".more-answer").css("display", "none");
});
var slideNumber = 6;
$(".nav-text").text("Осталось " + slideNumber + " вопроса из 6");
$(".next").on("click", function () {
  if (slideNumber < 7) {
    slideNumber--;
    $(".nav-text").text("Осталось " + slideNumber + " вопросов из 6");
  }
});
$(".prev").on("click", function () {
  if (slideNumber < 7) {
    slideNumber++;
    $(".nav-text").text("Осталось " + slideNumber + " вопросов из 6");
  }
});

var slideAmount = 1;
$(".question-wrapper__number").text(slideAmount + " /6");
$(".next").on("click", function () {
  if (slideAmount < 7) {
    slideAmount++;
    $(".question-wrapper__number").text(slideAmount + " /6");
  }
});
$(".prev").on("click", function () {
  if (slideAmount > 0) {
    slideAmount--;
    $(".question-wrapper__number").text(slideAmount + " /6");
  }
});

$(".coockie__image").on("click", function () {
  $(".coockie").slideToggle();
});

$(".coockie__btn").on("click", function () {
  localStorage.setItem("coockie", 1);
  $(".coockie").slideToggle();
});

if (localStorage.getItem("coockie") != 1 || localStorage.getItem("coockie") == null) {
  $(".coockie").css("display", "flex");
} else {
  $(".coockie").css("display", "none");
}
console.log(localStorage.getItem("coockie"))
