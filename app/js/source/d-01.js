(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click','#equals',addNumbers);
  }

  function addNumbers(){
    var $number1 = $('#box1').val() * 1;
    var $number2 = $('#box2').val() * 1;
    var answer = ($number1 + $number2);
    $('#equalsDiv').text(answer);

  }



})();
