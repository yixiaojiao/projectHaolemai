			var mySwiper = new Swiper('.swiper-container',{
				   navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				   },
				   loop : true,
				   scrollbar: {
					      el: '.swiper-scrollbar',
					    },
				 autoplay: {
					    delay: 1500,
					    stopOnLastSlide: false,
					    disableOnInteraction: false,
					   },
			    speed:1000,
			    pagination: {
				      el: '.swiper-pagination',
				      dynamicBullets: true,
    					dynamicMainBullets: 2
				    },
				})
			
			    $('.swiper-container').mouseenter(function(){
				  mySwiper.autoplay.stop();
				})
				$('.swiper-container').mouseleave(function(){
				  mySwiper.autoplay.start();
				})