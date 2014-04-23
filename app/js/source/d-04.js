(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    // $('#powerButton').click(makeBoxes);
    $('body').on('click','#powerButton',makeBoxes);
  }

  function makeBoxes(){
    debugger;
    var inputArray = $('#input').val();
    var newArray = inputArray.split('-');  //splits the input into two arrays, positions [0, 1]
    var array1 = newArray[0].split(',');    //creates a new array from the first half of the inputs
    var array2 = newArray[1].split(',');    //creates a new array from the second half of the inputs

    for(var i = 0; i < (array1.length); i++){
      var $divTop = $('<div>').addClass('topDiv');    //creates a new div and adds the topDiv class to it
      var $divBottom = $('<div>').addClass('bottomDiv');    //creates a new div and adds the bottomDiv class to it
      var $divContainer = $('<div>').addClass('containerDiv');    //creates a new div which will contain our top and bottom div and adds containerDiv class to it

      var powerValue = Math.pow((array1[i]),(array2[i]));    //takes Math.pow(array1, array2)
      $divBottom.text(powerValue);    //changes the text of divBottom to the value returned by the loop
      $divTop.append('<span>' + array1[i] + '</span><sup>' + array2[i] + '</sup>');

      $divContainer.append($divTop);
      $divContainer.append($divBottom);
      $('body').append($divContainer);
    }
  }




})();
