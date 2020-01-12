$(function() {
	$('.slider .bxslider').bxSlider({
		mode: 'horizontal',
		captions: true,
		auto: true,
	  pause: 500,
	});

	$("#phone").intlTelInput({
  // options here
	});
	var input = document.querySelector("#phone");
	intlTelInput(input, {
		initialCountry: "auto",
		geoIpLookup: function(success, failure){
			$.get("https://ipinfo.io", function(){}, "jsonp").always(function(resp){
			});
		},
		utilsScript: "js/utils.js"
	})
});
