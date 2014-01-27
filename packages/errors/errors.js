// Local (client-only) collection
Meteor.errors = new Meteor.Collection(null);

Meteor.errors = {
  throw: function (message) {
    Meteor.errors.insert({ message: message, seen: false });
  },

  clear: function () {
    Meteor.errors.remove({ seen: true });
  }
}
