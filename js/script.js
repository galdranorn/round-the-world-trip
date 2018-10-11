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
	
	// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  	window.initMap = function() {
		
		// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
		var uluru = {lat: -25.363, lng: 131.044};
		
		// W zmiennej map zapisujemy nową instancję obiektu Map. 
		var map = new google.maps.Map(document.getElementById('map'), {
			// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
			zoom: 4,
			center: uluru
		});
		
		// Definiujemy marker jako nową instancję obiektu Marker.
		var marker = new google.maps.Marker({
			// I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
			position: uluru,
			map: map
		}); 
	}	
	 
})();  