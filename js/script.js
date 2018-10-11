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