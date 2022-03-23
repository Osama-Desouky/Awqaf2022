"use strict";

// var scrollTo = function (sectionEl = "", callback = function () {}) {
//   $("html, body").animate(
//     {
//       scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
//     },
//     800,
//     "swing",
//     callback()
//   );
// };
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
};
// on ready state
$(function () {
  // breakpoint and up
  // main-nav dropdown toggle onhover
  if (window.innerWidth >= 1200) {
    // console.log("555");
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
  
  
      })
    });
  
    $('.top-nav .dropdown').hover(function(){ 
      // console.log("top");
      $('.dropdown-toggle', this).trigger('click'); 

    });
  }


  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    // var scrollUpBtn = $(".scroll-up");
    // if (scroll > 0) {
    //   scrollUpBtn.fadeIn();
    // } else {
    //   scrollUpBtn.fadeOut();
    // }
    if ($(window).width() >= 992) {
      if (scroll > 140) {
        if (!navbar.hasClass("fixed")) {
          $("body").css({ "padding-top": navbar.height() + "px" });
          navbar.addClass("fixed");
          // $(".search-toggle").addClass("d-none");
        }
      } else {
        navbar.removeClass("fixed");
        $("body").css({ "padding-top": "0px" });
        $(".search-toggle").removeClass("d-none");
      }
    }
 
   
  });


  $(".search-toggle").on("click", function (e) {
    // $(".search-box").toggle();
    //show search action
     
      $(".search-box").fadeToggle("fast", function() {
      $(".search-box input").focus();
      // Animation complete.
      
      });
      
  $(document).click(function(e) {
  if (!$(e.target).is('.searchbox, .searchbox *')) {
  $(".searchbox").hide();
  //$(".search-input").val("");
  }
  });
  $('.closeSearch').click(function(e) {
  $(".searchbox").hide();
  $(".search-input").val("");
  });

    $(".search-box").toggleClass("open-search");

    // $("body").toggleClass("header-popup-open");
    e.stopPropagation();
   
    
  });
  $(document).click(function(e) {
  if (!$(e.target).is('.search-box input, .search-toggle*')) {
  $(".search-box").hide();
  $("body").removeClass("header-popup-open");
  // console.log("hhhhhhhhhhh");
  $(".search-box").toggleClass("open-search");
  $(".search-box input").val("");




}
  });

  // $(".scroll-down").on("click", function () {
  //   scrollTo(".home-about");
  // });
  // $(".scroll-up").on("click", function () {
  //   scrollTo();
  // });
  
});






// $( "a.collapse-btn" ).click(function() {
//   $( this ).parent("div").toggleClass("show-collapse");
//   console.log("hello");
// });





$(".heading").one('click', function() {
  console.log("clicked");
  $(this).off('click'); 
  console.log("clicked");
});


$(function() {
  $(".print").on("click", function() {
    window.print();
});


  let count = 0;
  $(".restFont").click(function(e) {
; 
    // console.log(count);
    
    if (count < 4) {
      // console.log(count); 
      $("div").not(".top-nav div").children().each(function() {
        var size = parseInt($(this).css("font-size"));
        size = size - count + "px";
        
        $(this).css({
          'font-size': size
        });
      });
      count = 0
    } if (count == -3) {
      // console.log(count); 
      $("div").not(".top-nav div").children().each(function() {
        var size = parseInt($(this).css("font-size"));
        size = size - count + "px";
        
        $(this).css({
          'font-size': size
        });
      });
    }
    $(".fontDecrease").removeClass('click')
    $(".fontIncrease").removeClass('click')
    e.stopPropagation();
  });

  $(".fontDecrease").click(function(e) {
   
    count -= 1;
    // console.log(count);
    if (count == -3) {
      $(this).toggleClass('click'); 
    }
    $(".fontIncrease").removeClass('click')
    $("div").not(".top-nav div").children().each(function() {
      var size = parseInt($(this).css("font-size"));
      size = size - 1 + "px";
      
      $(this).css({
        'font-size': size
      });
    });
    e.stopPropagation();
  });
  $(".fontIncrease").on("click",function(e) {
    count += 1;
    // console.log(count);
    if (count >= 3) {
      $(this).toggleClass('click'); 

    }
    $(".fontDecrease").removeClass('click')
    $("div").not(".top-nav div").children().each(function() {
      var size = parseInt($(this).css("font-size"));
      size = size + 1 + "px";
      $(this).css({
        'font-size': size
      });
    });
    e.stopPropagation();
  });
});








// grayscale
$("#grayMode").on("click", function (e) {
  $("body").toggleClass("gray-show");

  $("body").removeClass("darkMood");
  $("body").removeClass("brightness");
  $("body").removeClass("contrast" );
  $("body").removeClass("invert");
  e.stopPropagation();
 
});

// darkMode
$("#darkMode").on("click", function (e) {
  $("body").toggleClass("darkMood");

  $("body").removeClass("gray-show");
  $("body").removeClass("brightness");
  $("body").removeClass("contrast" );
  $("body").removeClass("invert");
  e.stopPropagation();
 
});

// contrastMode
$("#contrastMode").on("click", function (e) {
  $("body").toggleClass("contrast");

  $("body").removeClass("gray-show");
  $("body").removeClass("brightness");
  $("body").removeClass("darkMood" );
  $("body").removeClass("invert");
  e.stopPropagation();
 
});

// invert Color
$("#invertColorMode").on("click", function (e) {
  $("body").toggleClass("invert");

  $("body").removeClass("gray-show");
  $("body").removeClass("brightness");
  $("body").removeClass("darkMood" );
  $("body").removeClass("contrast");

  e.stopPropagation();
 
});

// contrastMode
$("#brightnessMode").on("click", function (e) {
  $("body").toggleClass("brightness");

  $("body").removeClass("gray-show");
  $("body").removeClass("invert");
  $("body").removeClass("darkMood" );
  $("body").removeClass("contrast");

  e.stopPropagation();
 
});