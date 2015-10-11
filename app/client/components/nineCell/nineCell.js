Template.nineCell.onCreated(function() {
});

Template.nineCell.helpers({
  'nineCell': function() {
    return NineCells.findOne(FlowRouter.getParam('id'));
  },
  'optionsHelper': function() {
    return {
      textarea: true,
      wysiwyg: true,
      substitute: '<i class="ui edit icon"></i>'
    }
  },
  'isOwner': function() {
    var cellId = FlowRouter.getParam('id');
    var cell = NineCells.findOne(cellId);
    return Meteor.userId() && cell && cell.owner && cell.owner._id === Meteor.userId();
  },
  'privateCheckboxValue': function() {
    var cellId = FlowRouter.getParam('id');
    var cell = NineCells.findOne(cellId);
    return cell.private;
  },
  'isPrivate': function() {
    var cellId = FlowRouter.getParam('id');
    var cell = NineCells.findOne(cellId);
    return cell && cell.private
  }
})

Template.nineCell.events({
  'click [data-action=delete]': deleteNineCell,
  'change [data-action=toggle-private]': togglePrivate
});


function deleteNineCell(event) {
  var res = confirm("Are you sure?");
  if (res) {
    var cellId = $(event.currentTarget).data('id');
    Meteor.call('deleteNineCell', cellId, function(){
      FlowRouter.go('root');
    });
  }
}

function togglePrivate(event) {
  var cellId = FlowRouter.getParam('id');
  var cell = NineCells.findOne(cellId);

  if (Meteor.userId() && cell && cell.owner && cell.owner._id === Meteor.userId()) {
    NineCells.update({_id: cellId}, {$set: {private: event.target.checked}});
  }
}