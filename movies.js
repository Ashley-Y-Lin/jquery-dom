"use strict";

$(".submit-btn").on("click", function(event) {
  event.preventDefault()

  const title = $(".form-control").eq(0).val();
  const rating = $(".form-control").eq(1).val();
  const removeBtn = $("<button>Remove</button>").addClass("remove-btn")

  $(".display-area").append($("<p>").text(title))
  $(".display-area").append($("<p>").text(rating))
  $(".display-area").append(removeBtn)

  /*
  const title = $(".form-control").eq(0).val();
  const rating = $(".form-control").eq(1).val();
  const removeBtn = $("<button>Remove</button>").addClass("remove-btn")

  const submissionSpace = $("<div>")
    .append(<div>${title}</div>)
    .append(<div>${rating}</div>)
    .append(<div>${removeBtn}</div>)

  $(".display-area").append(submissionSpace)
  */
});

$(".display-area").on("click", ".remove-btn", function(evt){
  $(evt.target).prev().remove()
  $(evt.target).prev().remove()
  $(evt.target).remove()

  // find the parent of remove button (div), .remove() the div
})