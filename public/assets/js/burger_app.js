$(function () {
  $(".devour-it").on("click", function (event) {
    var id = $(this).data("id");
    var devourIt = $(this).attr("data-devourIt");
    console.log("click");
    var newBurgerStatus = {
      devoured: 1
    };
    console.log("new burger", newBurgerStatus);
    // Send the PUT request.
   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerStatus
    }).then(
      function () {
        console.log("changed status to", devourIt);
        // Reload the page to get the updated list
        location.reload();
      }
    )
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
