Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function (commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);
  
    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to make comments");
    }

    if (!commentAttributes.body) {
      throw new Meteor.Error(422, 'Please write some content');
    }

    if (!commentAttributes.postId) {
      throw new Meteor.Error(422, 'You must comment on a post');
    }
  }
});
