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
    
	
  	window.initMap = function() { 
        var initialLoc = slidesData[0].coords;
        var slides = slidesData.length;
        var infos = document.querySelector('#infos');
		
		var map = new google.maps.Map(document.querySelector('#map'), {
			zoom: 6,
			center: initialLoc
		});

        for (i=0; i<slides; i++){
            
            var marker = new google.maps.Marker({
                position: slidesData[i].coords,
                map: map
            });
		
		    marker.addListener('click', function(){
			    infos.innerHTML = "xxx";
		    });		
        }
		
	}; 
	
})();
