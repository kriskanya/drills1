(function(){
  'use strict';

  $(document).ready(init);

  var clock = 0;
  var timer;

  function init(){
    $('#start').click(startTimer);
    $('#stop').click(stopTimer);
  }

  function startTimer(){
    clearInterval(timer);
    runTimer();
  }

  function runTimer(){
    timer = setInterval(function(){
      updateClock();
      $('#time').text(clock);
    }, 1000);

      //setInterval( [name of the function to be called], [time in milliseconds] )  — every second, this calls the updateClock()
  }

  function updateClock(){
    clock++;
  }

  function stopTimer(){
    clearInterval(timer);
  }


})();
