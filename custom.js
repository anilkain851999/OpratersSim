$(document).ready(function () {
    $('.popularplan').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1440:{
                items:3
            }
        }
    })

    $('.videoSliderBlog').owlCarousel({
        margin: 0,
        loop: true,
        dots:true,
        autoWidth: true,
        autoplay: false,
        autoplayTimeout: 1500,
        responsive:{
            0:{
                items:1,

            },
            500:{
                items:1,

            },
            600:{
                items:1,

            },
            1000:{
                items:4,

            }
        }
    });


    $(function(){
        $(".serving_proudly_cities_slider").owlCarousel({
            margin: 25,
            dots:false,
            loop: true,
            autoWidth: true,
            items: 10,
            autoplay: true,
            autoplayTimeout: 1500,
            nav: false,
            center: true,
            navigation: false,
        });
    });


    

    $('.mediasliderlogo').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })
  });


  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery


  