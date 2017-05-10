'use strict';
(function(module){
  const homeController = {};
  homeController.initHome = function(){
    $('#stats').hide();
    $('#new').hide();
    $('title').html('Home');
    $('#home').fadeIn('slow');
  };
  module.homeController = homeController;
})(window);
