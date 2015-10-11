Meteor.publish('nineCells', function() {
  return NineCells.find({$or: [
    {private: false},
    {private: true, "owner._id": this.userId}
  ]});
});