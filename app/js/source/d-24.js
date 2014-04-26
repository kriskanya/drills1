/* global AmCharts:true */

/*jshint camelcase:false */
//turns of camelCase checking for this file

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#wind').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, addWeatherToChart);
  }

  function addWeatherToChart(conditions){
    var windSpeed = conditions.current_observation.wind_mph;

    chart.arrows[0].setValue(windSpeed);
    chart.axes[0].setBottomText(windSpeed + ' mi/h');
  }

  var chart;

  function makeGraph(){
      chart = AmCharts.makeChart('windGauge', {
        'type': 'gauge',
    	'theme': 'none',
        'axes': [{
            'axisThickness':1,
             'axisAlpha':0.2,
             'tickAlpha':0.2,
             'valueInterval':20,
            'bands': [{
                'color': '#84b761',
                'endValue': 10,
                'startValue': 0
            }, {
                'color': '#fdd400',
                'endValue': 20,
                'startValue': 10
            }, {
                'color': '#cc4748',
                'endValue': 40,
                'innerRadius': '95%',
                'startValue': 20
            }],
            'bottomText': '0 km/h',
            'bottomTextYOffset': 0,
            'endValue': 40
        }],
        'arrows': [{}]
    });
  }


})();
