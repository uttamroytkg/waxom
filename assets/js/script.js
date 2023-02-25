// Menu js
// var popup = document.getElementById('popup');
// 	function btntoggle(){
// 		popup.classList.toggle('active-menu');
// 	};
$(document).ready(function(){
	$('#nav-icon4').click(function(){
	   $(this).toggleClass('open');
	   $('.menu-popup').slideToggle();
	});
 });

// Banner Content Slider
var swiper = new Swiper(".bannerSwiper", {
	cssMode: true,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	mousewheel: true,
	keyboard: true,
  });


// Post Slider
var swiper = new Swiper(".postSwiper", {
	cssMode: true,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		575: {
		  slidesPerView: 2,
		},
		767: {
		  slidesPerView: 3,
		},
	}
  });



// Partner Slider
var swiper = new Swiper(".partnerSwiper", {
	// cssMode: true,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
		},
	breakpoints: {
		575: {
		  slidesPerView: 2,
		},
		767: {
		  slidesPerView: 4,
		},
	}
  });





// init Isotope for Mixitup
var $grid = $('#isotop-filter').isotope({
	// options
  });
  // filter items on button click
  $('.isotop-controls').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });

  // Active Class add for isotope mixitup
  $('.isotop-controls li').click(function(e) {

	$('.isotop-controls li').removeClass('active');

	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	//e.preventDefault();
});


// Counter 
$('.counter').counterUp({
    delay: 10,
    time: 5000
});