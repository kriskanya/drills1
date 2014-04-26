/* global AmCharts:true */

/*jshint camelcase:false */
//turns of camelCase checking for this file

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#addTemp').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, addWeatherToChart);
  }

  function addWeatherToChart(temp){
    var temperatureArray = {};
    temperatureArray.zipX = temp.current_observation.display_location.zip;
    temperatureArray.temperatureY = temp.current_observation.temp_f;

    chart.dataProvider.push(temperatureArray);
    chart.validateData();

  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('weatherChart', {
    'type': 'serial',
    'theme': 'light',
    'dataProvider': [],
    'valueAxes': [{
        'gridColor':'#FFFFFF',
		'gridAlpha': 0.2,
		'dashLength': 0
    }],
    'gridAboveGraphs': true,
    'startDuration': 1,
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'temperatureY'		//y axis
    }],
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'zipX',    //x axis
    'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0
    },
	'exportConfig':{
	  'menuTop': 0,
	  'menuItems': [{
      'icon': '/lib/3/images/export.png',
      'format': 'png'
      }]
	   }
  });
  }



})();
