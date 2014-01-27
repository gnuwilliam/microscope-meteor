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
    }
  }
});
