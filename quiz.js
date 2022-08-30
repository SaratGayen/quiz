$(document).ready(function () {

  $("#start").click(function () {

    $(".welcome").fadeOut();


  });

});


$(document).ready(function () {

  $(".sucess").click(function () {

    $(this).css("background-color", "green");
    $(".wrong-ans").css("background-color", "red");
    $(".wrong-ans").css("background-color", "red");
    $(".wrong-ans").css("background-color", "red");
    $(".NEXT").css("background-color", "#50C878").css("width", "250px").css("height", "50px").css("font-size", "25px").css("padding", "10px");
    $(".congratulation-msg").fadeIn(3000);

    $(".congratulation-msg").slideUp(3000);

  });

});
$(document).ready(function () {
  $(".wrong-ans").click(function () {
    $(".wrong-ans").css("background-color", "red");
    $(".sucess").css("background-color", "green");
    $(".wrong-ans-msg").fadeIn(3000);
    $(".wrong-ans-msg").slideUp(3000);

  });

});
$(document).ready(function () {

  $(".end-function").click(function () {

    $("#timer").fadeOut();

  });

});




// timer code


function quiz_timer() {
  var count = 10;
  setInterval(function () {
    count--;
    if (count >= 0) {
      id = document.getElementById("timer");
      id.innerHTML = count;
    }
    if (count < 1) {
      id.innerHTML = "0";

    }
    if (id.innerHTML == "0") {
      //  time_up=document.getElementById("timer");

      silver = document.getElementById("op1");
      silver.style.backgroundColor = "silver";
      silver.innerHTML = "TIME UP";
      silver = document.getElementById("op2");
      silver.style.backgroundColor = "silver";
      silver.innerHTML = "TIME UP";
      silver = document.getElementById("op3");
      silver.style.backgroundColor = "silver";
      silver.innerHTML = "TIME UP";
      silver = document.getElementById("op4");
      silver.style.backgroundColor = "silver";
      silver.innerHTML = "TIME UP";
      // alert(" opps time out ");
    }


  }, 1000);

}
$(document).ready(function () {

  $("#start").click(function () {

    quiz_timer();

  });


});

