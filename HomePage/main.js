$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  });
});
/*drop bac 1 */
$(document).ready(function () {
  $(".category-header--button").click(function (e) {
    e.preventDefault();
    $(".category-header--dropdown").toggleClass("show");
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".category-header--button").length && !$(e.target).closest(".category-header--dropdown").length) {
      $(".category-header--dropdown").removeClass("show");
    }
  });
});


/*drop thanh search option */
document.addEventListener("DOMContentLoaded", function () {
  const searchOption = document.getElementById("searchOption");
  const dropSearchOption = document.querySelector(".drop-search-option");

  searchOption.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropSearchOption();
  });

  document.addEventListener("click", function () {
    hideDropSearchOption();
  });

  function toggleDropSearchOption() {
    if (dropSearchOption) {
      const icon = document.querySelector(".search-option--icon");

      if (dropSearchOption.style.display === "none" || dropSearchOption.style.display === "") {
        dropSearchOption.style.display = "block";
        icon.style.transform = "rotate(180deg)";
        dropSearchOption.classList.add("slide-in");
        dropSearchOption.classList.remove("slide-out");
      } else {
        dropSearchOption.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        dropSearchOption.classList.remove("slide-in");
        dropSearchOption.classList.add("slide-out");
      }
    }
  }


  function hideDropSearchOption() {
    if (dropSearchOption && dropSearchOption.style.display !== "none") {
      dropSearchOption.style.display = "none";
    }
  }
});

// banner slider primary//
// $(document).ready(function () {
//   $('.banner-main-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     fade: true,
//     cssEase: 'linear',
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   });
// });
// banner slider secondarslider //
$(document).ready(function () {
  $('.banner-main-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
});


// slider product ads //

// category slide keo//

$(document).ready(function () {
  $('.category-section').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});


$(document).ready(function () {
  $('.productListSlider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });
});

$(document).ready(function () {
  $('.banner-main-sliderOption2').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
});
