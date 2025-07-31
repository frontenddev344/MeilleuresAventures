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

// Video error handling
$(document).ready(function() {
    // Handle video loading errors
    $('video').on('error', function() {
        console.log('Video failed to load:', this.src);
        // Show fallback image
        $(this).hide();
        $(this).siblings('.video-fallback').show();
    });
    
    // Handle video loading success
    $('video').on('loadeddata', function() {
        console.log('Video loaded successfully:', this.src);
        $(this).siblings('.video-fallback').hide();
    });
    
    // Fallback for browsers that don't support video autoplay
    $('video').each(function() {
        var video = this;
        var playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Video started playing successfully
                $(video).siblings('.video-fallback').hide();
            }).catch(function(error) {
                // Video failed to play, show fallback
                console.log('Video autoplay failed:', error);
                $(video).hide();
                $(video).siblings('.video-fallback').show();
            });
        }
    });
});
 