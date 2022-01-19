$(".btnRight").click(function () {
  $(".rightPage").toggleClass("activeRight");
});
$(".btnLeft").click(function () {
  $(".leftPage").toggleClass("activeLeft");
});
$(".button").click(function () {
  $(".bottomPage").toggleClass("activeBottom");
});
$(".btnBottom").click(function () {
  $(".bottomPage").toggleClass("activeBottom");
});
$(".btnTop").click(function () {
  $(".topPage").toggleClass("activeTop");
});

$(".btnDetails").click(function () {
  window.location.href = 'index.html';
});