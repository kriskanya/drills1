(function(){
  'use strict';

  $(document).ready(init);

    function init(){
      $('#get').click(clickSum);
    }

    function clickSum(){
      $('#symbols').val().split(',').map(stripUC).forEach(getQuote);
    }

    function url(symbol){
      return 'http://dev.markitondemnad...' + symbol + '&callback=?';
    }

    function stripUC(symbol){
      return symbol.trim().toUpperCase();    //convert array of symbols to an array of URLs
    }

    var sum = 0;
    var count = 0;
    function getQuote(url, index, urls){
      $.getJSON(url, function(){
        sum = 0;  //need to reset this to zero, if you want to run it again
        count = 0;

        sum += quote.LastPrice;
        count++
        if(count === urls.length){
        $('#result').text(sum);
        }
      });
    }


// $containerDiv.append('<div class="quoteTop">' + data.Symbol + '</div>');



})();
