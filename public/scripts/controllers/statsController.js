'use strict';
(function(module){
  const statsController = {};
  statsController.initStats = function(){
    $('#home').hide();
    $('#new').hide();
    $('#stats').fadeIn('slow');
  }
  module.statsController = statsController;
})(window);
