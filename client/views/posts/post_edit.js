Template.postEdit.helpers({
  post: function () {
    return Posts.findOne(Session.get('currentPostId'));
  }
});

Template.postEdit.events({
  'submit form': function (event) {
    event.preventDefault();

    var currentPostId = Session.get('currentPostId');

    var postProperties = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val()
    };

    Posts.update(currentPostId, { $set: postProperties }, function (error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('postPage', currentPostId);
      }
    });
  },

  'click .delete': function (event) {
    event.preventDefault();

    if (confirm('Delete this post?')) {
      var currentPostId = Session.get('currentPostId');
      Posts.remove(currentPostId);

      Meteor.Router.to('postsList'); 
    }
  }
});
