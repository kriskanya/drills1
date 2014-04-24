(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    screenDim();
    $('body').on('click','div', function(event){
      event.stopPropagation();
      $('div').removeClass('moveable');
      $(this).addClass('moveable');
    });
    $('body').on('keydown',move);
  }



  function screenDim(){
    var browserX = window.innerWidth;
    var browserY = window.innerHeight;

    var bigX = Math.floor(Math.random() * (browserX -200));
    var bigY = Math.floor(Math.random() * (browserY -200));
    var smallX = Math.floor(Math.random() * 150);
    var smallY = Math.floor(Math.random() * 150);

    placeBox(bigX, bigY, smallX, smallY);
  }

  function placeBox(x, y, xx, yy){
    $('.bigDiv').css({'position': 'relative','top': y + 'px', 'left' : x + 'px'});
      $('.smallDiv').css({'position': 'absolute','top': yy + 'px', 'left' : xx + 'px'});
  }

  function move(event){
    var $selected = $('div.moveable');
    if (event >= 37 || event <= 40){
      event.preventDefault();
    }

    switch(event.keyCode){
    case 38:
        $selected.css('top','-=10');
      break;
    case 40:
        $selected.css('top','+=10');
        break;
    case 37:
        $selected.css('left','-=10');
          break;
    case 39:
        $selected.css('left','+=10');
      break;
    }


  }

  // function paintScreen(){
  //   $('.bigDiv').removeClass();
  //   $('.smallDiv').removeClass();
  // }






})();
