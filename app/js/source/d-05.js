(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('body').on('click','#evenButton',checkEven);
  }

  function checkEven(){ 
    var input = $('#input').val();
    var inputArray = input.split(',');    //creates an array out of the user's input
    var fullArray = makeArray((inputArray[0] *1),(inputArray[1] *1));    //puts the user's input into the function, makeArray
    fullArray = fullArray.filter(isEven);    //filters using the isOdd function, checking for even numbers

    addDiv(fullArray);
  }


  function makeArray(start,end){    //creates an array with the range of the user's inputs
    var array = [];

    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function isEven(x){
    return x%2===0;    //=false if even, true if odd
  }

  function addDiv(someArray){    //adds divs to the 'body'
    for(var i = 0; i < someArray.length; i++){
      var $div = $('<div>').append(someArray[i]);
      $div.addClass('evenDiv');

      $('body').append($div);
    }


  }






})();
