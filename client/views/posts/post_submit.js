Template.postSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      message: $(event.target).find('[name=message]').val()
    };

    Meteor.call('post', post, function (error, id) {
      if (error) {
        // display error
        throwError(error.reason);
      }

      Meteor.Router.to('postPage', id);
    });
  }
});
