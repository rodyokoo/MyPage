/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});

function Add(){
	var cho = document.getElementById("choice").value;
	var choose = document.getElementById("choose").innerHTML;
	if(cho == ""){
		chose = chose;
	} else {
		choose = choose + "<li>"+cho+"</li>";
	}
	
	document.getElementById("choose").innerHTML = choose;
	document.getElementById("choice").value = "";
}

const inputEnt = document.getElementById("choice");
inputEnt.addEventListener('keyup', function(e){
	var key = e.which || e.keyCode;
	if (key == 13){
		Add();
	}
});

function Random(){
	var arr = [];
	var listItems = $("#choose li");
	listItems.each(function(li){
		arr.push($(this).text());
	});

	var rand = arr[Math.floor(Math.random() * arr.length)];
	document.getElementById("choosen").innerHTML = rand;
}

function Clear(){
	document.getElementById("choose").innerHTML = "";
	document.getElementById("choosen").innerHTML = "";
}