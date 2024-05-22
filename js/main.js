(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Pricing-carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });



    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


})(jQuery);
function toggleDarkMode() {
    const body = document.body;
    const menu = document.querySelector('.navbar');
    const toggleIcon = document.getElementById('toggle-icon');
    const logo = document.getElementById('logo');
    const bg_1 = document.getElementById('bg-1');
    const  logoFooder = document.getElementById('logoFooder')

    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleIcon.src = '../img/mattroi.svg';
        logo.src = '../img/logo-while.svg';
        bg_1.src = '../img/m.svg';
        logoFooder.src = '../img/logo-fooder-white.svg'
          menu.classList.remove('dark-mode');

    } else {
        body.classList.add('dark-mode');
        toggleIcon.src = '../img/moon.svg';
        logo.src = '../img/logo-black.svg'
        bg_1.src = '../img/m-black.svg';
        menu.classList.add('dark-mode');
        logoFooder.src = '../img/logo-fooder-black.svg';


    }

} 
$(document).ready(function(){
    $('.tab-header').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-header').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });
});
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        e.preventDefault(); 
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const buffer = 150; 
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
    return (
        rect.bottom > -buffer &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) + buffer
    );
}
function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
        else {
            section.classList.remove('visible'); // 
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);