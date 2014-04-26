/* global AmCharts:true */

/*jshint camelcase:false */
//turns of camelCase checking for this file

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(get);
  }

  function get(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    symbolValues(symbol);

  }

  function symbolValues(symbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, calculateTotalValue);
  }

  function calculateTotalValue(data){
    var stocksObject = {};
    var $numOfShares = $('#shares').val() * 1;

    stocksObject.symbol = data.Symbol;
    stocksObject.share = $numOfShares * data.LastPrice;

    chart.dataProvider.push(stocksObject);
    chart.validateData();
  }


// function addWeatherToChart(temp){
//   var temperatureArray = {};
//   temperatureArray.zipX = temp.current_observation.display_location.zip;
//   temperatureArray.temperatureY = temp.current_observation.temp_f;
//
//   chart.dataProvider.push(temperatureArray);
//   chart.validateData();
//
// }


  var chart;

  function makeGraph(){
      chart = AmCharts.makeChart('donutChart', {
        'type': 'pie',
    	'theme': 'none',
        'titles': [{
            'text': 'Stock Portfolio',
            'size': 16
        }],
        'dataProvider': [],
        'valueField': 'share',  //
        'titleField': 'symbol',  //
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	}
    });
  }


})();
