if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope',
    submitted: now - 7 * 3600 * 1000
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Posts.insert({
    title: 'Testando essa app',
    author: 'William Oliveira',
    url: 'http://github.com/gnuwilliam'
  });

  Posts.insert({
    title: 'Luke, Im your father!',
    author: 'Darth Vader',
    url: 'http://starwars.com'
  });

  console.log('Inserted ' + Posts.find().count() + ' posts');
}
