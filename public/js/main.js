/* ===================================================================
    
  Theme Name:  Koyta - Personal Portfolio HTML Template
  Author: themetum
  Description: Koyta is a personal portfolio html template.
  Version: 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {


		/* ==================================================
            # Bootstrap Tooltip Scroll
         =============================================== */
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		});

		/* ==================================================
			# Parallax Background
		 ===============================================*/


		
		 /* ==================================================
            # Youtube Video Init
         ===============================================*/
        
			$('.player').mb_YTPlayer();
			
		/* ==================================================
			Preloader Init
		 ===============================================*/
		 
		$(window).on('load', function() {
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");
		});


	/* ==================================================
		Contact Form Validations
	================================================== */

		$(function() {

			// Get the form.
			var form = $('#contact-form');

			// Get the messages div.
			var formMessages = $('.form-message');

			// Set up an event listener for the contact form.
			$(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#contact-form input,#contact-form textarea').val('');
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}
				});
			});

		});		

		/* ==================================================
		# Menu
		===============================================*/
		
		
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
		//Active Class Function
		
    }); // end document ready function
})(jQuery); // End jQuery

