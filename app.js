"use strict";

$("article img").addClass("image-center");

$("article p:last-child").remove();

let pixelSize = Math.floor(Math.random() * 100);
$("#title").css("font-size", pixelSize);

let bullet = $("<li> This is a new thing </li>");
$("<li>").text("This is a new thing") // better
$("<li>", {text: "This is a new thing"}) // even better

$("ol").append(bullet);

$("aside").empty().append($("<p> Sorry that the list existed. </p>"));

$(".form-control").on("change blur", function () {
  const redValue = $(".form-control").eq(0).val();
  const blueValue = $(".form-control").eq(1).val();
  const greenValue = $(".form-control").eq(2).val();
  $("body").css("background-color", `rgb(${redValue}, ${blueValue}, ${greenValue})`);
});

$("img").on("click", function (event) {
  $(event.target).remove();
});