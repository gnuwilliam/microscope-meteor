Template.postEdit.helpers({
  post: function () {
    return Posts.findOne(Session.get('currentPostId'));
  }
});

Template.postEdit.events({

});
