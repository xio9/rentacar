document.addEventListener('DOMContentLoaded', () => {
  
    var mySwiper = new Swiper('.blog-wrap', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          // 
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          // spaceBetween: 20
        },
        // when window width is >= 640px
        767: {
          slidesPerView: 2,
          // spaceBetween: 30
        }
      }
    });
  
    var mySecondSwiper = new Swiper('.about-slider-wrap', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      slidesPerView: 1,
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
      }
    });
    var myThirdSwiper = new Swiper('.contacts-slider', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + totalClass + '"></span>' +
            ' / ' +
            '<span class="' + currentClass + '"></span>';
        },
      },
      slidesPerView: 1
    });
  
    $('.order__form').validate({
      errorElement: 'div',
      errorClass: 'invalid',
      rules: {
        phone: {
          required: true,
          minlength: 17
        }
      },
      messages: {
        phone: {
          required: "Укажите телефон",
          minlength: "Телефон некорректный"
        }
      }
    });
  
    $('[type=tel]').on('focus', () => {
      $('[type=tel]').mask('+7(000) 000-00-00', {
        placeholder: "+7 (___) __-__-___"
      });
    });
    $('[type=tel]').on('blur', () => {
      $('[type=tel]').mask('+7(000) 000-00-00', {
        placeholder: "Ваш телефон"
      });
    });

    const anchors = document.querySelectorAll('a.scroll-to')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

  const burger = document.getElementById('burger');
  const nav = document.querySelector('.nav');

  if (document.documentElement.clientWidth < 768) {
    nav.classList.add('nav--hidden');
  } else {
    nav.classList.remove('nav--hidden');
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
      nav.classList.add('nav--hidden');
    } else {
      nav.classList.remove('nav--hidden');
    }
  });
  burger.addEventListener('click', () => {
    if (burger.classList.contains('burger--active')) {
      burger.classList.remove('burger--active');
      nav.classList.add('nav--hidden');
    } else {
      burger.classList.add('burger--active');
      nav.classList.remove('nav--hidden');
    }
  });

  $(window).scroll(function() {
    $(this).scrollTop() > 1400 ? $(".pageup").fadeIn() : $(".pageup").fadeOut()
}), $("#up").on("click", function(e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
}), $(".video__play").on("click", function() {
    player = new YT.Player("player", {
        height: "465",
        width: "100%",
        videoId: "OmZzTuSFlkU",
        events: {
            onReady: videoPlay
        }
    })
}), $(document).ready(function() {
    $(".scroll").click(function() {
        var e = $(this).attr("href");
        return 0 != $(e).length && $("html, body").animate({
            scrollTop: $(e).offset().top
        }, 700), !1
    })
});

    new WOW().init();
  
  });