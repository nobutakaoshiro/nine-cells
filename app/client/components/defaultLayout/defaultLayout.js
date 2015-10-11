Template.defaultLayout.onCreated(function(){
  Meteor.subscribe('nineCells');
});

Template.defaultLayout.onRendered(function(){
  $(window).on('resize', resizeMainRegion);
  $(window).trigger('resize');
});

Template.defaultLayout.onDestroyed(function(){
  $(window).off('resize', resizeMainRegion);
});

function resizeMainRegion() {
  var $sidebar = $('.sidebar');
  $sidebar.sidebar('show');

  var $mainRegion = $('[data-ui=mainRegion]');
  // var $globalNav = $('#globalNav');
  var windowWidth = $(window).width();
  var sidebarWidth = $sidebar.width();

  var mainWidth = windowWidth - sidebarWidth;
  $mainRegion.css('max-width', mainWidth);
  // $globalNav.css('max-width', mainWidth);
}
