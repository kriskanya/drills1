(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.red').click(changeDiv);
  }

  function changeDiv(){
    $('.red').toggleClass('green');
}





})();
