Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function (commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);
  
    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to make comments");
    }
  }
});
