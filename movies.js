"use strict";
console.log("hi")

$(".submit-btn").on("click", function(event) {
  event.preventDefault()

  const title = $(".form-control").eq(0).val();
  const rating = $(".form-control").eq(1).val();
  const removeBtn = $("<button>Remove</button>").addClass("remove-btn");

  if (rating < 0 || rating > 10) {
    alert('Rating must be between 0 and 10.');
    throw new Error('Rating must be between 0 and 10.');
  }

  if (title.length < 2) {
    alert('Title must have at least 2 characters.');
    throw new Error('Title must have at least 2 characters.');s
  }

  /*
  $(".display-area").append($("<p>").text(title))
  $(".display-area").append($("<p>").text(rating))
  $(".display-area").append(removeBtn)*/

  const newRow = $("<tr>")
  newRow.append($("<td>").text(title))
  newRow.append($("<td>").text(rating))
  newRow.append($("<td>").text(removeBtn))
  $(".display-area").append(newRow)
});

$(".display-area").on("click", ".remove-btn", function(evt){
  $(evt.target).prev().remove()
  $(evt.target).prev().remove()
  $(evt.target).remove()

  // find the parent of remove button (div), .remove() the div
})

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