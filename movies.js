"use strict";

$(".submit-btn").on("click", function() {
  const title = $(".form-control").eq(0).val();
  const rating = $(".form-control").eq(1).val();

  $(".display-area").append(title, rating)
});