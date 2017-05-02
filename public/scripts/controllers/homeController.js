'use strict';
(function(module){
  const homeController = {};
  homeController.initHome = function(){
    $('#stats').hide();
    $('#new').hide();
    $('#home').fadeIn('slow');
  };
  module.homeController = homeController;
})(window);
