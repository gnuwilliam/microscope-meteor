Posts = new Meteor.Collection('posts');

Meteor.methods({
  post: function (postAttributes) {
    var user = Meteor.user();
    var postWithSameLink = Posts.findOne({ url: postAttributes.url });

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.error(401, 'You need to login to post new stories');
    }
  }
});

Posts.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
