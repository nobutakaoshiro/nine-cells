Template.sidebar.onRendered(function() {
});

Template.sidebar.onDestroyed(function() {
})

Template.sidebar.helpers({
  'nineCells': function() {
    return NineCells.find({}, {sort: {createdAt: -1}});
  }
});

Template.sidebar.events({
  'click .js-go-to-root': goToRoot,
  'click [data-action=create]': createNineCell
});

function goToRoot(event) {
  FlowRouter.go('/');
}

function createNineCell(event) {
  Meteor.call('createNineCell', function(err, res){
    if (err) {alert(err);return;};
    FlowRouter.go('/nineCells/' + res);
  });
}
