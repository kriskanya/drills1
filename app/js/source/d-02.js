(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click','#button',changeWords);
  }

  function changeWords(){
    var enteredWords = $('#words').val();  //an array of the entered words
    var wordsArray = enteredWords.split(',');

    for(var i = 0; i < wordsArray.length; i++){
      var $div = $('<div class="newDiv">');


      if(wordsArray[i].length % 2){    //if even, lowercase and green
        $div.addClass('green');
        wordsArray[i] = wordsArray[i].toLowerCase();
      } else{          //if odd div, uppercase and red
        $div.addClass('red');
        wordsArray[i] = wordsArray[i].toUpperCase();

      }
      $div.text(wordsArray[i]);  //changes the div object's text to the first element in the wordsArray

      $('body').append($div);
    }


  }



})();
