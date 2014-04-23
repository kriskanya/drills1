(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click','#fourthButton',makeFourth);
  }

  function makeFourth(){
    var numbersArray = $('#input').val();
    var splitArray = numbersArray.split(',');

    for(var i = 0; i < splitArray.length; i++){
      var $div = $('<div class="newDiv">');
      var fourthValue = Math.pow(splitArray[i],4);
      $div.text(fourthValue);
      $('body').append($div);
    }
  }


})();
