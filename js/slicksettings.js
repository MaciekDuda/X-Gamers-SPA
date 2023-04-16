
$('.team-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
    ]
  });