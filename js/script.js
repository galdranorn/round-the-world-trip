// ----------------------------------------
// generate slides
// ----------------------------------------
var template = document.querySelector("#template-slides").textContent;
var carousel = document.querySelector("#carousel");
var slidesAmount = slidesData.length-1;

for (i=0; i<=slidesAmount; i++) {
    console.log(slidesAmount);
    var oldHtml = carousel.innerHTML;
    var newSlide = Mustache.render(template, slidesData[i]);
    carousel.innerHTML = oldHtml + newSlide;
};


// -----------------------------------------
// flickity init
// -----------------------------------------

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  hash: true,
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element

var flkty = new Flickity( '.main-carousel', {
// options
});

//refresh button

var refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener('click', function() {
    flkty.select(0)
});

// progress bar 

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// ----------------------------------------
// google map
// ----------------------------------------

(function(){ 
	var infos = document.querySelector('#infos');
	
  	window.initMap = function() { 
		var uluru = {lat: -25.363, lng: 131.044};
		var coords2 = {lat: -25.363, lng: 134.044};
		var coords3 = {lat: -25.363, lng: 137.044};
		
		var map = new google.maps.Map(document.querySelector('#map'), {
			zoom: 4,
			center: uluru
		});
		
		var markerOne = new google.maps.Marker({
			position: uluru,
			map: map
		});
		
		markerOne.addListener('click', function(){
			infos.innerHTML = 'You clicked markerOne';
		});		
		
		var markerTwo = new google.maps.Marker({
			position: coords2,
			map: map
		});

		markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo';
		});		
		
		var markerThree = new google.maps.Marker({
			position: coords3,
			map: map
		});
		
		markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree';
		});	
		
	}; 
	
})();