// Carousel

const owl = $('.owl-carousel');
  owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    responsive : {
      0 : {
        startPosition: 2,
        items: 1,
      },

      500 : {
        startPosition: 2,
        items: 3,
      },
      
      850 : {
        startPosition: 2,
        items: 1,
      },
      
      1000 : {
        margin: 20,
      },

      1200 : {
        margin: 30,
      }
  }

});

$('.slider__btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

  $('.slider__btn--next').click(function() {
      owl.trigger('next.owl.carousel');
  })


// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav');
const menuIcon =  document.querySelector('.menu-icon');

navBtn.onclick = function(){
  navMenu.classList.toggle('nav--mobile')
  menuIcon.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll');
}