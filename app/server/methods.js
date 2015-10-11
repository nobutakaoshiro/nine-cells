Meteor.methods({
  'createNineCell': createNineCell,
  'deleteNineCell': deleteNineCell
})

function createNineCell() {
  var user = Meteor.users.findOne(this.userId);
  var ownerName = user.username;
  return NineCells.insert({
    name: "New Document",
    description: "(description)",
    owner: {
      _id: this.userId,
      name: ownerName
    }
  });
}


function deleteNineCell(cellId) {
  return NineCells.remove({_id: cellId});
}