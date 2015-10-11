EditableText.userCanEdit = function(doc,Collection){
  var cellId = FlowRouter.getParam('id');
  var cell = NineCells.findOne(cellId);
  return cell && Meteor.userId();
};