(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var url = getURL();
    getStock(url);
  }

  function getStock(passInURL){

    $.getJSON(passInURL, function(data){  //this is a jQuery method, (parameter 1: where am I sending this message to?, parameter 2: what is the function you want me to call when the data comes back?)
      appendDivs(data);

    });
  }

  function appendDivs(inputData){
    var shares = $('#shares').val() *1;
    var $containerDiv = $('.containerDiv');

    $containerDiv.append('<div class="newDiv">' + shares + '</div>');
    $containerDiv.append('<div class="newDiv">' + inputData.LastPrice + '</div>');
    $containerDiv.append('<div class="newDiv">' + (shares * inputData.LastPrice) + '</div>');
  }

  function getURL(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }



})();
