(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click','#button',go);
  }

  function go(){
    var array = createArray();
    var changedArray = addDiv(array);
    makeDivs(changedArray);
  }

  function createArray(){
    var array = $('#input').val().split(',');
    return array;
  }

  function addDiv(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        newArray.push(Math.pow(array[i], 2));
      } else {
        newArray.push(Math.pow(array[i], 3));
      }
    }
    return newArray;
  }

  function makeDivs(newArray){
    for(var i = 0; i < newArray.length; i++){
      if(newArray[i] % 2 === 0){
        var $div1 = $('<div>').addClass('blue');
        $div1.text(newArray[i]);
        $('body').append($div1);
      } else{
        var $div2 = $('<div>').addClass('red');
        $div2.text(newArray[i]);
        $('body').append($div2);
      }
    }

  }


})();
