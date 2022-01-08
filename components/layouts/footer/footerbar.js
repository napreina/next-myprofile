import Link from "next/link";
import Script from "next/script";
import { useEffect, appendScript } from 'react'

export default function FooterBar() {
    useEffect(() => {
        $(".typed").each(function() {
			var typed = new Typed('.typed', {
					stringsElement: '.typed-strings',
					loop: true,
					typeSpeed: 100,
					backSpeed: 30,
					backDelay: 2500,
				});
		});	

        $('#portfolio').mixItUp({  
			selectors: {
			target: '.tile',
			filter: '.filter',
			sort: '.sort-btn'
			},

			animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
			}

		});

        /* ==================================================
			# Data Background
		 ===============================================*/

		$("[data-background]").each(function(){
			$(this).css("background-image","url(" + $(this).attr("data-background") +")");
		});

        /* ==================================================
			# Fun Factor Init
		===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });

        
		
		/* ==================================================
			# Wow Init
		 ===============================================*/
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();

		/* ==================================================
			# Smooth Scroll
		 =============================================== */
		
		$('a.smooth-menu').on('click', function(event) {
			var $anchor = $(this);
			var headerH = '85';
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		/* ==================================================
			# imagesLoaded active
		===============================================*/
		$('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#portfolio-grid').isotope({
				itemSelector: '.pf-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.pf-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});

		/* ==================================================
            # Typing Text
         ===============================================*/
		
		$(".typed").each(function() {
		var typed = new Typed('.typed', {
			stringsElement: '.typed-strings',
			loop: true,
			typeSpeed: 100,
			backSpeed: 30,
			backDelay: 2500,
		});
		});
        /* ==================================================
            # Partner Carousel
         ===============================================*/
		
        $('.partner-sldr').owlCarousel({
            loop: true,
            margin:90,
            nav: false,
            navText: [
                "<i class='icofont-long-arrow-left'></i>",
                "<i class='icofont-long-arrow-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
        
		/* ==================================================
            # Partner Carousel
         ===============================================*/
		
        $('.feed-sldr').owlCarousel({
            loop: true,
            margin:0,
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        
		/* ==================================================
            #  Blog Slider
         ===============================================*/
		
        $('.blog-sldr').owlCarousel({
            loop: true,
            margin:30,
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
				991: {
                    items: 3
                }
            }
        });
		
        /* ==================================================
            # Hero Slider Carousel
         ===============================================*/
		
        $('.hero-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
			autoplayTimeout:5000,
            items: 1,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
        });
		
		
		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});

        $('.menu-tab').click(function(){
			$('.menu-hide').toggleClass('show');
			$('.menu-tab').toggleClass('active');
		});
		$('.menu-hide-link').click(function(){
			$('.menu-hide').removeClass('show');
			$('.menu-tab').removeClass('active');
		});
		

		/* ==================================================
			# Scroll to top
		 =============================================== */
        //Get the button
        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        /* ==================================================
			Preloader Init
		 ===============================================*/
		 
		$(window).on('load', function() {
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");
		});
		
    }, [])
    
    return (
        <>
        <footer>
            <div className="footer-widget">
                <div className="container">
                    <div className="copyright">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <p>@ 2021 TonyZou. All right reserved</p>
                            </div>
                            <div className="col-xl-4">
                                <ul className="footer-menu">
                                    
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <ul className="footer-social">
                                    <li><a href="http://github.com/tony-fullstack-515"><i className="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/tony-zou-88397519a/"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <Script src="/js/popper.min.js" strategy="beforeInteractive"/>
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.easing.min.js" strategy="beforeInteractive"/>
        <Script src="/js/bootstrap-menu.js" strategy="beforeInteractive"/>
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive"/>
        <Script src="/js/parallax.js"/>	
        <Script src="/js/modernizr.custom.13711.js" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.mixitup.min.js" strategy="beforeInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.appear.js" strategy="beforeInteractive" />
        <Script src="/js/count-to.js" strategy="beforeInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/js/progress-bar.min.js" strategy="beforeInteractive"/>
        <Script src="/js/typed.js" strategy="beforeInteractive"/>
        <Script src="/js/jquery.particles.min.js" strategy="beforeInteractive"/>
        <Script src="/js/YTPlayer.min.js" />
        <Script src="/js/active-class.js" strategy="beforeInteractive"/>
        <Script src="/js/main.js" strategy="afterInteractive"/>	
        </>
    )
}