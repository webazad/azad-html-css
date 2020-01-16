(function($) {
	
   "use strict";	
	
	var mainwindow = $(window);

/* ==========================================================================
		revolution-slider
   ========================================================================== */	
  
    if (jQuery("#slider1").length) {
        jQuery("#slider1").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
					},
            gridwidth:1170,
            gridheight:620
        });
    };


/* ==========================================================================
		revolution-slider style-2
   ========================================================================== */
   
    if (jQuery("#slider2").length) {
        jQuery("#slider2").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"off",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
					},
            gridwidth:1170,
            gridheight:720
        });
    };	
	
/* ==========================================================================
		Loading page Loader (Preloader)
   ========================================================================== */	
	
	function stylePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}		
    }	
			
	
	
/* ==========================================================================
		Scroll to Top show hide
   ========================================================================== */

	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 250) {
				$('.main-header').addClass('fixed-navbar');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-navbar');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}


	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		  
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	

/* ==========================================================================
		Submenu Dropdown Toggle
   ========================================================================== */
   
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	
	

/* ==========================================================================
		show hide search box
   ========================================================================== */
	

		$('.search_icon').on("click", function(e) {
			$('.search_drop').slideToggle();
			e.stopPropagation(); 
		});

		$(document).on("click", function(e) {	
			if(!(e.target.closest('.search_drop'))){	
				$(".search_drop").slideUp();   		
			}
	   });


	   
/* ==========================================================================
		Project Gallery
   ========================================================================== */	
	
	 function galleryMasonaryLayout() {
		if ($('.filter-list').length) {
			$(".filter-list").imagesLoaded( function() {
			$('.filter-list').isotope({
				itemSelector: '.gallery-item',
				layoutMode: 'masonry'
			});
			}); 
			
			$('.post-filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $('.filter-list').isotope({ filter: filterValue });
			   $(this).addClass("active");
				$(this).siblings().removeClass("active");
			});		
		}

	 }
	

/* ==========================================================================
		Faqs accordian
   ========================================================================== */	
		
			
	if ($('.faq-style').length) {
			
		$('.panel').on('click', function() {
            $(".panel").removeClass("active");
            $(this).addClass("active");
		});
			
 		
	} 		
	

/* ==========================================================================
		Owl carousel 
   ========================================================================== */	
 	
	//Gallery Slider
	if ($('.galleryslide').length) {
		$('.galleryslide').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	} 	
	
	//Testimonial Slider
	if ($('.testcarousel1').length) {
		$('.testcarousel1').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2	
				}
			}
		});    		
	}


	//gallery Slider
	if ($('.overlayimg').length) {
		$('.overlayimg').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 3000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}


	//Partener Slider
	if ($('.partener-slider').length) {
		$('.partener-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});    		
	}

	
	
	//projedt detail  Slider
	if ($('.projectallimg').length) {
		$('.projectallimg').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}	
	
   
	//service detail Slider
	if ($('.servdtlslide').length) {
		$('.servdtlslide').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	//related product Slider
	if ($('.related-product').length) {
		$('.related-product').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
/* ==========================================================================
		Progress Bar
   ========================================================================== */
   
  
	if($('.progess-section').length){
		$(".progress-item .progress-bar").each(function() {
			var barwidth = $(this).attr('show-data');
			$(this).css('width',barwidth+'%');
		});
	}
	


/* ==========================================================================
		LightBox
   ========================================================================== */	
	

			
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	

/* ==========================================================================
		Select quantyty to change
   ========================================================================== */

      
    function select_quantity() {
		$('#quantity-holder').on('click', '.quantity-plus', function () {
			var $holder = $(this).parents('.select-quantity');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity > 0) {
				$quantity = $quantity + 1;
				$target.val($quantity);
			} else {
				$target.val($quantity);
			}
		}).on('click', '.quantity-minus', function () {
			var $holder = $(this).parents('.select-quantity');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity >= 2) {
				$quantity = $quantity - 1;
				$target.val($quantity);
			} else {
				$target.val(1);
			}
		});

	}
	

/* ==========================================================================
		Counter numbers Loader
   ========================================================================== */
	
	
	function counter_number() {
		var timer = $('.timer');
		if(timer.length) {
			timer.appear(function () {
				timer.countTo();
			})
		}
	}
	
	
	
/* ==========================================================================
		google map
   ========================================================================== */	

   
    if ($('#contact-google-map').length) {
		var settingsItemsMap = {
			  zoom: 13,
			  center: new google.maps.LatLng(30.521338, -94.976751),
			  zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			  },
			  scrollwheel: false,
			   styles:[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#bf9a59"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"saturation": "18"
						},
						{
							"visibility": "on"
						},
						{
							"color": "#ffc800"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			],
       
			  //mapTypeId:  google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById('contact-google-map'), settingsItemsMap );
		  var image = 'images/icons/map-1.png';
		  var myMarker = new google.maps.Marker({
			  position: new google.maps.LatLng(40.741895, -73.989308),
			  draggable: true,
			  icon: image,
			  map: map,
                    title: 'Snazzy!'
		  });

		  map.setCenter(myMarker.position);
		  myMarker.setMap(map);
		 

    }
		


			
	/* ==========================================================================
	   Contact Form Validation and Ajax
	   ========================================================================== */	

	$('#contact-form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				minlength: 5,
				email: true
			},
			phone: {
				required: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: "Please specify your name",
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},
			phone: "Please specify your phone number",
			message: {
				required: "Please specify your message",
				minlength: jQuery.validator.format("At least {0} characters required!")
			}
		},
		submitHandler: function(e) {
			var $t = $(e);
			$.ajax({
				type: 'POST',
				url: $t.attr('action'),
				data: $t.serialize(),
				beforeSend: function() {
					$("#loading").show();
				},
				complete: function() {
					$("#loading").hide();
				},
				success: function(res) {
					$('.contact-form-message').show().html(res).delay(10000).fadeOut("slow");
					$('input[name=\'name\']').val('');
					$('input[name=\'email\']').val('');
					$('input[name=\'phone\']').val('');
					$('textarea[name=\'message\']').val('');
				}
			});
		}
	});			
			
			
			
	  
/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
  $(document).on('ready', function() {
      counter_number();
	  galleryMasonaryLayout();
      select_quantity();
  });

  
  
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  mainwindow.on('scroll', function() {
	  headerStyle();
	
    
  });
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  mainwindow.on('load', function() {
    stylePreloader();
  });
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  mainwindow.on('resize', function() {
	  
  });	  
	  
	  
	  	

})(window.jQuery);