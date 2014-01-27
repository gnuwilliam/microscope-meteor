Tinytest.add("Errors collection works", function(test) {
  test.equal(Meteor.errors.find({}).count(), 0);
  
  Meteor.Errors.throw('A new error!');
  test.equal(Meteor.errors.find({}).count(), 1);
  
  Meteor.errors.remove({});
});
