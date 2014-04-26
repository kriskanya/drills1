/* global AmCharts:true */

/*jshint camelcase:false */
//turns of camelCase checking for this file

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    createMap();
    $('#add').click(go);
  }

  function go(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, addTempToMap);
  }


  function addTempToMap(conditions){
    var mapObject = {};

    mapObject.svgPath = targetSVG;
    mapObject.zoomLevel = 5;
    mapObject.scale = 0.5;
    mapObject.title = returnCity(conditions) + ', ' + (returnTemp(conditions));
    mapObject.latitude = (returnLatitude(conditions));
    mapObject.longitude = (returnLongitude(conditions));

    console.log(mapObject);

    map.dataProvider.images.push(mapObject);
    map.validateData();
  }

  function returnTemp(data){
    return data.current_observation.temp_f;
  }

  function returnCity(data){
    return data.current_observation.display_location.city;
  }

  function returnLongitude(data){
    return data.current_observation.display_location.longitude;
  }

  function returnLatitude(data){
    return data.current_observation.display_location.latitude;
  }


var targetSVG;
var map;

function createMap(){
// svg path for target icon
    targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

      map = AmCharts.makeChart('map', {
    	type: 'map',
        'theme': 'none',
         pathToImages: 'http://www.amcharts.com/lib/3/images/',

    	imagesSettings: {
    		rollOverColor: '#089282',
    		rollOverScale: 3,
    		selectedScale: 3,
    		selectedColor: '#089282',
    color:'#13564e'
    	},

    zoomControl:{buttonFillColor:'#15A892'},

    areasSettings:{unlistedAreasColor:'#15A892'},

    	dataProvider: {
    		map: 'worldLow',
    		images: [{
    			svgPath: targetSVG,
    			zoomLevel: 5,
    			scale: 0.5,
    			title: 'Vienna',
    			latitude: 48.2092,
    			longitude: 16.3728
    		}, {
    			svgPath: targetSVG,
    			zoomLevel: 5,
    			scale: 0.5,
    			title: 'Minsk',
    			latitude: 53.9678,
    			longitude: 27.5766
    		}]
    	}
    });

}

})();
