(function(module){
  const newController = {};
  newController.initNew = function(){
    $('#home').hide();
    $('#stats').hide();
    $('#new').fadeIn('slow');
  }
  module.newController = newController;
})(window);
