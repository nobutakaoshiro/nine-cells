NineCells = new Mongo.Collection('nineCells');

var Schemas = {};

Schemas.NindeCell = new SimpleSchema({
  'name': {
    type: String
  },
  'description': {
    type: String,
    optional: true
  },
  'private': {
    type: Boolean,
    defaultValue: false
  },
  'valueWho': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'valueWhat': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'valueHow': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'benefitWho': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'benefitWhat': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'benefitHow': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'processWho': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'processWhat': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  'processHow': {
    type: String,
    defaultValue: "n/a",
    optional: true
  },
  owner: {
    type: Object,
    optional: true
  },
  'owner._id': {
    type: String,
    index: true
  },
  'owner.name': {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  }
});

NineCells.attachSchema(Schemas.NindeCell);

NineCells.allow({
  'update': function(userId, doc, fieldNames, modifier) {
    if (_.contains(fieldNames, 'private') || doc.private) {
      return doc.owner && doc.owner._id === userId;
    } else {
      return true;
    }
  }
})