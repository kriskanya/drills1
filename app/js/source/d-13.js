(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click','#button',go);
  }

  var array1;
  var array2;

  function go(){
    createArrays();
    var sum = removeEvens(array1);
    sum = add(sum);  //adds together the values of the array
    // var newSumArray = array1.map(add);

    var product = removeEvens(array2);
    product = multiply(product);

    newDivs(sum,product);
  }

  function createArrays(){
    var array = $('input').val();
    array = array.split('-');

    array1 = array[0].split('+');
    array2 = array[1].split('*');
  }

  // function idOdd(number){
  //   return number%2;
  // }

  function removeEvens(arrayInput){
    var newArray = [];
    for(var i = 0; i < arrayInput.length; i++){
      if(arrayInput[i]%2 === 1){
        newArray.push(arrayInput[i] * 1);
      } else{
        console.log('');
      }
    }
    return newArray;
  }

  function add(array){
    var total = 0;
    for(var i = 0; i < array.length; i++){
      total = total + (array[i] * 1);
    }
    return total;
  }

  function multiply(array){
    var total = 1;
    for(var i = 0; i < array.length; i++){
      total *= array[i];
    }
    return total;
  }

  function newDivs(sum,product){
    var $divSum = $('<div>');
    $divSum.addClass('sum');
    $divSum.text(sum);

    var $divProduct = $('<div>');
    $divProduct.addClass('product');
    $divProduct.text(product);

    $('body').append($('<span>Sum</span>'));
    $('body').append($divSum);
    $('body').append($('<span>Product</span>'));
    $('body').append($divProduct);
  }


})();
