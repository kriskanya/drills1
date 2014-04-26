
/*jshint camelcase:false */
//turns of camelCase checking for this file

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#forecast').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, addTenDayForecast);

  }



  // function mapTheArray(weatherData){
  //   var icon = weatherData.forecast.simpleforecast.forecastday.map(icon);
  //   var dayOfTheWeek = weatherData.forecast.simpleforecast.forecastday.map(dayOfTheWeek);
  //
  //   appendIconAndDay(icon, dayOfTheWeek);
  // }
  //
  // function icon(forecastDay){
  //   return forecastDay.icon_url;
  // }
  //
  // function dayOfTheWeek(forecastDay){
  //   return forecastDay.date.weekday;
  // }
  //
  // function appendIconAndDay(icon, day){
  //   $div = $('<div>');
  //   $img = $('<img>');
  //
  //   $div.text(day);
  //   $img.attr('src', icon);
  //   $div.append($img);
  //   $('#forecastDiv').append($div);
  // }


  function addTenDayForecast(data){
    var icon;
    var dayOfTheWeek;

    for(var i = 0; i < 10; i++){
      var $div = $('<div>');
      var $img = $('<img>');

      icon = data.forecast.simpleforecast.forecastday[i].icon_url;    //this grabs the icon
      dayOfTheWeek = data.forecast.simpleforecast.forecastday[i].date.weekday;  //this grabs the day of the week

      $div.text(dayOfTheWeek);
      $img.attr('src', icon);
      $div.append($img);

      $('#forecastDiv').append($div);
    }
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


})();
