(function(){
  'use strict';

  $(document).ready(init);

    function init(){
      $('#get').click(buildArray);
    }

    // function getAutoUpdate(){
    //   buildArray();
    // }

    function buildArray(){
      $('#symbol').val().toUpperCase().split(',').map(fixSpacing).forEach(getURL);    //in order to use map, you must have a function that returns something
    }

    function getURL(input){
      var passInURL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+input+'&callback=?';
      $.getJSON(passInURL, createTRs);    //calls createTRs and passes in 'data' that's being returned from AJAX request
    }

    // function getStock(passInURL){
    //
    // }

    function createTRs(data){
      var $tr = $('<tr>');
      $('tbody').append($tr);

      var $td1 = $('<td>');
      $td1.text(data.Symbol);
      var $td2 = $('<td>');
      $td2.text(data.LastPrice);

      ($tr).append($td1);
      ($tr).append($td2);
    }

    function fixSpacing(input){
      for(var i = 0; i < input.length; i++){
        return input.trim();
      }
    }


// $containerDiv.append('<div class="quoteTop">' + data.Symbol + '</div>');



})();
