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
