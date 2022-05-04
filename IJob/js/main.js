$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.header__nav').toggleClass('header__nav--active');
	});

	/*==============================
	Back
	==============================*/
	$('.footer__back').on('click', function() {
		$('body,html').animate({
			scrollTop: 0,
			}, 700
		);
	});

	/*==============================
	Select2
	==============================*/
	$('#skills').select2({
		placeholder: "مهارت ها"
	});

	/*==============================
	Scroll bar
	==============================*/
	$('.messages__list, .messages__chat').mCustomScrollbar({
		axis: "y",
		scrollbarPosition: "outside",
		theme: "custom-bar"
	});

	/*==============================
	Range sliders
	==============================*/
	function rtlsliderright(){
		var s = document.getElementById("filter__range-end").innerHTML;
		s=s.split("ریال");
		var r="ریال";
		document.getElementById("filter__range-end").innerHTML="<p style=\"display:inline; margin-left:10px;\">"+s[1]+"</p><p style=\"display:inline;\">"+r+"</p>";
	}
	
	function rtlsliderleft(){
		var s = document.getElementById("filter__range-start").innerHTML;
		s=s.split("ریال");
		var r="ریال";
		document.getElementById("filter__range-start").innerHTML="<p style=\"display:inline; margin-left:10px;\">"+s[1]+"</p><p style=\"display:inline;\">"+r+"</p>";
	}
	function initializeSlider() {
		if ($('#filter__range').length) {
			var firstSlider = document.getElementById('filter__range');
			noUiSlider.create(firstSlider, {
				range: {
					'min': 0,
					'max': 100
				},
				step: 1,
				connect: true,
				format: wNumb({
					prefix: 'ریال',
					decimals: 0
					
				}),
				start: [18, 34],
				
			});

			var firstValues = [
				document.getElementById('filter__range-start'),
				document.getElementById('filter__range-end')
			];
			/*
			firstSlider.noUiSlider.on('update', function( values, handle ) {
				firstValues[handle].innerHTML = values[handle];
			});*/
			
			/*var s = document.getElementById("filter__range-start").innerHTML;
			s=s.split("ریال");
			var r="ریال";
			document.getElementById("filter__range-start").innerHTML="<p style=\"display:inline; margin-left:10px;\">"+s[1]+"</p><p style=\"display:inline;\">"+r+"</p>";
			var s = document.getElementById("filter__range-end").innerHTML;
			s=s.split("ریال");
			var r="ریال";
			document.getElementById("filter__range-end").innerHTML="<p style=\"display:inline; margin-left:10px;\">"+s[1]+"</p><p style=\"display:inline;\">"+r+"</p>";
			*/
		} else {
			return false;
		}
		return false;
		
	}
	$(window).on('load', initializeSlider());
	/*//$(window).on('load', alert("yes"));
	//$('.noUi-handle-lower').on( 'click',function(){rtlsliderleft();});
	$("body").on('DOMSubtreeModified', "#filter__range-start", function() {
		//rtlsliderleft();
	});
	$("body").on('DOMSubtreeModified', "#filter__range-end", function() {
		//rtlsliderright();
	});*/


});