// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
$(document).ready(function () {
    $('.work-items').slick({
    infinite: true,
     dots: true,
    slidesToShow: 3,
     autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 3
  })
   });