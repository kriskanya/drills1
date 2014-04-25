(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){  //this is a jQuery method, (parameter 1: where am I sending this message to?, parameter 2: what is the function you want me to call when the data comes back?)
      // console.log(data);
      var $containerDiv = $('<div class="containerDiv">');

      // $containerDiv.addClass('.quote');

      $containerDiv.append('<div class="quoteTop">' + data.Symbol + '</div>');
      $containerDiv.append('<div class="quoteMiddle">' + data.Name + '</div>');
      $containerDiv.append('<div class="quoteBottom">' + '$' + data.LastPrice + '</div>');

      $('body').append($containerDiv);

    });

}



})();
