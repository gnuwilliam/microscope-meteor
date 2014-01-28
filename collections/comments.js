Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function (commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

  }
});
