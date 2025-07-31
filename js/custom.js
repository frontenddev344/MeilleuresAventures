$(document).ready(function() {
  var header = $(".site-header");

  $(window).on("scroll", function() {
      var scroll = $(this).scrollTop();
      if (scroll >= 50) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });
});


// Navbar menu

const navbar = document.querySelector(".site-header");
const humburger = document.querySelector(".toggle");
const close = document.querySelector(".close");

humburger.addEventListener("click", function() {
  navbar.classList.add("menuToggle");
});
close.addEventListener("click", function() {
  navbar.classList.remove("menuToggle");
});

AOS.init({
  duration: 1200,
})




//Cookies
 $(document).ready(function() {


   // $('#newcookies').hide();

    $('.modalBtn').click(function() {
        $('#newcookies').hide()
        localStorage.setItem('checked', true)
        console.log(localStorage.getItem('checked', 'set'));
    })
    var data = localStorage.getItem('checked');
    if (!data) {
        $('#newcookies').show();
    }
});
 