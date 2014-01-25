if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
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
