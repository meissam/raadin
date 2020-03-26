/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/*======================================================================================*/

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function () {

    var docElem = document.documentElement,
		header = document.querySelector('.navbar-default'),
		didScroll = false,
		changeHeaderOn = 300;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'navbar-shrink');
        }
        else {
            classie.remove(header, 'navbar-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();




$(window).load(function () {
    var $container = $('.projects-container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 1000, gutter: 30,
            easing: 'easeOutCubic',
            queue: false
        }
    });

    $('.brands_item_container').click(function () {
        $('.brands_item_container.current').removeClass('current');
        $(this).addClass('current');
        $("#projects .brands_item_container").addClass('active');

        $('#projects .brands_item_container').click(function () {
            $(this).removeClass('active');
        });

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'easeOutCubic',
                queue: false
            }
        });
        return false;
    });
});










(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });


    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();


    $('#main_slider').sliderPro({
        width: '100%',
        height: $(window).height() - 80,
        fade: true,
        fadeDuration: 1000,
        arrows: false,
        buttons: false,
        waitForLayers: true,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            768: {
                height: $(window).height() - 50,
            }
        }
    });

    //echo.init({
    //    offset: 100,
    //    throttle: 250,
    //    unload: false,

    //});


    $(".project-box").on("click", function (e) {
        e.preventDefault();
    });




    //Nice scroll initialization

    if (device.desktop()) {
        $("html").niceScroll({
            scrollspeed: 50,
            autohidemode: false,
            cursorwidth: 17,
            cursorborderradius: 0,
            cursorborder: "0",
            background: "#1d2126",
            cursorcolor: '#9e1f62',
            zindex: 9999,

            cursoropacitymin: 1,
            cursoropacitymax: 1,
        });


    }



    $(document).scroll(function () {

        if (device.desktop()) {
            if ($(".navbar-default").hasClass("affix")) {
                $(".navbar-default").parent("header").siblings(".slider-pro").css("margin-top", "50px");
            }
            else {
                $(".navbar-default").parent("header").siblings(".slider-pro").css("margin-top", "80px");

            }
        }

    });




    var $notifications = $('.notifications')
    function notify(text) {
        var $notification = $('<li />').text(text).css({
            left: 320
        })
        $notifications.append($notification)
        $notification.animate({
            left: 0
        }, 300, function () {
            $(this).delay(3000).animate({
                left: 320
            }, 200, function () {
                $(this).slideUp(100, function () {
                    $(this).remove()
                })
            })
        })
    }












    var waypoint = new Waypoint({
        element: document.getElementById('projects'),
        handler: function (direction) {
            if (direction == "down") {
                $("#projects-catogory").addClass("isotope-ready");
                $("#projects").addClass("isotope-ready");
                if (!$notifications.children().length) {
                    notify("You can click on each brand logo to filter projects.")
                }
            }
            else {
                $("#projects-catogory").removeClass("isotope-ready");
                $("#projects").removeClass("isotope-ready");
            }
        },
        offset: 500
    })





    var myCenter = new google.maps.LatLng(35.755720, 51.399623);
    var marker;
    function initialize() {
        var mapProp = {
            center: myCenter,
            draggable: true,
            scaleControl: true,
            scrollwheel: false,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("google_map"), mapProp);
        marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);






    //// register form validation
    //$('.contact-form').each(function () {  // attach to all form elements on page
    //    $(this).validate({
    //        errorElement: 'p',
    //        errorClass: 'tip tip-error',
    //        // Specify the validation rules

    //        highlight: function (element) {
    //            $(element).removeClass("tip tip-error");
    //        },

    //        rules: {
    //            inputEmail: { required: true, email: true },
    //            inputName: { required: true, },
    //            textareaAddress: { required: true, },
    //            inputCaptcha{ required: true, }
    //        },

    //        // Specify the validation error messages
    //        messages: {
    //            inputName: {
    //                required: "Please Enter Your Name",
    //            },
    //            inputEmail: {
    //                required: "Please Enter Your Email",
    //                email: "Please Enter a Valid Email",
    //            },
    //            textareaMessage: {
    //                required: "Please Enter Your Message",
    //            },
    //            inputCaptcha: {
    //                required: "Please Enter Security code",
    //            },
    //        },

    //        submitHandler: function (form) {
    //            form.submit();
    //        }
    //    });
    //});









})(jQuery); // End of use strict
