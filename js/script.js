// ----------------------------------------
// generate slides
// ----------------------------------------
var template = document.querySelector("#template-slides").textContent;
var carousel = document.querySelector("#carousel");
var slidesAmount = slidesData.length-1;

for (i=0; i<=slidesAmount; i++) {
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
  contain: true,
  freeScroll: true,
    wrapAround: true
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
        var markers = [];
        
		var map = new google.maps.Map(document.querySelector('#map'), {
			zoom: 4,
			center: initialLoc
		});

        for (i=0; i<slides; i++){
            markers[i] = new google.maps.Marker({
                position: slidesData[i].coords,
                map: map,
                id: i
            })
		    markers[i].addListener('click', function(){
                console.log(this.id);
			    flkty.select(this.id)
		    });		
        }
        
        // change map position after changing slide

        flkty.on( 'change', function(index) {
            smoothPanAndZoom(map, 4, slidesData[index].coords)
        });

	}; 
	
})();

// function for smooth moving of the map

function smoothPanAndZoom (map, zoom, coords) {
    
    var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
    jumpZoom = Math.min(jumpZoom, zoom -1);
    jumpZoom = Math.max(jumpZoom, 3);

    smoothZoom(map, jumpZoom, function(){
        smoothPan(map, coords, function(){
            smoothZoom(map, zoom); 
        });
    });
};

function smoothZoom (map, zoom, callback) {
    var startingZoom = map.getZoom();
    var steps = Math.abs(startingZoom - zoom);

    if(!steps) {
        if(callback) {
            callback();
        }
        return;
    }

    var stepChange = - (startingZoom - zoom) / steps;

    var i = 0;
    var timer = window.setInterval(function(){
        if(++i >= steps) {
            window.clearInterval(timer);
            if(callback) {
                callback();
            }
        }
        map.setZoom(Math.round(startingZoom + stepChange * i));
    }, 80);
};

function smoothPan (map, coords, callback) {
    var mapCenter = map.getCenter();
    coords = new google.maps.LatLng(coords);

    var steps = 12;
    var panStep = {lat: (coords.lat() - mapCenter.lat()) / steps, lng: (coords.lng() - mapCenter.lng()) / steps};

    var i = 0;
    var timer = window.setInterval(function(){
        if(++i >= steps) {
            window.clearInterval(timer);
            if(callback) callback();
        }
        map.panTo({lat: mapCenter.lat() + panStep.lat * i, lng: mapCenter.lng() + panStep.lng * i});
    }, 1000/30);
}; 
  

