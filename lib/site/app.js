
$('.center').slick({
  dots: true,
  adaptiveHeight: true,
  centerMode: false,
  slidesToShow: 2, 
  slidesToScroll: 2,
  
  

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        speed: 300,
        adaptiveHeight: true,
        centerMode: false,
        slidesToShow: 2, 
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        speed: 300,
        centerMode: false,
        adaptiveHeight: true,
        slidesToShow: 2, 
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        speed: 300,
        centerMode: false,
        adaptiveHeight: true,
        slidesToShow: 2, 
        slidesToScroll: 2,
        infinite: true,
        
      }
    }
  ]
})
