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

  Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope'
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
