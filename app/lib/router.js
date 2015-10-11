FlowRouter.route('/', {
  name: "root",
  triggersEnter: [],
  action: function(params, queryParams) {
    // throw new Error("this should not get called");
    BlazeLayout.render("defaultLayout", {main: "nineCells"});
  },
  triggersExit: []
});

FlowRouter.route('/nineCells/:id', {
  name: "nineCell",
  action: function(params, queryParams) {
    BlazeLayout.render("defaultLayout", {main: "nineCell"});
  }
});