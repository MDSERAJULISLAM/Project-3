$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 667.99,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.99,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// =====================banner part end=====================
// =====================testimonial part start=====================
$('.testi_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 667.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// =====================testimonial part end=====================
// =====================About part about=====================
new VenoBox({
  selector: ".my-link"
});
// =====================About part end=====================
// =====================counter part start=====================
$('.counter').counterUp();
// =====================counter part end=====================
// =====================partnership part start=====================
$('.partnership_img_slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:'<span><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow:'<a><i class="fa-solid fa-angle-right"></i></a>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 667.99,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// =====================partnership part part end=====================