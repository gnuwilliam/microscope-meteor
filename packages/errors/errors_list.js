Template.meteorErrors.helpers({
  errors: function () {
    return Errors.find();
  }
});

Template.meteorError.rendered = function() {
  var error = this.data;

  Meteor.defer(function () {
    Meteor.errors.update(error._id, { $set: { seen: true } });
  });
};
