(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#randomizeColor').click(randomNumber);
  }

    function randomNumber(){
      var red = Math.floor(Math.random()*255);
      var green = Math.floor(Math.random()*255);
      var blue = Math.floor(Math.random()*255);
      var alpha = Math.floor(Math.random()*10);

      randomizeColor(red,green,blue,alpha);
    }

    function randomizeColor(r,g,b,a){
      $('#randomizeColor').css('background-color','rgba(' + r + ',' + g + ',' + b + ',' + '0.' + a + ')');
    }

// rgba(118, 76, 41, 0.8)

})();
