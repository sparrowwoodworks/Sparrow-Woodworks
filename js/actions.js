$(document).ready(function(){
	$('#mobile-icon').click(function() {
		$(this).toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('open');
	});

	$('.slideshow').slick({
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  	  autoplay: true,
  	  autoplaySpeed: 10000,
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>'
  });


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
    $('body').addClass('overlay');
  });

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
    $('body').removeClass('overlay');
  });

});
