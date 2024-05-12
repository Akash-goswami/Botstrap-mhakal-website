$(document).ready(function() {
    // Initialize slider
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000, // 2 second per slide
        adaptiveHeight: true
    });

    // Custom navigation button functionality
    $('.prev-slide').click(function() {
        $('.slider').slick('slickPrev');
    });

    $('.next-slide').click(function() {
        $('.slider').slick('slickNext');
    });


    var slide1Pop = document.querySelector("#slide1-pop");
    var slide2Pop = document.querySelector("#slide2-pop");
    var slide3Pop = document.querySelector("#slide3-pop");
    var postionSlidePop1 = document.querySelector(".postion-slide-pop1");
    var postionSlidePop2 = document.querySelector(".postion-slide-pop2");
    var postionSlidePop3 = document.querySelector(".postion-slide-pop3");
    
    slide1Pop.addEventListener('mouseenter', function() {
        postionSlidePop1.classList.add("postion-slide-pop-show");
    });
    
    slide1Pop.addEventListener('mouseleave', function() {
        postionSlidePop1.classList.remove("postion-slide-pop-show");
    });
    
    // Prevent removing the class when the mouse enters postionSlidePop1
    postionSlidePop1.addEventListener('mouseenter', function() {
        postionSlidePop1.classList.add("postion-slide-pop-show");
    });
    postionSlidePop1.addEventListener('mouseleave', function() {
        postionSlidePop1.classList.remove("postion-slide-pop-show");
    });
    
    slide2Pop.addEventListener('mouseenter', function() {
        postionSlidePop2.classList.add("postion-slide-pop-show");
    });
    
    slide2Pop.addEventListener('mouseleave', function() {
        postionSlidePop2.classList.remove("postion-slide-pop-show");
    });
    
    // Prevent removing the class when the mouse enters postionSlidePop2
    postionSlidePop2.addEventListener('mouseenter', function() {
        postionSlidePop2.classList.add("postion-slide-pop-show");
    });
    postionSlidePop2.addEventListener('mouseleave', function() {
        postionSlidePop2.classList.remove("postion-slide-pop-show");
    });
    slide3Pop.addEventListener('mouseenter', function() {
        postionSlidePop3.classList.add("postion-slide-pop-show");
    });
    
    slide3Pop.addEventListener('mouseleave', function() {
        postionSlidePop3.classList.remove("postion-slide-pop-show");
    });
    
    // Prevent removing the class when the mouse enters postionSlidePop3
    postionSlidePop3.addEventListener('mouseenter', function() {
        postionSlidePop3.classList.add("postion-slide-pop-show");
    });
    postionSlidePop3.addEventListener('mouseleave', function() {
        postionSlidePop3.classList.remove("postion-slide-pop-show");
    });

});